// Import Keys
import * as fs from 'fs';
const keys = JSON.parse(fs.readFileSync('./examples/keys.json', 'utf8'));

// Start Example
import { CoinJarExchange } from '../../src/index';

const cje = new CoinJarExchange(keys.token);

/**
 * Delete Token Revoke
 *
 * Id: 1d0bf254-33c8-4626-ad38-b956983227be
 */
cje.trading().deleteTokenRevoke('1d0bf254-33c8-4626-ad38-b956983227be')
  .then(resp => {
    console.log(resp);
  });
