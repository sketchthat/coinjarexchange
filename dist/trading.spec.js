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
        const resp = yield trading.getAccountLines('ZZZ999');
        const expectedArgs = [
            [
                true,
                'get',
                'accounts/ZZZ999/lines',
                undefined,
            ],
        ];
        chai_1.assert.deepEqual(commonStub.args, expectedArgs);
        chai_1.assert.strictEqual(commonStub.callCount, 1);
        chai_1.assert.deepEqual(resp, { response: true });
    }));
    it('should call getAccountLines with a query string', () => __awaiter(this, void 0, void 0, function* () {
        const resp = yield trading.getAccountLines('ZZZ999', { cursor: 1 });
        const expectedArgs = [
            [
                true,
                'get',
                'accounts/ZZZ999/lines',
                {
                    cursor: 1,
                },
            ],
        ];
        chai_1.assert.deepEqual(commonStub.args, expectedArgs);
        chai_1.assert.strictEqual(commonStub.callCount, 1);
        chai_1.assert.deepEqual(resp, { response: true });
    }));
    it('should call getFees without a query string', () => __awaiter(this, void 0, void 0, function* () {
        const resp = yield trading.getFees();
        const expectedArgs = [
            [
                true,
                'get',
                'fee_charges',
                undefined,
            ],
        ];
        chai_1.assert.deepEqual(commonStub.args, expectedArgs);
        chai_1.assert.strictEqual(commonStub.callCount, 1);
        chai_1.assert.deepEqual(resp, { response: true });
    }));
    it('should call getFees with a query string', () => __awaiter(this, void 0, void 0, function* () {
        const resp = yield trading.getFees({ cursor: 1 });
        const expectedArgs = [
            [
                true,
                'get',
                'fee_charges',
                {
                    cursor: 1,
                },
            ],
        ];
        chai_1.assert.deepEqual(commonStub.args, expectedArgs);
        chai_1.assert.strictEqual(commonStub.callCount, 1);
        chai_1.assert.deepEqual(resp, { response: true });
    }));
    it('should call getFills without a query string', () => __awaiter(this, void 0, void 0, function* () {
        const resp = yield trading.getFills();
        const expectedArgs = [
            [
                true,
                'get',
                'fills',
                undefined,
            ],
        ];
        chai_1.assert.deepEqual(commonStub.args, expectedArgs);
        chai_1.assert.strictEqual(commonStub.callCount, 1);
        chai_1.assert.deepEqual(resp, { response: true });
    }));
    it('should call getFills with a query string', () => __awaiter(this, void 0, void 0, function* () {
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
            ],
        ];
        chai_1.assert.deepEqual(commonStub.args, expectedArgs);
        chai_1.assert.strictEqual(commonStub.callCount, 1);
        chai_1.assert.deepEqual(resp, { response: true });
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
        const resp = yield trading.getOrders();
        const expectedArgs = [
            [
                true,
                'get',
                'orders',
                undefined,
            ],
        ];
        chai_1.assert.deepEqual(commonStub.args, expectedArgs);
        chai_1.assert.strictEqual(commonStub.callCount, 1);
        chai_1.assert.deepEqual(resp, { response: true });
    }));
    it('should call getOrders with a query string', () => __awaiter(this, void 0, void 0, function* () {
        const resp = yield trading.getOrders({ cursor: 1 });
        const expectedArgs = [
            [
                true,
                'get',
                'orders',
                {
                    cursor: 1,
                },
            ],
        ];
        chai_1.assert.deepEqual(commonStub.args, expectedArgs);
        chai_1.assert.strictEqual(commonStub.callCount, 1);
        chai_1.assert.deepEqual(resp, { response: true });
    }));
    it('should call getOrdersAll without a query string', () => __awaiter(this, void 0, void 0, function* () {
        const resp = yield trading.getOrdersAll();
        const expectedArgs = [
            [
                true,
                'get',
                'orders/all',
                undefined,
            ],
        ];
        chai_1.assert.deepEqual(commonStub.args, expectedArgs);
        chai_1.assert.strictEqual(commonStub.callCount, 1);
        chai_1.assert.deepEqual(resp, { response: true });
    }));
    it('should call getOrdersAll with a query string', () => __awaiter(this, void 0, void 0, function* () {
        const resp = yield trading.getOrdersAll({ cursor: 1 });
        const expectedArgs = [
            [
                true,
                'get',
                'orders/all',
                {
                    cursor: 1,
                },
            ],
        ];
        chai_1.assert.deepEqual(commonStub.args, expectedArgs);
        chai_1.assert.strictEqual(commonStub.callCount, 1);
        chai_1.assert.deepEqual(resp, { response: true });
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
        const resp = yield trading.getTransfers();
        const expectedArgs = [
            [
                true,
                'get',
                'transfers',
                undefined,
            ],
        ];
        chai_1.assert.deepEqual(commonStub.args, expectedArgs);
        chai_1.assert.strictEqual(commonStub.callCount, 1);
        chai_1.assert.deepEqual(resp, { response: true });
    }));
    it('should call getTransfers with query string', () => __awaiter(this, void 0, void 0, function* () {
        const resp = yield trading.getTransfers({ cursor: 1 });
        const expectedArgs = [
            [
                true,
                'get',
                'transfers',
                {
                    cursor: 1,
                },
            ],
        ];
        chai_1.assert.deepEqual(commonStub.args, expectedArgs);
        chai_1.assert.strictEqual(commonStub.callCount, 1);
        chai_1.assert.deepEqual(resp, { response: true });
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