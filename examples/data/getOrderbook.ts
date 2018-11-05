import { CoinJarExchange } from '../../src/index';

const cje = new CoinJarExchange();

/**
 * Get Orderbook
 *
 * Id: BTCAUD
 */
cje.data().getOrderbook('BTCAUD')
  .then(orderbook => {
    console.log(orderbook);
  });

/**
 * Get Orderbook
 *
 * Id: BTCAUD
 * Level: 3
 */
cje.data().getOrderbook('BTCAUD', 3)
  .then(orderbook => {
    console.log(orderbook);
  });
