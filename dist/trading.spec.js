'use strict';
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const sinon_1 = require("sinon");
const common_1 = require("./common");
const trading_1 = require("./trading");
describe('Trading', () => {
    let trading;
    let commonStub;
    before(() => {
        trading = new trading_1.default('MySecretToken');
        commonStub = sinon_1.stub(common_1.default.prototype, 'request');
    });
    beforeEach(() => {
        commonStub.reset();
        commonStub.callsFake(() => __awaiter(this, void 0, void 0, function* () {
            return { response: true };
        }));
    });
    after(() => {
        commonStub.restore();
    });
    it('should call getAccounts', () => __awaiter(this, void 0, void 0, function* () {
        const resp = yield trading.getAccounts();
        const expectedArgs = [
            [
                true,
                'get',
                'accounts',
            ],
        ];
        chai_1.assert.deepEqual(commonStub.args, expectedArgs);
        chai_1.assert.strictEqual(commonStub.callCount, 1);
        chai_1.assert.deepEqual(resp, { response: true });
    }));
    it('should call getAccountsExternal', () => __awaiter(this, void 0, void 0, function* () {
        const resp = yield trading.getAccountsExternal();
        const expectedArgs = [
            [
                true,
                'get',
                'accounts/external',
            ],
        ];
        chai_1.assert.deepEqual(commonStub.args, expectedArgs);
        chai_1.assert.strictEqual(commonStub.callCount, 1);
        chai_1.assert.deepEqual(resp, { response: true });
    }));
    it('should call getAccount', () => __awaiter(this, void 0, void 0, function* () {
        const resp = yield trading.getAccount('ZZZ999');
        const expectedArgs = [
            [
                true,
                'get',
                'accounts/ZZZ999',
            ],
        ];
        chai_1.assert.deepEqual(commonStub.args, expectedArgs);
        chai_1.assert.strictEqual(commonStub.callCount, 1);
        chai_1.assert.deepEqual(resp, { response: true });
    }));
    it('should call getAccountLines without a query string', () => __awaiter(this, void 0, void 0, function* () {
        commonStub.onCall(0).returns({
            headers: {
                'x-cjx-cursor': 10,
            },
            body: true,
        });
        const resp = yield trading.getAccountLines('ZZZ999');
        const expectedArgs = [
            [
                true,
                'get',
                'accounts/ZZZ999/lines',
                undefined,
                undefined,
                true,
            ],
        ];
        chai_1.assert.deepEqual(commonStub.args, expectedArgs);
        chai_1.assert.strictEqual(commonStub.callCount, 1);
        chai_1.assert.deepEqual(resp, { cursor: 10, payload: true });
    }));
    it('should call getAccountLines with a query string', () => __awaiter(this, void 0, void 0, function* () {
        commonStub.onCall(0).returns({
            headers: {
                'x-cjx-cursor': 15,
            },
            body: true,
        });
        const resp = yield trading.getAccountLines('ZZZ999', { cursor: 1 });
        const expectedArgs = [
            [
                true,
                'get',
                'accounts/ZZZ999/lines',
                {
                    cursor: 1,
                },
                undefined,
                true,
            ],
        ];
        chai_1.assert.deepEqual(commonStub.args, expectedArgs);
        chai_1.assert.strictEqual(commonStub.callCount, 1);
        chai_1.assert.deepEqual(resp, { cursor: 15, payload: true });
    }));
    it('should call getFees without a query string', () => __awaiter(this, void 0, void 0, function* () {
        commonStub.onCall(0).returns({
            headers: {
                'x-cjx-cursor': 10,
            },
            body: true,
        });
        const resp = yield trading.getFees();
        const expectedArgs = [
            [
                true,
                'get',
                'fee_charges',
                undefined,
                undefined,
                true,
            ],
        ];
        chai_1.assert.deepEqual(commonStub.args, expectedArgs);
        chai_1.assert.strictEqual(commonStub.callCount, 1);
        chai_1.assert.deepEqual(resp, { cursor: 10, payload: true });
    }));
    it('should call getFees with a query string', () => __awaiter(this, void 0, void 0, function* () {
        commonStub.onCall(0).returns({
            headers: {
                'x-cjx-cursor': 15,
            },
            body: true,
        });
        const resp = yield trading.getFees({ cursor: 1 });
        const expectedArgs = [
            [
                true,
                'get',
                'fee_charges',
                {
                    cursor: 1,
                },
                undefined,
                true,
            ],
        ];
        chai_1.assert.deepEqual(commonStub.args, expectedArgs);
        chai_1.assert.strictEqual(commonStub.callCount, 1);
        chai_1.assert.deepEqual(resp, { cursor: 15, payload: true });
    }));
    it('should call getFills without a query string', () => __awaiter(this, void 0, void 0, function* () {
        commonStub.onCall(0).returns({
            headers: {
                'x-cjx-cursor': 10,
            },
            body: true,
        });
        const resp = yield trading.getFills();
        const expectedArgs = [
            [
                true,
                'get',
                'fills',
                undefined,
                undefined,
                true,
            ],
        ];
        chai_1.assert.deepEqual(commonStub.args, expectedArgs);
        chai_1.assert.strictEqual(commonStub.callCount, 1);
        chai_1.assert.deepEqual(resp, { cursor: 10, payload: true });
    }));
    it('should call getFills with a query string', () => __awaiter(this, void 0, void 0, function* () {
        commonStub.onCall(0).returns({
            headers: {
                'x-cjx-cursor': 15,
            },
            body: true,
        });
        const resp = yield trading.getFills({ product_id: 'BTCAUD', oid: '123', cursor: 1 });
        const expectedArgs = [
            [
                true,
                'get',
                'fills',
                {
                    oid: '123',
                    product_id: 'BTCAUD',
                    cursor: 1,
                },
                undefined,
                true,
            ],
        ];
        chai_1.assert.deepEqual(commonStub.args, expectedArgs);
        chai_1.assert.strictEqual(commonStub.callCount, 1);
        chai_1.assert.deepEqual(resp, { cursor: 15, payload: true });
    }));
    it('should call getFill', () => __awaiter(this, void 0, void 0, function* () {
        const resp = yield trading.getFill('9');
        const expectedArgs = [
            [
                true,
                'get',
                'fills/9',
            ],
        ];
        chai_1.assert.deepEqual(commonStub.args, expectedArgs);
        chai_1.assert.strictEqual(commonStub.callCount, 1);
        chai_1.assert.deepEqual(resp, { response: true });
    }));
    it('should call getOrders without a query string', () => __awaiter(this, void 0, void 0, function* () {
        commonStub.onCall(0).returns({
            headers: {
                'x-cjx-cursor': 10,
            },
            body: true,
        });
        const resp = yield trading.getOrders();
        const expectedArgs = [
            [
                true,
                'get',
                'orders',
                undefined,
                undefined,
                true,
            ],
        ];
        chai_1.assert.deepEqual(commonStub.args, expectedArgs);
        chai_1.assert.strictEqual(commonStub.callCount, 1);
        chai_1.assert.deepEqual(resp, { cursor: 10, payload: true });
    }));
    it('should call getOrders with a query string', () => __awaiter(this, void 0, void 0, function* () {
        commonStub.onCall(0).returns({
            headers: {
                'x-cjx-cursor': 15,
            },
            body: true,
        });
        const resp = yield trading.getOrders({ cursor: 1 });
        const expectedArgs = [
            [
                true,
                'get',
                'orders',
                {
                    cursor: 1,
                },
                undefined,
                true,
            ],
        ];
        chai_1.assert.deepEqual(commonStub.args, expectedArgs);
        chai_1.assert.strictEqual(commonStub.callCount, 1);
        chai_1.assert.deepEqual(resp, { cursor: 15, payload: true });
    }));
    it('should call getOrdersAll without a query string', () => __awaiter(this, void 0, void 0, function* () {
        commonStub.onCall(0).returns({
            headers: {
                'x-cjx-cursor': 10,
            },
            body: true,
        });
        const resp = yield trading.getOrdersAll();
        const expectedArgs = [
            [
                true,
                'get',
                'orders/all',
                undefined,
                undefined,
                true,
            ],
        ];
        chai_1.assert.deepEqual(commonStub.args, expectedArgs);
        chai_1.assert.strictEqual(commonStub.callCount, 1);
        chai_1.assert.deepEqual(resp, { cursor: 10, payload: true });
    }));
    it('should call getOrdersAll with a query string', () => __awaiter(this, void 0, void 0, function* () {
        commonStub.onCall(0).returns({
            headers: {
                'x-cjx-cursor': 15,
            },
            body: true,
        });
        const resp = yield trading.getOrdersAll({ cursor: 1 });
        const expectedArgs = [
            [
                true,
                'get',
                'orders/all',
                {
                    cursor: 1,
                },
                undefined,
                true,
            ],
        ];
        chai_1.assert.deepEqual(commonStub.args, expectedArgs);
        chai_1.assert.strictEqual(commonStub.callCount, 1);
        chai_1.assert.deepEqual(resp, { cursor: 15, payload: true });
    }));
    it('should call postOrderCreate', () => __awaiter(this, void 0, void 0, function* () {
        const args = {
            product_id: 'BTCAUD',
            type: 'LMT',
            side: 'buy',
            price: '1750.00',
            size: '0.25',
            time_in_force: 'GTC',
        };
        const resp = yield trading.postOrderCreate(args);
        const expectedArgs = [
            [
                true,
                'post',
                'orders',
                null,
                {
                    product_id: 'BTCAUD',
                    type: 'LMT',
                    side: 'buy',
                    price: '1750.00',
                    size: '0.25',
                    time_in_force: 'GTC',
                },
            ],
        ];
        chai_1.assert.deepEqual(commonStub.args, expectedArgs);
        chai_1.assert.strictEqual(commonStub.callCount, 1);
        chai_1.assert.deepEqual(resp, { response: true });
    }));
    it('should call getOrder', () => __awaiter(this, void 0, void 0, function* () {
        const resp = yield trading.getOrder(55);
        const expectedArgs = [
            [
                true,
                'get',
                'orders/55',
            ],
        ];
        chai_1.assert.deepEqual(commonStub.args, expectedArgs);
        chai_1.assert.strictEqual(commonStub.callCount, 1);
        chai_1.assert.deepEqual(resp, { response: true });
    }));
    it('should call deleteCancelOrder', () => __awaiter(this, void 0, void 0, function* () {
        const resp = yield trading.deleteCancelOrder(55);
        const expectedArgs = [
            [
                true,
                'delete',
                'orders/55',
            ],
        ];
        chai_1.assert.deepEqual(commonStub.args, expectedArgs);
        chai_1.assert.strictEqual(commonStub.callCount, 1);
        chai_1.assert.deepEqual(resp, { response: true });
    }));
    it('should call getProducts', () => __awaiter(this, void 0, void 0, function* () {
        const resp = yield trading.getProducts();
        const expectedArgs = [
            [
                true,
                'get',
                'products',
            ],
        ];
        chai_1.assert.deepEqual(commonStub.args, expectedArgs);
        chai_1.assert.strictEqual(commonStub.callCount, 1);
        chai_1.assert.deepEqual(resp, { response: true });
    }));
    it('should call getProduct', () => __awaiter(this, void 0, void 0, function* () {
        const resp = yield trading.getProduct('BTCAUD');
        const expectedArgs = [
            [
                true,
                'get',
                'products/BTCAUD',
            ],
        ];
        chai_1.assert.deepEqual(commonStub.args, expectedArgs);
        chai_1.assert.strictEqual(commonStub.callCount, 1);
        chai_1.assert.deepEqual(resp, { response: true });
    }));
    it('should call getTokens', () => __awaiter(this, void 0, void 0, function* () {
        const resp = yield trading.getTokens();
        const expectedArgs = [
            [
                true,
                'get',
                'tokens',
            ],
        ];
        chai_1.assert.deepEqual(commonStub.args, expectedArgs);
        chai_1.assert.strictEqual(commonStub.callCount, 1);
        chai_1.assert.deepEqual(resp, { response: true });
    }));
    it('should call postTokenGenerate', () => __awaiter(this, void 0, void 0, function* () {
        const resp = yield trading.postTokenGenerate({ name: 'My New Token' });
        const expectedArgs = [
            [
                true,
                'post',
                'tokens',
                null,
                {
                    name: 'My New Token',
                },
            ],
        ];
        chai_1.assert.deepEqual(commonStub.args, expectedArgs);
        chai_1.assert.strictEqual(commonStub.callCount, 1);
        chai_1.assert.deepEqual(resp, { response: true });
    }));
    it('should call deleteTokenRevoke', () => __awaiter(this, void 0, void 0, function* () {
        const resp = yield trading.deleteTokenRevoke('ZZ55');
        const expectedArgs = [
            [
                true,
                'delete',
                'tokens/ZZ55',
            ],
        ];
        chai_1.assert.deepEqual(commonStub.args, expectedArgs);
        chai_1.assert.strictEqual(commonStub.callCount, 1);
        chai_1.assert.deepEqual(resp, { response: true });
    }));
    it('should call getTransfers without query string', () => __awaiter(this, void 0, void 0, function* () {
        commonStub.onCall(0).returns({
            headers: {
                'x-cjx-cursor': 10,
            },
            body: true,
        });
        const resp = yield trading.getTransfers();
        const expectedArgs = [
            [
                true,
                'get',
                'transfers',
                undefined,
                undefined,
                true,
            ],
        ];
        chai_1.assert.deepEqual(commonStub.args, expectedArgs);
        chai_1.assert.strictEqual(commonStub.callCount, 1);
        chai_1.assert.deepEqual(resp, { cursor: 10, payload: true });
    }));
    it('should call getTransfers with query string', () => __awaiter(this, void 0, void 0, function* () {
        commonStub.onCall(0).returns({
            headers: {
                'x-cjx-cursor': 15,
            },
            body: true,
        });
        const resp = yield trading.getTransfers({ cursor: 1 });
        const expectedArgs = [
            [
                true,
                'get',
                'transfers',
                {
                    cursor: 1,
                },
                undefined,
                true,
            ],
        ];
        chai_1.assert.deepEqual(commonStub.args, expectedArgs);
        chai_1.assert.strictEqual(commonStub.callCount, 1);
        chai_1.assert.deepEqual(resp, { cursor: 15, payload: true });
    }));
    it('should call postTransfersCreate', () => __awaiter(this, void 0, void 0, function* () {
        const args = {
            type: 'deposit',
            account_number: 'XRP1000',
            counterparty_id: '09279dff-d62d-44f6-97a0-0432ae235d24',
            amount: '432.33',
        };
        const resp = yield trading.postTransfersCreate(args);
        const expectedArgs = [
            [
                true,
                'post',
                'transfers',
                null,
                {
                    type: 'deposit',
                    account_number: 'XRP1000',
                    counterparty_id: '09279dff-d62d-44f6-97a0-0432ae235d24',
                    amount: '432.33',
                },
            ],
        ];
        chai_1.assert.deepEqual(commonStub.args, expectedArgs);
        chai_1.assert.strictEqual(commonStub.callCount, 1);
        chai_1.assert.deepEqual(resp, { response: true });
    }));
    it('should call getUser', () => __awaiter(this, void 0, void 0, function* () {
        const resp = yield trading.getUser();
        const expectedArgs = [
            [
                true,
                'get',
                'users/current',
            ],
        ];
        chai_1.assert.deepEqual(commonStub.args, expectedArgs);
        chai_1.assert.strictEqual(commonStub.callCount, 1);
        chai_1.assert.deepEqual(resp, { response: true });
    }));
    it('should call patchUpdateUser', () => __awaiter(this, void 0, void 0, function* () {
        const resp = yield trading.patchUpdateUser({ home_currency_code: 'AUD' });
        const expectedArgs = [
            [
                true,
                'patch',
                'users/current',
                null,
                {
                    home_currency_code: 'AUD',
                },
            ],
        ];
        chai_1.assert.deepEqual(commonStub.args, expectedArgs);
        chai_1.assert.strictEqual(commonStub.callCount, 1);
        chai_1.assert.deepEqual(resp, { response: true });
    }));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhZGluZy5zcGVjLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL3RyYWRpbmcuc3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7Ozs7Ozs7QUFFYiwrQkFBOEI7QUFDOUIsaUNBQXdDO0FBRXhDLHFDQUE4QjtBQUM5Qix1Q0FBZ0M7QUFFaEMsUUFBUSxDQUFDLFNBQVMsRUFBRSxHQUFHLEVBQUU7SUFDdkIsSUFBSSxPQUFnQixDQUFDO0lBQ3JCLElBQUksVUFBcUIsQ0FBQztJQUUxQixNQUFNLENBQUMsR0FBRyxFQUFFO1FBQ1YsT0FBTyxHQUFHLElBQUksaUJBQU8sQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUV2QyxVQUFVLEdBQUcsWUFBSSxDQUFDLGdCQUFNLENBQUMsU0FBUyxFQUFFLFNBQVMsQ0FBQyxDQUFDO0lBQ2pELENBQUMsQ0FBQyxDQUFDO0lBRUgsVUFBVSxDQUFDLEdBQUcsRUFBRTtRQUNkLFVBQVUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNuQixVQUFVLENBQUMsU0FBUyxDQUNsQixHQUFTLEVBQUU7WUFDWCxPQUFPLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxDQUFDO1FBQzVCLENBQUMsQ0FBQSxDQUFDLENBQUM7SUFDTCxDQUFDLENBQUMsQ0FBQztJQUVILEtBQUssQ0FBQyxHQUFHLEVBQUU7UUFDVCxVQUFVLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDdkIsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMseUJBQXlCLEVBQUUsR0FBUyxFQUFFO1FBQ3ZDLE1BQU0sSUFBSSxHQUFRLE1BQU0sT0FBTyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBRTlDLE1BQU0sWUFBWSxHQUFHO1lBQ25CO2dCQUNFLElBQUk7Z0JBQ0osS0FBSztnQkFDTCxVQUFVO2FBQ1g7U0FDRixDQUFDO1FBRUYsYUFBTSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLFlBQVksQ0FBQyxDQUFD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