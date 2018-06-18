'use strict';

import { assert } from 'chai';
import { SinonStub, stub } from 'sinon';

import Common from './common';
import Trading from './trading';

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
      async () => {
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
    commonStub.onCall(0).returns({
      headers: {
        'x-cjx-cursor': 10,
      },
      body: true,
    });

    const resp: any = await trading.getAccountLines('ZZZ999');

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

    assert.deepEqual(commonStub.args, expectedArgs);
    assert.strictEqual(commonStub.callCount, 1);
    assert.deepEqual(resp, { cursor: 10, payload: true });
  });

  it('should call getAccountLines with a query string', async () => {
    commonStub.onCall(0).returns({
      headers: {
        'x-cjx-cursor': 15,
      },
      body: true,
    });

    const resp: any = await trading.getAccountLines('ZZZ999', { cursor: 1 });

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

    assert.deepEqual(commonStub.args, expectedArgs);
    assert.strictEqual(commonStub.callCount, 1);
    assert.deepEqual(resp, { cursor: 15, payload: true });
  });

  it('should call getFees without a query string', async () => {
    commonStub.onCall(0).returns({
      headers: {
        'x-cjx-cursor': 10,
      },
      body: true,
    });

    const resp: any = await trading.getFees();

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

    assert.deepEqual(commonStub.args, expectedArgs);
    assert.strictEqual(commonStub.callCount, 1);
    assert.deepEqual(resp, { cursor: 10, payload: true });
  });

  it('should call getFees with a query string', async () => {
    commonStub.onCall(0).returns({
      headers: {
        'x-cjx-cursor': 15,
      },
      body: true,
    });

    const resp: any = await trading.getFees({ cursor: 1 });

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

    assert.deepEqual(commonStub.args, expectedArgs);
    assert.strictEqual(commonStub.callCount, 1);
    assert.deepEqual(resp, { cursor: 15, payload: true });
  });

  it('should call getFills without a query string', async () => {
    commonStub.onCall(0).returns({
      headers: {
        'x-cjx-cursor': 10,
      },
      body: true,
    });

    const resp: any = await trading.getFills();

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

    assert.deepEqual(commonStub.args, expectedArgs);
    assert.strictEqual(commonStub.callCount, 1);
    assert.deepEqual(resp, { cursor: 10, payload: true });
  });

  it('should call getFills with a query string', async () => {
    commonStub.onCall(0).returns({
      headers: {
        'x-cjx-cursor': 15,
      },
      body: true,
    });

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
        undefined,
        true,
      ],
    ];

    assert.deepEqual(commonStub.args, expectedArgs);
    assert.strictEqual(commonStub.callCount, 1);
    assert.deepEqual(resp, { cursor: 15, payload: true });
  });

  it('should call getFill', async () => {
    const resp: any = await trading.getFill('9');

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

  it('should call getOrders without a query string', async () => {
    commonStub.onCall(0).returns({
      headers: {
        'x-cjx-cursor': 10,
      },
      body: true,
    });

    const resp: any = await trading.getOrders();

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

    assert.deepEqual(commonStub.args, expectedArgs);
    assert.strictEqual(commonStub.callCount, 1);
    assert.deepEqual(resp, { cursor: 10, payload: true });
  });

  it('should call getOrders with a query string', async () => {
    commonStub.onCall(0).returns({
      headers: {
        'x-cjx-cursor': 15,
      },
      body: true,
    });

    const resp: any = await trading.getOrders({ cursor: 1 });

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

    assert.deepEqual(commonStub.args, expectedArgs);
    assert.strictEqual(commonStub.callCount, 1);
    assert.deepEqual(resp, { cursor: 15, payload: true });
  });

  it('should call getOrdersAll without a query string', async () => {
    commonStub.onCall(0).returns({
      headers: {
        'x-cjx-cursor': 10,
      },
      body: true,
    });

    const resp: any = await trading.getOrdersAll();

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

    assert.deepEqual(commonStub.args, expectedArgs);
    assert.strictEqual(commonStub.callCount, 1);
    assert.deepEqual(resp, { cursor: 10, payload: true });
  });

  it('should call getOrdersAll with a query string', async () => {
    commonStub.onCall(0).returns({
      headers: {
        'x-cjx-cursor': 15,
      },
      body: true,
    });

    const resp: any = await trading.getOrdersAll({ cursor: 1 });

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

    assert.deepEqual(commonStub.args, expectedArgs);
    assert.strictEqual(commonStub.callCount, 1);
    assert.deepEqual(resp, { cursor: 15, payload: true });
  });

  it('should call postOrderCreate', async () => {
    const args = {
      product_id: 'BTCAUD',
      type: 'LMT',
      side: 'buy',
      price: '1750.00',
      size: '0.25',
      time_in_force: 'GTC',
    };

    const resp: any = await trading.postOrderCreate(args);

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

    assert.deepEqual(commonStub.args, expectedArgs);
    assert.strictEqual(commonStub.callCount, 1);
    assert.deepEqual(resp, { response: true });
  });

  it('should call getOrder', async () => {
    const resp: any = await trading.getOrder(55);

    const expectedArgs = [
      [
        true,
        'get',
        'orders/55',
      ],
    ];

    assert.deepEqual(commonStub.args, expectedArgs);
    assert.strictEqual(commonStub.callCount, 1);
    assert.deepEqual(resp, { response: true });
  });

  it('should call deleteCancelOrder', async () => {
    const resp: any = await trading.deleteCancelOrder(55);

    const expectedArgs = [
      [
        true,
        'delete',
        'orders/55',
      ],
    ];

    assert.deepEqual(commonStub.args, expectedArgs);
    assert.strictEqual(commonStub.callCount, 1);
    assert.deepEqual(resp, { response: true });
  });

  it('should call getProducts', async () => {
    const resp: any = await trading.getProducts();

    const expectedArgs = [
      [
        true,
        'get',
        'products',
      ],
    ];

    assert.deepEqual(commonStub.args, expectedArgs);
    assert.strictEqual(commonStub.callCount, 1);
    assert.deepEqual(resp, { response: true });
  });

  it('should call getProduct', async () => {
    const resp: any = await trading.getProduct('BTCAUD');

    const expectedArgs = [
      [
        true,
        'get',
        'products/BTCAUD',
      ],
    ];

    assert.deepEqual(commonStub.args, expectedArgs);
    assert.strictEqual(commonStub.callCount, 1);
    assert.deepEqual(resp, { response: true });
  });

  it('should call getTokens', async () => {
    const resp: any = await trading.getTokens();

    const expectedArgs = [
      [
        true,
        'get',
        'tokens',
      ],
    ];

    assert.deepEqual(commonStub.args, expectedArgs);
    assert.strictEqual(commonStub.callCount, 1);
    assert.deepEqual(resp, { response: true });
  });

  it('should call postTokenGenerate', async () => {
    const resp: any = await trading.postTokenGenerate({ name: 'My New Token' });

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

    assert.deepEqual(commonStub.args, expectedArgs);
    assert.strictEqual(commonStub.callCount, 1);
    assert.deepEqual(resp, { response: true });
  });

  it('should call deleteTokenRevoke', async () => {
    const resp: any = await trading.deleteTokenRevoke('ZZ55');

    const expectedArgs = [
      [
        true,
        'delete',
        'tokens/ZZ55',
      ],
    ];

    assert.deepEqual(commonStub.args, expectedArgs);
    assert.strictEqual(commonStub.callCount, 1);
    assert.deepEqual(resp, { response: true });
  });

  it('should call getTransfers without query string', async () => {
    commonStub.onCall(0).returns({
      headers: {
        'x-cjx-cursor': 10,
      },
      body: true,
    });

    const resp: any = await trading.getTransfers();

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

    assert.deepEqual(commonStub.args, expectedArgs);
    assert.strictEqual(commonStub.callCount, 1);
    assert.deepEqual(resp, { cursor: 10, payload: true });
  });

  it('should call getTransfers with query string', async () => {
    commonStub.onCall(0).returns({
      headers: {
        'x-cjx-cursor': 15,
      },
      body: true,
    });

    const resp: any = await trading.getTransfers({ cursor: 1 });

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

    assert.deepEqual(commonStub.args, expectedArgs);
    assert.strictEqual(commonStub.callCount, 1);
    assert.deepEqual(resp, { cursor: 15, payload: true });
  });

  it('should call postTransfersCreate', async () => {
    const args = {
      type: 'deposit',
      account_number: 'XRP1000',
      counterparty_id: '09279dff-d62d-44f6-97a0-0432ae235d24',
      amount: '432.33',
    };

    const resp: any = await trading.postTransfersCreate(args);

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

    assert.deepEqual(commonStub.args, expectedArgs);
    assert.strictEqual(commonStub.callCount, 1);
    assert.deepEqual(resp, { response: true });
  });

  it('should call getUser', async () => {
    const resp: any = await trading.getUser();

    const expectedArgs = [
      [
        true,
        'get',
        'users/current',
      ],
    ];

    assert.deepEqual(commonStub.args, expectedArgs);
    assert.strictEqual(commonStub.callCount, 1);
    assert.deepEqual(resp, { response: true });
  });

  it('should call patchUpdateUser', async () => {
    const resp: any = await trading.patchUpdateUser({ home_currency_code: 'AUD' });

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

    assert.deepEqual(commonStub.args, expectedArgs);
    assert.strictEqual(commonStub.callCount, 1);
    assert.deepEqual(resp, { response: true });
  });
});
