// Import Keys
import * as fs from 'fs';
const keys = JSON.parse(fs.readFileSync('./examples/keys.json', 'utf8'));

// Start Example
import { CoinJarExchange } from '../../src/index';

// Sandbox Mode
const cje = new CoinJarExchange(keys.sandbox, true);

/**
 * Post Sell Order - Limit
 *
 * ProductId: BTCAUD
 * Side: Sell
 * Volume: 0.1
 * Price: $9,000
 * Type: LMT
 */
cje.trading().postOrderCreate('BTCAUD', 'sell', '0.1', '9000', 'LMT')
  .then(resp => {
    console.log(resp);
  });

/**
 * Post Sell Order - Market
 *
 * ProductId: BTCAUD
 * Side: Sell
 * Volume: 0.1
 * Type: MKT
 */
cje.trading().postOrderCreate('BTCAUD', 'sell', '0.1', null, 'MKT')
  .then(resp => {
    console.log(resp);
  });

/**
 * Post Sell Order - Limit
 *
 * ProductId: BTCAUD
 * Side: Sell
 * Volume: 0.1
 * Price: $9,500
 * Type: MKT
 * Time In Force: Immediate or Cancel
 */
cje.trading().postOrderCreate('BTCAUD', 'sell', '0.1', '9500', 'LMT', 'IOC')
  .then(resp => {
    console.log(resp);
  });

/**
 * Post Sell Order - Limit
 *
 * ProductId: BTCAUD
 * Side: Sell
 * Volume: 0.1
 * Price: $9,500
 * Type: MKT
 * Time In Force: Good til Cancel (Default)
 */
cje.trading().postOrderCreate('BTCAUD', 'sell', '0.1', '9500', 'LMT', 'GTC')
  .then(resp => {
    console.log(resp);
  });

/**
 * Post Buy Order - Limit
 *
 * ProductId: BTCAUD
 * Side: Buy
 * Volume: 0.1
 * Price: $9,500
 * Type: MKT
 * Time In Force: Maker or Cancel
 */
cje.trading().postOrderCreate('BTCAUD', 'buy', '0.1', '9400', 'LMT', 'MOC')
  .then(resp => {
    console.log(resp);
  });
