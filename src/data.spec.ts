'use strict';

import { assert } from 'chai';
import { SinonStub, stub } from 'sinon';

import { Common } from './common';
import { Data } from './data';

describe('Data', () => {
  let data: Data;
  let commonStub: SinonStub;

  before(() => {
    data = new Data();

    commonStub = stub(Common.prototype, 'request');
  });

  beforeEach(() => {
    commonStub.reset();
    commonStub.callsFake(
      async () => {
      return { response: true };
    });
  });

  after(() => {
    commonStub.restore();
  });

  it('should call getProductTicker', async () => {
    const resp: any = await data.getProductTicker('BTCAUD');

    const expectedArgs = [
      [
        false,
        'get',
        'products/BTCAUD/ticker',
      ],
    ];

    assert.deepEqual(commonStub.args, expectedArgs);
    assert.strictEqual(commonStub.callCount, 1);
    assert.deepEqual(resp, { response: true });
  });

  it('should call getTrades without a query string', async () => {
    const resp: any = await data.getTrades('BTCAUD');

    const expectedArgs = [
      [
        false,
        'get',
        'products/BTCAUD/trades',
        undefined,
      ],
    ];

    assert.deepEqual(commonStub.args, expectedArgs);
    assert.strictEqual(commonStub.callCount, 1);
    assert.deepEqual(resp, { response: true });
  });

  it('should call getTrades with a query string', async () => {
    const resp: any = await data.getTrades('BTCAUD', {
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

    assert.deepEqual(commonStub.args, expectedArgs);
    assert.strictEqual(commonStub.callCount, 1);
    assert.deepEqual(resp, { response: true });
  });

  it('should call getOrderbook without a query string', async () => {
    const resp: any = await data.getOrderbook('BTCAUD');

    const expectedArgs = [
      [
        false,
        'get',
        'products/BTCAUD/book',
        undefined,
      ],
    ];

    assert.deepEqual(commonStub.args, expectedArgs);
    assert.strictEqual(commonStub.callCount, 1);
    assert.deepEqual(resp, { response: true });
  });

  it('should call getOrderbook with a query string', async () => {
    const resp: any = await data.getOrderbook('BTCAUD', { level: 1 });

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

    assert.deepEqual(commonStub.args, expectedArgs);
    assert.strictEqual(commonStub.callCount, 1);
    assert.deepEqual(resp, { response: true });
  });

  it('should call getCandles with a query string', async () => {
    const resp: any = await data.getCandles('BTCAUD', {
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

    assert.deepEqual(commonStub.args, expectedArgs);
    assert.strictEqual(commonStub.callCount, 1);
    assert.deepEqual(resp, { response: true });
  });

  it('should call getMarketStats without a query string', async () => {
    const resp: any = await data.getMarketStats('BTCAUD');

    const expectedArgs = [
      [
        false,
        'get',
        'products/BTCAUD/stats',
        undefined,
      ],
    ];

    assert.deepEqual(commonStub.args, expectedArgs);
    assert.strictEqual(commonStub.callCount, 1);
    assert.deepEqual(resp, { response: true });
  });

  it('should call getMarketStats with a query string', async () => {
    const resp: any = await data.getMarketStats('BTCAUD', {
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

    assert.deepEqual(commonStub.args, expectedArgs);
    assert.strictEqual(commonStub.callCount, 1);
    assert.deepEqual(resp, { response: true });
  });
});
