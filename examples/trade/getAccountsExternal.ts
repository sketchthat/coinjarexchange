// Import Keys
import * as fs from 'fs';
const keys = JSON.parse(fs.readFileSync('./examples/keys.json', 'utf8'));

// Start Example
import { CoinJarExchange } from '../../src/index';

const cje = new CoinJarExchange(keys.token);

/**
 * Get Accounts External
 */
cje.trading().getAccountsExternal()
  .then(accountsExternal => {
    console.log(accountsExternal);
  });
