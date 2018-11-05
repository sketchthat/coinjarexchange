// Import Keys
import * as fs from 'fs';
const keys = JSON.parse(fs.readFileSync('./examples/keys.json', 'utf8'));

// Start Example
import { CoinJarExchange } from '../../src/index';

const cje = new CoinJarExchange(keys.token);

/**
 * Get Transfers
 */
cje.trading().getTransfers()
  .then(transfers => {
    console.log(transfers);
  });

/**
 * Get Transfers
 *
 * Cursor: Next Page
 */
cje.trading().getTransfers()
  .then(async transfersPayload => {
    const cursor = transfersPayload.cursor;

    const transfers = await cje.trading().getTransfers(cursor);

    console.log(transfers);
  });
