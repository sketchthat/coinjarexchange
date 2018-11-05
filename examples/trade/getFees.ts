// Import Keys
import * as fs from 'fs';
const keys = JSON.parse(fs.readFileSync('./examples/keys.json', 'utf8'));

// Start Example
import { CoinJarExchange } from '../../src/index';

const cje = new CoinJarExchange(keys.token);

/**
 * Get Fees
 */
cje.trading().getFees()
  .then(fees => {

    console.log(fees);
  });

/**
 * Get Fees
 *
 * Cursor: Second Page
 */
cje.trading().getFees()
  .then(async firstFees => {
    const cursor = firstFees.cursor;

    const fees = await cje.trading().getFees(cursor);

    console.log(fees);
  });
