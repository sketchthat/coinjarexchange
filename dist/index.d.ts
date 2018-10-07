import { Data } from './data';
import { Trading } from './trading';
export declare class CoinJarExchange {
    private dataClass;
    private tradingClass;
    constructor(token?: string, sandbox?: boolean);
    data(): Data;
    trading(): Trading;
}
