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
            return this.common.request(true, 'get', `accounts`);
        });
    }
    getAccountsExternal() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.common.request(true, 'get', `accounts/external`);
        });
    }
    getAccount(accountNumber) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.common.request(true, 'get', `accounts/${accountNumber}`);
        });
    }
    getAccountLines(accountNumber, qs) {
        return __awaiter(this, void 0, void 0, function* () {
            const resp = yield this.common.request(true, 'get', `accounts/${accountNumber}/lines`, qs, undefined, true);
            return this.common.returnCursor(resp);
        });
    }
    getFees(qs) {
        return __awaiter(this, void 0, void 0, function* () {
            const resp = yield this.common.request(true, 'get', `fee_charges`, qs, undefined, true);
            return this.common.returnCursor(resp);
        });
    }
    getFills(qs) {
        return __awaiter(this, void 0, void 0, function* () {
            const resp = yield this.common.request(true, 'get', `fills`, qs, undefined, true);
            return this.common.returnCursor(resp);
        });
    }
    getFill(tid) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.common.request(true, 'get', `fills/${tid}`);
        });
    }
    getOrders(qs) {
        return __awaiter(this, void 0, void 0, function* () {
            const resp = yield this.common.request(true, 'get', `orders`, qs, undefined, true);
            return this.common.returnCursor(resp);
        });
    }
    getOrdersAll(qs) {
        return __awaiter(this, void 0, void 0, function* () {
            const resp = yield this.common.request(true, 'get', `orders/all`, qs, undefined, true);
            return this.common.returnCursor(resp);
        });
    }
    postOrderCreate(data) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.common.request(true, 'post', `orders`, null, data);
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
            return this.common.request(true, 'get', `products`);
        });
    }
    getProduct(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.common.request(true, 'get', `products/${id}`);
        });
    }
    getTokens() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.common.request(true, 'get', `tokens`);
        });
    }
    postTokenGenerate(data) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.common.request(true, 'post', `tokens`, null, data);
        });
    }
    deleteTokenRevoke(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.common.request(true, 'delete', `tokens/${id}`);
        });
    }
    getTransfers(qs) {
        return __awaiter(this, void 0, void 0, function* () {
            const resp = yield this.common.request(true, 'get', `transfers`, qs, undefined, true);
            return this.common.returnCursor(resp);
        });
    }
    postTransfersCreate(data) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.common.request(true, 'post', `transfers`, null, data);
        });
    }
    getUser() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.common.request(true, 'get', `users/current`);
        });
    }
    patchUpdateUser(data) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.common.request(true, 'patch', `users/current`, null, data);
        });
    }
}
exports.Trading = Trading;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhZGluZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy90cmFkaW5nLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQ0FBa0M7QUFVbEM7SUFHRSxZQUNFLEtBQWEsRUFDYixPQUFpQjtRQUVqQixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksZUFBTSxDQUFDLE9BQU8sRUFBRSxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDbEQsQ0FBQztJQUVZLFdBQVc7O1lBQ3RCLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxVQUFVLENBQUMsQ0FBQztRQUN0RCxDQUFDO0tBQUE7SUFFWSxtQkFBbUI7O1lBQzlCLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxtQkFBbUIsQ0FBQyxDQUFDO1FBQy9ELENBQUM7S0FBQTtJQUVZLFVBQVUsQ0FBQyxhQUFxQjs7WUFDM0MsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLFlBQVksYUFBYSxFQUFFLENBQUMsQ0FBQztRQUN2RSxDQUFDO0tBQUE7SUFFWSxlQUFlLENBQUMsYUFBcUIsRUFBRSxFQUEyQjs7WUFDN0UsTUFBTSxJQUFJLEdBQUcsTUFBTSxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLFlBQVksYUFBYSxRQUFRLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSxJQUFJLENBQUMsQ0FBQztZQUU1RyxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3hDLENBQUM7S0FBQTtJQUVZLE9BQU8sQ0FBQyxFQUFtQjs7WUFDdEMsTUFBTSxJQUFJLEdBQUcsTUFBTSxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLGFBQWEsRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFFLElBQUksQ0FBQyxDQUFDO1lBRXhGLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDeEMsQ0FBQztLQUFBO0lBRVksUUFBUSxDQUFDLEVBQW9COztZQUN4QyxNQUFNLElBQUksR0FBRyxNQUFNLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFFbEYsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN4QyxDQUFDO0tBQUE7SUFFWSxPQUFPLENBQUMsR0FBVzs7WUFDOUIsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLFNBQVMsR0FBRyxFQUFFLENBQUMsQ0FBQztRQUMxRCxDQUFDO0tBQUE7SUFFWSxTQUFTLENBQUMsRUFBcUI7O1lBQzFDLE1BQU0sSUFBSSxHQUFHLE1BQU0sSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSxJQUFJLENBQUMsQ0FBQztZQUVuRixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3hDLENBQUM7S0FBQTtJQUVZLFlBQVksQ0FBQyxFQUFxQjs7WUFDN0MsTUFBTSxJQUFJLEdBQUcsTUFBTSxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLFlBQVksRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFFLElBQUksQ0FBQyxDQUFDO1lBRXZGLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDeEMsQ0FBQztLQUFBO0lBRVksZUFBZSxDQUFDLElBQWlCOztZQUM1QyxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNqRSxDQUFDO0tBQUE7SUFFWSxRQUFRLENBQUMsR0FBVzs7WUFDL0IsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLFVBQVUsR0FBRyxFQUFFLENBQUMsQ0FBQztRQUMzRCxDQUFDO0tBQUE7SUFFWSxpQkFBaUIsQ0FBQyxHQUFXOztZQUN4QyxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxRQUFRLEVBQUUsVUFBVSxHQUFHLEVBQUUsQ0FBQyxDQUFDO1FBQzlELENBQUM7S0FBQTtJQUVZLFdBQVc7O1lBQ3RCLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxVQUFVLENBQUMsQ0FBQztRQUN0RCxDQUFDO0tBQUE7SUFFWSxVQUFVLENBQUMsRUFBVTs7WUFDaEMsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLFlBQVksRUFBRSxFQUFFLENBQUMsQ0FBQztRQUM1RCxDQUFDO0tBQUE7SUFFWSxTQUFTOztZQUNwQixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDcEQsQ0FBQztLQUFBO0lBRVksaUJBQWlCLENBQUMsSUFBbUI7O1lBQ2hELE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ2pFLENBQUM7S0FBQTtJQUVZLGlCQUFpQixDQUFDLEVBQVU7O1lBQ3ZDLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLFFBQVEsRUFBRSxVQUFVLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDN0QsQ0FBQztLQUFBO0lBRVksWUFBWSxDQUFDLEVBQXdCOztZQUNoRCxNQUFNLElBQUksR0FBRyxNQUFNLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFFdEYsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN4QyxDQUFDO0tBQUE7SUFFWSxtQkFBbUIsQ0FBQyxJQUFvQjs7WUFDbkQsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDcEUsQ0FBQztLQUFBO0lBRVksT0FBTzs7WUFDbEIsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLGVBQWUsQ0FBQyxDQUFDO1FBQzNELENBQUM7S0FBQTtJQUVZLGVBQWUsQ0FBQyxJQUFnQjs7WUFDM0MsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsT0FBTyxFQUFFLGVBQWUsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDekUsQ0FBQztLQUFBO0NBQ0Y7QUF6R0QsMEJBeUdDIn0=