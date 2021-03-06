import { Common } from './common';
import { Account, AccountExternal, AccountLinePayload, AccountLineQueryString } from './interfaces/accounts.interface';
import { FeeQueryString, FeeResponse  } from './interfaces/fees.interface';
import { FeeStats } from './interfaces/feeStats.interface';
import { Fill, FillQueryString, FillResponse } from './interfaces/fills.interface';
import {
  Order,
  OrderCreate,
  OrderCreateSide,
  OrderCreateTimeInForce,
  OrderCreateType,
  OrderQueryString,
  OrderResponse,
} from './interfaces/orders.interface';
import { Products } from './interfaces/products.interface';
import { Token, TokenGenerate } from './interfaces/tokens.interface';
import { Transfer, TransferCreate, TransferCreateType, TransferQueryString, TransferResponse } from './interfaces/transfers.interface';
import { User, UserUpdate } from './interfaces/users.interface';

export class Trading {
  private common: Common;

  constructor(
    token: string,
    sandbox?: boolean,
  ) {
    this.common = new Common(sandbox, 'api', token);
  }

  public async getAccounts(): Promise<Account[]> {
    return this.common.request(true, 'get', 'accounts');
  }

  public async getAccountsExternal(): Promise<AccountExternal[]> {
    return this.common.request(true, 'get', 'accounts/external');
  }

  public async getAccount(accountNumber: string): Promise<Account> {
    return this.common.request(true, 'get', `accounts/${accountNumber}`);
  }

  public async getAccountLines(accountNumber: string, cursor?: number): Promise<AccountLinePayload> {
    const qs: AccountLineQueryString = {
      cursor,
    };

    const resp = await this.common.request(true, 'get', `accounts/${accountNumber}/lines`, qs, undefined, true);

    return this.common.returnCursor(resp);
  }

  public async getFees(cursor?: number): Promise<FeeResponse> {
    const qs: FeeQueryString = {
      cursor,
    };

    const resp = await this.common.request(true, 'get', 'fee_charges', qs, undefined, true);

    return this.common.returnCursor(resp);
  }

  public async getFeeStats(): Promise<FeeStats> {
    return this.common.request(true, 'get', 'fee_charges/stats');
  }

  public async getFills(productId?: string, oid?: string, cursor?: number): Promise<FillResponse> {
    const qs: FillQueryString = {
      product_id: productId,
      oid,
      cursor,
    };

    const resp = await this.common.request(true, 'get', 'fills', qs, undefined, true);

    return this.common.returnCursor(resp);
  }

  public async getFill(tid: string): Promise<Fill> {
    return this.common.request(true, 'get', `fills/${tid}`);
  }

  public async getOrders(cursor?: number): Promise<OrderResponse> {
    const qs: OrderQueryString = {
      cursor,
    };

    const resp = await this.common.request(true, 'get', 'orders', qs, undefined, true);

    return this.common.returnCursor(resp);
  }

  public async getOrdersAll(cursor?: number): Promise<OrderResponse> {
    const qs: OrderQueryString = {
      cursor,
    };

    const resp = await this.common.request(true, 'get', 'orders/all', qs, undefined, true);

    return this.common.returnCursor(resp);
  }

  public async postOrderCreate(
    productId: string,
    side: OrderCreateSide,
    size: string,
    price: string,
    type: OrderCreateType,
    timeInForce?: OrderCreateTimeInForce,
  ): Promise<Order> {
    const data: OrderCreate = {
      product_id: productId,
      side,
      size,
      price,
      type,
      time_in_force: timeInForce,
    };

    return this.common.request(true, 'post', 'orders', null, data);
  }

  public async getOrder(oid: number): Promise<Order> {
    return this.common.request(true, 'get', `orders/${oid}`);
  }

  public async deleteCancelOrder(oid: number): Promise<Order> {
    return this.common.request(true, 'delete', `orders/${oid}`);
  }

  public async getProducts(): Promise<Products[]> {
    return this.common.request(true, 'get', 'products');
  }

  public async getProduct(id: string): Promise<Products> {
    return this.common.request(true, 'get', `products/${id}`);
  }

  public async getTokens(): Promise<Token[]> {
    return this.common.request(true, 'get', 'tokens');
  }

  public async postTokenGenerate(name: string): Promise<Token> {
    const data: TokenGenerate = {
      name,
    };

    return this.common.request(true, 'post', 'tokens', null, data);
  }

  public async deleteTokenRevoke(id: string): Promise<Token> {
    return this.common.request(true, 'delete', `tokens/${id}`);
  }

  public async getTransfers(cursor?: number): Promise<TransferResponse> {
    const qs: TransferQueryString = {
      cursor,
    };

    const resp = await this.common.request(true, 'get', 'transfers', qs, undefined, true);

    return this.common.returnCursor(resp);
  }

  public async postTransfersCreate(
    type: TransferCreateType,
    accountNumber: string,
    counterpartyId: string,
    amount: string,
  ): Promise<Transfer> {
    const data: TransferCreate = {
      type,
      account_number: accountNumber,
      counterparty_id: counterpartyId,
      amount,
    };

    return this.common.request(true, 'post', 'transfers', null, data);
  }

  public async getUser(): Promise<User> {
    return this.common.request(true, 'get', 'users/current');
  }

  public async patchUpdateUser(homeCurrencyCode: string): Promise<User> {
    const data: UserUpdate = {
      home_currency_code: homeCurrencyCode,
    };

    return this.common.request(true, 'patch', 'users/current', null, data);
  }
}
