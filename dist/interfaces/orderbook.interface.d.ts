export interface Orderbook {
    bids: [string, string][];
    asks: [string, string][];
}
export interface OrderbookQueryString {
    level?: 1 | 2 | 3;
}
