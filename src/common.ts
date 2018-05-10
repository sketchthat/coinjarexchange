import * as rp from 'request-promise';

import { RequestOpts } from './interfaces/common.interface';

export class Common {
  private uri: string;
  private token: string;

  constructor(sandbox: boolean, subdomain: string, token?: string) {
    let domain = 'exchange.coinjar.com';

    if (sandbox) {
      domain = 'exchange.coinjar-sandbox.com';
    }

    this.uri = `https://${subdomain}.${domain}`;
    this.token = token;
  }

  public async request(auth: boolean, method: string, path: string, qs?: any, body?: any): Promise<any> {
    const opts: RequestOpts = {
      uri: `${this.uri}/${path}`,
      json: true,
      method: method,
      qs: qs,
      body: body,
    };

    if (auth) {
      opts.headers = {
        Authorization: `Token token="${this.token}"`,
      };
    }

    return rp(opts);
  }
}
