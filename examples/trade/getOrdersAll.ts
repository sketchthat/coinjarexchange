// Import Keys
import * as fs from 'fs';
const keys = JSON.parse(fs.readFileSync('./examples/keys.json', 'utf8'));

// Start Example
import { CoinJarExchange } from '../../src/index';

const cje = new CoinJarExchange(keys.token);

/**
 * Get Orders All
 */
cje.trading().getOrdersAll()
  .then(ordersAll => {
    console.log(ordersAll);
  });

/**
 * Get Orders All
 *
 * Cursor: Next Page
 */
cje.trading().getOrdersAll()
  .then(async ordersPayload => {
    const cursor = ordersPayload.cursor;

    const ordersAll = await cje.trading().getOrdersAll(cursor);

    console.log(ordersAll);
  });
