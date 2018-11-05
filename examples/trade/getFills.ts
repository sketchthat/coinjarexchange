// Import Keys
import * as fs from 'fs';
const keys = JSON.parse(fs.readFileSync('./examples/keys.json', 'utf8'));

// Start Example
import { CoinJarExchange } from '../../src/index';

const cje = new CoinJarExchange(keys.token);

/**
 * Get Fills
 */
cje.trading().getFills()
  .then(fills => {
    console.log(fills);
  });

/**
 * Get Fills
 *
 * Cursor: Next Page
 */
cje.trading().getFills()
  .then(async firstFills => {
    const cursor = firstFills.cursor;

    const fills = await cje.trading().getFills(null, null, cursor);

    console.log(fills);
  });

/**
 * Get Fills
 *
 * ProductId: BTCAUD
 */
cje.trading().getFills('BTCAUD')
  .then(async fills => {
    console.log(fills);
  });

/**
 * Get Fills
 *
 * ProductId: 13000111
 */
cje.trading().getFills(null, '13000111')
  .then(async fills => {
    console.log(fills);
  });
