// Import Keys
import * as fs from 'fs';
const keys = JSON.parse(fs.readFileSync('./examples/keys.json', 'utf8'));

// Start Example
import { CoinJarExchange } from '../../src/index';

const cje = new CoinJarExchange(keys.sandbox, true); // Test in Sandbox until 1-Dec-2018

/**
 * Get Fee Stats
 */
cje.trading().getFeeStats()
  .then(stats => {
    console.log(stats);
  });
