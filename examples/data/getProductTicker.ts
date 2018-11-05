import { CoinJarExchange } from '../../src/index';

const cje = new CoinJarExchange();

/**
 * Get Product Ticker
 *
 * Id: BTCAUD
 */
cje.data().getProductTicker('BTCAUD')
  .then(productTicker => {
    console.log(productTicker);
  });
