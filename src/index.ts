import {
  ApolloClient,
  NormalizedCacheObject,
} from "@apollo/client/core";
import autoBind from "auto-bind";
import {
  BitcoinNetwork,
  CreateInvoiceMutation,
  CurrencyAmount,
  DecodeInvoiceQuery,
  FeeEstimateQuery,
  InvoiceData,
  RecoverNodeSigningKeyQuery,
  SingeNodeDashboardQuery,
} from "./generated/graphql";
import { SingleNodeDashboard } from "./graphql/SingleNodeDashboard";
import { b64encode } from "./utils/base64";
import { CreateInvoice } from "graphql/CreateInvoice";
import { DecodeInvoice } from "graphql/DecodeInvoice";
import { FeeEstimate } from "graphql/FeeEstimate";
import { RecoverNodeSigningKey } from "graphql/RecoverNodeSigningKey";
import { Maybe } from "graphql/jsutils/Maybe";
import { decryptSecretWithNodePassword } from "crypto/crypto";
import NodeKeyCache from "crypto/NodeKeyCache";
import { getNewApolloClient } from "apollo/apolloClient";

class LightsparkWalletClient {
  private client: ApolloClient<NormalizedCacheObject>;
  private nodeKeyCache: NodeKeyCache = new NodeKeyCache();

  constructor(
    tokenId: string,
    token: string,
    serverUrl: string = "https://api.dev.dev.sparkinfra.net"
  ) {
    this.client = getNewApolloClient(serverUrl, tokenId, token, this.nodeKeyCache);

    autoBind(this);
  }

  public async getWalletDashboard(
    nodeId: string
  ): Promise<SingeNodeDashboardQuery> {
    const response = await this.client.query({
      query: SingleNodeDashboard,
      variables: {
        nodeId,
        network: BitcoinNetwork.Regtest,
        numTransactions: 20,
      },
    });
    return response.data;
  }

  public async createInvoice(
    nodeId: string,
    amount: number,
    memo: string
  ): Promise<string | undefined> {
    const response = await this.client.mutate<CreateInvoiceMutation>({
      mutation: CreateInvoice,
      variables: {
        nodeId,
        amount,
        memo,
      },
    });
    return response.data?.create_invoice?.invoice.data?.encoded_payment_request;
  }

  public async decodeInvoice(encodedInvoice: string): Promise<InvoiceData> {
    const response = await this.client.query<DecodeInvoiceQuery>({
      query: DecodeInvoice,
      variables: {
        encodedInvoice,
      },
    });
    return response.data.decoded_payment_request;
  }

  public async getFeeEstimate(
    bitcoinNetwork: BitcoinNetwork = BitcoinNetwork.Mainnet
  ): Promise<{ fee_min: CurrencyAmount; fee_fast: CurrencyAmount }> {
    const response = await this.client.query<FeeEstimateQuery>({
      query: FeeEstimate,
      variables: {
        network: bitcoinNetwork,
      },
    });
    return response.data.fee_estimate;
  }

  public async recoverNodeSigningKey(
    nodeId: string
  ): Promise<Maybe<{ encrypted_value: string; cipher: string }>> {
    const response = await this.client.query<RecoverNodeSigningKeyQuery>({
      query: RecoverNodeSigningKey,
      variables: {
        nodeId,
      },
    });
    const nodeEntity = response.data.entity;
    if (nodeEntity?.__typename === "LightsparkNode") {
      return nodeEntity.encrypted_signing_private_key;
    }
    return null;
  }

  public async unlockWallet(walletId: string, password: string) {
    const encryptedKey = await this.recoverNodeSigningKey(walletId);
    if (!encryptedKey) {
      return false;
    }

    const signingPrivateKey = await decryptSecretWithNodePassword(
      encryptedKey.cipher,
      encryptedKey.encrypted_value,
      password
    );

    if (!signingPrivateKey) {
      throw new Error(
        "Unable to decrypt signing key with provided password. Please try again."
      );
    }

    let signingPrivateKeyPEM = "";
    if (new Uint8Array(signingPrivateKey)[0] === 48) {
      // Support DER format - https://github.com/lightsparkdev/webdev/pull/1982
      signingPrivateKeyPEM = b64encode(signingPrivateKey);
    } else {
      const dec = new TextDecoder();
      signingPrivateKeyPEM = dec.decode(signingPrivateKey);
    }

    this.nodeKeyCache.loadKey(walletId, signingPrivateKeyPEM);
    return true;
  }
}

export { LightsparkWalletClient };
