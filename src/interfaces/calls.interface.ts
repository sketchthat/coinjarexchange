export interface CallOpts {
  json: boolean;
  uri: string;
  qs?: any;
  body?: any;
  headers?: {
    Authorization: string;
  };
}
