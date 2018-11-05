export interface Orderbook {
    bids: [string, string][];
    asks: [string, string][];
}
export interface OrderbookQueryString {
    level?: OrderbookQueryStringLevel;
}
export declare type OrderbookQueryStringLevel = 1 | 2 | 3;
