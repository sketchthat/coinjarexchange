import Common from './common';
import { Account, AccountExternal, AccountLinePayload, AccountLineQueryString } from './interfaces/accounts.interface';
import { FeeQueryString, FeeResponse  } from './interfaces/fees.interface';
import { Fill, FillQueryString, FillResponse } from './interfaces/fills.interface';
import { Order, OrderCreate, OrderQueryString, OrderResponse } from './interfaces/orders.interface';
import { Products } from './interfaces/products.interface';
import { Token, TokenGenerate } from './interfaces/tokens.interface';
import { Transfer, TransferCreate, TransferQueryString, TransferResponse } from './interfaces/transfers.interface';
import { User, UserUpdate } from './interfaces/users.interface';

class Trading {
  private common: Common;

  constructor(
    token: string,
    sandbox?: boolean,
  ) {
    this.common = new Common(sandbox, 'api', token);
  }

  public async getAccounts(): Promise<Account[]> {
    return this.common.request(true, 'get', `accounts`);
  }

  public async getAccountsExternal(): Promise<AccountExternal[]> {
    return this.common.request(true, 'get', `accounts/external`);
  }

  public async getAccount(accountNumber: string): Promise<Account> {
    return this.common.request(true, 'get', `accounts/${accountNumber}`);
  }

  public async getAccountLines(accountNumber: string, qs?: AccountLineQueryString): Promise<AccountLinePayload> {
    const resp = await this.common.request(true, 'get', `accounts/${accountNumber}/lines`, qs, undefined, true);

    return this.common.returnCursor(resp);
  }

  public async getFees(qs?: FeeQueryString): Promise<FeeResponse> {
    const resp = await this.common.request(true, 'get', `fee_charges`, qs, undefined, true);

    return this.common.returnCursor(resp);
  }

  public async getFills(qs?: FillQueryString): Promise<FillResponse> {
    const resp = await this.common.request(true, 'get', `fills`, qs, undefined, true);

    return this.common.returnCursor(resp);
  }

  public async getFill(tid: string): Promise<Fill> {
    return this.common.request(true, 'get', `fills/${tid}`);
  }

  public async getOrders(qs?: OrderQueryString): Promise<OrderResponse> {
    const resp = await this.common.request(true, 'get', `orders`, qs, undefined, true);

    return this.common.returnCursor(resp);
  }

  public async getOrdersAll(qs?: OrderQueryString): Promise<OrderResponse> {
    const resp = await this.common.request(true, 'get', `orders/all`, qs, undefined, true);

    return this.common.returnCursor(resp);
  }

  public async postOrderCreate(data: OrderCreate): Promise<Order> {
    return this.common.request(true, 'post', `orders`, null, data);
  }

  public async getOrder(oid: number): Promise<Order> {
    return this.common.request(true, 'get', `orders/${oid}`);
  }

  public async deleteCancelOrder(oid: number): Promise<Order> {
    return this.common.request(true, 'delete', `orders/${oid}`);
  }

  public async getProducts(): Promise<Products[]> {
    return this.common.request(true, 'get', `products`);
  }

  public async getProduct(id: string): Promise<Products> {
    return this.common.request(true, 'get', `products/${id}`);
  }

  public async getTokens(): Promise<Token[]> {
    return this.common.request(true, 'get', `tokens`);
  }

  public async postTokenGenerate(data: TokenGenerate): Promise<Token> {
    return this.common.request(true, 'post', `tokens`, null, data);
  }

  public async deleteTokenRevoke(id: string): Promise<Token> {
    return this.common.request(true, 'delete', `tokens/${id}`);
  }

  public async getTransfers(qs?: TransferQueryString): Promise<TransferResponse> {
    const resp = await this.common.request(true, 'get', `transfers`, qs, undefined, true);

    return this.common.returnCursor(resp);
  }

  public async postTransfersCreate(data: TransferCreate): Promise<Transfer> {
    return this.common.request(true, 'post', `transfers`, null, data);
  }

  public async getUser(): Promise<User> {
    return this.common.request(true, 'get', `users/current`);
  }

  public async patchUpdateUser(data: UserUpdate): Promise<User> {
    return this.common.request(true, 'patch', `users/current`, null, data);
  }
}

export default Trading;
