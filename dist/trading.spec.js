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
        trading = new trading_1.Trading('MySecretToken');
        commonStub = sinon_1.stub(common_1.Common.prototype, 'request');
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
                {
                    cursor: undefined,
                },
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
        const resp = yield trading.getAccountLines('ZZZ999', 1);
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
                {
                    cursor: undefined,
                },
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
        const resp = yield trading.getFees(1);
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
    it('should call getFeeStats', () => __awaiter(this, void 0, void 0, function* () {
        const resp = yield trading.getFeeStats();
        const expectedArgs = [
            [
                true,
                'get',
                'fee_charges/stats',
            ],
        ];
        chai_1.assert.deepEqual(commonStub.args, expectedArgs);
        chai_1.assert.strictEqual(commonStub.callCount, 1);
        chai_1.assert.deepEqual(resp, { response: true });
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
                {
                    product_id: undefined,
                    oid: undefined,
                    cursor: undefined,
                },
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
        const resp = yield trading.getFills('BTCAUD', '123', 1);
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
                {
                    cursor: undefined,
                },
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
        const resp = yield trading.getOrders(1);
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
                {
                    cursor: undefined,
                },
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
        const resp = yield trading.getOrdersAll(1);
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
        const resp = yield trading.postOrderCreate('BTCAUD', 'buy', '0.25', '1750.00', 'LMT', 'GTC');
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
        const resp = yield trading.postTokenGenerate('My New Token');
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
                {
                    cursor: undefined,
                },
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
        const resp = yield trading.getTransfers(1);
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
        const resp = yield trading.postTransfersCreate('deposit', 'XRP1000', '09279dff-d62d-44f6-97a0-0432ae235d24', '432.33');
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
        const resp = yield trading.patchUpdateUser('AUD');
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhZGluZy5zcGVjLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL3RyYWRpbmcuc3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7Ozs7Ozs7QUFFYiwrQkFBOEI7QUFDOUIsaUNBQXdDO0FBRXhDLHFDQUFrQztBQUNsQyx1Q0FBb0M7QUFFcEMsUUFBUSxDQUFDLFNBQVMsRUFBRSxHQUFHLEVBQUU7SUFDdkIsSUFBSSxPQUFnQixDQUFDO0lBQ3JCLElBQUksVUFBcUIsQ0FBQztJQUUxQixNQUFNLENBQUMsR0FBRyxFQUFFO1FBQ1YsT0FBTyxHQUFHLElBQUksaUJBQU8sQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUV2QyxVQUFVLEdBQUcsWUFBSSxDQUFDLGVBQU0sQ0FBQyxTQUFTLEVBQUUsU0FBUyxDQUFDLENBQUM7SUFDakQsQ0FBQyxDQUFDLENBQUM7SUFFSCxVQUFVLENBQUMsR0FBRyxFQUFFO1FBQ2QsVUFBVSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ25CLFVBQVUsQ0FBQyxTQUFTLENBQ2xCLEdBQVMsRUFBRTtZQUNYLE9BQU8sRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLENBQUM7UUFDNUIsQ0FBQyxDQUFBLENBQUMsQ0FBQztJQUNMLENBQUMsQ0FBQyxDQUFDO0lBRUgsS0FBSyxDQUFDLEdBQUcsRUFBRTtRQUNULFVBQVUsQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUN2QixDQUFDLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyx5QkFBeUIsRUFBRSxHQUFTLEVBQUU7UUFDdkMsTUFBTSxJQUFJLEdBQVEsTUFBTSxPQUFPLENBQUMsV0FBVyxFQUFFLENBQUM7UUFFOUMsTUFBTSxZQUFZLEdBQUc7WUFDbkI7Z0JBQ0UsSUFBSTtnQkFDSixLQUFLO2dCQUNMLFVBQVU7YUFDWDtTQUNGLENBQUM7UUFFRixhQUFNLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsWUFBWSxDQUFDLENBQUM7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