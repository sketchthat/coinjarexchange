export interface RequestOpts {
  uri: string;
  json: boolean;
  method: string;
  qs?: any;
  body?: any;
  headers?: {
    Authorization: string;
  };
}
