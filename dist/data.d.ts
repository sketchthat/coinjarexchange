import { CandlesQueryString } from './interfaces/candles.interface';
import { MarketStats, MarketStatsQueryString } from './interfaces/markets.interface';
import { Orderbook, OrderbookQueryString } from './interfaces/orderbook.interface';
import { Product } from './interfaces/products.interface';
import { Trade, TradeQueryString } from './interfaces/trades.interface';
declare class Data {
    private common;
    constructor(sandbox?: boolean);
    getProductTicker(id: string): Promise<Product>;
    getTrades(id: string, qs?: TradeQueryString): Promise<Trade[]>;
    getOrderbook(id: string, qs?: OrderbookQueryString): Promise<Orderbook>;
    getCandles(id: string, qs: CandlesQueryString): Promise<[string, string, string, string][]>;
    getMarketStats(id: string, qs?: MarketStatsQueryString): Promise<MarketStats>;
}
export default Data;
