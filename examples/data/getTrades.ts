import { CoinJarExchange } from '../../src/index';

const cje = new CoinJarExchange();

/**
 * Get Trades
 *
 * Id: BTCAUD
 */
cje.data().getTrades('BTCAUD')
  .then(trades => {
    console.log(trades);
  });

/**
 * Get Trades
 *
 * Id: BTCAUD
 * Limit: 2
 * Before: Hour before (Variable)
 * After: Hour later (Variable)
 */
const currentTimestamp = Date.now();
const hour = 3600000;

const hourAgo = Math.floor((currentTimestamp - hour) / 1000);
const hourLater = Math.floor((currentTimestamp + hour) / 1000);

cje.data().getTrades('BTCAUD', 2, hourAgo, hourLater)
  .then(trades => {
    console.log(trades);
  });
