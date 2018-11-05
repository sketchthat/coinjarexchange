// Import Keys
import * as fs from 'fs';
const keys = JSON.parse(fs.readFileSync('./examples/keys.json', 'utf8'));

// Start Example
import { CoinJarExchange } from '../../src/index';

const cje = new CoinJarExchange(keys.token);

/**
 * Post Transfer Create
 *
 * Type: Withdrawal
 * Account Number: 'CJX100002312BTC // Exchange Account Number
 * Counterparty Id: 25cdb05b-405c-4ee5-ad4f-38c61c9c684c // External UUID
 * Amount: 0.1
 */
cje.trading().postTransfersCreate('withdrawal', 'CJX100002312BTC', ' 25cdb05b-405c-4ee5-ad4f-38c61c9c684c', '0.1')
  .then(resp => {
    console.log(resp);
  });

/**
 * Post Transfer Create
 *
 * Type: Deposit
 * Account Number: 'CJX100002312BTC // Exchange Account Number
 * Counterparty Id: 25cdb05b-405c-4ee5-ad4f-38c61c9c684c // External UUID
 * Amount: 0.2
 */
cje.trading().postTransfersCreate('withdrawal', 'CJX100002312BTC', ' 25cdb05b-405c-4ee5-ad4f-38c61c9c684c', '0.2')
  .then(resp => {
    console.log(resp);
  });

cje.trading().postTransfersCreate('deposit', 'CJX100000173AUD', '72111a7f-8f2f-41bf-acf1-007e4f02ecce', '6.57')
  .then(resp => {
    console.log(resp);
  });
