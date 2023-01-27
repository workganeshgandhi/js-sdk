import { FieldPolicy, FieldReadFunction, TypePolicies, TypePolicy } from '@apollo/client/cache';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** Date with time (isoformat) */
  DateTime: any;
  /** The `Long` scalar type represents a 64 bit integer. */
  Long: any;
};

export type Account = Entity & {
  __typename: 'Account';
  /** The API tokens that can be used to authenticate this account when making API calls or using our SDKs. */
  api_tokens: AccountToApiTokensConnection;
  /** The details of the balance of the nodes owned by this account on the Bitcoin Network. */
  blockchain_balance?: Maybe<BlockchainBalance>;
  channels: AccountToChannelsConnection;
  /** A summary metric used to capture how well positioned a node is to send, receive, or route transactions efficiently. Maximizing a node's conductivity helps a node’s transactions to be capital efficient. The value is an integer ranging between 0 and 10 (bounds included). */
  conductivity?: Maybe<Scalars['Int']>;
  /** The date and time when the entity was first created. */
  created_at: Scalars['DateTime'];
  /** The unique identifier of this entity across all Lightspark systems. Should be treated as an opaque string. */
  id: Scalars['ID'];
  /** The sum of the channel balances that are available to send on the nodes of this account. */
  local_balance?: Maybe<CurrencyAmount>;
  /** The name of the company for this account. */
  name?: Maybe<Scalars['String']>;
  /** The nodes that are managed by this account. */
  nodes: AccountToNodesConnection;
  /** The sum of the channel balances that are available to receive on the nodes of this account. */
  remote_balance?: Maybe<CurrencyAmount>;
  transactions: AccountToTransactionsConnection;
  /** The date and time when the entity was last updated. */
  updated_at: Scalars['DateTime'];
  /** An integer between 0 and 100 (included) that represents the percentage of uptime for the nodes owned by this account. */
  uptime_percentage?: Maybe<Scalars['Int']>;
  /** The settings for the API webhooks on this account. */
  webhooks_settings?: Maybe<WebhooksSettings>;
};


export type AccountApi_TokensArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type AccountBlockchain_BalanceArgs = {
  bitcoin_networks?: InputMaybe<Array<BitcoinNetwork>>;
  node_ids?: InputMaybe<Array<Scalars['ID']>>;
};


export type AccountChannelsArgs = {
  after_date?: InputMaybe<Scalars['DateTime']>;
  before_date?: InputMaybe<Scalars['DateTime']>;
  bitcoin_network: BitcoinNetwork;
  first?: InputMaybe<Scalars['Int']>;
  lightning_node_id?: InputMaybe<Scalars['ID']>;
};


export type AccountConductivityArgs = {
  bitcoin_networks?: InputMaybe<Array<BitcoinNetwork>>;
  node_ids?: InputMaybe<Array<Scalars['ID']>>;
};


export type AccountLocal_BalanceArgs = {
  bitcoin_networks?: InputMaybe<Array<BitcoinNetwork>>;
  node_ids?: InputMaybe<Array<Scalars['ID']>>;
};


export type AccountNodesArgs = {
  bitcoin_networks?: InputMaybe<Array<BitcoinNetwork>>;
  first?: InputMaybe<Scalars['Int']>;
  node_ids?: InputMaybe<Array<Scalars['ID']>>;
};


export type AccountRemote_BalanceArgs = {
  bitcoin_networks?: InputMaybe<Array<BitcoinNetwork>>;
  node_ids?: InputMaybe<Array<Scalars['ID']>>;
};


export type AccountTransactionsArgs = {
  after?: InputMaybe<Scalars['String']>;
  after_date?: InputMaybe<Scalars['DateTime']>;
  before_date?: InputMaybe<Scalars['DateTime']>;
  bitcoin_network?: InputMaybe<BitcoinNetwork>;
  exclude_failures?: InputMaybe<TransactionFailures>;
  first?: InputMaybe<Scalars['Int']>;
  lightning_node_id?: InputMaybe<Scalars['ID']>;
  statuses?: InputMaybe<Array<TransactionStatus>>;
  types?: InputMaybe<Array<TransactionType>>;
};


export type AccountUptime_PercentageArgs = {
  after_date?: InputMaybe<Scalars['DateTime']>;
  before_date?: InputMaybe<Scalars['DateTime']>;
  bitcoin_networks?: InputMaybe<Array<BitcoinNetwork>>;
  node_ids?: InputMaybe<Array<Scalars['ID']>>;
};

export type AccountToApiTokenEdge = {
  __typename: 'AccountToApiTokenEdge';
  entity: ApiToken;
};

export type AccountToApiTokensConnection = {
  __typename: 'AccountToApiTokensConnection';
  count: Scalars['Int'];
  edges: Array<AccountToApiTokenEdge>;
  page_info: PageInfo;
};

export type AccountToChannelEdge = {
  __typename: 'AccountToChannelEdge';
  entity: Channel;
};

export type AccountToChannelsConnection = {
  __typename: 'AccountToChannelsConnection';
  count: Scalars['Int'];
  edges: Array<AccountToChannelEdge>;
};


export type AccountToChannelsConnectionCountArgs = {
  exclude_failed_closed?: InputMaybe<Scalars['Boolean']>;
};

/** Represents the edge between an account and one of its nodes. */
export type AccountToNodeEdge = {
  __typename: 'AccountToNodeEdge';
  entity: LightsparkNode;
};

/** A connection between an account and the nodes it manages. */
export type AccountToNodesConnection = {
  __typename: 'AccountToNodesConnection';
  count: Scalars['Int'];
  edges: Array<AccountToNodeEdge>;
  page_info: PageInfo;
  /** The main purpose for the selected set of nodes. It is automatically determined from the nodes that are selected in this connection and is used for optimization purposes, as well as to determine the variation of the UI that should be presented to the user. */
  purpose?: Maybe<LightsparkNodePurpose>;
};

export type AccountToTransactionEdge = {
  __typename: 'AccountToTransactionEdge';
  entity: Transaction;
};

export type AccountToTransactionsConnection = {
  __typename: 'AccountToTransactionsConnection';
  average_fee_earned?: Maybe<CurrencyAmount>;
  count?: Maybe<Scalars['Int']>;
  edges: Array<AccountToTransactionEdge>;
  page_info: PageInfo;
  profit_loss?: Maybe<CurrencyAmount>;
  total_amount_transacted?: Maybe<CurrencyAmount>;
};

export type ApiToken = Entity & {
  __typename: 'ApiToken';
  client_id: Scalars['String'];
  /** The date and time when the entity was first created. */
  created_at: Scalars['DateTime'];
  /** The unique identifier of this entity across all Lightspark systems. Should be treated as an opaque string. */
  id: Scalars['ID'];
  name: Scalars['String'];
  /** The date and time when the entity was last updated. */
  updated_at: Scalars['DateTime'];
};

export enum BitcoinNetwork {
  /** The production version of the Bitcoin Blockchain. */
  Mainnet = 'MAINNET',
  /** A test version of the Bitcoin Blockchain, maintained by Lightspark. */
  Regtest = 'REGTEST',
  /**
   * A test version of the Bitcoin Blockchain, maintained by a centralized organization. Not in use at Lightspark.
   * @deprecated Use REGTEST.
   */
  Signet = 'SIGNET',
  /** A test version of the Bitcoin Blockchain, publically available. */
  Testnet = 'TESTNET'
}

/** This object provides a detailed breakdown of a `LightsparkNode`'s current balance on the Bitcoin Network. */
export type BlockchainBalance = {
  __typename: 'BlockchainBalance';
  /** Funds available for creating channels or withdrawing. */
  available_balance?: Maybe<CurrencyAmount>;
  /** The balance of confirmed UTXOs in the wallet. */
  confirmed_balance?: Maybe<CurrencyAmount>;
  /** The balance that's locked by an on-chain transaction. */
  locked_balance?: Maybe<CurrencyAmount>;
  /** Funds required to be held in reserve for channel bumping. */
  required_reserve?: Maybe<CurrencyAmount>;
  /** The total wallet balance, including unconfirmed UTXOs. */
  total_balance?: Maybe<CurrencyAmount>;
  /** The balance of unconfirmed UTXOs in the wallet. */
  unconfirmed_balance?: Maybe<CurrencyAmount>;
};

/** An object that represents a payment channel between two nodes in the Lightning Network. */
export type Channel = Entity & {
  __typename: 'Channel';
  /** The total amount of funds in this channel, including the channel balance on the local node, the channel balance on the remote node and the on-chain fees to close the channel. */
  capacity?: Maybe<CurrencyAmount>;
  /**
   * The output of the funding transaction. The format is <tx-id>:<index>.
   * @deprecated Not needed when pass-through.
   */
  channel_point?: Maybe<Scalars['String']>;
  /** The date and time when the entity was first created. */
  created_at: Scalars['DateTime'];
  /** The estimated time to wait for the channel's hash timelock contract to expire when force closing the channel. It is in unit of minutes. */
  estimated_force_closure_wait_minutes?: Maybe<Scalars['Int']>;
  /** The fees charged for routing payments through this channel. */
  fees?: Maybe<ChannelFees>;
  /** The transaction that funded the channel upon channel opening. */
  funding_transaction?: Maybe<ChannelOpeningTransaction>;
  /** The unique identifier of this entity across all Lightspark systems. Should be treated as an opaque string. */
  id: Scalars['ID'];
  /** The channel balance on the local node. */
  local_balance?: Maybe<CurrencyAmount>;
  /** The local Lightspark node of the channel. */
  local_node: LightsparkNode;
  /** The channel balance on the local node that is currently allocated to in-progress payments. */
  local_unsettled_balance?: Maybe<CurrencyAmount>;
  /** The channel balance on the remote node. */
  remote_balance?: Maybe<CurrencyAmount>;
  /** If known, the remote node of the channel. */
  remote_node?: Maybe<Node>;
  /** The channel balance on the remote node that is currently allocated to in-progress payments. */
  remote_unsettled_balance?: Maybe<CurrencyAmount>;
  /** The unique identifier of the channel on Lightning Network, which is the location in the chain that the channel was confirmed. The format is <block-height>:<tx-index>:<tx-output>. */
  short_channel_id?: Maybe<Scalars['String']>;
  /** The current status of this channel. */
  status?: Maybe<ChannelStatus>;
  /** The total balance in this channel, including the channel balance on both local and remote nodes. */
  total_balance?: Maybe<CurrencyAmount>;
  /** A connection to all transactions that have occurred on the channel including outgoing payments, incoming payments, routing transactions and on-chain transactions. */
  transactions: ChannelToTransactionsConnection;
  /** The channel balance that is currently allocated to in-progress payments. */
  unsettled_balance?: Maybe<CurrencyAmount>;
  /** The date and time when the entity was last updated. */
  updated_at: Scalars['DateTime'];
  /** An integer between 0 and 100 (included) that represents the percentage of uptime for this channel. */
  uptime_percentage?: Maybe<Scalars['Int']>;
};


/** An object that represents a payment channel between two nodes in the Lightning Network. */
export type ChannelTransactionsArgs = {
  after_date?: InputMaybe<Scalars['DateTime']>;
  before_date?: InputMaybe<Scalars['DateTime']>;
  types?: InputMaybe<Array<TransactionType>>;
};


/** An object that represents a payment channel between two nodes in the Lightning Network. */
export type ChannelUptime_PercentageArgs = {
  after_date?: InputMaybe<Scalars['DateTime']>;
  before_date?: InputMaybe<Scalars['DateTime']>;
};

/** The transaction on Bitcoin blockchain to close a channel on Lightning Network where the balances are allocated back to local and remote nodes. */
export type ChannelClosingTransaction = Entity & OnChainTransaction & Transaction & {
  __typename: 'ChannelClosingTransaction';
  amount: CurrencyAmount;
  /** The hash of the block that included this transaction. This will be null for unconfirmed transactions. */
  block_hash?: Maybe<Scalars['String']>;
  /** The height of the block that included this transaction. This will be zero for unconfirmed transactions. */
  block_height: Scalars['Int'];
  /** If known, the channel this transaction is to close. */
  channel?: Maybe<Channel>;
  /** The date and time when this transaction was initiated. */
  created_at: Scalars['DateTime'];
  /** The Bitcoin blockchain addresses this transaction was sent to. */
  destination_addresses: Array<Scalars['String']>;
  /** The fees that were paid by the wallet sending the transaction to commit it to the Bitcoin blockchain. */
  fees?: Maybe<CurrencyAmount>;
  /** The unique identifier of this entity across all Lightspark systems. Should be treated as an opaque string. */
  id: Scalars['ID'];
  /** The number of blockchain confirmations for this transaction in real time. */
  num_confirmations?: Maybe<Scalars['Int']>;
  /** The date and time when this transaction was completed or failed. */
  resolved_at?: Maybe<Scalars['DateTime']>;
  status: TransactionStatus;
  transaction_hash?: Maybe<Scalars['String']>;
  /** The date and time when the entity was last updated. */
  updated_at: Scalars['DateTime'];
};

export type ChannelFees = {
  __typename: 'ChannelFees';
  base_fee?: Maybe<CurrencyAmount>;
  fee_rate_per_mil?: Maybe<Scalars['Int']>;
};

