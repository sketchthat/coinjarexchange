import { CandlesQueryStringInterval } from './interfaces/candles.interface';
import { MarketStats } from './interfaces/markets.interface';
import { Orderbook, OrderbookQueryStringLevel } from './interfaces/orderbook.interface';
import { Product } from './interfaces/products.interface';
import { Trade } from './interfaces/trades.interface';
export declare class Data {
    private common;
    constructor(sandbox?: boolean);
    getProductTicker(id: string): Promise<Product>;
    getTrades(id: string, limit?: number, before?: number, after?: number): Promise<Trade[]>;
    getOrderbook(id: string, level?: OrderbookQueryStringLevel): Promise<Orderbook>;
    getCandles(id: string, before: number, after: number, interval: CandlesQueryStringInterval): Promise<[string, string, string, string][]>;
    getMarketStats(id: string, at?: number): Promise<MarketStats>;
}
