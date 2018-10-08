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
        this.common = new common_1.default(sandbox, 'api', token);
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
exports.default = Trading;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhZGluZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy90cmFkaW5nLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQ0FBOEI7QUFVOUIsTUFBTSxPQUFPO0lBR1gsWUFDRSxLQUFhLEVBQ2IsT0FBaUI7UUFFakIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLGdCQUFNLENBQUMsT0FBTyxFQUFFLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQztJQUNsRCxDQUFDO0lBRVksV0FBVzs7WUFDdEIsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLFVBQVUsQ0FBQyxDQUFDO1FBQ3RELENBQUM7S0FBQTtJQUVZLG1CQUFtQjs7WUFDOUIsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLG1CQUFtQixDQUFDLENBQUM7UUFDL0QsQ0FBQztLQUFBO0lBRVksVUFBVSxDQUFDLGFBQXFCOztZQUMzQyxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsWUFBWSxhQUFhLEVBQUUsQ0FBQyxDQUFDO1FBQ3ZFLENBQUM7S0FBQTtJQUVZLGVBQWUsQ0FBQyxhQUFxQixFQUFFLEVBQTJCOztZQUM3RSxNQUFNLElBQUksR0FBRyxNQUFNLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsWUFBWSxhQUFhLFFBQVEsRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFFLElBQUksQ0FBQyxDQUFDO1lBRTVHLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDeEMsQ0FBQztLQUFBO0lBRVksT0FBTyxDQUFDLEVBQW1COztZQUN0QyxNQUFNLElBQUksR0FBRyxNQUFNLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxD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