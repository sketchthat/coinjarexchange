// Import Keys
import * as fs from 'fs';
const keys = JSON.parse(fs.readFileSync('./examples/keys.json', 'utf8'));

// Start Example
import { CoinJarExchange } from '../../src/index';

const cje = new CoinJarExchange(keys.token);

/**
 * Post Tokens Generate
 */
cje.trading().postTokenGenerate('Sample Token')
  .then(resp => {
    console.log(resp);
  });
