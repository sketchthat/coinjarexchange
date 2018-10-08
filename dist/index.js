"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_1 = require("./data");
const trading_1 = require("./trading");
class CoinJarExchange {
    constructor(token, sandbox) {
        this.dataClass = new data_1.Data(sandbox);
        this.tradingClass = new trading_1.Trading(token, sandbox);
    }
    data() {
        return this.dataClass;
    }
    trading() {
        return this.tradingClass;
    }
}
exports.CoinJarExchange = CoinJarExchange;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxpQ0FBOEI7QUFDOUIsdUNBQW9DO0FBRXBDLE1BQWEsZUFBZTtJQUkxQixZQUNFLEtBQWMsRUFDZCxPQUFpQjtRQUVqQixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksV0FBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ25DLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxpQkFBTyxDQUFDLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQztJQUNsRCxDQUFDO0lBRU0sSUFBSTtRQUNULE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUN4QixDQUFDO0lBRU0sT0FBTztRQUNaLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQztJQUMzQixDQUFDO0NBQ0Y7QUFuQkQsMENBbUJDIn0=