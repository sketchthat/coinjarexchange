import { Common } from './common';
import { CandlesQueryString, CandlesQueryStringInterval } from './interfaces/candles.interface';
import { MarketStats, MarketStatsQueryString } from './interfaces/markets.interface';
import { Orderbook, OrderbookQueryString, OrderbookQueryStringLevel } from './interfaces/orderbook.interface';
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

  public async getTrades(id: string, limit?: number, before?: number, after?: number): Promise<Trade[]> {
    const qs: TradeQueryString = {
      limit,
      before,
      after,
    };

    return this.common.request(false, 'get', `products/${id}/trades`, qs);
  }

  public async getOrderbook(id: string, level?: OrderbookQueryStringLevel): Promise<Orderbook> {
    const qs: OrderbookQueryString = {
      level,
    };

    return this.common.request(false, 'get', `products/${id}/book`, qs);
  }

  public async getCandles(id: string, before: number, after: number, interval: CandlesQueryStringInterval): Promise<[string, string, string, string][]> {
    const qs: CandlesQueryString = {
      before,
      after,
      interval,
    };

    return this.common.request(false, 'get', `products/${id}/candles`, qs);
  }

  public async getMarketStats(id: string, at?: number): Promise<MarketStats> {
    const qs: MarketStatsQueryString = {
      at,
    };

    return this.common.request(false, 'get', `products/${id}/stats`, qs);
  }
}
