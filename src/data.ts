import { Common } from './common';
import { CandlesQueryString } from './interfaces/candles.interface';
import { MarketStats, MarketStatsQueryString } from './interfaces/markets.interface';
import { Orderbook, OrderbookQueryString } from './interfaces/orderbook.interface';
import { Product } from './interfaces/products.interface';
import { Trade, TradeQueryString } from './interfaces/trades.interface';

export class Data {
  private common: Common;

  constructor(
    sandbox?: boolean,
  ) {
    this.common = new Common(sandbox, 'data');
  }

  public async getProductTicker(id: string): Promise<Product> {
    return this.common.request(false, 'get', `products/${id}/ticker`);
  }

  public async getTrades(id: string, qs?: TradeQueryString): Promise<Trade[]> {
    return this.common.request(false, 'get', `products/${id}/trades`, qs);
  }

  public async getOrderbook(id: string, qs?: OrderbookQueryString): Promise<Orderbook> {
    return this.common.request(false, 'get', `products/${id}/book`, qs);
  }

  public async getCandles(id: string, qs: CandlesQueryString): Promise<[string, string, string, string][]> {
    return this.common.request(false, 'get', `products/${id}/candles`, qs);
  }

  public async getMarketStats(id: string, qs?: MarketStatsQueryString): Promise<MarketStats> {
    return this.common.request(false, 'get', `products/${id}/stats`, qs);
  }
}
