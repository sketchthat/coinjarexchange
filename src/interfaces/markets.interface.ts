export interface MarketStats {
  vwap: Stats;
  volume: Stats;
  total: Stats;
  time: string;
}

export interface Stats {
  '1w': string;
  '1h': string;
  '1d': string;
}

export interface MarketStatsQueryString {
  at?: number;
}
