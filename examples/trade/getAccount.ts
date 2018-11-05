// Import Keys
import * as fs from 'fs';
const keys = JSON.parse(fs.readFileSync('./examples/keys.json', 'utf8'));

// Start Example
import { CoinJarExchange } from '../../src/index';

const cje = new CoinJarExchange(keys.token);

/**
 * Get Account
 *
 * Account Number: Variable (Last of accounts)
 */
cje.trading().getAccounts()
  .then(async accounts => {
    const lastAccount = accounts.pop();

    const account = cje.trading().getAccount(lastAccount.number);
    console.log(account);
  });
