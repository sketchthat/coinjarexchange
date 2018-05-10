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
const rp = require("request-promise");
describe('Common', () => {
    let rpStub;
    let common;
    describe('Sandbox', () => {
        before(() => {
            common = new common_1.Common(true, 'data', 'MySecretToken');
            rpStub = sinon_1.stub(rp, 'Request');
        });
        beforeEach(() => {
            rpStub.reset();
        });
        after(() => {
            rpStub.restore();
        });
        it('should call sandbox request', () => __awaiter(this, void 0, void 0, function* () {
            rpStub.resolves({ response: true });
            const resp = yield common.request(false, 'get', 'someMethod');
            const expectedArgs = [
                [
                    {
                        uri: 'https://data.exchange.coinjar-sandbox.com/someMethod',
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
    });
    describe('Production', () => {
        before(() => {
            common = new common_1.Common(false, 'data', 'MySecretToken');
            rpStub = sinon_1.stub(rp, 'Request');
        });
        beforeEach(() => {
            rpStub.reset();
        });
        after(() => {
            rpStub.restore();
        });
        it('should call request without auth', () => __awaiter(this, void 0, void 0, function* () {
            rpStub.resolves({ response: true });
            const resp = yield common.request(false, 'get', 'someMethod');
            const expectedArgs = [
                [
                    {
                        uri: 'https://data.exchange.coinjar.com/someMethod',
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
        it('should call request with auth', () => __awaiter(this, void 0, void 0, function* () {
            rpStub.resolves({ response: true });
            const resp = yield common.request(true, 'get', 'someMethod');
            const expectedArgs = [
                [
                    {
                        uri: 'https://data.exchange.coinjar.com/someMethod',
                        json: true,
                        method: 'get',
                        headers: {
                            Authorization: 'Token token=\"MySecretToken\"',
                        },
                        callback: undefined,
                    },
                ],
            ];
            chai_1.assert.deepEqual(rpStub.args, expectedArgs);
            chai_1.assert.strictEqual(rpStub.callCount, 1);
            chai_1.assert.deepEqual(resp, { response: true });
        }));
        it('should call request with query string', () => __awaiter(this, void 0, void 0, function* () {
            rpStub.resolves({ response: true });
            const resp = yield common.request(false, 'get', 'someMethod', { cursor: 1 });
            const expectedArgs = [
                [
                    {
                        uri: 'https://data.exchange.coinjar.com/someMethod',
                        json: true,
                        method: 'get',
                        qs: {
                            cursor: 1,
                        },
                        callback: undefined,
                    },
                ],
            ];
            chai_1.assert.deepEqual(rpStub.args, expectedArgs);
            chai_1.assert.strictEqual(rpStub.callCount, 1);
            chai_1.assert.deepEqual(resp, { response: true });
        }));
        it('should call request with post data', () => __awaiter(this, void 0, void 0, function* () {
            rpStub.resolves({ response: true });
            const resp = yield common.request(false, 'post', 'someMethod', null, { buy: 504.54 });
            const expectedArgs = [
                [
                    {
                        uri: 'https://data.exchange.coinjar.com/someMethod',
                        json: true,
                        method: 'post',
                        qs: null,
                        body: {
                            buy: 504.54,
                        },
                        callback: undefined,
                    },
                ],
            ];
            chai_1.assert.deepEqual(rpStub.args, expectedArgs);
            chai_1.assert.strictEqual(rpStub.callCount, 1);
            chai_1.assert.deepEqual(resp, { response: true });
        }));
        it('should call request with post data', () => __awaiter(this, void 0, void 0, function* () {
            rpStub.resolves({ response: true });
            const resp = yield common.request(false, 'post', 'someMethod', null, { buy: 504.54 });
            const expectedArgs = [
                [
                    {
                        uri: 'https://data.exchange.coinjar.com/someMethod',
                        json: true,
                        method: 'post',
                        qs: null,
                        body: {
                            buy: 504.54,
                        },
                        callback: undefined,
                    },
                ],
            ];
            chai_1.assert.deepEqual(rpStub.args, expectedArgs);
            chai_1.assert.strictEqual(rpStub.callCount, 1);
            chai_1.assert.deepEqual(resp, { response: true });
        }));
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9uLnNwZWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvY29tbW9uLnNwZWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7Ozs7Ozs7O0FBRWIsK0JBQThCO0FBQzlCLGlDQUF3QztBQUV4QyxxQ0FBa0M7QUFFbEMsc0NBQXNDO0FBRXRDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsR0FBRyxFQUFFO0lBQ3RCLElBQUksTUFBaUIsQ0FBQztJQUN0QixJQUFJLE1BQWMsQ0FBQztJQUVuQixRQUFRLENBQUMsU0FBUyxFQUFFLEdBQUcsRUFBRTtRQUN2QixNQUFNLENBQUMsR0FBRyxFQUFFO1lBQ1YsTUFBTSxHQUFHLElBQUksZUFBTSxDQUFDLElBQUksRUFBRSxNQUFNLEVBQUUsZUFBZSxDQUFDLENBQUM7WUFDbkQsTUFBTSxHQUFHLFlBQUksQ0FBQyxFQUFFLEVBQUUsU0FBUyxDQUFDLENBQUM7UUFDL0IsQ0FBQyxDQUFDLENBQUM7UUFFSCxVQUFVLENBQUMsR0FBRyxFQUFFO1lBQ2QsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ2pCLENBQUMsQ0FBQyxDQUFDO1FBRUgsS0FBSyxDQUFDLEdBQUcsRUFBRTtZQUNULE1BQU0sQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNuQixDQUFDLENBQUMsQ0FBQztRQUVILEVBQUUsQ0FBQyw2QkFBNkIsRUFBRSxHQUFTLEVBQUU7WUFDM0MsTUFBTSxDQUFDLFFBQVEsQ0FBQyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1lBRXBDLE1BQU0sSUFBSSxHQUFRLE1BQU0sTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLFlBQVksQ0FBQyxDQUFDO1lBRW5FLE1BQU0sWUFBWSxHQUFHO2dCQUNuQjtvQkFDRTt3QkFDRSxHQUFHLEVBQUUsc0RBQXNEO3dCQUMzRCxJQUFJLEVBQUUsSUFBSTt3QkFDVixNQUFNLEVBQUUsS0FBSzt3QkFD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