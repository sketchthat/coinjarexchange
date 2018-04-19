"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("./common");
class Data {
    constructor(sandbox) {
        this.common = new common_1.Common(sandbox ? `https://data.exchange.coinjar-sandbox.com` : `https://data.exchange.coinjar.com`);
    }
    getProductTicker(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.common.request(false, 'get', `products/${id}/ticker`);
        });
    }
    getTrades(id, qs) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.common.request(false, 'get', `products/${id}/trades`, qs);
        });
    }
    getOrderbook(id, qs) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.common.request(false, 'get', `products/${id}/book`, qs);
        });
    }
    getCandles(id, qs) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.common.request(false, 'get', `products/${id}/candles`, qs);
        });
    }
    getMarketStats(id, qs) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.common.request(false, 'get', `products/${id}/stats`, qs);
        });
    }
}
exports.Data = Data;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kYXRhLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQ0FBa0M7QUFPbEM7SUFJRSxZQUNFLE9BQWlCO1FBRWpCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxlQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQywyQ0FBMkMsQ0FBQyxDQUFDLENBQUMsbUNBQW1DLENBQUMsQ0FBQztJQUN4SCxDQUFDO0lBRVksZ0JBQWdCLENBQUMsRUFBVTs7WUFDdEMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsWUFBWSxFQUFFLFNBQVMsQ0FBQyxDQUFDO1FBQ3BFLENBQUM7S0FBQTtJQUVZLFNBQVMsQ0FBQyxFQUFVLEVBQUUsRUFBcUI7O1lBQ3RELE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDeEUsQ0FBQztLQUFBO0lBRVksWUFBWSxDQUFDLEVBQVUsRUFBRSxFQUF5Qjs7WUFDN0QsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsWUFBWSxFQUFFLE9BQU8sRUFBRSxFQUFFLENBQUMsQ0FBQztRQUN0RSxDQUFDO0tBQUE7SUFFWSxVQUFVLENBQUMsRUFBVSxFQUFFLEVBQXNCOztZQUN4RCxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxZQUFZLEVBQUUsVUFBVSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ3pFLENBQUM7S0FBQTtJQUVZLGNBQWMsQ0FBQyxFQUFVLEVBQUUsRUFBMkI7O1lBQ2pFLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLFlBQVksRUFBRSxRQUFRLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDdkUsQ0FBQztLQUFBO0NBQ0Y7QUE3QkQsb0JBNkJDIn0=