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
    getTrades(id, limit, before, after) {
        return __awaiter(this, void 0, void 0, function* () {
            const qs = {
                limit,
                before,
                after,
            };
            return this.common.request(false, 'get', `products/${id}/trades`, qs);
        });
    }
    getOrderbook(id, level) {
        return __awaiter(this, void 0, void 0, function* () {
            const qs = {
                level,
            };
            return this.common.request(false, 'get', `products/${id}/book`, qs);
        });
    }
    getCandles(id, before, after, interval) {
        return __awaiter(this, void 0, void 0, function* () {
            const qs = {
                before,
                after,
                interval,
            };
            return this.common.request(false, 'get', `products/${id}/candles`, qs);
        });
    }
    getMarketStats(id, at) {
        return __awaiter(this, void 0, void 0, function* () {
            const qs = {
                at,
            };
            return this.common.request(false, 'get', `products/${id}/stats`, qs);
        });
    }
}
exports.Data = Data;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9kYXRhLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQ0FBa0M7QUFPbEMsTUFBYSxJQUFJO0lBR2YsWUFDRSxPQUFpQjtRQUVqQixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksZUFBTSxDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBRVksZ0JBQWdCLENBQUMsRUFBVTs7WUFDdEMsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLFlBQVksRUFBRSxTQUFTLENBQUMsQ0FBQztRQUNwRSxDQUFDO0tBQUE7SUFFWSxTQUFTLENBQUMsRUFBVSxFQUFFLEtBQWMsRUFBRSxNQUFlLEVBQUUsS0FBYzs7WUFDaEYsTUFBTSxFQUFFLEdBQXFCO2dCQUMzQixLQUFLO2dCQUNMLE1BQU07Z0JBQ04sS0FBSzthQUNOLENBQUM7WUFFRixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsWUFBWSxFQUFFLFNBQVMsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUN4RSxDQUFDO0tBQUE7SUFFWSxZQUFZLENBQUMsRUFBVSxFQUFFLEtBQWlDOztZQUNyRSxNQUFNLEVBQUUsR0FBeUI7Z0JBQy9CLEtBQUs7YUFDTixDQUFDO1lBRUYsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLFlBQVksRUFBRSxPQUFPLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDdEUsQ0FBQztLQUFBO0lBRVksVUFBVSxDQUNyQixFQUFVLEVBQ1YsTUFBYyxFQUNkLEtBQWEsRUFDYixRQUFvQzs7WUFFcEMsTUFBTSxFQUFFLEdBQXVCO2dCQUM3QixNQUFNO2dCQUNOLEtBQUs7Z0JBQ0wsUUFBUTthQUNULENBQUM7WUFFRixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsWUFBWSxFQUFFLFVBQVUsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUN6RSxDQUFDO0tBQUE7SUFFWSxjQUFjLENBQUMsRUFBVSxFQUFFLEVBQVc7O1lBQ2pELE1BQU0sRUFBRSxHQUEyQjtnQkFDakMsRUFBRTthQUNILENBQUM7WUFFRixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsWUFBWSxFQUFFLFFBQVEsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUN2RSxDQUFDO0tBQUE7Q0FDRjtBQXJERCxvQkFxREMifQ==