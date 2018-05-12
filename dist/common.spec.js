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
            common = new common_1.default(true, 'data', 'MySecretToken');
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
            common = new common_1.default(false, 'data', 'MySecretToken');
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9uLnNwZWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvY29tbW9uLnNwZWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7Ozs7Ozs7O0FBRWIsK0JBQThCO0FBQzlCLGlDQUF3QztBQUV4QyxxQ0FBOEI7QUFFOUIsc0NBQXNDO0FBRXRDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsR0FBRyxFQUFFO0lBQ3RCLElBQUksTUFBaUIsQ0FBQztJQUN0QixJQUFJLE1BQWMsQ0FBQztJQUVuQixRQUFRLENBQUMsU0FBUyxFQUFFLEdBQUcsRUFBRTtRQUN2QixNQUFNLENBQUMsR0FBRyxFQUFFO1lBQ1YsTUFBTSxHQUFHLElBQUksZ0JBQU0sQ0FBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLGVBQWUsQ0FBQyxDQUFDO1lBQ25ELE1BQU0sR0FBRyxZQUFJLENBQUMsRUFBRSxFQUFFLFNBQVMsQ0FBQyxDQUFDO1FBQy9CLENBQUMsQ0FBQyxDQUFDO1FBRUgsVUFBVSxDQUFDLEdBQUcsRUFBRTtZQUNkLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNqQixDQUFDLENBQUMsQ0FBQztRQUVILEtBQUssQ0FBQyxHQUFHLEVBQUU7WUFDVCxNQUFNLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDbkIsQ0FBQyxDQUFDLENBQUM7UUFFSCxFQUFFLENBQUMsNkJBQTZCLEVBQUUsR0FBUyxFQUFFO1lBQzNDLE1BQU0sQ0FBQyxRQUFRLENBQUMsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztZQUVwQyxNQUFNLElBQUksR0FBUSxNQUFNLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxZQUFZLENBQUMsQ0FBQztZQUVuRSxNQUFNLFlBQVksR0FBRztnQkFDbkI7b0JBQ0U7d0JBQ0UsR0FBRyxFQUFFLHNEQUFzRDt3QkFDM0QsSUFBSSxFQUFFLElBQUk7d0JBQ1YsTUFBTSxFQUFFLEtBQUs7d0JB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