/** The transaction on Bitcoin blockchain to open a channel on Lightning Network funded by the local Lightspark node. */
export type ChannelOpeningTransaction = Entity & OnChainTransaction & Transaction & {
  __typename: 'ChannelOpeningTransaction';
  amount: CurrencyAmount;
  /** The hash of the block that included this transaction. This will be null for unconfirmed transactions. */
  block_hash?: Maybe<Scalars['String']>;
  /** The height of the block that included this transaction. This will be zero for unconfirmed transactions. */
  block_height: Scalars['Int'];
  /** If known, the channel this transaction is to open. */
  channel?: Maybe<Channel>;
  /** The date and time when this transaction was initiated. */
  created_at: Scalars['DateTime'];
  /** The Bitcoin blockchain addresses this transaction was sent to. */
  destination_addresses: Array<Scalars['String']>;
  /** The fees that were paid by the wallet sending the transaction to commit it to the Bitcoin blockchain. */
  fees?: Maybe<CurrencyAmount>;
  /** The unique identifier of this entity across all Lightspark systems. Should be treated as an opaque string. */
  id: Scalars['ID'];
  /** The number of blockchain confirmations for this transaction in real time. */
  num_confirmations?: Maybe<Scalars['Int']>;
  /** The date and time when this transaction was completed or failed. */
  resolved_at?: Maybe<Scalars['DateTime']>;
  status: TransactionStatus;
  transaction_hash?: Maybe<Scalars['String']>;
  /** The date and time when the entity was last updated. */
  updated_at: Scalars['DateTime'];
};

export enum ChannelStatus {
  /** The channel has been closed. Information about the channel is still available for historical purposes but the channel cannot be used anymore. */
  Closed = 'CLOSED',
  /** Something unexpected happened and we cannot determine the status of this channel. Please try again later or contact the support. */
  Error = 'ERROR',
  /** The channel is not available, likely because the peer is not online. */
  Offline = 'OFFLINE',
  /** The channel is online and ready to send and receive funds. */
  Ok = 'OK',
  /** The channel has been created, but the Bitcoin transaction that initiates it still needs to be confirmed on the Bitcoin blockchain. */
  Pending = 'PENDING',
  /** The channel is behaving properly, but its remote balance is much lower than its local balance so it is not balanced properly for receiving funds. */
  UnbalancedForReceive = 'UNBALANCED_FOR_RECEIVE',
  /** The channel is behaving properly, but its remote balance is much higher than its local balance so it is not balanced properly for sending funds out. */
  UnbalancedForSend = 'UNBALANCED_FOR_SEND'
}

export type ChannelToTransactionsConnection = {
  __typename: 'ChannelToTransactionsConnection';
  average_fee?: Maybe<CurrencyAmount>;
  count: Scalars['Int'];
  total_amount_transacted?: Maybe<CurrencyAmount>;
  total_fees?: Maybe<CurrencyAmount>;
};

export type CreateInvoiceInput = {
  amount: CurrencyAmountInput;
  memo?: InputMaybe<Scalars['String']>;
  node_id: Scalars['ID'];
};

export type CreateInvoiceOutput = {
  __typename: 'CreateInvoiceOutput';
  invoice: Invoice;
};

export type CreateNodeWalletAddressInput = {
  node_id: Scalars['ID'];
};

export type CreateNodeWalletAddressOutput = {
  __typename: 'CreateNodeWalletAddressOutput';
  node: LightsparkNode;
  wallet_address: Scalars['String'];
};

export type CurrencyAmount = {
  __typename: 'CurrencyAmount';
  unit: CurrencyUnit;
  value: Scalars['Long'];
};

export type CurrencyAmountInput = {
  unit: CurrencyUnit;
  value: Scalars['Long'];
};

export enum CurrencyUnit {
  /** Bitcoin is the cryptocurrency native to the Bitcoin network. It is used as the native medium for value transfer for the Lightning Network. */
  Bitcoin = 'BITCOIN',
  /** 0.000001 (10e-6) Bitcoin or a millionth of a Bitcoin. We recommend using the Satoshi unit instead when possible. */
  Microbitcoin = 'MICROBITCOIN',
  /** 0.001 (10e-3) Bitcoin or a thousandth of a Bitcoin. We recommend using the Satoshi unit instead when possible. */
  Millibitcoin = 'MILLIBITCOIN',
  /** 0.001 Satoshi, or 10e-11 Bitcoin. We recommend using the Satoshi unit instead when possible. */
  Millisatoshi = 'MILLISATOSHI',
  /** 0.000000001 (10e-9) Bitcoin or a billionth of a Bitcoin. We recommend using the Satoshi unit instead when possible. */
  Nanobitcoin = 'NANOBITCOIN',
  /** 0.00000001 (10e-8) Bitcoin or one hundred millionth of a Bitcoin. This is the unit most commonly used in Lightning transactions. */
  Satoshi = 'SATOSHI'
}

/** The transaction on Bitcoin blockchain to fund the Lightspark node's wallet. */
export type Deposit = Entity & OnChainTransaction & Transaction & {
  __typename: 'Deposit';
  amount: CurrencyAmount;
  /** The hash of the block that included this transaction. This will be null for unconfirmed transactions. */
  block_hash?: Maybe<Scalars['String']>;
  /** The height of the block that included this transaction. This will be zero for unconfirmed transactions. */
  block_height: Scalars['Int'];
  /** The date and time when this transaction was initiated. */
  created_at: Scalars['DateTime'];
  /** The recipient Lightspark node this deposit was sent to. */
  destination: LightsparkNode;
  /** The Bitcoin blockchain addresses this transaction was sent to. */
  destination_addresses: Array<Scalars['String']>;
  /** The fees that were paid by the wallet sending the transaction to commit it to the Bitcoin blockchain. */
  fees?: Maybe<CurrencyAmount>;
  /** The unique identifier of this entity across all Lightspark systems. Should be treated as an opaque string. */
  id: Scalars['ID'];
  /** The number of blockchain confirmations for this transaction in real time. */
  num_confirmations?: Maybe<Scalars['Int']>;
  /** The date and time when this transaction was completed or failed. */
  resolved_at?: Maybe<Scalars['DateTime']>;
  status: TransactionStatus;
  transaction_hash?: Maybe<Scalars['String']>;
  /** The date and time when the entity was last updated. */
  updated_at: Scalars['DateTime'];
};

/** This interface is used by all the entities in the Lightspark systems. It defines a few core fields that are available everywhere. Any object that implements this interface can be queried using the `entity` query and its ID. */
export type Entity = {
  /** The date and time when the entity was first created. */
  created_at: Scalars['DateTime'];
  /** The unique identifier of this entity across all Lightspark systems. Should be treated as an opaque string. */
  id: Scalars['ID'];
  /** The date and time when the entity was last updated. */
  updated_at: Scalars['DateTime'];
};

export type FeeEstimate = {
  __typename: 'FeeEstimate';
  fee_fast: CurrencyAmount;
  fee_min: CurrencyAmount;
};

export type FundNodeInput = {
  amount?: InputMaybe<CurrencyAmountInput>;
  node_id: Scalars['ID'];
};

export type FundNodeOutput = {
  __typename: 'FundNodeOutput';
  amount: CurrencyAmount;
};

/** This is a node on the Lightning Network, managed by a third party. The information about this node is public data that has been obtained by observing the Lightning Network. */
export type GraphNode = Entity & Node & {
  __typename: 'GraphNode';
  /** The addresses that this node has announced for itself on the Lightning Network. */
  addresses: NodeToAddressesConnection;
  /** A name that identifies the node. It has no importance in terms of operating the node, it is just a way to identify and search for commercial services or popular nodes. This alias can be changed at any time by the node operator. */
  alias?: Maybe<Scalars['String']>;
  /** The Bitcoin Network this node is deployed in. */
  bitcoin_network: BitcoinNetwork;
  /** A hexadecimal string that describes a color. For example "#000000" is black, "#FFFFFF" is white. It has no importance in terms of operating the node, it is just a way to visually differentiate nodes. That color can be changed at any time by the node operator. */
  color?: Maybe<Scalars['String']>;
  /** A summary metric used to capture how well positioned a node is to send, receive, or route transactions efficiently. Maximizing a node's conductivity helps a node’s transactions to be capital efficient. The value is an integer ranging between 0 and 10 (bounds included). */
  conductivity?: Maybe<Scalars['Int']>;
  /** The date and time when the entity was first created. */
  created_at: Scalars['DateTime'];
  /** The name of this node in the network. It will be the most human-readable option possible, depending on the data available for this node. */
  display_name: Scalars['String'];
  /** The unique identifier of this entity across all Lightspark systems. Should be treated as an opaque string. */
  id: Scalars['ID'];
  /** The public key of this node. It acts as a unique identifier of this node in the Lightning Network. */
  public_key?: Maybe<Scalars['String']>;
  /** The date and time when the entity was last updated. */
  updated_at: Scalars['DateTime'];
};


/** This is a node on the Lightning Network, managed by a third party. The information about this node is public data that has been obtained by observing the Lightning Network. */
export type GraphNodeAddressesArgs = {
  first?: InputMaybe<Scalars['Int']>;
  types?: InputMaybe<Array<NodeAddressType>>;
};

/** One hop signifies a payment moving one node ahead on a payment route; a list of sequential hops defines the path from sender node to recipient node for a payment attempt. */
export type Hop = Entity & {
  __typename: 'Hop';
  /** The date and time when the entity was first created. */
  created_at: Scalars['DateTime'];
  /** The destination node of the hop. */
  destination?: Maybe<Node>;
  /** The unique identifier of this entity across all Lightspark systems. Should be treated as an opaque string. */
  id: Scalars['ID'];
  /** The date and time when the entity was last updated. */
  updated_at: Scalars['DateTime'];
};

/** A transaction that was sent to this node on the Lightning Network. */
export type IncomingPayment = Entity & LightningTransaction & Transaction & {
  __typename: 'IncomingPayment';
  amount: CurrencyAmount;
  /** The attempts that have been made for this payment. */
  attempts: IncomingPaymentToAttemptsConnection;
  /** The date and time when this transaction was initiated. */
  created_at: Scalars['DateTime'];
  /** The recipient Lightspark node this payment was sent to. */
  destination: LightsparkNode;
  /** The unique identifier of this entity across all Lightspark systems. Should be treated as an opaque string. */
  id: Scalars['ID'];
  /** If known, the Lightspark node this payment originated from. */
  origin?: Maybe<LightsparkNode>;
  /** The optional payment request for this incoming payment, which will be null if the payment is sent through keysend. */
  payment_request?: Maybe<PaymentRequest>;
  /** The date and time when this transaction was completed or failed. */
  resolved_at?: Maybe<Scalars['DateTime']>;
  status: TransactionStatus;
  transaction_hash?: Maybe<Scalars['String']>;
  /** The date and time when the entity was last updated. */
  updated_at: Scalars['DateTime'];
};


/** A transaction that was sent to this node on the Lightning Network. */
export type IncomingPaymentAttemptsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  statuses?: InputMaybe<Array<IncomingPaymentAttemptStatus>>;
};

/** An attempt for a payment over a route from sender node to recipient node. */
export type IncomingPaymentAttempt = Entity & {
  __typename: 'IncomingPaymentAttempt';
  /** The total amount of that was attempted to send. */
  amount: CurrencyAmount;
  channel: Channel;
  /** The date and time when the entity was first created. */
  created_at: Scalars['DateTime'];
  /** The unique identifier of this entity across all Lightspark systems. Should be treated as an opaque string. */
  id: Scalars['ID'];
  /** The time the incoming payment attempt failed or succeeded. */
  resolved_at?: Maybe<Scalars['DateTime']>;
  /** The status of the incoming payment attempt. */
  status: IncomingPaymentAttemptStatus;
  /** The date and time when the entity was last updated. */
  updated_at: Scalars['DateTime'];
};

/** Enum that enumerates all the possible status of an incoming payment attempt. */
export enum IncomingPaymentAttemptStatus {
  Accepted = 'ACCEPTED',
  Canceled = 'CANCELED',
  Settled = 'SETTLED',
  Unknown = 'UNKNOWN'
}

/** This is the edge containing one attempt. It is used in IncomingPaymentToAttemptsConnection which contains a list of such edges for a given incoming payment. */
export type IncomingPaymentToAttemptEdge = {
  __typename: 'IncomingPaymentToAttemptEdge';
  entity: IncomingPaymentAttempt;
};

/** The connection from incoming payment to all attempts. */
export type IncomingPaymentToAttemptsConnection = {
  __typename: 'IncomingPaymentToAttemptsConnection';
  /** The total number of attempts for a given incoming payment. */
  count: Scalars['Int'];
  /** The edges to a list of attempts made for the given incoming payment in descending order of their attempt time. */
  edges: Array<IncomingPaymentToAttemptEdge>;
};

/** This object represents a BOLT #11 invoice (https://github.com/lightning/bolts/blob/master/11-payment-encoding.md) initiated by a Lightspark Node. */
export type Invoice = Entity & PaymentRequest & {
  __typename: 'Invoice';
  /** The date and time when the entity was first created. */
  created_at: Scalars['DateTime'];
  /** The details of the invoice. */
  data: InvoiceData;
  /** The unique identifier of this entity across all Lightspark systems. Should be treated as an opaque string. */
  id: Scalars['ID'];
  /** The date and time when the entity was last updated. */
  updated_at: Scalars['DateTime'];
};

