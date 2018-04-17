export interface Account {
  number: string;
  type: string;
  asset_code: string;
  balance: string;
  settled_balance: string;
  hold: string;
  available: string;
}

export interface AccountExternal {
  uuid: string;
  name: string;
  system_name: string;
  currency_code: string;
  current_balance: string;
}

export interface AccountLine {
  code: string;
  amount: string;
  balance: string;
  metadata: {
    tid: string;
  };
  created_at: string;
}

export interface AccountLineQueryString {
  cursor?: number;
}
