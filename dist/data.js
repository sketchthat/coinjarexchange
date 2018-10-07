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
        this.common = new common_1.Common(sandbox, 'data');
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9kYXRhLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQ0FBa0M7QUFPbEM7SUFHRSxZQUNFLE9BQWlCO1FBRWpCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxlQUFNLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFFWSxnQkFBZ0IsQ0FBQyxFQUFVOztZQUN0QyxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsWUFBWSxFQUFFLFNBQVMsQ0FBQyxDQUFDO1FBQ3BFLENBQUM7S0FBQTtJQUVZLFNBQVMsQ0FBQyxFQUFVLEVBQUUsRUFBcUI7O1lBQ3RELE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ3hFLENBQUM7S0FBQTtJQUVZLFlBQVksQ0FBQyxFQUFVLEVBQUUsRUFBeUI7O1lBQzdELE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxZQUFZLEVBQUUsT0FBTyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ3RFLENBQUM7S0FBQTtJQUVZLFVBQVUsQ0FBQyxFQUFVLEVBQUUsRUFBc0I7O1lBQ3hELE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxZQUFZLEVBQUUsVUFBVSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ3pFLENBQUM7S0FBQTtJQUVZLGNBQWMsQ0FBQyxFQUFVLEVBQUUsRUFBMkI7O1lBQ2pFLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxZQUFZLEVBQUUsUUFBUSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ3ZFLENBQUM7S0FBQTtDQUNGO0FBNUJELG9CQTRCQyJ9