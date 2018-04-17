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
  type: 'deposit' | 'withdraw';
  account_number: string;
  counterparty_id: Transfer['counterparty_id'];
  amount: string;
}
