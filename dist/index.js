"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_1 = require("./data");
const trading_1 = require("./trading");
class CoinJarExchange {
    constructor(token, sandbox) {
        this.dataClass = new data_1.default(sandbox);
        this.tradingClass = new trading_1.default(token, sandbox);
    }
    data() {
        return this.dataClass;
    }
    trading() {
        return this.tradingClass;
    }
}
exports.default = CoinJarExchange;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxpQ0FBMEI7QUFDMUIsdUNBQWdDO0FBRWhDLE1BQU0sZUFBZTtJQUluQixZQUNFLEtBQWMsRUFDZCxPQUFpQjtRQUVqQixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksY0FBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ25DLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxpQkFBTyxDQUFDLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQztJQUNsRCxDQUFDO0lBRU0sSUFBSTtRQUNULE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUN4QixDQUFDO0lBRU0sT0FBTztRQUNaLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQztJQUMzQixDQUFDO0NBQ0Y7QUFFRCxrQkFBZSxlQUFlLENBQUMifQ==