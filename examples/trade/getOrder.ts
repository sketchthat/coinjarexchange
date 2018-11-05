// Import Keys
import * as fs from 'fs';
const keys = JSON.parse(fs.readFileSync('./examples/keys.json', 'utf8'));

// Start Example
import { CoinJarExchange } from '../../src/index';

const cje = new CoinJarExchange(keys.token);

/**
 * Get Order
 *
 * Order Id: 354700221
 */
cje.trading().getOrder(354700221)
  .then(order => {
    console.log(order);
  });
