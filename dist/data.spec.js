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
const data_1 = require("./data");
describe('Data', () => {
    let data;
    let commonStub;
    before(() => {
        data = new data_1.default();
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
    it('should call getProductTicker', () => __awaiter(this, void 0, void 0, function* () {
        const resp = yield data.getProductTicker('BTCAUD');
        const expectedArgs = [
            [
                false,
                'get',
                'products/BTCAUD/ticker',
            ],
        ];
        chai_1.assert.deepEqual(commonStub.args, expectedArgs);
        chai_1.assert.strictEqual(commonStub.callCount, 1);
        chai_1.assert.deepEqual(resp, { response: true });
    }));
    it('should call getTrades without a query string', () => __awaiter(this, void 0, void 0, function* () {
        const resp = yield data.getTrades('BTCAUD');
        const expectedArgs = [
            [
                false,
                'get',
                'products/BTCAUD/trades',
                undefined,
            ],
        ];
        chai_1.assert.deepEqual(commonStub.args, expectedArgs);
        chai_1.assert.strictEqual(commonStub.callCount, 1);
        chai_1.assert.deepEqual(resp, { response: true });
    }));
    it('should call getTrades with a query string', () => __awaiter(this, void 0, void 0, function* () {
        const resp = yield data.getTrades('BTCAUD', {
            limit: 10,
            before: 0,
            after: 1,
        });
        const expectedArgs = [
            [
                false,
                'get',
                'products/BTCAUD/trades',
                {
                    after: 1,
                    before: 0,
                    limit: 10,
                },
            ],
        ];
        chai_1.assert.deepEqual(commonStub.args, expectedArgs);
        chai_1.assert.strictEqual(commonStub.callCount, 1);
        chai_1.assert.deepEqual(resp, { response: true });
    }));
    it('should call getOrderbook without a query string', () => __awaiter(this, void 0, void 0, function* () {
        const resp = yield data.getOrderbook('BTCAUD');
        const expectedArgs = [
            [
                false,
                'get',
                'products/BTCAUD/book',
                undefined,
            ],
        ];
        chai_1.assert.deepEqual(commonStub.args, expectedArgs);
        chai_1.assert.strictEqual(commonStub.callCount, 1);
        chai_1.assert.deepEqual(resp, { response: true });
    }));
    it('should call getOrderbook with a query string', () => __awaiter(this, void 0, void 0, function* () {
        const resp = yield data.getOrderbook('BTCAUD', { level: 1 });
        const expectedArgs = [
            [
                false,
                'get',
                'products/BTCAUD/book',
                {
                    level: 1,
                },
            ],
        ];
        chai_1.assert.deepEqual(commonStub.args, expectedArgs);
        chai_1.assert.strictEqual(commonStub.callCount, 1);
        chai_1.assert.deepEqual(resp, { response: true });
    }));
    it('should call getCandles with a query string', () => __awaiter(this, void 0, void 0, function* () {
        const resp = yield data.getCandles('BTCAUD', {
            before: 1524108721,
            after: 1523714400,
            interval: '1w',
        });
        const expectedArgs = [
            [
                false,
                'get',
                'products/BTCAUD/candles',
                {
                    before: 1524108721,
                    after: 1523714400,
                    interval: '1w',
                },
            ],
        ];
        chai_1.assert.deepEqual(commonStub.args, expectedArgs);
        chai_1.assert.strictEqual(commonStub.callCount, 1);
        chai_1.assert.deepEqual(resp, { response: true });
    }));
    it('should call getMarketStats without a query string', () => __awaiter(this, void 0, void 0, function* () {
        const resp = yield data.getMarketStats('BTCAUD');
        const expectedArgs = [
            [
                false,
                'get',
                'products/BTCAUD/stats',
                undefined,
            ],
        ];
        chai_1.assert.deepEqual(commonStub.args, expectedArgs);
        chai_1.assert.strictEqual(commonStub.callCount, 1);
        chai_1.assert.deepEqual(resp, { response: true });
    }));
    it('should call getMarketStats with a query string', () => __awaiter(this, void 0, void 0, function* () {
        const resp = yield data.getMarketStats('BTCAUD', {
            at: 1524262535,
        });
        const expectedArgs = [
            [
                false,
                'get',
                'products/BTCAUD/stats',
                {
                    at: 1524262535,
                },
            ],
        ];
        chai_1.assert.deepEqual(commonStub.args, expectedArgs);
        chai_1.assert.strictEqual(commonStub.callCount, 1);
        chai_1.assert.deepEqual(resp, { response: true });
    }));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS5zcGVjLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2RhdGEuc3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7Ozs7Ozs7QUFFYiwrQkFBOEI7QUFDOUIsaUNBQXdDO0FBRXhDLHFDQUE4QjtBQUM5QixpQ0FBMEI7QUFFMUIsUUFBUSxDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUU7SUFDcEIsSUFBSSxJQUFVLENBQUM7SUFDZixJQUFJLFVBQXFCLENBQUM7SUFFMUIsTUFBTSxDQUFDLEdBQUcsRUFBRTtRQUNWLElBQUksR0FBRyxJQUFJLGNBQUksRUFBRSxDQUFDO1FBRWxCLFVBQVUsR0FBRyxZQUFJLENBQUMsZ0JBQU0sQ0FBQyxTQUFTLEVBQUUsU0FBUyxDQUFDLENBQUM7SUFDakQsQ0FBQyxDQUFDLENBQUM7SUFFSCxVQUFVLENBQUMsR0FBRyxFQUFFO1FBQ2QsVUFBVSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ25CLFVBQVUsQ0FBQyxTQUFTLENBQ2xCLEdBQVMsRUFBRTtZQUNYLE9BQU8sRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLENBQUM7UUFDNUIsQ0FBQyxDQUFBLENBQUMsQ0FBQztJQUNMLENBQUMsQ0FBQyxDQUFDO0lBRUgsS0FBSyxDQUFDLEdBQUcsRUFBRTtRQUNULFVBQVUsQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUN2QixDQUFDLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyw4QkFBOEIsRUFBRSxHQUFTLEVBQUU7UUFDNUMsTUFBTSxJQUFJLEdBQVEsTUFBTSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUM7UUFFeEQsTUFBTSxZQUFZLEdBQUc7WUFDbkI7Z0JBQ0UsS0FBSztnQkFDTCxLQUFLO2dCQUNMLHdCQUF3QjthQUN6QjtTQUNGLENBQUM7UUFFRixhQUFNLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsWUFBWSxDQUFDLENBQUM7UUFD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