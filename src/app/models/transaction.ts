export interface Transaction {
  id: string;
  blockNumber: string;
  hash: string;
  blockHash: string;
  transactionIndex: number;
  from: string;
  to: string;
  value: string;
  gasLimit: string;
  gasUsed: string;
  maxFeePerGas: string;
  maxPriorityFeePerGas: string;
  nonce: string;
}
