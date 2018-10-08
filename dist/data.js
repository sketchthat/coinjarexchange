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
        this.common = new common_1.default(sandbox, 'data');
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
exports.default = Data;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9kYXRhLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQ0FBOEI7QUFPOUIsTUFBTSxJQUFJO0lBR1IsWUFDRSxPQUFpQjtRQUVqQixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksZ0JBQU0sQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDNUMsQ0FBQztJQUVZLGdCQUFnQixDQUFDLEVBQVU7O1lBQ3RDLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxZQUFZLEVBQUUsU0FBUyxDQUFDLENBQUM7UUFDcEUsQ0FBQztLQUFBO0lBRVksU0FBUyxDQUFDLEVBQVUsRUFBRSxFQUFxQjs7WUFDdEQsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDeEUsQ0FBQztLQUFBO0lBRVksWUFBWSxDQUFDLEVBQVUsRUFBRSxFQUF5Qjs7WUFDN0QsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLFlBQVksRUFBRSxPQUFPLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDdEUsQ0FBQztLQUFBO0lBRVksVUFBVSxDQUFDLEVBQVUsRUFBRSxFQUFzQjs7WUFDeEQsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLFlBQVksRUFBRSxVQUFVLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDekUsQ0FBQztLQUFBO0lBRVksY0FBYyxDQUFDLEVBQVUsRUFBRSxFQUEyQjs7WUFDakUsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLFlBQVksRUFBRSxRQUFRLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDdkUsQ0FBQztLQUFBO0NBQ0Y7QUFFRCxrQkFBZSxJQUFJLENBQUMifQ==