export interface TransferResponse {
  cursor?: number;
  payload: Transfer[];
}

export interface Transfer {
  uuid: string;
  type: string;
  amount: string;
  processed_at: string;
  counterparty_type: string;
  counterparty_id: string;
  created_at: string;
}

export interface TransferQueryString {
  cursor?: number;
}

export interface TransferCreate {
  type: TransferCreateType;
  account_number: string;
  counterparty_id: string;
  amount: string;
}

export type TransferCreateType = 'deposit' | 'withdrawal';
