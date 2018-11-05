// Import Keys
import * as fs from 'fs';
const keys = JSON.parse(fs.readFileSync('./examples/keys.json', 'utf8'));

// Start Example
import { CoinJarExchange } from '../../src/index';

const cje = new CoinJarExchange(keys.token);

/**
 * Get Account Lines
 *
 * Account Number: Variable (Last of accounts)
 */
cje.trading().getAccounts()
  .then(async accounts => {
    const account = accounts[0];

    const accountLinePayload = await cje.trading().getAccountLines(account.number);

    console.log(accountLinePayload);
  });

/**
 * Get Account Lines
 *
 * Account Number: Variable (First of accounts)
 * Cursor: Second Page
 */
cje.trading().getAccounts()
  .then(async accounts => {
    const firstAccount = accounts[0];

    const accountLinePayload = await cje.trading().getAccountLines(firstAccount.number);
    const cursor = accountLinePayload.cursor;

    const nextPage = await cje.trading().getAccountLines(firstAccount.number, cursor);

    console.log(nextPage);
  });