/** This object represents the BOLT #11 invoice protocol for Lightning Payments. See https://github.com/lightning/bolts/blob/master/11-payment-encoding.md. */
export type InvoiceData = PaymentRequestData & {
  __typename: 'InvoiceData';
  amount: CurrencyAmount;
  bitcoin_network: BitcoinNetwork;
  created_at: Scalars['DateTime'];
  destination: Node;
  encoded_payment_request: Scalars['String'];
  expires_at: Scalars['DateTime'];
  memo?: Maybe<Scalars['String']>;
  payment_hash: Scalars['String'];
};

export type Key = {
  __typename: 'Key';
  public_key: Scalars['String'];
  type: KeyType;
};

export enum KeyType {
  RsaOaep = 'RSA_OAEP'
}

export type LightningTransaction = {
  amount: CurrencyAmount;
  /** The date and time when this transaction was initiated. */
  created_at: Scalars['DateTime'];
  /** The unique identifier of this entity across all Lightspark systems. Should be treated as an opaque string. */
  id: Scalars['ID'];
  /** The date and time when this transaction was completed or failed. */
  resolved_at?: Maybe<Scalars['DateTime']>;
  status: TransactionStatus;
  transaction_hash?: Maybe<Scalars['String']>;
  /** The date and time when the entity was last updated. */
  updated_at: Scalars['DateTime'];
};

/** This is a node that is managed by Lightspark and is managed within the current connected account. It contains many details about the node configuration, state, and metadata. */
export type LightsparkNode = Entity & Node & {
  __typename: 'LightsparkNode';
  /** The addresses that this node has announced for itself on the Lightning Network. */
  addresses: NodeToAddressesConnection;
  /** A name that identifies the node. It has no importance in terms of operating the node, it is just a way to identify and search for commercial services or popular nodes. This alias can be changed at any time by the node operator. */
  alias?: Maybe<Scalars['String']>;
  /** The Bitcoin Network this node is deployed in. */
  bitcoin_network: BitcoinNetwork;
  /** The details of the balance of this node on the Bitcoin Network. */
  blockchain_balance?: Maybe<BlockchainBalance>;
  /** @deprecated Not needed when pass-through. */
  channel_from_point?: Maybe<Channel>;
  /** The channels that are connected to this node. */
  channels: LightsparkNodeToChannelsConnection;
  /** A hexadecimal string that describes a color. For example "#000000" is black, "#FFFFFF" is white. It has no importance in terms of operating the node, it is just a way to visually differentiate nodes. That color can be changed at any time by the node operator. */
  color?: Maybe<Scalars['String']>;
  /** A summary metric used to capture how well positioned a node is to send, receive, or route transactions efficiently. Maximizing a node's conductivity helps a node’s transactions to be capital efficient. The value is an integer ranging between 0 and 10 (bounds included). */
  conductivity?: Maybe<Scalars['Int']>;
  /** The date and time when the entity was first created. */
  created_at: Scalars['DateTime'];
  /** The name of this node in the network. It will be the most human-readable option possible, depending on the data available for this node. */
  display_name: Scalars['String'];
  /** The admin macaroon is the token that is used to authenticate with the LND instance of the node. Lightspark stores an encrypted version of it that only the node operator can decrypt, using their node password. */
  encrypted_admin_macaroon?: Maybe<Secret>;
  /** The private key client is using to sign a GraphQL request which will be verified at LND. */
  encrypted_signing_private_key?: Maybe<Secret>;
  /** The public key that should be used to encrypt sensitive communication with the node. */
  encryption_public_key?: Maybe<Key>;
  /** The hostname that can be used to communicate with the node (LND instance) directly using its gRPC API. */
  grpc_hostname?: Maybe<Scalars['String']>;
  /** The unique identifier of this entity across all Lightspark systems. Should be treated as an opaque string. */
  id: Scalars['ID'];
  /** The sum of the channel balances that are available to send on this node. */
  local_balance?: Maybe<CurrencyAmount>;
  /**
   * The name of this node, chosen by the node operator.
   * @deprecated Use display_name instead
   */
  name: Scalars['String'];
  /** The public key of this node. It acts as a unique identifier of this node in the Lightning Network. */
  public_key?: Maybe<Scalars['String']>;
  purpose?: Maybe<LightsparkNodePurpose>;
  /** The sum of the channel balances that are available to receive on this node. */
  remote_balance?: Maybe<CurrencyAmount>;
  /** The URL that can be used to communicate with the node (LND instance) directly using its REST API. */
  rest_url?: Maybe<Scalars['String']>;
  status?: Maybe<LightsparkNodeStatus>;
  /** The date and time when the entity was last updated. */
  updated_at: Scalars['DateTime'];
  /** Indicates whether or not the node should be upgraded to the newest version. */
  upgrade_available: Scalars['Boolean'];
};


/** This is a node that is managed by Lightspark and is managed within the current connected account. It contains many details about the node configuration, state, and metadata. */
export type LightsparkNodeAddressesArgs = {
  first?: InputMaybe<Scalars['Int']>;
  types?: InputMaybe<Array<NodeAddressType>>;
};


/** This is a node that is managed by Lightspark and is managed within the current connected account. It contains many details about the node configuration, state, and metadata. */
export type LightsparkNodeChannel_From_PointArgs = {
  channel_point: Scalars['String'];
};


/** This is a node that is managed by Lightspark and is managed within the current connected account. It contains many details about the node configuration, state, and metadata. */
export type LightsparkNodeChannelsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  statuses?: InputMaybe<Array<ChannelStatus>>;
};

export enum LightsparkNodePurpose {
  Receive = 'RECEIVE',
  Routing = 'ROUTING',
  Send = 'SEND'
}

export enum LightsparkNodeStatus {
  Created = 'CREATED',
  Deployed = 'DEPLOYED',
  FailedToDeploy = 'FAILED_TO_DEPLOY',
  Ready = 'READY',
  Started = 'STARTED',
  Stopped = 'STOPPED',
  Syncing = 'SYNCING',
  Terminated = 'TERMINATED',
  WalletLocked = 'WALLET_LOCKED'
}

export type LightsparkNodeToChannelEdge = {
  __typename: 'LightsparkNodeToChannelEdge';
  entity: Channel;
};

export type LightsparkNodeToChannelsConnection = {
  __typename: 'LightsparkNodeToChannelsConnection';
  count: Scalars['Int'];
  edges: Array<LightsparkNodeToChannelEdge>;
  page_info: PageInfo;
};

export type Mutation = {
  __typename: 'Mutation';
  /** Generates a Lightning Invoice (follows the Bolt 11 specification) to request a payment from another Lightning Node. */
  create_invoice: CreateInvoiceOutput;
  /** Creates a Bitcoin address for the wallet associated with your Lightning Node. You can use this address to send funds to your node. It is a best practice to generate a new wallet address every time you need to send money. You can generate as many wallet addresses as you want. */
  create_node_wallet_address: CreateNodeWalletAddressOutput;
  /**
   * Adds funds to a Lightspark node on the REGTEST network. If the amount is not specified, 10,000,000 SATOSHI will be added.
   * This API only functions for nodes created on the REGTEST network and will return an error when called for any non-REGTEST node.
   */
  fund_node: FundNodeOutput;
  /** Sends a payment to a node on the Lightning Network, based on the invoice (as defined by the BOLT11 specification) that you provide. */
  pay_invoice: PayInvoiceOutput;
  /** Withdraws money from one of your nodes and sends it to a Bitcoin address of your choice. */
  withdraw_funds: WithdrawFundsOutput;
};


export type MutationCreate_InvoiceArgs = {
  input: CreateInvoiceInput;
};


export type MutationCreate_Node_Wallet_AddressArgs = {
  input: CreateNodeWalletAddressInput;
};


export type MutationFund_NodeArgs = {
  input: FundNodeInput;
};


export type MutationPay_InvoiceArgs = {
  input: PayInvoiceInput;
};


export type MutationWithdraw_FundsArgs = {
  input: WithdrawFundsInput;
};

/** This interface represents a lightning node that can be connected to the Lightning Network to send and receive transactions. */
export type Node = {
  /** The addresses that this node has announced for itself on the Lightning Network. */
  addresses: NodeToAddressesConnection;
  /** A name that identifies the node. It has no importance in terms of operating the node, it is just a way to identify and search for commercial services or popular nodes. This alias can be changed at any time by the node operator. */
  alias?: Maybe<Scalars['String']>;
  /** The Bitcoin Network this node is deployed in. */
  bitcoin_network: BitcoinNetwork;
  /** A hexadecimal string that describes a color. For example "#000000" is black, "#FFFFFF" is white. It has no importance in terms of operating the node, it is just a way to visually differentiate nodes. That color can be changed at any time by the node operator. */
  color?: Maybe<Scalars['String']>;
  /** A summary metric used to capture how well positioned a node is to send, receive, or route transactions efficiently. Maximizing a node's conductivity helps a node’s transactions to be capital efficient. The value is an integer ranging between 0 and 10 (bounds included). */
  conductivity?: Maybe<Scalars['Int']>;
  /** The date and time when the entity was first created. */
  created_at: Scalars['DateTime'];
  /** The name of this node in the network. It will be the most human-readable option possible, depending on the data available for this node. */
  display_name: Scalars['String'];
  /** The unique identifier of this entity across all Lightspark systems. Should be treated as an opaque string. */
  id: Scalars['ID'];
  /** The public key of this node. It acts as a unique identifier of this node in the Lightning Network. */
  public_key?: Maybe<Scalars['String']>;
  /** The date and time when the entity was last updated. */
  updated_at: Scalars['DateTime'];
};


/** This interface represents a lightning node that can be connected to the Lightning Network to send and receive transactions. */
export type NodeAddressesArgs = {
  first?: InputMaybe<Scalars['Int']>;
  types?: InputMaybe<Array<NodeAddressType>>;
};

/** An object that represents the address of a node on the Lightning Network. */
export type NodeAddress = {
  __typename: 'NodeAddress';
  /** The string representation of the address. */
  address: Scalars['String'];
  /** The type of this address. */
  type: NodeAddressType;
};

/** An enum that enumerates all possible types of addresses of a node on the Lightning Network. */
export enum NodeAddressType {
  Ipv4 = 'IPV4',
  Ipv6 = 'IPV6',
  Tor = 'TOR'
}

/** Represents the edge between a node and one of its addresses it has announced for itself on Lightning Network. */
export type NodeToAddressEdge = {
  __typename: 'NodeToAddressEdge';
  entity: NodeAddress;
};

/** A connection between a node and the addresses it has announced for itself on Lightning Network. */
export type NodeToAddressesConnection = {
  __typename: 'NodeToAddressesConnection';
  /** The total number of addresses the node has announced for itself on Lightning Network. */
  count: Scalars['Int'];
  edges: Array<NodeToAddressEdge>;
};

/** Transaction happened on Bitcoin blockchain. */
export type OnChainTransaction = {
  amount: CurrencyAmount;
  /** The hash of the block that included this transaction. This will be null for unconfirmed transactions. */
  block_hash?: Maybe<Scalars['String']>;
  /** The height of the block that included this transaction. This will be zero for unconfirmed transactions. */
  block_height: Scalars['Int'];
  /** The date and time when this transaction was initiated. */
  created_at: Scalars['DateTime'];
  /** The Bitcoin blockchain addresses this transaction was sent to. */
  destination_addresses: Array<Scalars['String']>;
  /** The fees that were paid by the wallet sending the transaction to commit it to the Bitcoin blockchain. */
  fees?: Maybe<CurrencyAmount>;
  /** The unique identifier of this entity across all Lightspark systems. Should be treated as an opaque string. */
  id: Scalars['ID'];
  /** The number of blockchain confirmations for this transaction in real time. */
  num_confirmations?: Maybe<Scalars['Int']>;
  /** The date and time when this transaction was completed or failed. */
  resolved_at?: Maybe<Scalars['DateTime']>;
  status: TransactionStatus;
  transaction_hash?: Maybe<Scalars['String']>;
  /** The date and time when the entity was last updated. */
  updated_at: Scalars['DateTime'];
};

/** A transaction was sent from this node on the Lightning Network. */
export type OutgoingPayment = Entity & LightningTransaction & Transaction & {
  __typename: 'OutgoingPayment';
  amount: CurrencyAmount;
  /** The attempts that have been made for this payment for possible routes. */
  attempts: OutgoingPaymentToAttemptsConnection;
  /** The date and time when this transaction was initiated. */
  created_at: Scalars['DateTime'];
  /** If known, the final recipient node this payment was sent to. */
  destination?: Maybe<Node>;
  /** If applicable, user-facing error message describing why the payment failed. */
  failure_message?: Maybe<RichText>;
  /** If applicable, the reason why the payment failed. */
  failure_reason?: Maybe<PaymentFailureReason>;
  /** The fees paid by the sender node to send the payment. */
  fees?: Maybe<CurrencyAmount>;
  /** The unique identifier of this entity across all Lightspark systems. Should be treated as an opaque string. */
  id: Scalars['ID'];
  /** The Lightspark node this payment originated from. */
  origin: LightsparkNode;
  payment_request_data?: Maybe<PaymentRequestData>;
  /** The date and time when this transaction was completed or failed. */
  resolved_at?: Maybe<Scalars['DateTime']>;
  status: TransactionStatus;
  transaction_hash?: Maybe<Scalars['String']>;
  /** The date and time when the entity was last updated. */
  updated_at: Scalars['DateTime'];
};


