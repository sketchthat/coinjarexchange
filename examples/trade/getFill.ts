// Import Keys
import * as fs from 'fs';
const keys = JSON.parse(fs.readFileSync('./examples/keys.json', 'utf8'));

// Start Example
import { CoinJarExchange } from '../../src/index';

const cje = new CoinJarExchange(keys.token);

/**
 * Get Fill
 *
 * TID: 26001
 */
cje.trading().getFill('26001')
  .then(fill => {
    console.log(fill);
  });
