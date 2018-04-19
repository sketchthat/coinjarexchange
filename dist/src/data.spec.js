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
        data = new data_1.Data();
        commonStub = sinon_1.stub(common_1.Common.prototype, 'request');
    });
    beforeEach(() => {
        commonStub.reset();
        commonStub.callsFake((...args) => __awaiter(this, void 0, void 0, function* () {
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
    it('should call getCandels without a query string', () => __awaiter(this, void 0, void 0, function* () {
        // const resp: any = await data.getCandels('BTCAUD');
        // const expectedArgs = [
        //   [
        //     false,
        //     'get',
        //     'products/BTCAUD/candles',
        //     undefined,
        //   ],
        // ];
        // assert.deepEqual(commonStub.args, expectedArgs);
        // assert.strictEqual(commonStub.callCount, 1);
        // assert.deepEqual(resp, { response: true });
    }));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS5zcGVjLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2RhdGEuc3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7Ozs7Ozs7QUFFYiwrQkFBOEI7QUFDOUIsaUNBQStDO0FBRS9DLHFDQUFrQztBQUNsQyxpQ0FBOEI7QUFFOUIsUUFBUSxDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUU7SUFDcEIsSUFBSSxJQUFVLENBQUM7SUFDZixJQUFJLFVBQXFCLENBQUM7SUFFMUIsTUFBTSxDQUFDLEdBQUcsRUFBRTtRQUNWLElBQUksR0FBRyxJQUFJLFdBQUksRUFBRSxDQUFDO1FBRWxCLFVBQVUsR0FBRyxZQUFJLENBQUMsZUFBTSxDQUFDLFNBQVMsRUFBRSxTQUFTLENBQUMsQ0FBQztJQUNqRCxDQUFDLENBQUMsQ0FBQztJQUVILFVBQVUsQ0FBQyxHQUFHLEVBQUU7UUFDZCxVQUFVLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDbkIsVUFBVSxDQUFDLFNBQVMsQ0FDbEIsQ0FBTyxHQUFHLElBQUksRUFBRSxFQUFFO1lBQ2xCLE1BQU0sQ0FBQyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsQ0FBQztRQUM1QixDQUFDLENBQUEsQ0FBQyxDQUFDO0lBQ0wsQ0FBQyxDQUFDLENBQUM7SUFFSCxLQUFLLENBQUMsR0FBRyxFQUFFO1FBQ1QsVUFBVSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ3ZCLENBQUMsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLDhCQUE4QixFQUFFLEdBQVMsRUFBRTtRQUM1QyxNQUFNLElBQUksR0FBUSxNQUFNLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUV4RCxNQUFNLFlBQVksR0FBRztZQUNuQjtnQkFDRSxLQUFLO2dCQUNMLEtBQUs7Z0JBQ0wsd0JBQXdCO2FBQ3pCO1NBQ0YsQ0FBQztRQUVGLGFBQU0sQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLElBQUks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