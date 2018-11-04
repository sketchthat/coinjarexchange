export interface CandlesQueryString {
  before: number;
  after: number;
  interval: CandlesQueryStringInterval;
}

export type CandlesQueryStringInterval = '1m' | '5m' | '15m' | '30m' | '1h' | '4h' | '8h' | '1d' | '1w';
