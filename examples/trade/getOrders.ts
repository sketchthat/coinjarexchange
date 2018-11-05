// Import Keys
import * as fs from 'fs';
const keys = JSON.parse(fs.readFileSync('./examples/keys.json', 'utf8'));

// Start Example
import { CoinJarExchange } from '../../src/index';

const cje = new CoinJarExchange(keys.token);

/**
 * Get Orders
 */
cje.trading().getOrders()
  .then(orders => {
    console.log(orders);
  });

/**
 * Get Orders
 *
 * Cursor: Next Page
 */
cje.trading().getOrders()
  .then(async ordersPayload => {
    const cursor = ordersPayload.cursor;

    const orders = await cje.trading().getOrders(cursor);

    console.log(orders);
  });
