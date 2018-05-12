declare class Common {
    private uri;
    private token;
    constructor(sandbox: boolean, subdomain: string, token?: string);
    request(auth: boolean, method: string, path: string, qs?: any, body?: any): Promise<any>;
}
export default Common;
