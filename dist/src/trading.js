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
        this.common = new common_1.Common(sandbox ? `https://api.exchange.coinjar-sandbox.com` : `https://api.exchange.coinjar.com`, token);
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
            return this.common.request(true, 'get', `transfers`);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhZGluZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90cmFkaW5nLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQ0FBa0M7QUFVbEM7SUFJRSxZQUNFLEtBQWEsRUFDYixPQUFpQjtRQUVqQixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksZUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsMENBQTBDLENBQUMsQ0FBQyxDQUFDLGtDQUFrQyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQzdILENBQUM7SUFFWSxXQUFXOztZQUN0QixNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxVQUFVLENBQUMsQ0FBQztRQUN0RCxDQUFDO0tBQUE7SUFFWSxtQkFBbUI7O1lBQzlCLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLG1CQUFtQixDQUFDLENBQUM7UUFDL0QsQ0FBQztLQUFBO0lBRVksVUFBVSxDQUFDLGFBQXFCOztZQUMzQyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxZQUFZLGFBQWEsRUFBRSxDQUFDLENBQUM7UUFDdkUsQ0FBQztLQUFBO0lBRVksZUFBZSxDQUFDLGFBQXFCLEVBQUUsRUFBMkI7O1lBQzdFLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLFlBQVksYUFBYSxRQUFRLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDakYsQ0FBQztLQUFBO0lBRVksT0FBTyxDQUFDLEVBQW1COztZQUN0QyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxhQUFhLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDN0QsQ0FBQztLQUFBO0lBRVksUUFBUSxDQUFDLEVBQW9COztZQUN4QyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDdkQsQ0FBQztLQUFBO0lBRVksT0FBTyxDQUFDLEdBQVc7O1lBQzlCLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLFNBQVMsR0FBRyxFQUFFLENBQUMsQ0FBQztRQUMxRCxDQUFDO0tBQUE7SUFFWSxTQUFTLENBQUMsRUFBcUI7O1lBQzFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUN4RCxDQUFDO0tBQUE7SUFFWSxZQUFZLENBQUMsRUFBcUI7O1lBQzdDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLFlBQVksRUFBRSxFQUFFLENBQUMsQ0FBQztRQUM1RCxDQUFDO0tBQUE7SUFFWSxlQUFlLENBQUMsSUFBaUI7O1lBQzVDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDakUsQ0FBQztLQUFBO0lBRVksUUFBUSxDQUFDLEdBQVc7O1lBQy9CLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLFVBQVUsR0FBRyxFQUFFLENBQUMsQ0FBQztRQUMzRCxDQUFDO0tBQUE7SUFFWSxpQkFBaUIsQ0FBQyxHQUFXOztZQUN4QyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLFFBQVEsRUFBRSxVQUFVLEdBQUcsRUFBRSxDQUFDLENBQUM7UUFDOUQsQ0FBQztLQUFBO0lBRVksV0FBVzs7WUFDdEIsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsVUFBVSxDQUFDLENBQUM7UUFDdEQsQ0FBQztLQUFBO0lBRVksVUFBVSxDQUFDLEVBQVU7O1lBQ2hDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLFlBQVksRUFBRSxFQUFFLENBQUMsQ0FBQztRQUM1RCxDQUFDO0tBQUE7SUFFWSxTQUFTOztZQUNwQixNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxRQUFRLENBQUMsQ0FBQztRQUNwRCxDQUFDO0tBQUE7SUFFWSxpQkFBaUIsQ0FBQyxJQUFtQjs7WUFDaEQsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNqRSxDQUFDO0tBQUE7SUFFWSxpQkFBaUIsQ0FBQyxFQUFVOztZQUN2QyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLFFBQVEsRUFBRSxVQUFVLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDN0QsQ0FBQztLQUFBO0lBRVksWUFBWSxDQUFDLEVBQXdCOztZQUNoRCxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxXQUFXLENBQUMsQ0FBQztRQUN2RCxDQUFDO0tBQUE7SUFFWSxtQkFBbUIsQ0FBQyxJQUFvQjs7WUFDbkQsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNwRSxDQUFDO0tBQUE7SUFFWSxPQUFPOztZQUNsQixNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxlQUFlLENBQUMsQ0FBQztRQUMzRCxDQUFDO0tBQUE7SUFFWSxlQUFlLENBQUMsSUFBZ0I7O1lBQzNDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsT0FBTyxFQUFFLGVBQWUsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDekUsQ0FBQztLQUFBO0NBQ0Y7QUE5RkQsMEJBOEZDIn0=