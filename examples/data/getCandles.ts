import { CoinJarExchange } from '../../src/index';

const cje = new CoinJarExchange();

/**
 * Get Candles
 *
 * Id: BTCAUD
 * Before: Hour ago (Variable)
 * After: 30 minutes ago (Variable)
 * Interval: 5m
 */
const currentTimestamp = Date.now();
const hour = 3600000;

const hourAgo = Math.floor((currentTimestamp - hour) / 1000);
const currentTime = Math.floor((currentTimestamp - (hour / 2)) / 1000);

cje.data().getCandles('BTCAUD', currentTime, hourAgo, '5m')
  .then(candles => {
    console.log(candles);
  });
