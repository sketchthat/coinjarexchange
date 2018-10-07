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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguc3BlYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5zcGVjLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7Ozs7Ozs7OztBQUViLCtCQUE4QjtBQUM5QixpQ0FBd0M7QUFFeEMsbUNBQTBDO0FBRTFDLHNDQUFzQztBQUV0QyxRQUFRLENBQUMsT0FBTyxFQUFFLEdBQUcsRUFBRTtJQUNyQixJQUFJLE1BQWlCLENBQUM7SUFFdEIsTUFBTSxDQUFDLEdBQUcsRUFBRTtRQUNWLE1BQU0sR0FBRyxZQUFJLENBQUMsRUFBRSxFQUFFLFNBQVMsQ0FBQyxDQUFDO0lBQy9CLENBQUMsQ0FBQyxDQUFDO0lBRUgsVUFBVSxDQUFDLEdBQUcsRUFBRTtRQUNkLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNqQixDQUFDLENBQUMsQ0FBQztJQUVILEtBQUssQ0FBQyxHQUFHLEVBQUU7UUFDVCxNQUFNLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDbkIsQ0FBQyxDQUFDLENBQUM7SUFFSCxRQUFRLENBQUMsU0FBUyxFQUFFLEdBQUcsRUFBRTtRQUN2QixFQUFFLENBQUMsa0NBQWtDLEVBQUUsR0FBUyxFQUFFO1lBQ2hELE1BQU0sQ0FBQyxRQUFRLENBQUMsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztZQUVwQyxNQUFNLEdBQUcsR0FBRyxJQUFJLHVCQUFlLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxDQUFDO1lBRXJELE1BQU0sSUFBSSxHQUFRLE1BQU0sR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUU1RCxNQUFNLFlBQVksR0FBRztnQkFDbkI7b0JBQ0U7d0JBQ0UsR0FBRyxFQUFFLHVFQUF1RTt3QkFDNUUsSUFBSSxFQUFFLElBQUk7d0JBQ1YsTUFBTSxFQUFFLEtBQUs7d0JBQ2IsUUFBUSxFQUFFLFNBQVM7cUJBQ3BCO2lCQUNGO2FB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