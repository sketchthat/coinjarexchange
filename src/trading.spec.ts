'use strict';

import { assert } from 'chai';
import { sinon, SinonStub, stub } from 'sinon';

import { Common } from './common';
import { Trading } from './trading';

describe('Trading', () => {
  let trading: Trading;
  let commonStub: SinonStub;

  before(() => {
    trading = new Trading('MySecretToken');

    commonStub = stub(Common.prototype, 'request');
  });

  beforeEach(() => {
    commonStub.reset();
    commonStub.callsFake(
      async (...args) => {
      return { response: true };
    });
  });

  after(() => {
    commonStub.restore();
  });

  it('should call getAccounts', async () => {
    const resp: any = await trading.getAccounts();

    const expectedArgs = [
      [
        true,
        'get',
        'accounts',
      ],
    ];

    assert.deepEqual(commonStub.args, expectedArgs);
    assert.strictEqual(commonStub.callCount, 1);
    assert.deepEqual(resp, { response: true });
  });

  it('should call getAccountsExternal', async () => {
    const resp: any = await trading.getAccountsExternal();

    const expectedArgs = [
      [
        true,
        'get',
        'accounts/external',
      ],
    ];

    assert.deepEqual(commonStub.args, expectedArgs);
    assert.strictEqual(commonStub.callCount, 1);
    assert.deepEqual(resp, { response: true });
  });

  it('should call getAccount', async () => {
    const resp: any = await trading.getAccount('ZZZ999');

    const expectedArgs = [
      [
        true,
        'get',
        'accounts/ZZZ999',
      ],
    ];

    assert.deepEqual(commonStub.args, expectedArgs);
    assert.strictEqual(commonStub.callCount, 1);
    assert.deepEqual(resp, { response: true });
  });

  it('should call getAccountLines without a query string', async () => {
    const resp: any = await trading.getAccountLines('ZZZ999');

    const expectedArgs = [
      [
        true,
        'get',
        'accounts/ZZZ999/lines',
        undefined,
      ],
    ];

    assert.deepEqual(commonStub.args, expectedArgs);
    assert.strictEqual(commonStub.callCount, 1);
    assert.deepEqual(resp, { response: true });
  });

  it('should call getAccountLines with a query string', async () => {
    const resp: any = await trading.getAccountLines('ZZZ999', { cursor: 1 });

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

    assert.deepEqual(commonStub.args, expectedArgs);
    assert.strictEqual(commonStub.callCount, 1);
    assert.deepEqual(resp, { response: true });
  });

  it('should call getFees without a query string', async () => {
    const resp: any = await trading.getFees();

    const expectedArgs = [
      [
        true,
        'get',
        'fee_charges',
        undefined,
      ],
    ];

    assert.deepEqual(commonStub.args, expectedArgs);
    assert.strictEqual(commonStub.callCount, 1);
    assert.deepEqual(resp, { response: true });
  });

  it('should call getFees with a query string', async () => {
    const resp: any = await trading.getFees({ cursor: 1 });

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

    assert.deepEqual(commonStub.args, expectedArgs);
    assert.strictEqual(commonStub.callCount, 1);
    assert.deepEqual(resp, { response: true });
  });

  it('should call getFills without a query string', async () => {
    const resp: any = await trading.getFills();

    const expectedArgs = [
      [
        true,
        'get',
        'fills',
        undefined,
      ],
    ];

    assert.deepEqual(commonStub.args, expectedArgs);
    assert.strictEqual(commonStub.callCount, 1);
    assert.deepEqual(resp, { response: true });
  });

  it('should call getFills with a query string', async () => {
    const resp: any = await trading.getFills({ product_id: 'BTCAUD', oid: '123', cursor: 1 });

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

    assert.deepEqual(commonStub.args, expectedArgs);
    assert.strictEqual(commonStub.callCount, 1);
    assert.deepEqual(resp, { response: true });
  });

  it('should call getFill', async () => {
    const resp: any = await trading.getFill(9);

    const expectedArgs = [
      [
        true,
        'get',
        'fills/9',
      ],
    ];

    assert.deepEqual(commonStub.args, expectedArgs);
    assert.strictEqual(commonStub.callCount, 1);
    assert.deepEqual(resp, { response: true });
  });
});
