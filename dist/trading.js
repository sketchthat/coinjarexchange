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
            return this.common.request(true, 'get', `accounts/${accountNumber}/lines`, qs);
        });
    }
    getFees(qs) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.common.request(true, 'get', `fee_charges`, qs);
        });
    }
    getFills(qs) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.common.request(true, 'get', `fills`, qs);
        });
    }
    getFill(tid) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.common.request(true, 'get', `fills/${tid}`);
        });
    }
    getOrders(qs) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.common.request(true, 'get', `orders`, qs);
        });
    }
    getOrdersAll(qs) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.common.request(true, 'get', `orders/all`, qs);
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
            return this.common.request(true, 'get', `transfers`, qs);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhZGluZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy90cmFkaW5nLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQ0FBa0M7QUFVbEM7SUFHRSxZQUNFLEtBQWEsRUFDYixPQUFpQjtRQUVqQixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksZUFBTSxDQUFDLE9BQU8sRUFBRSxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDbEQsQ0FBQztJQUVZLFdBQVc7O1lBQ3RCLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxVQUFVLENBQUMsQ0FBQztRQUN0RCxDQUFDO0tBQUE7SUFFWSxtQkFBbUI7O1lBQzlCLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxtQkFBbUIsQ0FBQyxDQUFDO1FBQy9ELENBQUM7S0FBQTtJQUVZLFVBQVUsQ0FBQyxhQUFxQjs7WUFDM0MsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLFlBQVksYUFBYSxFQUFFLENBQUMsQ0FBQztRQUN2RSxDQUFDO0tBQUE7SUFFWSxlQUFlLENBQUMsYUFBcUIsRUFBRSxFQUEyQjs7WUFDN0UsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLFlBQVksYUFBYSxRQUFRLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDakYsQ0FBQztLQUFBO0lBRVksT0FBTyxDQUFDLEVBQW1COztZQUN0QyxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsYUFBYSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQzdELENBQUM7S0FBQTtJQUVZLFFBQVEsQ0FBQyxFQUFvQjs7WUFDeEMsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFD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