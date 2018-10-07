import { CursorResponse, Response } from './interfaces/response.interface';
export declare class Common {
    private uri;
    private token;
    constructor(sandbox: boolean, subdomain: string, token?: string);
    request(auth: boolean, method: string, path: string, qs?: any, body?: any, resolveWithFullResponse?: boolean): Promise<any>;
    returnCursor(response: Response): CursorResponse;
}
