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
class Trading {
    constructor(token, sandbox) {
        this.common = new common_1.Common(sandbox, 'api', token);
    }
    getAccounts() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.common.request(true, 'get', 'accounts');
        });
    }
    getAccountsExternal() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.common.request(true, 'get', 'accounts/external');
        });
    }
    getAccount(accountNumber) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.common.request(true, 'get', `accounts/${accountNumber}`);
        });
    }
    getAccountLines(accountNumber, cursor) {
        return __awaiter(this, void 0, void 0, function* () {
            const qs = {
                cursor,
            };
            const resp = yield this.common.request(true, 'get', `accounts/${accountNumber}/lines`, qs, undefined, true);
            return this.common.returnCursor(resp);
        });
    }
    getFees(cursor) {
        return __awaiter(this, void 0, void 0, function* () {
            const qs = {
                cursor,
            };
            const resp = yield this.common.request(true, 'get', 'fee_charges', qs, undefined, true);
            return this.common.returnCursor(resp);
        });
    }
    getFeeStats() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.common.request(true, 'get', 'fee_charges/stats');
        });
    }
    getFills(productId, oid, cursor) {
        return __awaiter(this, void 0, void 0, function* () {
            const qs = {
                product_id: productId,
                oid,
                cursor,
            };
            const resp = yield this.common.request(true, 'get', 'fills', qs, undefined, true);
            return this.common.returnCursor(resp);
        });
    }
    getFill(tid) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.common.request(true, 'get', `fills/${tid}`);
        });
    }
    getOrders(cursor) {
        return __awaiter(this, void 0, void 0, function* () {
            const qs = {
                cursor,
            };
            const resp = yield this.common.request(true, 'get', 'orders', qs, undefined, true);
            return this.common.returnCursor(resp);
        });
    }
    getOrdersAll(cursor) {
        return __awaiter(this, void 0, void 0, function* () {
            const qs = {
                cursor,
            };
            const resp = yield this.common.request(true, 'get', 'orders/all', qs, undefined, true);
            return this.common.returnCursor(resp);
        });
    }
    postOrderCreate(productId, side, size, price, type, timeInForce) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = {
                product_id: productId,
                side,
                size,
                price,
                type,
                time_in_force: timeInForce,
            };
            return this.common.request(true, 'post', 'orders', null, data);
        });
    }
    getOrder(oid) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.common.request(true, 'get', `orders/${oid}`);
        });
    }
    deleteCancelOrder(oid) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.common.request(true, 'delete', `orders/${oid}`);
        });
    }
    getProducts() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.common.request(true, 'get', 'products');
        });
    }
    getProduct(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.common.request(true, 'get', `products/${id}`);
        });
    }
    getTokens() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.common.request(true, 'get', 'tokens');
        });
    }
    postTokenGenerate(name) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = {
                name,
            };
            return this.common.request(true, 'post', 'tokens', null, data);
        });
    }
    deleteTokenRevoke(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.common.request(true, 'delete', `tokens/${id}`);
        });
    }
    getTransfers(cursor) {
        return __awaiter(this, void 0, void 0, function* () {
            const qs = {
                cursor,
            };
            const resp = yield this.common.request(true, 'get', 'transfers', qs, undefined, true);
            return this.common.returnCursor(resp);
        });
    }
    postTransfersCreate(type, accountNumber, counterpartyId, amount) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = {
                type,
                account_number: accountNumber,
                counterparty_id: counterpartyId,
                amount,
            };
            return this.common.request(true, 'post', 'transfers', null, data);
        });
    }
    getUser() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.common.request(true, 'get', 'users/current');
        });
    }
    patchUpdateUser(homeCurrencyCode) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = {
                home_currency_code: homeCurrencyCode,
            };
            return this.common.request(true, 'patch', 'users/current', null, data);
        });
    }
}
exports.Trading = Trading;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhZGluZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy90cmFkaW5nLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQ0FBa0M7QUFtQmxDLE1BQWEsT0FBTztJQUdsQixZQUNFLEtBQWEsRUFDYixPQUFpQjtRQUVqQixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksZUFBTSxDQUFDLE9BQU8sRUFBRSxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDbEQsQ0FBQztJQUVZLFdBQVc7O1lBQ3RCLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxVQUFVLENBQUMsQ0FBQztRQUN0RCxDQUFDO0tBQUE7SUFFWSxtQkFBbUI7O1lBQzlCLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxtQkFBbUIsQ0FBQyxDQUFDO1FBQy9ELENBQUM7S0FBQTtJQUVZLFVBQVUsQ0FBQyxhQUFxQjs7WUFDM0MsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLFlBQVksYUFBYSxFQUFFLENBQUMsQ0FBQztRQUN2RSxDQUFDO0tBQUE7SUFFWSxlQUFlLENBQUMsYUFBcUIsRUFBRSxNQUFlOztZQUNqRSxNQUFNLEVBQUUsR0FBMkI7Z0JBQ2pDLE1BQU07YUFDUCxDQUFDO1lBRUYsTUFBTSxJQUFJLEdBQUcsTUFBTSxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLFlBQVksYUFBYSxRQUFRLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSxJQUFJLENBQUMsQ0FBQztZQUU1RyxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3hDLENBQUM7S0FBQTtJQUVZLE9BQU8sQ0FBQyxNQUFlOztZQUNsQyxNQUFNLEVBQUUsR0FBbUI7Z0JBQ3pCLE1BQU07YUFDUCxDQUFDO1lBRUYsTUFBTSxJQUFJLEdBQUcsTUFBTSxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLGFBQWEsRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFFLElBQUksQ0FBQyxDQUFDO1lBRXhGLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDeEMsQ0FBQztLQUFBO0lBRVksV0FBVzs7WUFDdEIsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLG1CQUFtQixDQUFDLENBQUM7UUFDL0QsQ0FBQztLQUFBO0lBRVksUUFBUSxDQUFDLFNBQWtCLEVBQUUsR0FBWSxFQUFFLE1BQWU7O1lBQ3JFLE1BQU0sRUFBRSxHQUFvQjtnQkFDMUIsVUFBVSxFQUFFLFNBQVM7Z0JBQ3JCLEdBQUc7Z0JBQ0gsTUFBTTthQUNQLENBQUM7WUFFRixNQUFNLElBQUksR0FBRyxNQUFNLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFFbEYsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN4QyxDQUFDO0tBQUE7SUFFWSxPQUFPLENBQUMsR0FBVzs7WUFDOUIsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLFNBQVMsR0FBRyxFQUFFLENBQUMsQ0FBQztRQUMxRCxDQUFDO0tBQUE7SUFFWSxTQUFTLENBQUMsTUFBZTs7WUFDcEMsTUFBTSxFQUFFLEdBQXFCO2dCQUMzQixNQUFNO2FBQ1AsQ0FBQztZQUVGLE1BQU0sSUFBSSxHQUFHLE1BQU0sSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSxJQUFJLENBQUMsQ0FBQztZQUVuRixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3hDLENBQUM7S0FBQTtJQUVZLFlBQVksQ0FBQyxNQUFlOztZQUN2QyxNQUFNLEVBQUUsR0FBcUI7Z0JBQzNCLE1BQU07YUFDUCxDQUFDO1lBRUYsTUFBTSxJQUFJLEdBQUcsTUFBTSxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLFlBQVksRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFFLElBQUksQ0FBQyxDQUFDO1lBRXZGLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDeEMsQ0FBQztLQUFBO0lBRVksZUFBZSxDQUMxQixTQUFpQixFQUNqQixJQUFxQixFQUNyQixJQUFZLEVBQ1osS0FBYSxFQUNiLElBQXFCLEVBQ3JCLFdBQW9DOztZQUVwQyxNQUFNLElBQUksR0FBZ0I7Z0JBQ3hCLFVBQVUsRUFBRSxTQUFTO2dCQUNyQixJQUFJO2dCQUNKLElBQUk7Z0JBQ0osS0FBSztnQkFDTCxJQUFJO2dCQUNKLGFBQWEsRUFBRSxXQUFXO2FBQzNCLENBQUM7WUFFRixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNqRSxDQUFDO0tBQUE7SUFFWSxRQUFRLENBQUMsR0FBVzs7WUFDL0IsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLFVBQVUsR0FBRyxFQUFFLENBQUMsQ0FBQztRQUMzRCxDQUFDO0tBQUE7SUFFWSxpQkFBaUIsQ0FBQyxHQUFXOztZQUN4QyxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxRQUFRLEVBQUUsVUFBVSxHQUFHLEVBQUUsQ0FBQyxDQUFDO1FBQzlELENBQUM7S0FBQTtJQUVZLFdBQVc7O1lBQ3RCLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxVQUFVLENBQUMsQ0FBQztRQUN0RCxDQUFDO0tBQUE7SUFFWSxVQUFVLENBQUMsRUFBVTs7WUFDaEMsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLFlBQVksRUFBRSxFQUFFLENBQUMsQ0FBQztRQUM1RCxDQUFDO0tBQUE7SUFFWSxTQUFTOztZQUNwQixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDcEQsQ0FBQztLQUFBO0lBRVksaUJBQWlCLENBQUMsSUFBWTs7WUFDekMsTUFBTSxJQUFJLEdBQWtCO2dCQUMxQixJQUFJO2FBQ0wsQ0FBQztZQUVGLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ2pFLENBQUM7S0FBQTtJQUVZLGlCQUFpQixDQUFDLEVBQVU7O1lBQ3ZDLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLFFBQVEsRUFBRSxVQUFVLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDN0QsQ0FBQztLQUFBO0lBRVksWUFBWSxDQUFDLE1BQWU7O1lBQ3ZDLE1BQU0sRUFBRSxHQUF3QjtnQkFDOUIsTUFBTTthQUNQLENBQUM7WUFFRixNQUFNLElBQUksR0FBRyxNQUFNLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFFdEYsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN4QyxDQUFDO0tBQUE7SUFFWSxtQkFBbUIsQ0FDOUIsSUFBd0IsRUFDeEIsYUFBcUIsRUFDckIsY0FBc0IsRUFDdEIsTUFBYzs7WUFFZCxNQUFNLElBQUksR0FBbUI7Z0JBQzNCLElBQUk7Z0JBQ0osY0FBYyxFQUFFLGFBQWE7Z0JBQzdCLGVBQWUsRUFBRSxjQUFjO2dCQUMvQixNQUFNO2FBQ1AsQ0FBQztZQUVGLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3BFLENBQUM7S0FBQTtJQUVZLE9BQU87O1lBQ2xCLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxlQUFlLENBQUMsQ0FBQztRQUMzRCxDQUFDO0tBQUE7SUFFWSxlQUFlLENBQUMsZ0JBQXdCOztZQUNuRCxNQUFNLElBQUksR0FBZTtnQkFDdkIsa0JBQWtCLEVBQUUsZ0JBQWdCO2FBQ3JDLENBQUM7WUFFRixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsZUFBZSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztRQUN6RSxDQUFDO0tBQUE7Q0FDRjtBQTNLRCwwQkEyS0MifQ==