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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxpQ0FBOEI7QUFDOUIsdUNBQW9DO0FBRXBDO0lBSUUsWUFDRSxLQUFjLEVBQ2QsT0FBaUI7UUFFakIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLFdBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNuQyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksaUJBQU8sQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDbEQsQ0FBQztJQUVNLElBQUk7UUFDVCxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUN4QixDQUFDO0lBRU0sT0FBTztRQUNaLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDO0lBQzNCLENBQUM7Q0FDRjtBQW5CRCwwQ0FtQkMifQ==