/** A transaction was sent from this node on the Lightning Network. */
export type OutgoingPaymentAttemptsArgs = {
  first?: InputMaybe<Scalars['Int']>;
};

/** An attempt for a payment over a route from sender node to recipient node. */
export type OutgoingPaymentAttempt = Entity & {
  __typename: 'OutgoingPaymentAttempt';
  /** The total amount of funds required to complete a payment over this route. This value includes the cumulative fees for each hop. As a result, the attempt extended to the first-hop in the route will need to have at least this much value, otherwise the route will fail at an intermediate node due to an insufficient amount. */
  amount?: Maybe<CurrencyAmount>;
  /** The date and time when the attempt was initiated. */
  created_at: Scalars['DateTime'];
  /** The sum of the fees paid at each hop within the route of this attempt. In the case of a one-hop payment, this value will be zero as we don't need to pay a fee to ourselves. */
  fees?: Maybe<CurrencyAmount>;
  /** A list of hops that represent the route from the sender node to the recipient node. */
  hops: OutgoingPaymentAttemptToHopsConnection;
  /** The unique identifier of this entity across all Lightspark systems. Should be treated as an opaque string. */
  id: Scalars['ID'];
  outgoing_payment: OutgoingPayment;
  /** The time the outgoing payment attempt failed or succeeded. */
  resolved_at?: Maybe<Scalars['DateTime']>;
  /** The status of an outgoing payment attempt. */
  status: OutgoingPaymentAttemptStatus;
  /** The date and time when the entity was last updated. */
  updated_at: Scalars['DateTime'];
};


/** An attempt for a payment over a route from sender node to recipient node. */
export type OutgoingPaymentAttemptHopsArgs = {
  first?: InputMaybe<Scalars['Int']>;
};

/** Enum that enumerates all the possible status of an outgoing payment attempt. */
export enum OutgoingPaymentAttemptStatus {
  Failed = 'FAILED',
  InFlight = 'IN_FLIGHT',
  Succeeded = 'SUCCEEDED'
}

/** This is the edge containing one hop. It is used in PaymentAttemptToHopsConnection which contains a list of such edges for a given outgoing payment attempt. */
export type OutgoingPaymentAttemptToHopEdge = {
  __typename: 'OutgoingPaymentAttemptToHopEdge';
  entity: Hop;
};

/** The connection from an outgoing payment attempt to the list of sequential hops that define the path from sender node to recipient node. */
export type OutgoingPaymentAttemptToHopsConnection = {
  __typename: 'OutgoingPaymentAttemptToHopsConnection';
  /** The total number of hops for a given outgoing payment attempt. */
  count?: Maybe<Scalars['Int']>;
  /** The edges to a list of hops ordered by their indices in the path from sender node to recipient node given an outgoing payment attempt. */
  edges: Array<OutgoingPaymentAttemptToHopEdge>;
};

/** This is the edge containing one attempt. It is used in OutgoingPaymentToAttemptsConnection which contains a list of such edges for a given outgoing payment. */
export type OutgoingPaymentToAttemptEdge = {
  __typename: 'OutgoingPaymentToAttemptEdge';
  entity: OutgoingPaymentAttempt;
};

/** The connection from outgoing payment to all attempts. */
export type OutgoingPaymentToAttemptsConnection = {
  __typename: 'OutgoingPaymentToAttemptsConnection';
  /** The total number of attempts for a given outgoing payment. */
  count: Scalars['Int'];
  /** The edges to a list of attempts made for the given outgoing payment in descending order of their attempt time. */
  edges: Array<OutgoingPaymentToAttemptEdge>;
};

export type PageInfo = {
  __typename: 'PageInfo';
  end_cursor?: Maybe<Scalars['String']>;
  has_next_page?: Maybe<Scalars['Boolean']>;
  has_previous_page?: Maybe<Scalars['Boolean']>;
  start_cursor?: Maybe<Scalars['String']>;
};

export type PayInvoiceInput = {
  /** The amount you will pay for this invoice. It should ONLY be set when the invoice amount is zero. */
  amount?: InputMaybe<CurrencyAmountInput>;
  /** The invoice you want to pay (as defined by the BOLT11 standard). */
  encoded_invoice: Scalars['String'];
  /** The maximum amount of fees that you want to pay for this payment to be sent. */
  maximum_fees?: InputMaybe<CurrencyAmountInput>;
  /** The node from where you want to send the payment. */
  node_id: Scalars['ID'];
  /** The timeout in seconds that we will try to make the payment. */
  timeout_secs: Scalars['Int'];
};

export type PayInvoiceOutput = {
  __typename: 'PayInvoiceOutput';
  /** The payment that has been sent. */
  payment: OutgoingPayment;
};

export enum PaymentFailureReason {
  Error = 'ERROR',
  IncorrectPaymentDetails = 'INCORRECT_PAYMENT_DETAILS',
  InsufficientBalance = 'INSUFFICIENT_BALANCE',
  None = 'NONE',
  NoRoute = 'NO_ROUTE',
  Timeout = 'TIMEOUT'
}

export type PaymentRequest = {
  /** The date and time when the entity was first created. */
  created_at: Scalars['DateTime'];
  /** The details of the payment request. */
  data: PaymentRequestData;
  /** The unique identifier of this entity across all Lightspark systems. Should be treated as an opaque string. */
  id: Scalars['ID'];
  /** The date and time when the entity was last updated. */
  updated_at: Scalars['DateTime'];
};

/** The interface of a payment request on the Lightning Network (a.k.a. Lightning Invoice). */
export type PaymentRequestData = {
  bitcoin_network: BitcoinNetwork;
  encoded_payment_request: Scalars['String'];
};

export type Query = {
  __typename: 'Query';
  /** Returns the current connected account. */
  current_account?: Maybe<Account>;
  /** Decodes the content of an encoded payment request into structured data that can be used by the client. */
  decoded_payment_request: PaymentRequestData;
  /** Returns any `Entity`, identified by its unique ID. */
  entity?: Maybe<Entity>;
  /** Returns an estimate of the fees of a transaction on the Bitcoin Network. */
  fee_estimate: FeeEstimate;
};


export type QueryDecoded_Payment_RequestArgs = {
  encoded_payment_request: Scalars['String'];
};


export type QueryEntityArgs = {
  id: Scalars['ID'];
};


export type QueryFee_EstimateArgs = {
  network: BitcoinNetwork;
};

export type RichText = {
  __typename: 'RichText';
  text: Scalars['String'];
};

/** A transaction that was forwarded through this node on the Lightning Network. */
export type RoutingTransaction = Entity & LightningTransaction & Transaction & {
  __typename: 'RoutingTransaction';
  amount: CurrencyAmount;
  /** The date and time when this transaction was initiated. */
  created_at: Scalars['DateTime'];
  /** If applicable, user-facing error message describing why the routing failed. */
  failure_message?: Maybe<RichText>;
  /** If applicable, the reason why the routing failed. */
  failure_reason?: Maybe<RoutingTransactionFailureReason>;
  /** The fees collected by the node when routing this transaction. We subtract the outgoing amount to the incoming amount to determine how much fees were collected. */
  fees?: Maybe<CurrencyAmount>;
  /** The unique identifier of this entity across all Lightspark systems. Should be treated as an opaque string. */
  id: Scalars['ID'];
  /** If known, the channel this transaction was received from. */
  incoming_channel?: Maybe<Channel>;
  /** If known, the channel this transaction was forwarded to. */
  outgoing_channel?: Maybe<Channel>;
  /** The date and time when this transaction was completed or failed. */
  resolved_at?: Maybe<Scalars['DateTime']>;
  status: TransactionStatus;
  transaction_hash?: Maybe<Scalars['String']>;
  /** The date and time when the entity was last updated. */
  updated_at: Scalars['DateTime'];
};

export enum RoutingTransactionFailureReason {
  ForwardingFailure = 'FORWARDING_FAILURE',
  IncomingLinkFailure = 'INCOMING_LINK_FAILURE',
  OutgoingLinkFailure = 'OUTGOING_LINK_FAILURE'
}

export type Secret = {
  __typename: 'Secret';
  cipher: Scalars['String'];
  encrypted_value: Scalars['String'];
};

export type Transaction = {
  amount: CurrencyAmount;
  /** The date and time when this transaction was initiated. */
  created_at: Scalars['DateTime'];
  /** The unique identifier of this entity across all Lightspark systems. Should be treated as an opaque string. */
  id: Scalars['ID'];
  /** The date and time when this transaction was completed or failed. */
  resolved_at?: Maybe<Scalars['DateTime']>;
  status: TransactionStatus;
  transaction_hash?: Maybe<Scalars['String']>;
  /** The date and time when the entity was last updated. */
  updated_at: Scalars['DateTime'];
};

export type TransactionFailures = {
  payment_failures?: InputMaybe<Array<PaymentFailureReason>>;
  routing_transaction_failures?: InputMaybe<Array<RoutingTransactionFailureReason>>;
};

export enum TransactionStatus {
  Cancelled = 'CANCELLED',
  Expired = 'EXPIRED',
  Failed = 'FAILED',
  NotStarted = 'NOT_STARTED',
  Pending = 'PENDING',
  Success = 'SUCCESS'
}

export enum TransactionType {
  ChannelClose = 'CHANNEL_CLOSE',
  ChannelOpen = 'CHANNEL_OPEN',
  L1Deposit = 'L1_DEPOSIT',
  L1Withdraw = 'L1_WITHDRAW',
  Payment = 'PAYMENT',
  PaymentRequest = 'PAYMENT_REQUEST',
  Route = 'ROUTE'
}

export enum WebhookEventType {
  NodeStatus = 'NODE_STATUS',
  PaymentFinished = 'PAYMENT_FINISHED'
}

export type WebhooksSettings = {
  __typename: 'WebhooksSettings';
  events: Array<WebhookEventType>;
  secret: Scalars['String'];
  url: Scalars['String'];
};

export type WithdrawFundsInput = {
  /** The amount you want to withdraw from your node. */
  amount: CurrencyAmountInput;
  /** The bitcoin address where the withdrawal should be sent. */
  bitcoin_address: Scalars['String'];
  /** The node from where you want to withdraw money. */
  node_id: Scalars['ID'];
};

export type WithdrawFundsOutput = {
  __typename: 'WithdrawFundsOutput';
  /** The bitcoin transaction that represents the withdrawal that has been sent. */
  transaction: Withdrawal;
};

/** The transaction on the Bitcoin blockchain to withdraw funds from the Lightspark node to a Bitcoin wallet. */
export type Withdrawal = Entity & OnChainTransaction & Transaction & {
  __typename: 'Withdrawal';
  amount: CurrencyAmount;
  /** The hash of the block that included this transaction. This will be null for unconfirmed transactions. */
  block_hash?: Maybe<Scalars['String']>;
  /** The height of the block that included this transaction. This will be zero for unconfirmed transactions. */
  block_height: Scalars['Int'];
  /** The date and time when this transaction was initiated. */
  created_at: Scalars['DateTime'];
  /** The Bitcoin blockchain addresses this transaction was sent to. */
  destination_addresses: Array<Scalars['String']>;
  /** The fees that were paid by the wallet sending the transaction to commit it to the Bitcoin blockchain. */
  fees?: Maybe<CurrencyAmount>;
  /** The unique identifier of this entity across all Lightspark systems. Should be treated as an opaque string. */
  id: Scalars['ID'];
  /** The number of blockchain confirmations for this transaction in real time. */
  num_confirmations?: Maybe<Scalars['Int']>;
  /** The Lightspark node this withdrawal originated from. */
  origin: LightsparkNode;
  /** The date and time when this transaction was completed or failed. */
  resolved_at?: Maybe<Scalars['DateTime']>;
  status: TransactionStatus;
  transaction_hash?: Maybe<Scalars['String']>;
  /** The date and time when the entity was last updated. */
  updated_at: Scalars['DateTime'];
};

export type SingeNodeDashboardQueryVariables = Exact<{
  network: BitcoinNetwork;
  nodeId: Scalars['ID'];
  numTransactions?: InputMaybe<Scalars['Int']>;
  transactionTypes?: InputMaybe<Array<TransactionType> | TransactionType>;
}>;


