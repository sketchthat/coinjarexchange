export interface Products {
  id: string;
  name: string;
  base_currency: {
    subunit_to_unit: number;
    iso_code: string;
    name: string;
    subunit: string;
  };
  counter_currency: {
    subunit_to_unit: number;
    iso_code: string;
    name: string;
    subunit: string;
  };
  tick_value: string;
  tick_value_exponent: number;
  price_levels: {
    price_min: string;
    price_max: string;
    tick_size: string;
    tick_size_exponent: number;
    trade_size: string;
    trade_size_exponent: number;
  };
}

export interface Product {
  volume: string;
  transition_time: string;
  status: string;
  session: number;
  prev_close: string;
  last: string;
  current_time: string;
  bid: string;
  ask: string;
}
