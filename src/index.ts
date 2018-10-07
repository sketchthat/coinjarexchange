import { Data } from './data';
import { Trading } from './trading';

export class CoinJarExchange {
  private dataClass: Data;
  private tradingClass: Trading;

  constructor(
    token?: string,
    sandbox?: boolean,
  ) {
    this.dataClass = new Data(sandbox);
    this.tradingClass = new Trading(token, sandbox);
  }

  public data() {
    return this.dataClass;
  }

  public trading() {
    return this.tradingClass;
  }
}
