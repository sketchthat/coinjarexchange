'use strict';

import { assert } from 'chai';
import { SinonStub, stub } from 'sinon';

import { CoinJarExchange } from './index';

import * as rp from 'request-promise';

describe('Index', () => {
  let rpStub: SinonStub;

  before(() => {
    rpStub = stub(rp, 'Request');
  });

  beforeEach(() => {
    rpStub.reset();
  });

  after(() => {
    rpStub.restore();
  });

  describe('Sandbox', () => {
    it('should call sandbox data request', async () => {
      rpStub.resolves({ response: true });

      const cje = new CoinJarExchange('secretToken', true);

      const resp: any = await cje.data().getTrades('someTradeId');

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

      assert.deepEqual(rpStub.args, expectedArgs);
      assert.strictEqual(rpStub.callCount, 1);
      assert.deepEqual(resp, { response: true });
    });

    it('should call sandbox trading request', async () => {
      rpStub.resolves({ response: true });

      const cje = new CoinJarExchange('secretToken', true);

      const resp: any = await cje.trading().getAccount('someAccountId');

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

      assert.deepEqual(rpStub.args, expectedArgs);
      assert.strictEqual(rpStub.callCount, 1);
      assert.deepEqual(resp, { response: true });
    });
  });

  describe('Production', () => {
    it('should call production data request', async () => {
      rpStub.resolves({ response: true });

      const cje = new CoinJarExchange('secretToken');

      const resp: any = await cje.data().getTrades('someTradeId');

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

      assert.deepEqual(rpStub.args, expectedArgs);
      assert.strictEqual(rpStub.callCount, 1);
      assert.deepEqual(resp, { response: true });
    });

    it('should call production trading request', async () => {
      rpStub.resolves({ response: true });

      const cje = new CoinJarExchange('secretToken');

      const resp: any = await cje.trading().getAccount('someAccountId');

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

      assert.deepEqual(rpStub.args, expectedArgs);
      assert.strictEqual(rpStub.callCount, 1);
      assert.deepEqual(resp, { response: true });
    });
  });
});