export type SingeNodeDashboardQuery = { __typename: 'Query', current_account?: { __typename: 'Account', id: string, name?: string | null, dashboard_overview_nodes: { __typename: 'AccountToNodesConnection', count: number, edges: Array<{ __typename: 'AccountToNodeEdge', entity: { __typename: 'LightsparkNode', color?: string | null, display_name: string, purpose?: LightsparkNodePurpose | null, id: string, public_key?: string | null, status?: LightsparkNodeStatus | null, addresses: { __typename: 'NodeToAddressesConnection', count: number, edges: Array<{ __typename: 'NodeToAddressEdge', entity: { __typename: 'NodeAddress', address: string, type: NodeAddressType } }> }, local_balance?: { __typename: 'CurrencyAmount', value: any, unit: CurrencyUnit } | null, remote_balance?: { __typename: 'CurrencyAmount', value: any, unit: CurrencyUnit } | null, blockchain_balance?: { __typename: 'BlockchainBalance', available_balance?: { __typename: 'CurrencyAmount', value: any, unit: CurrencyUnit } | null, total_balance?: { __typename: 'CurrencyAmount', value: any, unit: CurrencyUnit } | null } | null } }> }, blockchain_balance?: { __typename: 'BlockchainBalance', l1_balance?: { __typename: 'CurrencyAmount', value: any, unit: CurrencyUnit } | null, required_reserve?: { __typename: 'CurrencyAmount', value: any, unit: CurrencyUnit } | null, available_balance?: { __typename: 'CurrencyAmount', value: any, unit: CurrencyUnit } | null, unconfirmed_balance?: { __typename: 'CurrencyAmount', value: any, unit: CurrencyUnit } | null } | null, local_balance?: { __typename: 'CurrencyAmount', value: any, unit: CurrencyUnit } | null, remote_balance?: { __typename: 'CurrencyAmount', value: any, unit: CurrencyUnit } | null, recent_transactions: { __typename: 'AccountToTransactionsConnection', count?: number | null, total_amount_transacted?: { __typename: 'CurrencyAmount', value: any, unit: CurrencyUnit } | null, edges: Array<{ __typename: 'AccountToTransactionEdge', entity: { __typename: 'ChannelClosingTransaction', id: string, created_at: any, resolved_at?: any | null, status: TransactionStatus, transaction_hash?: string | null, fees?: { __typename: 'CurrencyAmount', value: any, unit: CurrencyUnit } | null, channel?: { __typename: 'Channel', remote_node?: { __typename: 'GraphNode', display_name: string } | { __typename: 'LightsparkNode', display_name: string } | null, local_node: { __typename: 'LightsparkNode', display_name: string } } | null, amount: { __typename: 'CurrencyAmount', value: any, unit: CurrencyUnit } } | { __typename: 'ChannelOpeningTransaction', id: string, created_at: any, resolved_at?: any | null, status: TransactionStatus, transaction_hash?: string | null, fees?: { __typename: 'CurrencyAmount', value: any, unit: CurrencyUnit } | null, channel?: { __typename: 'Channel', remote_node?: { __typename: 'GraphNode', display_name: string } | { __typename: 'LightsparkNode', display_name: string } | null, local_node: { __typename: 'LightsparkNode', display_name: string } } | null, amount: { __typename: 'CurrencyAmount', value: any, unit: CurrencyUnit } } | { __typename: 'Deposit', id: string, created_at: any, resolved_at?: any | null, status: TransactionStatus, transaction_hash?: string | null, deposit_destination: { __typename: 'LightsparkNode', display_name: string, public_key?: string | null }, fees?: { __typename: 'CurrencyAmount', value: any, unit: CurrencyUnit } | null, amount: { __typename: 'CurrencyAmount', value: any, unit: CurrencyUnit } } | { __typename: 'IncomingPayment', id: string, created_at: any, resolved_at?: any | null, status: TransactionStatus, transaction_hash?: string | null, incoming_payment_origin?: { __typename: 'LightsparkNode', display_name: string, public_key?: string | null } | null, incoming_payment_destination: { __typename: 'LightsparkNode', display_name: string }, payment_request?: { __typename: 'Invoice', data: { __typename: 'InvoiceData', memo?: string | null } } | null, amount: { __typename: 'CurrencyAmount', value: any, unit: CurrencyUnit } } | { __typename: 'OutgoingPayment', id: string, created_at: any, resolved_at?: any | null, status: TransactionStatus, transaction_hash?: string | null, outgoing_payment_origin: { __typename: 'LightsparkNode', display_name: string }, outgoing_payment_destination?: { __typename: 'GraphNode', display_name: string, public_key?: string | null } | { __typename: 'LightsparkNode', display_name: string, public_key?: string | null } | null, fees?: { __typename: 'CurrencyAmount', value: any, unit: CurrencyUnit } | null, amount: { __typename: 'CurrencyAmount', value: any, unit: CurrencyUnit } } | { __typename: 'RoutingTransaction', failure_reason?: RoutingTransactionFailureReason | null, id: string, created_at: any, resolved_at?: any | null, status: TransactionStatus, transaction_hash?: string | null, fees?: { __typename: 'CurrencyAmount', value: any, unit: CurrencyUnit } | null, incoming_channel?: { __typename: 'Channel', remote_node?: { __typename: 'GraphNode', display_name: string } | { __typename: 'LightsparkNode', display_name: string } | null, local_node: { __typename: 'LightsparkNode', display_name: string } } | null, outgoing_channel?: { __typename: 'Channel', remote_node?: { __typename: 'GraphNode', display_name: string } | { __typename: 'LightsparkNode', display_name: string } | null } | null, amount: { __typename: 'CurrencyAmount', value: any, unit: CurrencyUnit } } | { __typename: 'Withdrawal', id: string, created_at: any, resolved_at?: any | null, status: TransactionStatus, transaction_hash?: string | null, withdraw_origin: { __typename: 'LightsparkNode', display_name: string, public_key?: string | null }, fees?: { __typename: 'CurrencyAmount', value: any, unit: CurrencyUnit } | null, amount: { __typename: 'CurrencyAmount', value: any, unit: CurrencyUnit } } }> } } | null };

type TransactionDetails_ChannelClosingTransaction_Fragment = { __typename: 'ChannelClosingTransaction', id: string, created_at: any, resolved_at?: any | null, status: TransactionStatus, transaction_hash?: string | null, fees?: { __typename: 'CurrencyAmount', value: any, unit: CurrencyUnit } | null, channel?: { __typename: 'Channel', remote_node?: { __typename: 'GraphNode', display_name: string } | { __typename: 'LightsparkNode', display_name: string } | null, local_node: { __typename: 'LightsparkNode', display_name: string } } | null, amount: { __typename: 'CurrencyAmount', value: any, unit: CurrencyUnit } };

type TransactionDetails_ChannelOpeningTransaction_Fragment = { __typename: 'ChannelOpeningTransaction', id: string, created_at: any, resolved_at?: any | null, status: TransactionStatus, transaction_hash?: string | null, fees?: { __typename: 'CurrencyAmount', value: any, unit: CurrencyUnit } | null, channel?: { __typename: 'Channel', remote_node?: { __typename: 'GraphNode', display_name: string } | { __typename: 'LightsparkNode', display_name: string } | null, local_node: { __typename: 'LightsparkNode', display_name: string } } | null, amount: { __typename: 'CurrencyAmount', value: any, unit: CurrencyUnit } };

type TransactionDetails_Deposit_Fragment = { __typename: 'Deposit', id: string, created_at: any, resolved_at?: any | null, status: TransactionStatus, transaction_hash?: string | null, deposit_destination: { __typename: 'LightsparkNode', display_name: string, public_key?: string | null }, fees?: { __typename: 'CurrencyAmount', value: any, unit: CurrencyUnit } | null, amount: { __typename: 'CurrencyAmount', value: any, unit: CurrencyUnit } };

type TransactionDetails_IncomingPayment_Fragment = { __typename: 'IncomingPayment', id: string, created_at: any, resolved_at?: any | null, status: TransactionStatus, transaction_hash?: string | null, incoming_payment_origin?: { __typename: 'LightsparkNode', display_name: string, public_key?: string | null } | null, incoming_payment_destination: { __typename: 'LightsparkNode', display_name: string }, payment_request?: { __typename: 'Invoice', data: { __typename: 'InvoiceData', memo?: string | null } } | null, amount: { __typename: 'CurrencyAmount', value: any, unit: CurrencyUnit } };

type TransactionDetails_OutgoingPayment_Fragment = { __typename: 'OutgoingPayment', id: string, created_at: any, resolved_at?: any | null, status: TransactionStatus, transaction_hash?: string | null, outgoing_payment_origin: { __typename: 'LightsparkNode', display_name: string }, outgoing_payment_destination?: { __typename: 'GraphNode', display_name: string, public_key?: string | null } | { __typename: 'LightsparkNode', display_name: string, public_key?: string | null } | null, fees?: { __typename: 'CurrencyAmount', value: any, unit: CurrencyUnit } | null, amount: { __typename: 'CurrencyAmount', value: any, unit: CurrencyUnit } };

type TransactionDetails_RoutingTransaction_Fragment = { __typename: 'RoutingTransaction', failure_reason?: RoutingTransactionFailureReason | null, id: string, created_at: any, resolved_at?: any | null, status: TransactionStatus, transaction_hash?: string | null, fees?: { __typename: 'CurrencyAmount', value: any, unit: CurrencyUnit } | null, incoming_channel?: { __typename: 'Channel', remote_node?: { __typename: 'GraphNode', display_name: string } | { __typename: 'LightsparkNode', display_name: string } | null, local_node: { __typename: 'LightsparkNode', display_name: string } } | null, outgoing_channel?: { __typename: 'Channel', remote_node?: { __typename: 'GraphNode', display_name: string } | { __typename: 'LightsparkNode', display_name: string } | null } | null, amount: { __typename: 'CurrencyAmount', value: any, unit: CurrencyUnit } };

type TransactionDetails_Withdrawal_Fragment = { __typename: 'Withdrawal', id: string, created_at: any, resolved_at?: any | null, status: TransactionStatus, transaction_hash?: string | null, withdraw_origin: { __typename: 'LightsparkNode', display_name: string, public_key?: string | null }, fees?: { __typename: 'CurrencyAmount', value: any, unit: CurrencyUnit } | null, amount: { __typename: 'CurrencyAmount', value: any, unit: CurrencyUnit } };

export type TransactionDetailsFragment = TransactionDetails_ChannelClosingTransaction_Fragment | TransactionDetails_ChannelOpeningTransaction_Fragment | TransactionDetails_Deposit_Fragment | TransactionDetails_IncomingPayment_Fragment | TransactionDetails_OutgoingPayment_Fragment | TransactionDetails_RoutingTransaction_Fragment | TransactionDetails_Withdrawal_Fragment;

