import Data from './data';
import Trading from './trading';
declare class CoinJarExchange {
    private dataClass;
    private tradingClass;
    constructor(token?: string, sandbox?: boolean);
    data(): Data;
    trading(): Trading;
}
export default CoinJarExchange;
