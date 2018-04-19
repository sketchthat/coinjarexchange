// Run `ts-node data.ts` to see example

import { CoinJarExchange } from '../dist/src/index';

const cje = new CoinJarExchange();

// Get Candles - Weekly intervals
cje.data().getCandles('BTCAUD', {
    before: 1524108721,
    after: 1523714400,
    interval: '1w',
  })
  .then(resp => {
    console.log('getCandles Response')
    console.log(resp);
  })
  .catch(err => {
    console.error('getCandles Error');
    console.error(err);
  });

// Get full orderbook of BTCAUD
cje.data().getOrderbook('BTCAUD', { level: 1 })
  .then(resp => {
    console.log('getOrderbook Response');
    console.log(resp);
  })
  .catch(err => {
    console.error('getOrderbook Error')
    console.error(err);
  });
