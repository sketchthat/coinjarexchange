export interface Fee {
  date: string;
  product_id: string;
  value: string;
  fee_rate: number;
  fee: string;
  currency_code: string;
}

export interface FeeQueryString {
  cursor?: number;
}
