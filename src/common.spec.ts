'use strict';

import { assert } from 'chai';
import { sinon, SinonStub, stub } from 'sinon';
import * as sinonAsPromised from 'sinon-as-promised';

import { Common } from './common';

import * as rp from 'request-promise';

describe('Common', () => {
  let rpStub: SinonStub;
  let common: Common;

  before(() => {
    common = new Common('https://data.exchange.coinjar-sandbox.com', 'MySecretToken');
    rpStub = stub(rp, 'Request');
  });

  beforeEach(() => {
    rpStub.reset();
  });

  after(() => {
    rpStub.restore();
  });

  it('should call request without auth', async () => {
    rpStub.resolves({ response: true });

    const resp: any = await common.request(false, 'get', 'someMethod');

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

    assert.deepEqual(rpStub.args, expectedArgs);
    assert.strictEqual(rpStub.callCount, 1);
    assert.deepEqual(resp, { response: true });
  });

  it('should call request with auth', async () => {
    rpStub.resolves({ response: true });

    const resp: any = await common.request(true, 'get', 'someMethod');

    const expectedArgs = [
      [
        {
          uri: 'https://data.exchange.coinjar-sandbox.com/someMethod',
          json: true,
          method: 'get',
          headers: {
            Authorization: 'Token token=\"MySecretToken\"',
          },
          callback: undefined,
        },
      ],
    ];

    assert.deepEqual(rpStub.args, expectedArgs);
    assert.strictEqual(rpStub.callCount, 1);
    assert.deepEqual(resp, { response: true });
  });

  it('should call request with query string', async () => {
    rpStub.resolves({ response: true });

    const resp: any = await common.request(false, 'get', 'someMethod', { cursor: 1 });

    const expectedArgs = [
      [
        {
          uri: 'https://data.exchange.coinjar-sandbox.com/someMethod',
          json: true,
          method: 'get',
          qs: {
            cursor: 1,
          },
          callback: undefined,
        },
      ],
    ];

    assert.deepEqual(rpStub.args, expectedArgs);
    assert.strictEqual(rpStub.callCount, 1);
    assert.deepEqual(resp, { response: true });
  });

  it('should call request with post data', async () => {
    rpStub.resolves({ response: true });

    const resp: any = await common.request(false, 'post', 'someMethod', null, { buy: 504.54 });

    const expectedArgs = [
      [
        {
          uri: 'https://data.exchange.coinjar-sandbox.com/someMethod',
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

    assert.deepEqual(rpStub.args, expectedArgs);
    assert.strictEqual(rpStub.callCount, 1);
    assert.deepEqual(resp, { response: true });
  });

  it('should call request with post data', async () => {
    rpStub.resolves({ response: true });

    const resp: any = await common.request(false, 'post', 'someMethod', null, { buy: 504.54 });

    const expectedArgs = [
      [
        {
          uri: 'https://data.exchange.coinjar-sandbox.com/someMethod',
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

    assert.deepEqual(rpStub.args, expectedArgs);
    assert.strictEqual(rpStub.callCount, 1);
    assert.deepEqual(resp, { response: true });
  });
});
