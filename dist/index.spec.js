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
const index_1 = require("./index");
const rp = require("request-promise");
describe('Index', () => {
    let rpStub;
    before(() => {
        rpStub = sinon_1.stub(rp, 'Request');
    });
    beforeEach(() => {
        rpStub.reset();
    });
    after(() => {
        rpStub.restore();
    });
    describe('Sandbox', () => {
        it('should call sandbox data request', () => __awaiter(this, void 0, void 0, function* () {
            rpStub.resolves({ response: true });
            const cje = new index_1.CoinJarExchange('secretToken', true);
            const resp = yield cje.data().getTrades('someTradeId');
            const expectedArgs = [
                [
                    {
                        uri: 'https://data.exchange.coinjar-sandbox.com/products/someTradeId/trades',
                        json: true,
                        method: 'get',
                        callback: undefined,
                        qs: {
                            after: undefined,
                            before: undefined,
                            limit: undefined,
                        },
                    },
                ],
            ];
            chai_1.assert.deepEqual(rpStub.args, expectedArgs);
            chai_1.assert.strictEqual(rpStub.callCount, 1);
            chai_1.assert.deepEqual(resp, { response: true });
        }));
        it('should call sandbox trading request', () => __awaiter(this, void 0, void 0, function* () {
            rpStub.resolves({ response: true });
            const cje = new index_1.CoinJarExchange('secretToken', true);
            const resp = yield cje.trading().getAccount('someAccountId');
            const expectedArgs = [
                [
                    {
                        uri: 'https://api.exchange.coinjar-sandbox.com/accounts/someAccountId',
                        json: true,
                        method: 'get',
                        callback: undefined,
                        headers: {
                            Authorization: 'Token token="secretToken"',
                        },
                    },
                ],
            ];
            chai_1.assert.deepEqual(rpStub.args, expectedArgs);
            chai_1.assert.strictEqual(rpStub.callCount, 1);
            chai_1.assert.deepEqual(resp, { response: true });
        }));
    });
    describe('Production', () => {
        it('should call production data request', () => __awaiter(this, void 0, void 0, function* () {
            rpStub.resolves({ response: true });
            const cje = new index_1.CoinJarExchange('secretToken');
            const resp = yield cje.data().getTrades('someTradeId');
            const expectedArgs = [
                [
                    {
                        uri: 'https://data.exchange.coinjar.com/products/someTradeId/trades',
                        json: true,
                        method: 'get',
                        callback: undefined,
                        qs: {
                            after: undefined,
                            before: undefined,
                            limit: undefined,
                        },
                    },
                ],
            ];
            chai_1.assert.deepEqual(rpStub.args, expectedArgs);
            chai_1.assert.strictEqual(rpStub.callCount, 1);
            chai_1.assert.deepEqual(resp, { response: true });
        }));
        it('should call production trading request', () => __awaiter(this, void 0, void 0, function* () {
            rpStub.resolves({ response: true });
            const cje = new index_1.CoinJarExchange('secretToken');
            const resp = yield cje.trading().getAccount('someAccountId');
            const expectedArgs = [
                [
                    {
                        uri: 'https://api.exchange.coinjar.com/accounts/someAccountId',
                        json: true,
                        method: 'get',
                        callback: undefined,
                        headers: {
                            Authorization: 'Token token="secretToken"',
                        },
                    },
                ],
            ];
            chai_1.assert.deepEqual(rpStub.args, expectedArgs);
            chai_1.assert.strictEqual(rpStub.callCount, 1);
            chai_1.assert.deepEqual(resp, { response: true });
        }));
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguc3BlYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5zcGVjLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7Ozs7Ozs7OztBQUViLCtCQUE4QjtBQUM5QixpQ0FBd0M7QUFFeEMsbUNBQTBDO0FBRTFDLHNDQUFzQztBQUV0QyxRQUFRLENBQUMsT0FBTyxFQUFFLEdBQUcsRUFBRTtJQUNyQixJQUFJLE1BQWlCLENBQUM7SUFFdEIsTUFBTSxDQUFDLEdBQUcsRUFBRTtRQUNWLE1BQU0sR0FBRyxZQUFJLENBQUMsRUFBRSxFQUFFLFNBQVMsQ0FBQyxDQUFDO0lBQy9CLENBQUMsQ0FBQyxDQUFDO0lBRUgsVUFBVSxDQUFDLEdBQUcsRUFBRTtRQUNkLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNqQixDQUFDLENBQUMsQ0FBQztJQUVILEtBQUssQ0FBQyxHQUFHLEVBQUU7UUFDVCxNQUFNLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDbkIsQ0FBQyxDQUFDLENBQUM7SUFFSCxRQUFRLENBQUMsU0FBUyxFQUFFLEdBQUcsRUFBRTtRQUN2QixFQUFFLENBQUMsa0NBQWtDLEVBQUUsR0FBUyxFQUFFO1lBQ2hELE1BQU0sQ0FBQyxRQUFRLENBQUMsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztZQUVwQyxNQUFNLEdBQUcsR0FBRyxJQUFJLHVCQUFlLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxDQUFDO1lBRXJELE1BQU0sSUFBSSxHQUFRLE1BQU0sR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUU1RCxNQUFNLFlBQVksR0FBRztnQkFDbkI7b0JBQ0U7d0JBQ0UsR0FBRyxFQUFFLHVFQUF1RTt3QkFDNUUsSUFBSSxFQUFFLElBQUk7d0JBQ1YsTUFBTSxFQUFFLEtBQUs7d0JBQ2IsUUFBUSxFQUFFLFNBQVM7d0JBQ25CLEVBQUUsRUFB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