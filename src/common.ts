import * as rp from 'request-promise';

import { RequestOpts } from './interfaces/common.interface';
import { CursorResponse, Response } from './interfaces/response.interface';

class Common {
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

  public async request(auth: boolean, method: string, path: string, qs?: any, body?: any, resolveWithFullResponse?: boolean): Promise<any> {
    const opts: RequestOpts = {
      uri: `${this.uri}/${path}`,
      json: true,
      method: method,
      qs: qs,
      body: body,
      resolveWithFullResponse: resolveWithFullResponse,
    };

    if (auth) {
      opts.headers = {
        Authorization: `Token token="${this.token}"`,
      };
    }

    return rp(opts);
  }

  public returnCursor(response: Response): CursorResponse {
    const cursor = response.headers['x-cjx-cursor'];

    return {
      cursor,
      payload: response.body,
    };
  }
}

export default Common;