export type AccountKeySpecifier = ('api_tokens' | 'blockchain_balance' | 'channels' | 'conductivity' | 'created_at' | 'id' | 'local_balance' | 'name' | 'nodes' | 'remote_balance' | 'transactions' | 'updated_at' | 'uptime_percentage' | 'webhooks_settings' | AccountKeySpecifier)[];
export type AccountFieldPolicy = {
	api_tokens?: FieldPolicy<any> | FieldReadFunction<any>,
	blockchain_balance?: FieldPolicy<any> | FieldReadFunction<any>,
	channels?: FieldPolicy<any> | FieldReadFunction<any>,
	conductivity?: FieldPolicy<any> | FieldReadFunction<any>,
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	local_balance?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	remote_balance?: FieldPolicy<any> | FieldReadFunction<any>,
	transactions?: FieldPolicy<any> | FieldReadFunction<any>,
	updated_at?: FieldPolicy<any> | FieldReadFunction<any>,
	uptime_percentage?: FieldPolicy<any> | FieldReadFunction<any>,
	webhooks_settings?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AccountToApiTokenEdgeKeySpecifier = ('entity' | AccountToApiTokenEdgeKeySpecifier)[];
export type AccountToApiTokenEdgeFieldPolicy = {
	entity?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AccountToApiTokensConnectionKeySpecifier = ('count' | 'edges' | 'page_info' | AccountToApiTokensConnectionKeySpecifier)[];
export type AccountToApiTokensConnectionFieldPolicy = {
	count?: FieldPolicy<any> | FieldReadFunction<any>,
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	page_info?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AccountToChannelEdgeKeySpecifier = ('entity' | AccountToChannelEdgeKeySpecifier)[];
export type AccountToChannelEdgeFieldPolicy = {
	entity?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AccountToChannelsConnectionKeySpecifier = ('count' | 'edges' | AccountToChannelsConnectionKeySpecifier)[];
export type AccountToChannelsConnectionFieldPolicy = {
	count?: FieldPolicy<any> | FieldReadFunction<any>,
	edges?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AccountToNodeEdgeKeySpecifier = ('entity' | AccountToNodeEdgeKeySpecifier)[];
export type AccountToNodeEdgeFieldPolicy = {
	entity?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AccountToNodesConnectionKeySpecifier = ('count' | 'edges' | 'page_info' | 'purpose' | AccountToNodesConnectionKeySpecifier)[];
export type AccountToNodesConnectionFieldPolicy = {
	count?: FieldPolicy<any> | FieldReadFunction<any>,
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	page_info?: FieldPolicy<any> | FieldReadFunction<any>,
	purpose?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AccountToTransactionEdgeKeySpecifier = ('entity' | AccountToTransactionEdgeKeySpecifier)[];
export type AccountToTransactionEdgeFieldPolicy = {
	entity?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AccountToTransactionsConnectionKeySpecifier = ('average_fee_earned' | 'count' | 'edges' | 'page_info' | 'profit_loss' | 'total_amount_transacted' | AccountToTransactionsConnectionKeySpecifier)[];
export type AccountToTransactionsConnectionFieldPolicy = {
	average_fee_earned?: FieldPolicy<any> | FieldReadFunction<any>,
	count?: FieldPolicy<any> | FieldReadFunction<any>,
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	page_info?: FieldPolicy<any> | FieldReadFunction<any>,
	profit_loss?: FieldPolicy<any> | FieldReadFunction<any>,
	total_amount_transacted?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ApiTokenKeySpecifier = ('client_id' | 'created_at' | 'id' | 'name' | 'updated_at' | ApiTokenKeySpecifier)[];
export type ApiTokenFieldPolicy = {
	client_id?: FieldPolicy<any> | FieldReadFunction<any>,
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	updated_at?: FieldPolicy<any> | FieldReadFunction<any>
};
export type BlockchainBalanceKeySpecifier = ('available_balance' | 'confirmed_balance' | 'locked_balance' | 'required_reserve' | 'total_balance' | 'unconfirmed_balance' | BlockchainBalanceKeySpecifier)[];
export type BlockchainBalanceFieldPolicy = {
	available_balance?: FieldPolicy<any> | FieldReadFunction<any>,
	confirmed_balance?: FieldPolicy<any> | FieldReadFunction<any>,
	locked_balance?: FieldPolicy<any> | FieldReadFunction<any>,
	required_reserve?: FieldPolicy<any> | FieldReadFunction<any>,
	total_balance?: FieldPolicy<any> | FieldReadFunction<any>,
	unconfirmed_balance?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ChannelKeySpecifier = ('capacity' | 'channel_point' | 'created_at' | 'estimated_force_closure_wait_minutes' | 'fees' | 'funding_transaction' | 'id' | 'local_balance' | 'local_node' | 'local_unsettled_balance' | 'remote_balance' | 'remote_node' | 'remote_unsettled_balance' | 'short_channel_id' | 'status' | 'total_balance' | 'transactions' | 'unsettled_balance' | 'updated_at' | 'uptime_percentage' | ChannelKeySpecifier)[];
export type ChannelFieldPolicy = {
	capacity?: FieldPolicy<any> | FieldReadFunction<any>,
	channel_point?: FieldPolicy<any> | FieldReadFunction<any>,
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	estimated_force_closure_wait_minutes?: FieldPolicy<any> | FieldReadFunction<any>,
	fees?: FieldPolicy<any> | FieldReadFunction<any>,
	funding_transaction?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	local_balance?: FieldPolicy<any> | FieldReadFunction<any>,
	local_node?: FieldPolicy<any> | FieldReadFunction<any>,
	local_unsettled_balance?: FieldPolicy<any> | FieldReadFunction<any>,
	remote_balance?: FieldPolicy<any> | FieldReadFunction<any>,
	remote_node?: FieldPolicy<any> | FieldReadFunction<any>,
	remote_unsettled_balance?: FieldPolicy<any> | FieldReadFunction<any>,
	short_channel_id?: FieldPolicy<any> | FieldReadFunction<any>,
	status?: FieldPolicy<any> | FieldReadFunction<any>,
	total_balance?: FieldPolicy<any> | FieldReadFunction<any>,
	transactions?: FieldPolicy<any> | FieldReadFunction<any>,
	unsettled_balance?: FieldPolicy<any> | FieldReadFunction<any>,
	updated_at?: FieldPolicy<any> | FieldReadFunction<any>,
	uptime_percentage?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ChannelClosingTransactionKeySpecifier = ('amount' | 'block_hash' | 'block_height' | 'channel' | 'created_at' | 'destination_addresses' | 'fees' | 'id' | 'num_confirmations' | 'resolved_at' | 'status' | 'transaction_hash' | 'updated_at' | ChannelClosingTransactionKeySpecifier)[];
export type ChannelClosingTransactionFieldPolicy = {
	amount?: FieldPolicy<any> | FieldReadFunction<any>,
	block_hash?: FieldPolicy<any> | FieldReadFunction<any>,
	block_height?: FieldPolicy<any> | FieldReadFunction<any>,
	channel?: FieldPolicy<any> | FieldReadFunction<any>,
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	destination_addresses?: FieldPolicy<any> | FieldReadFunction<any>,
	fees?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	num_confirmations?: FieldPolicy<any> | FieldReadFunction<any>,
	resolved_at?: FieldPolicy<any> | FieldReadFunction<any>,
	status?: FieldPolicy<any> | FieldReadFunction<any>,
	transaction_hash?: FieldPolicy<any> | FieldReadFunction<any>,
	updated_at?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ChannelFeesKeySpecifier = ('base_fee' | 'fee_rate_per_mil' | ChannelFeesKeySpecifier)[];
export type ChannelFeesFieldPolicy = {
	base_fee?: FieldPolicy<any> | FieldReadFunction<any>,
	fee_rate_per_mil?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ChannelOpeningTransactionKeySpecifier = ('amount' | 'block_hash' | 'block_height' | 'channel' | 'created_at' | 'destination_addresses' | 'fees' | 'id' | 'num_confirmations' | 'resolved_at' | 'status' | 'transaction_hash' | 'updated_at' | ChannelOpeningTransactionKeySpecifier)[];
export type ChannelOpeningTransactionFieldPolicy = {
	amount?: FieldPolicy<any> | FieldReadFunction<any>,
	block_hash?: FieldPolicy<any> | FieldReadFunction<any>,
	block_height?: FieldPolicy<any> | FieldReadFunction<any>,
	channel?: FieldPolicy<any> | FieldReadFunction<any>,
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	destination_addresses?: FieldPolicy<any> | FieldReadFunction<any>,
	fees?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	num_confirmations?: FieldPolicy<any> | FieldReadFunction<any>,
	resolved_at?: FieldPolicy<any> | FieldReadFunction<any>,
	status?: FieldPolicy<any> | FieldReadFunction<any>,
	transaction_hash?: FieldPolicy<any> | FieldReadFunction<any>,
	updated_at?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ChannelToTransactionsConnectionKeySpecifier = ('average_fee' | 'count' | 'total_amount_transacted' | 'total_fees' | ChannelToTransactionsConnectionKeySpecifier)[];
export type ChannelToTransactionsConnectionFieldPolicy = {
	average_fee?: FieldPolicy<any> | FieldReadFunction<any>,
	count?: FieldPolicy<any> | FieldReadFunction<any>,
	total_amount_transacted?: FieldPolicy<any> | FieldReadFunction<any>,
	total_fees?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CreateInvoiceOutputKeySpecifier = ('invoice' | CreateInvoiceOutputKeySpecifier)[];
export type CreateInvoiceOutputFieldPolicy = {
	invoice?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CreateNodeWalletAddressOutputKeySpecifier = ('node' | 'wallet_address' | CreateNodeWalletAddressOutputKeySpecifier)[];
export type CreateNodeWalletAddressOutputFieldPolicy = {
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	wallet_address?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CurrencyAmountKeySpecifier = ('unit' | 'value' | CurrencyAmountKeySpecifier)[];
export type CurrencyAmountFieldPolicy = {
	unit?: FieldPolicy<any> | FieldReadFunction<any>,
	value?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DepositKeySpecifier = ('amount' | 'block_hash' | 'block_height' | 'created_at' | 'destination' | 'destination_addresses' | 'fees' | 'id' | 'num_confirmations' | 'resolved_at' | 'status' | 'transaction_hash' | 'updated_at' | DepositKeySpecifier)[];
export type DepositFieldPolicy = {
	amount?: FieldPolicy<any> | FieldReadFunction<any>,
	block_hash?: FieldPolicy<any> | FieldReadFunction<any>,
	block_height?: FieldPolicy<any> | FieldReadFunction<any>,
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	destination?: FieldPolicy<any> | FieldReadFunction<any>,
	destination_addresses?: FieldPolicy<any> | FieldReadFunction<any>,
	fees?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	num_confirmations?: FieldPolicy<any> | FieldReadFunction<any>,
	resolved_at?: FieldPolicy<any> | FieldReadFunction<any>,
	status?: FieldPolicy<any> | FieldReadFunction<any>,
	transaction_hash?: FieldPolicy<any> | FieldReadFunction<any>,
	updated_at?: FieldPolicy<any> | FieldReadFunction<any>
};
export type EntityKeySpecifier = ('created_at' | 'id' | 'updated_at' | EntityKeySpecifier)[];
export type EntityFieldPolicy = {
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	updated_at?: FieldPolicy<any> | FieldReadFunction<any>
};
export type FeeEstimateKeySpecifier = ('fee_fast' | 'fee_min' | FeeEstimateKeySpecifier)[];
export type FeeEstimateFieldPolicy = {
	fee_fast?: FieldPolicy<any> | FieldReadFunction<any>,
	fee_min?: FieldPolicy<any> | FieldReadFunction<any>
};
export type FundNodeOutputKeySpecifier = ('amount' | FundNodeOutputKeySpecifier)[];
export type FundNodeOutputFieldPolicy = {
	amount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type GraphNodeKeySpecifier = ('addresses' | 'alias' | 'bitcoin_network' | 'color' | 'conductivity' | 'created_at' | 'display_name' | 'id' | 'public_key' | 'updated_at' | GraphNodeKeySpecifier)[];
export type GraphNodeFieldPolicy = {
	addresses?: FieldPolicy<any> | FieldReadFunction<any>,
	alias?: FieldPolicy<any> | FieldReadFunction<any>,
	bitcoin_network?: FieldPolicy<any> | FieldReadFunction<any>,
	color?: FieldPolicy<any> | FieldReadFunction<any>,
	conductivity?: FieldPolicy<any> | FieldReadFunction<any>,
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	display_name?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	public_key?: FieldPolicy<any> | FieldReadFunction<any>,
	updated_at?: FieldPolicy<any> | FieldReadFunction<any>
};
export type HopKeySpecifier = ('created_at' | 'destination' | 'id' | 'updated_at' | HopKeySpecifier)[];
export type HopFieldPolicy = {
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	destination?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	updated_at?: FieldPolicy<any> | FieldReadFunction<any>
};
export type IncomingPaymentKeySpecifier = ('amount' | 'attempts' | 'created_at' | 'destination' | 'id' | 'origin' | 'payment_request' | 'resolved_at' | 'status' | 'transaction_hash' | 'updated_at' | IncomingPaymentKeySpecifier)[];
export type IncomingPaymentFieldPolicy = {
	amount?: FieldPolicy<any> | FieldReadFunction<any>,
	attempts?: FieldPolicy<any> | FieldReadFunction<any>,
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	destination?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	origin?: FieldPolicy<any> | FieldReadFunction<any>,
	payment_request?: FieldPolicy<any> | FieldReadFunction<any>,
	resolved_at?: FieldPolicy<any> | FieldReadFunction<any>,
	status?: FieldPolicy<any> | FieldReadFunction<any>,
	transaction_hash?: FieldPolicy<any> | FieldReadFunction<any>,
	updated_at?: FieldPolicy<any> | FieldReadFunction<any>
};
export type IncomingPaymentAttemptKeySpecifier = ('amount' | 'channel' | 'created_at' | 'id' | 'resolved_at' | 'status' | 'updated_at' | IncomingPaymentAttemptKeySpecifier)[];
export type IncomingPaymentAttemptFieldPolicy = {
	amount?: FieldPolicy<any> | FieldReadFunction<any>,
	channel?: FieldPolicy<any> | FieldReadFunction<any>,
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	resolved_at?: FieldPolicy<any> | FieldReadFunction<any>,
	status?: FieldPolicy<any> | FieldReadFunction<any>,
	updated_at?: FieldPolicy<any> | FieldReadFunction<any>
};
export type IncomingPaymentToAttemptEdgeKeySpecifier = ('entity' | IncomingPaymentToAttemptEdgeKeySpecifier)[];
export type IncomingPaymentToAttemptEdgeFieldPolicy = {
	entity?: FieldPolicy<any> | FieldReadFunction<any>
};
export type IncomingPaymentToAttemptsConnectionKeySpecifier = ('count' | 'edges' | IncomingPaymentToAttemptsConnectionKeySpecifier)[];
export type IncomingPaymentToAttemptsConnectionFieldPolicy = {
	count?: FieldPolicy<any> | FieldReadFunction<any>,
	edges?: FieldPolicy<any> | FieldReadFunction<any>
};
export type InvoiceKeySpecifier = ('created_at' | 'data' | 'id' | 'updated_at' | InvoiceKeySpecifier)[];
export type InvoiceFieldPolicy = {
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	data?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	updated_at?: FieldPolicy<any> | FieldReadFunction<any>
};
export type InvoiceDataKeySpecifier = ('amount' | 'bitcoin_network' | 'created_at' | 'destination' | 'encoded_payment_request' | 'expires_at' | 'memo' | 'payment_hash' | InvoiceDataKeySpecifier)[];
export type InvoiceDataFieldPolicy = {
	amount?: FieldPolicy<any> | FieldReadFunction<any>,
	bitcoin_network?: FieldPolicy<any> | FieldReadFunction<any>,
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	destination?: FieldPolicy<any> | FieldReadFunction<any>,
	encoded_payment_request?: FieldPolicy<any> | FieldReadFunction<any>,
	expires_at?: FieldPolicy<any> | FieldReadFunction<any>,
	memo?: FieldPolicy<any> | FieldReadFunction<any>,
	payment_hash?: FieldPolicy<any> | FieldReadFunction<any>
};
export type KeyKeySpecifier = ('public_key' | 'type' | KeyKeySpecifier)[];
export type KeyFieldPolicy = {
	public_key?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>
};
export type LightningTransactionKeySpecifier = ('amount' | 'created_at' | 'id' | 'resolved_at' | 'status' | 'transaction_hash' | 'updated_at' | LightningTransactionKeySpecifier)[];
export type LightningTransactionFieldPolicy = {
	amount?: FieldPolicy<any> | FieldReadFunction<any>,
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	resolved_at?: FieldPolicy<any> | FieldReadFunction<any>,
	status?: FieldPolicy<any> | FieldReadFunction<any>,
	transaction_hash?: FieldPolicy<any> | FieldReadFunction<any>,
	updated_at?: FieldPolicy<any> | FieldReadFunction<any>
};
export type LightsparkNodeKeySpecifier = ('addresses' | 'alias' | 'bitcoin_network' | 'blockchain_balance' | 'channel_from_point' | 'channels' | 'color' | 'conductivity' | 'created_at' | 'display_name' | 'encrypted_admin_macaroon' | 'encrypted_signing_private_key' | 'encryption_public_key' | 'grpc_hostname' | 'id' | 'local_balance' | 'name' | 'public_key' | 'purpose' | 'remote_balance' | 'rest_url' | 'status' | 'updated_at' | 'upgrade_available' | LightsparkNodeKeySpecifier)[];
export type LightsparkNodeFieldPolicy = {
	addresses?: FieldPolicy<any> | FieldReadFunction<any>,
	alias?: FieldPolicy<any> | FieldReadFunction<any>,
	bitcoin_network?: FieldPolicy<any> | FieldReadFunction<any>,
	blockchain_balance?: FieldPolicy<any> | FieldReadFunction<any>,
	channel_from_point?: FieldPolicy<any> | FieldReadFunction<any>,
	channels?: FieldPolicy<any> | FieldReadFunction<any>,
	color?: FieldPolicy<any> | FieldReadFunction<any>,
	conductivity?: FieldPolicy<any> | FieldReadFunction<any>,
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	display_name?: FieldPolicy<any> | FieldReadFunction<any>,
	encrypted_admin_macaroon?: FieldPolicy<any> | FieldReadFunction<any>,
	encrypted_signing_private_key?: FieldPolicy<any> | FieldReadFunction<any>,
	encryption_public_key?: FieldPolicy<any> | FieldReadFunction<any>,
	grpc_hostname?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	local_balance?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	public_key?: FieldPolicy<any> | FieldReadFunction<any>,
	purpose?: FieldPolicy<any> | FieldReadFunction<any>,
	remote_balance?: FieldPolicy<any> | FieldReadFunction<any>,
	rest_url?: FieldPolicy<any> | FieldReadFunction<any>,
	status?: FieldPolicy<any> | FieldReadFunction<any>,
	updated_at?: FieldPolicy<any> | FieldReadFunction<any>,
	upgrade_available?: FieldPolicy<any> | FieldReadFunction<any>
};
export type LightsparkNodeToChannelEdgeKeySpecifier = ('entity' | LightsparkNodeToChannelEdgeKeySpecifier)[];
export type LightsparkNodeToChannelEdgeFieldPolicy = {
	entity?: FieldPolicy<any> | FieldReadFunction<any>
};
export type LightsparkNodeToChannelsConnectionKeySpecifier = ('count' | 'edges' | 'page_info' | LightsparkNodeToChannelsConnectionKeySpecifier)[];
export type LightsparkNodeToChannelsConnectionFieldPolicy = {
	count?: FieldPolicy<any> | FieldReadFunction<any>,
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	page_info?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MutationKeySpecifier = ('create_invoice' | 'create_node_wallet_address' | 'fund_node' | 'pay_invoice' | 'withdraw_funds' | MutationKeySpecifier)[];
export type MutationFieldPolicy = {
	create_invoice?: FieldPolicy<any> | FieldReadFunction<any>,
	create_node_wallet_address?: FieldPolicy<any> | FieldReadFunction<any>,
	fund_node?: FieldPolicy<any> | FieldReadFunction<any>,
	pay_invoice?: FieldPolicy<any> | FieldReadFunction<any>,
	withdraw_funds?: FieldPolicy<any> | FieldReadFunction<any>
};
export type NodeKeySpecifier = ('addresses' | 'alias' | 'bitcoin_network' | 'color' | 'conductivity' | 'created_at' | 'display_name' | 'id' | 'public_key' | 'updated_at' | NodeKeySpecifier)[];
export type NodeFieldPolicy = {
	addresses?: FieldPolicy<any> | FieldReadFunction<any>,
	alias?: FieldPolicy<any> | FieldReadFunction<any>,
	bitcoin_network?: FieldPolicy<any> | FieldReadFunction<any>,
	color?: FieldPolicy<any> | FieldReadFunction<any>,
	conductivity?: FieldPolicy<any> | FieldReadFunction<any>,
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	display_name?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	public_key?: FieldPolicy<any> | FieldReadFunction<any>,
	updated_at?: FieldPolicy<any> | FieldReadFunction<any>
};
export type NodeAddressKeySpecifier = ('address' | 'type' | NodeAddressKeySpecifier)[];
export type NodeAddressFieldPolicy = {
	address?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>
};
export type NodeToAddressEdgeKeySpecifier = ('entity' | NodeToAddressEdgeKeySpecifier)[];
export type NodeToAddressEdgeFieldPolicy = {
	entity?: FieldPolicy<any> | FieldReadFunction<any>
};
export type NodeToAddressesConnectionKeySpecifier = ('count' | 'edges' | NodeToAddressesConnectionKeySpecifier)[];
export type NodeToAddressesConnectionFieldPolicy = {
	count?: FieldPolicy<any> | FieldReadFunction<any>,
	edges?: FieldPolicy<any> | FieldReadFunction<any>
};
export type OnChainTransactionKeySpecifier = ('amount' | 'block_hash' | 'block_height' | 'created_at' | 'destination_addresses' | 'fees' | 'id' | 'num_confirmations' | 'resolved_at' | 'status' | 'transaction_hash' | 'updated_at' | OnChainTransactionKeySpecifier)[];
export type OnChainTransactionFieldPolicy = {
	amount?: FieldPolicy<any> | FieldReadFunction<any>,
	block_hash?: FieldPolicy<any> | FieldReadFunction<any>,
	block_height?: FieldPolicy<any> | FieldReadFunction<any>,
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	destination_addresses?: FieldPolicy<any> | FieldReadFunction<any>,
	fees?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	num_confirmations?: FieldPolicy<any> | FieldReadFunction<any>,
	resolved_at?: FieldPolicy<any> | FieldReadFunction<any>,
	status?: FieldPolicy<any> | FieldReadFunction<any>,
	transaction_hash?: FieldPolicy<any> | FieldReadFunction<any>,
	updated_at?: FieldPolicy<any> | FieldReadFunction<any>
};
export type OutgoingPaymentKeySpecifier = ('amount' | 'attempts' | 'created_at' | 'destination' | 'failure_message' | 'failure_reason' | 'fees' | 'id' | 'origin' | 'payment_request_data' | 'resolved_at' | 'status' | 'transaction_hash' | 'updated_at' | OutgoingPaymentKeySpecifier)[];
export type OutgoingPaymentFieldPolicy = {
	amount?: FieldPolicy<any> | FieldReadFunction<any>,
	attempts?: FieldPolicy<any> | FieldReadFunction<any>,
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	destination?: FieldPolicy<any> | FieldReadFunction<any>,
	failure_message?: FieldPolicy<any> | FieldReadFunction<any>,
	failure_reason?: FieldPolicy<any> | FieldReadFunction<any>,
	fees?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	origin?: FieldPolicy<any> | FieldReadFunction<any>,
	payment_request_data?: FieldPolicy<any> | FieldReadFunction<any>,
	resolved_at?: FieldPolicy<any> | FieldReadFunction<any>,
	status?: FieldPolicy<any> | FieldReadFunction<any>,
	transaction_hash?: FieldPolicy<any> | FieldReadFunction<any>,
	updated_at?: FieldPolicy<any> | FieldReadFunction<any>
};
export type OutgoingPaymentAttemptKeySpecifier = ('amount' | 'created_at' | 'fees' | 'hops' | 'id' | 'outgoing_payment' | 'resolved_at' | 'status' | 'updated_at' | OutgoingPaymentAttemptKeySpecifier)[];
export type OutgoingPaymentAttemptFieldPolicy = {
	amount?: FieldPolicy<any> | FieldReadFunction<any>,
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	fees?: FieldPolicy<any> | FieldReadFunction<any>,
	hops?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	outgoing_payment?: FieldPolicy<any> | FieldReadFunction<any>,
	resolved_at?: FieldPolicy<any> | FieldReadFunction<any>,
	status?: FieldPolicy<any> | FieldReadFunction<any>,
	updated_at?: FieldPolicy<any> | FieldReadFunction<any>
};
export type OutgoingPaymentAttemptToHopEdgeKeySpecifier = ('entity' | OutgoingPaymentAttemptToHopEdgeKeySpecifier)[];
export type OutgoingPaymentAttemptToHopEdgeFieldPolicy = {
	entity?: FieldPolicy<any> | FieldReadFunction<any>
};
export type OutgoingPaymentAttemptToHopsConnectionKeySpecifier = ('count' | 'edges' | OutgoingPaymentAttemptToHopsConnectionKeySpecifier)[];
export type OutgoingPaymentAttemptToHopsConnectionFieldPolicy = {
	count?: FieldPolicy<any> | FieldReadFunction<any>,
	edges?: FieldPolicy<any> | FieldReadFunction<any>
};
export type OutgoingPaymentToAttemptEdgeKeySpecifier = ('entity' | OutgoingPaymentToAttemptEdgeKeySpecifier)[];
export type OutgoingPaymentToAttemptEdgeFieldPolicy = {
	entity?: FieldPolicy<any> | FieldReadFunction<any>
};
export type OutgoingPaymentToAttemptsConnectionKeySpecifier = ('count' | 'edges' | OutgoingPaymentToAttemptsConnectionKeySpecifier)[];
export type OutgoingPaymentToAttemptsConnectionFieldPolicy = {
	count?: FieldPolicy<any> | FieldReadFunction<any>,
	edges?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PageInfoKeySpecifier = ('end_cursor' | 'has_next_page' | 'has_previous_page' | 'start_cursor' | PageInfoKeySpecifier)[];
export type PageInfoFieldPolicy = {
	end_cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	has_next_page?: FieldPolicy<any> | FieldReadFunction<any>,
	has_previous_page?: FieldPolicy<any> | FieldReadFunction<any>,
	start_cursor?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PayInvoiceOutputKeySpecifier = ('payment' | PayInvoiceOutputKeySpecifier)[];
export type PayInvoiceOutputFieldPolicy = {
	payment?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PaymentRequestKeySpecifier = ('created_at' | 'data' | 'id' | 'updated_at' | PaymentRequestKeySpecifier)[];
export type PaymentRequestFieldPolicy = {
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	data?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	updated_at?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PaymentRequestDataKeySpecifier = ('bitcoin_network' | 'encoded_payment_request' | PaymentRequestDataKeySpecifier)[];
export type PaymentRequestDataFieldPolicy = {
	bitcoin_network?: FieldPolicy<any> | FieldReadFunction<any>,
	encoded_payment_request?: FieldPolicy<any> | FieldReadFunction<any>
};
export type QueryKeySpecifier = ('current_account' | 'decoded_payment_request' | 'entity' | 'fee_estimate' | QueryKeySpecifier)[];
export type QueryFieldPolicy = {
	current_account?: FieldPolicy<any> | FieldReadFunction<any>,
	decoded_payment_request?: FieldPolicy<any> | FieldReadFunction<any>,
	entity?: FieldPolicy<any> | FieldReadFunction<any>,
	fee_estimate?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RichTextKeySpecifier = ('text' | RichTextKeySpecifier)[];
export type RichTextFieldPolicy = {
	text?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RoutingTransactionKeySpecifier = ('amount' | 'created_at' | 'failure_message' | 'failure_reason' | 'fees' | 'id' | 'incoming_channel' | 'outgoing_channel' | 'resolved_at' | 'status' | 'transaction_hash' | 'updated_at' | RoutingTransactionKeySpecifier)[];
export type RoutingTransactionFieldPolicy = {
	amount?: FieldPolicy<any> | FieldReadFunction<any>,
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	failure_message?: FieldPolicy<any> | FieldReadFunction<any>,
	failure_reason?: FieldPolicy<any> | FieldReadFunction<any>,
	fees?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	incoming_channel?: FieldPolicy<any> | FieldReadFunction<any>,
	outgoing_channel?: FieldPolicy<any> | FieldReadFunction<any>,
	resolved_at?: FieldPolicy<any> | FieldReadFunction<any>,
	status?: FieldPolicy<any> | FieldReadFunction<any>,
	transaction_hash?: FieldPolicy<any> | FieldReadFunction<any>,
	updated_at?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SecretKeySpecifier = ('cipher' | 'encrypted_value' | SecretKeySpecifier)[];
export type SecretFieldPolicy = {
	cipher?: FieldPolicy<any> | FieldReadFunction<any>,
	encrypted_value?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TransactionKeySpecifier = ('amount' | 'created_at' | 'id' | 'resolved_at' | 'status' | 'transaction_hash' | 'updated_at' | TransactionKeySpecifier)[];
export type TransactionFieldPolicy = {
	amount?: FieldPolicy<any> | FieldReadFunction<any>,
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	resolved_at?: FieldPolicy<any> | FieldReadFunction<any>,
	status?: FieldPolicy<any> | FieldReadFunction<any>,
	transaction_hash?: FieldPolicy<any> | FieldReadFunction<any>,
	updated_at?: FieldPolicy<any> | FieldReadFunction<any>
};
export type WebhooksSettingsKeySpecifier = ('events' | 'secret' | 'url' | WebhooksSettingsKeySpecifier)[];
export type WebhooksSettingsFieldPolicy = {
	events?: FieldPolicy<any> | FieldReadFunction<any>,
	secret?: FieldPolicy<any> | FieldReadFunction<any>,
	url?: FieldPolicy<any> | FieldReadFunction<any>
};
export type WithdrawFundsOutputKeySpecifier = ('transaction' | WithdrawFundsOutputKeySpecifier)[];
export type WithdrawFundsOutputFieldPolicy = {
	transaction?: FieldPolicy<any> | FieldReadFunction<any>
};
export type WithdrawalKeySpecifier = ('amount' | 'block_hash' | 'block_height' | 'created_at' | 'destination_addresses' | 'fees' | 'id' | 'num_confirmations' | 'origin' | 'resolved_at' | 'status' | 'transaction_hash' | 'updated_at' | WithdrawalKeySpecifier)[];
export type WithdrawalFieldPolicy = {
	amount?: FieldPolicy<any> | FieldReadFunction<any>,
	block_hash?: FieldPolicy<any> | FieldReadFunction<any>,
	block_height?: FieldPolicy<any> | FieldReadFunction<any>,
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	destination_addresses?: FieldPolicy<any> | FieldReadFunction<any>,
	fees?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	num_confirmations?: FieldPolicy<any> | FieldReadFunction<any>,
	origin?: FieldPolicy<any> | FieldReadFunction<any>,
	resolved_at?: FieldPolicy<any> | FieldReadFunction<any>,
	status?: FieldPolicy<any> | FieldReadFunction<any>,
	transaction_hash?: FieldPolicy<any> | FieldReadFunction<any>,
	updated_at?: FieldPolicy<any> | FieldReadFunction<any>
};
export type StrictTypedTypePolicies = {
	Account?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AccountKeySpecifier | (() => undefined | AccountKeySpecifier),
		fields?: AccountFieldPolicy,
	},
	AccountToApiTokenEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AccountToApiTokenEdgeKeySpecifier | (() => undefined | AccountToApiTokenEdgeKeySpecifier),
		fields?: AccountToApiTokenEdgeFieldPolicy,
	},
	AccountToApiTokensConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AccountToApiTokensConnectionKeySpecifier | (() => undefined | AccountToApiTokensConnectionKeySpecifier),
		fields?: AccountToApiTokensConnectionFieldPolicy,
	},
	AccountToChannelEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AccountToChannelEdgeKeySpecifier | (() => undefined | AccountToChannelEdgeKeySpecifier),
		fields?: AccountToChannelEdgeFieldPolicy,
	},
	AccountToChannelsConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AccountToChannelsConnectionKeySpecifier | (() => undefined | AccountToChannelsConnectionKeySpecifier),
		fields?: AccountToChannelsConnectionFieldPolicy,
	},
	AccountToNodeEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AccountToNodeEdgeKeySpecifier | (() => undefined | AccountToNodeEdgeKeySpecifier),
		fields?: AccountToNodeEdgeFieldPolicy,
	},
	AccountToNodesConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AccountToNodesConnectionKeySpecifier | (() => undefined | AccountToNodesConnectionKeySpecifier),
		fields?: AccountToNodesConnectionFieldPolicy,
	},
	AccountToTransactionEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AccountToTransactionEdgeKeySpecifier | (() => undefined | AccountToTransactionEdgeKeySpecifier),
		fields?: AccountToTransactionEdgeFieldPolicy,
	},
	AccountToTransactionsConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AccountToTransactionsConnectionKeySpecifier | (() => undefined | AccountToTransactionsConnectionKeySpecifier),
		fields?: AccountToTransactionsConnectionFieldPolicy,
	},
	ApiToken?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ApiTokenKeySpecifier | (() => undefined | ApiTokenKeySpecifier),
		fields?: ApiTokenFieldPolicy,
	},
	BlockchainBalance?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | BlockchainBalanceKeySpecifier | (() => undefined | BlockchainBalanceKeySpecifier),
		fields?: BlockchainBalanceFieldPolicy,
	},
	Channel?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ChannelKeySpecifier | (() => undefined | ChannelKeySpecifier),
		fields?: ChannelFieldPolicy,
	},
	ChannelClosingTransaction?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ChannelClosingTransactionKeySpecifier | (() => undefined | ChannelClosingTransactionKeySpecifier),
		fields?: ChannelClosingTransactionFieldPolicy,
	},
	ChannelFees?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ChannelFeesKeySpecifier | (() => undefined | ChannelFeesKeySpecifier),
		fields?: ChannelFeesFieldPolicy,
	},
	ChannelOpeningTransaction?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ChannelOpeningTransactionKeySpecifier | (() => undefined | ChannelOpeningTransactionKeySpecifier),
		fields?: ChannelOpeningTransactionFieldPolicy,
	},
	ChannelToTransactionsConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ChannelToTransactionsConnectionKeySpecifier | (() => undefined | ChannelToTransactionsConnectionKeySpecifier),
		fields?: ChannelToTransactionsConnectionFieldPolicy,
	},
	CreateInvoiceOutput?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CreateInvoiceOutputKeySpecifier | (() => undefined | CreateInvoiceOutputKeySpecifier),
		fields?: CreateInvoiceOutputFieldPolicy,
	},
	CreateNodeWalletAddressOutput?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CreateNodeWalletAddressOutputKeySpecifier | (() => undefined | CreateNodeWalletAddressOutputKeySpecifier),
		fields?: CreateNodeWalletAddressOutputFieldPolicy,
	},
	CurrencyAmount?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CurrencyAmountKeySpecifier | (() => undefined | CurrencyAmountKeySpecifier),
		fields?: CurrencyAmountFieldPolicy,
	},
	Deposit?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DepositKeySpecifier | (() => undefined | DepositKeySpecifier),
		fields?: DepositFieldPolicy,
	},
	Entity?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | EntityKeySpecifier | (() => undefined | EntityKeySpecifier),
		fields?: EntityFieldPolicy,
	},
	FeeEstimate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | FeeEstimateKeySpecifier | (() => undefined | FeeEstimateKeySpecifier),
		fields?: FeeEstimateFieldPolicy,
	},
	FundNodeOutput?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | FundNodeOutputKeySpecifier | (() => undefined | FundNodeOutputKeySpecifier),
		fields?: FundNodeOutputFieldPolicy,
	},
	GraphNode?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | GraphNodeKeySpecifier | (() => undefined | GraphNodeKeySpecifier),
		fields?: GraphNodeFieldPolicy,
	},
	Hop?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | HopKeySpecifier | (() => undefined | HopKeySpecifier),
		fields?: HopFieldPolicy,
	},
	IncomingPayment?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | IncomingPaymentKeySpecifier | (() => undefined | IncomingPaymentKeySpecifier),
		fields?: IncomingPaymentFieldPolicy,
	},
	IncomingPaymentAttempt?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | IncomingPaymentAttemptKeySpecifier | (() => undefined | IncomingPaymentAttemptKeySpecifier),
		fields?: IncomingPaymentAttemptFieldPolicy,
	},
	IncomingPaymentToAttemptEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | IncomingPaymentToAttemptEdgeKeySpecifier | (() => undefined | IncomingPaymentToAttemptEdgeKeySpecifier),
		fields?: IncomingPaymentToAttemptEdgeFieldPolicy,
	},
	IncomingPaymentToAttemptsConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | IncomingPaymentToAttemptsConnectionKeySpecifier | (() => undefined | IncomingPaymentToAttemptsConnectionKeySpecifier),
		fields?: IncomingPaymentToAttemptsConnectionFieldPolicy,
	},
	Invoice?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | InvoiceKeySpecifier | (() => undefined | InvoiceKeySpecifier),
		fields?: InvoiceFieldPolicy,
	},
	InvoiceData?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | InvoiceDataKeySpecifier | (() => undefined | InvoiceDataKeySpecifier),
		fields?: InvoiceDataFieldPolicy,
	},
	Key?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | KeyKeySpecifier | (() => undefined | KeyKeySpecifier),
		fields?: KeyFieldPolicy,
	},
	LightningTransaction?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | LightningTransactionKeySpecifier | (() => undefined | LightningTransactionKeySpecifier),
		fields?: LightningTransactionFieldPolicy,
	},
	LightsparkNode?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | LightsparkNodeKeySpecifier | (() => undefined | LightsparkNodeKeySpecifier),
		fields?: LightsparkNodeFieldPolicy,
	},
	LightsparkNodeToChannelEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | LightsparkNodeToChannelEdgeKeySpecifier | (() => undefined | LightsparkNodeToChannelEdgeKeySpecifier),
		fields?: LightsparkNodeToChannelEdgeFieldPolicy,
	},
	LightsparkNodeToChannelsConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | LightsparkNodeToChannelsConnectionKeySpecifier | (() => undefined | LightsparkNodeToChannelsConnectionKeySpecifier),
		fields?: LightsparkNodeToChannelsConnectionFieldPolicy,
	},
	Mutation?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MutationKeySpecifier | (() => undefined | MutationKeySpecifier),
		fields?: MutationFieldPolicy,
	},
	Node?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | NodeKeySpecifier | (() => undefined | NodeKeySpecifier),
		fields?: NodeFieldPolicy,
	},
	NodeAddress?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | NodeAddressKeySpecifier | (() => undefined | NodeAddressKeySpecifier),
		fields?: NodeAddressFieldPolicy,
	},
	NodeToAddressEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | NodeToAddressEdgeKeySpecifier | (() => undefined | NodeToAddressEdgeKeySpecifier),
		fields?: NodeToAddressEdgeFieldPolicy,
	},
	NodeToAddressesConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | NodeToAddressesConnectionKeySpecifier | (() => undefined | NodeToAddressesConnectionKeySpecifier),
		fields?: NodeToAddressesConnectionFieldPolicy,
	},
	OnChainTransaction?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | OnChainTransactionKeySpecifier | (() => undefined | OnChainTransactionKeySpecifier),
		fields?: OnChainTransactionFieldPolicy,
	},
	OutgoingPayment?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | OutgoingPaymentKeySpecifier | (() => undefined | OutgoingPaymentKeySpecifier),
		fields?: OutgoingPaymentFieldPolicy,
	},
	OutgoingPaymentAttempt?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | OutgoingPaymentAttemptKeySpecifier | (() => undefined | OutgoingPaymentAttemptKeySpecifier),
		fields?: OutgoingPaymentAttemptFieldPolicy,
	},
	OutgoingPaymentAttemptToHopEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | OutgoingPaymentAttemptToHopEdgeKeySpecifier | (() => undefined | OutgoingPaymentAttemptToHopEdgeKeySpecifier),
		fields?: OutgoingPaymentAttemptToHopEdgeFieldPolicy,
	},
	OutgoingPaymentAttemptToHopsConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | OutgoingPaymentAttemptToHopsConnectionKeySpecifier | (() => undefined | OutgoingPaymentAttemptToHopsConnectionKeySpecifier),
		fields?: OutgoingPaymentAttemptToHopsConnectionFieldPolicy,
	},
	OutgoingPaymentToAttemptEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | OutgoingPaymentToAttemptEdgeKeySpecifier | (() => undefined | OutgoingPaymentToAttemptEdgeKeySpecifier),
		fields?: OutgoingPaymentToAttemptEdgeFieldPolicy,
	},
	OutgoingPaymentToAttemptsConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | OutgoingPaymentToAttemptsConnectionKeySpecifier | (() => undefined | OutgoingPaymentToAttemptsConnectionKeySpecifier),
		fields?: OutgoingPaymentToAttemptsConnectionFieldPolicy,
	},
	PageInfo?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PageInfoKeySpecifier | (() => undefined | PageInfoKeySpecifier),
		fields?: PageInfoFieldPolicy,
	},
	PayInvoiceOutput?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PayInvoiceOutputKeySpecifier | (() => undefined | PayInvoiceOutputKeySpecifier),
		fields?: PayInvoiceOutputFieldPolicy,
	},
	PaymentRequest?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PaymentRequestKeySpecifier | (() => undefined | PaymentRequestKeySpecifier),
		fields?: PaymentRequestFieldPolicy,
	},
	PaymentRequestData?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PaymentRequestDataKeySpecifier | (() => undefined | PaymentRequestDataKeySpecifier),
		fields?: PaymentRequestDataFieldPolicy,
	},
	Query?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | QueryKeySpecifier | (() => undefined | QueryKeySpecifier),
		fields?: QueryFieldPolicy,
	},
	RichText?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RichTextKeySpecifier | (() => undefined | RichTextKeySpecifier),
		fields?: RichTextFieldPolicy,
	},
	RoutingTransaction?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RoutingTransactionKeySpecifier | (() => undefined | RoutingTransactionKeySpecifier),
		fields?: RoutingTransactionFieldPolicy,
	},
	Secret?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SecretKeySpecifier | (() => undefined | SecretKeySpecifier),
		fields?: SecretFieldPolicy,
	},
	Transaction?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TransactionKeySpecifier | (() => undefined | TransactionKeySpecifier),
		fields?: TransactionFieldPolicy,
	},
	WebhooksSettings?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | WebhooksSettingsKeySpecifier | (() => undefined | WebhooksSettingsKeySpecifier),
		fields?: WebhooksSettingsFieldPolicy,
	},
	WithdrawFundsOutput?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | WithdrawFundsOutputKeySpecifier | (() => undefined | WithdrawFundsOutputKeySpecifier),
		fields?: WithdrawFundsOutputFieldPolicy,
	},
	Withdrawal?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | WithdrawalKeySpecifier | (() => undefined | WithdrawalKeySpecifier),
		fields?: WithdrawalFieldPolicy,
	}
};
export type TypedTypePolicies = StrictTypedTypePolicies & TypePolicies;