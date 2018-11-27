[![Build Status](https://travis-ci.org/sketchthat/coinjarexchange.svg?branch=master)](https://travis-ci.org/sketchthat/coinjarexchange) [![Coverage Status](https://coveralls.io/repos/github/sketchthat/coinjarexchange/badge.svg?branch=master)](https://coveralls.io/github/sketchthat/coinjarexchange?branch=master)
![Dependencies](https://david-dm.org/sketchthat/coinjarexchange.svg)

# CoinJar Exchange Wrapper

Typescript / Node wrapper for the Data and Trading APIs offered by [CoinJar Exchange](https://exchange.coinjar.com)

## Setup

Install the dependancies with `npm` or `yarn`.

```
npm install coinjarexchange --save
yarn add coinjarexchange
```

### API Key

In order to utilise the `trading-api` you'll need to generate an [API Key](https://exchange.coinjar.com/api).

## Usage

The API wrapper exposes a [Data](https://docs.exchange.coinjar.com/data-api/) and a [Trading](https://docs.exchange.coinjar.com/trading-api/) method, which contain each of the endpoint functions.

### Exposed Functions
- `Trading` methods are within [`trading.ts`](https://github.com/sketchthat/coinjarexchange/blob/master/src/trading.ts)
- `Data` methods are within [`data.ts`](https://github.com/sketchthat/coinjarexchange/blob/master/src/data.ts)

### Examples

Examples for usage of each function can be found within the [examples folder](https://github.com/sketchthat/coinjarexchange/tree/master/examples/README.md)

```typescript
import { CoinJarExchange } from 'coinjarexchange';

const cje = new CoinJarExchange('MyApiKey');

// Access Data API Methods
cje.data().getProductTicker('BTCAUD')
  .then(resp => {
    console.log(resp);
  });

/*
{
  volume: '31.45000000',
  transition_time: '2018-04-16T15:50:00Z',
  status: 'continuous',
  session: 1220,
  prev_close: '10190.00000000',
  last: '10190.00000000',
  current_time: '2018-04-16T10:11:16.166692Z',
  bid: '10030.00000000',
  ask: '10240.00000000'
}
*/

// Access Trading API Methods
cje.trading().getFills()
  .then(resp => {
    console.log(resp);
  });

/*
{
  cursor: 0,
  payload: [
    {
      tid: 2,
      oid: 225,
      product_id: 'LTCAUD',
      price: '100.00000000',
      size: '5.00000000',
      value: '500.00',
      side: 'buy',
      liquidity: 'taker',
      timestamp: '2018-04-16T00:00:50.154Z'
    },
    {
      tid: 1,
      oid: 112,
      product_id: 'LTCAUD',
      price: '164.00000000',
      size: '10.00000000',
      value: '1640.00',
      side: 'buy',
      liquidity: 'taker',
      timestamp: '2018-03-12T00:05:59.339Z'
    }
  ]
}
*/
```


