import { CoinJarExchange } from '../../src/index';

const cje = new CoinJarExchange();

/**
 * Get Market Stats
 *
 * Id: BTCAUD
 */
cje.data().getMarketStats('BTCAUD')
  .then(marketstats => {
    console.log(marketstats);
  });

/**
 * Get Market Stats
 *
 * Id: BTCAUD
 * At: Hour Ago
 */
const currentTimestamp = Date.now();
const hour = 3600000;

const hourAgo = Math.floor((currentTimestamp - hour) / 1000);

cje.data().getMarketStats('BTCAUD', hourAgo)
  .then(marketStats => {
    console.log(marketStats);
  });
