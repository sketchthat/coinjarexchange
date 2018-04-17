import * as rp from 'request-promise';
import { ApiError } from './interfaces/errors.interface';

export class Common {
  private uri: string;
  private token: string;

  constructor(uri: string, token?: string) {
    this.uri = uri;
    this.token = token;
  }

  public async request(auth: boolean, method: string, path: string, qs?: any, body?: any): Promise<any> {
    interface RequestOpts {
      uri: string;
      json: boolean;
      method: string;
      qs?: any;
      body?: any;
      headers?: {
        Authorization: string;
      };
    }

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

    return rp(opts)
      .catch(err => {
        const error: ApiError = err.error;
        error.error_status = err.statusCode;

        throw error;
      });
  }
}
