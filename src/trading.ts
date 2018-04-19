import { Common } from './common';
import { Account, AccountExternal, AccountLine, AccountLineQueryString } from './interfaces/accounts.interface';
import { Fee, FeeQueryString } from './interfaces/fees.interface';
import { Fill, FillQueryString } from './interfaces/fills.interface';
import { Order, OrderCreate, OrderQueryString } from './interfaces/orders.interface';
import { Products } from './interfaces/products.interface';
import { Token, TokenGenerate } from './interfaces/tokens.interface';
import { Transfer, TransferCreate, TransferQueryString } from './interfaces/transfers.interface';
import { User, UserUpdate } from './interfaces/users.interface';

export class Trading {
  private common: Common;

  constructor(
    token: string,
    sandbox?: boolean,
  ) {
    this.common = new Common(sandbox ? `https://api.exchange.coinjar-sandbox.com` : `https://api.exchange.coinjar.com`, token);
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

  public async getAccountLines(accountNumber: string, qs?: AccountLineQueryString): Promise<AccountLine[]> {
    return this.common.request(true, 'get', `accounts/${accountNumber}/lines`, qs);
  }

  public async getFees(qs?: FeeQueryString): Promise<Fee[]> {
    return this.common.request(true, 'get', `fee_charges`, qs);
  }

  public async getFills(qs?: FillQueryString): Promise<Fill[]> {
    return this.common.request(true, 'get', `fills`, qs);
  }

  public async getFill(tid: string): Promise<Fill> {
    return this.common.request(true, 'get', `fills/${tid}`);
  }

  public async getOrders(qs?: OrderQueryString): Promise<Order[]> {
    return this.common.request(true, 'get', `orders`, qs);
  }

  public async getOrdersAll(qs?: OrderQueryString): Promise<Order[]> {
    return this.common.request(true, 'get', `orders/all`, qs);
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

  public async getTransfers(qs?: TransferQueryString): Promise<Transfer[]> {
    return this.common.request(true, 'get', `transfers`, qs);
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
