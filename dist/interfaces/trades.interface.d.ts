export interface Trade {
    value: string;
    timestamp: string;
    tid: number;
    taker_side: string;
    size: string;
    price: string;
}
export interface TradeQueryString {
    limit?: number;
    before?: number;
    after?: number;
}
