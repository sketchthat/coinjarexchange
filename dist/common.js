"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const rp = require("request-promise");
class Common {
    constructor(sandbox, subdomain, token) {
        let domain = 'exchange.coinjar.com';
        if (sandbox) {
            domain = 'exchange.coinjar-sandbox.com';
        }
        this.uri = `https://${subdomain}.${domain}`;
        this.token = token;
    }
    request(auth, method, path, qs, body, resolveWithFullResponse) {
        return __awaiter(this, void 0, void 0, function* () {
            const opts = {
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
        });
    }
    returnCursor(response) {
        const cursor = response.headers['x-cjx-cursor'];
        return {
            cursor,
            payload: response.body,
        };
    }
}
exports.default = Common;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2NvbW1vbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsc0NBQXNDO0FBS3RDO0lBSUUsWUFBWSxPQUFnQixFQUFFLFNBQWlCLEVBQUUsS0FBYztRQUM3RCxJQUFJLE1BQU0sR0FBRyxzQkFBc0IsQ0FBQztRQUVwQyxJQUFJLE9BQU8sRUFBRTtZQUNYLE1BQU0sR0FBRyw4QkFBOEIsQ0FBQztTQUN6QztRQUVELElBQUksQ0FBQyxHQUFHLEdBQUcsV0FBVyxTQUFTLElBQUksTUFBTSxFQUFFLENBQUM7UUFDNUMsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7SUFDckIsQ0FBQztJQUVZLE9BQU8sQ0FBQyxJQUFhLEVBQUUsTUFBYyxFQUFFLElBQVksRUFBRSxFQUFRLEVBQUUsSUFBVSxFQUFFLHVCQUFpQzs7WUFDdkgsTUFBTSxJQUFJLEdBQWdCO2dCQUN4QixHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUMsR0FBRyxJQUFJLElBQUksRUFBRTtnQkFDMUIsSUFBSSxFQUFFLElBQUk7Z0JBQ1YsTUFBTSxFQUFFLE1BQU07Z0JBQ2QsRUFBRSxFQUFFLEVBQUU7Z0JBQ04sSUFBSSxFQUFFLElBQUk7Z0JBQ1YsdUJBQXVCLEVBQUUsdUJBQXVCO2FBQ2pELENBQUM7WUFFRixJQUFJLElBQUksRUFBRTtnQkFDUixJQUFJLENBQUMsT0FBTyxHQUFHO29CQUNiLGFBQWEsRUFBRSxnQkFBZ0IsSUFBSSxDQUFDLEtBQUssR0FBRztpQkFDN0MsQ0FBQzthQUNIO1lBRUQsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbEIsQ0FBQztLQUFBO0lBRU0sWUFBWSxDQUFDLFFBQWtCO1FBQ3BDLE1BQU0sTUFBTSxHQUFHLFFBQVEsQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLENBQUM7UUFFaEQsT0FBTztZQUNMLE1BQU07WUFDTixPQUFPLEVBQUUsUUFBUSxDQUFDLElBQUk7U0FDdkIsQ0FBQztJQUNKLENBQUM7Q0FDRjtBQUVELGtCQUFlLE1BQU0sQ0FBQyJ9