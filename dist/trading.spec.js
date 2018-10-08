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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhZGluZy5zcGVjLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL3RyYWRpbmcuc3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7Ozs7Ozs7QUFFYiwrQkFBOEI7QUFDOUIsaUNBQXdDO0FBRXhDLHFDQUFrQztBQUNsQyx1Q0FBb0M7QUFFcEMsUUFBUSxDQUFDLFNBQVMsRUFBRSxHQUFHLEVBQUU7SUFDdkIsSUFBSSxPQUFnQixDQUFDO0lBQ3JCLElBQUksVUFBcUIsQ0FBQztJQUUxQixNQUFNLENBQUMsR0FBRyxFQUFFO1FBQ1YsT0FBTyxHQUFHLElBQUksaUJBQU8sQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUV2QyxVQUFVLEdBQUcsWUFBSSxDQUFDLGVBQU0sQ0FBQyxTQUFTLEVBQUUsU0FBUyxDQUFDLENBQUM7SUFDakQsQ0FBQyxDQUFDLENBQUM7SUFFSCxVQUFVLENBQUMsR0FBRyxFQUFFO1FBQ2QsVUFBVSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ25CLFVBQVUsQ0FBQyxTQUFTLENBQ2xCLEdBQVMsRUFBRTtZQUNYLE9BQU8sRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLENBQUM7UUFDNUIsQ0FBQyxDQUFBLENBQUMsQ0FBQztJQUNMLENBQUMsQ0FBQyxDQUFDO0lBRUgsS0FBSyxDQUFDLEdBQUcsRUFBRTtRQUNULFVBQVUsQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUN2QixDQUFDLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyx5QkFBeUIsRUFBRSxHQUFTLEVBQUU7UUFDdkMsTUFBTSxJQUFJLEdBQVEsTUFBTSxPQUFPLENBQUMsV0FBVyxFQUFFLENBQUM7UUFFOUMsTUFBTSxZQUFZLEdBQUc7WUFDbkI7Z0JBQ0UsSUFBSTtnQkFDSixLQUFLO2dCQUNMLFVBQVU7YUFDWDtTQUNGLENBQUM7UUFFRixhQUFNLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsWUFBWSxDQUFDLENBQUM7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