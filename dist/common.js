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
                    // Updated to work with latest version of CoinJarExchange API
                    // @MohamedGamil ~ Oct 9, 2019
                    Authorization: `Bearer ${this.token}`,
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
exports.Common = Common;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2NvbW1vbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsc0NBQXNDO0FBS3RDLE1BQWEsTUFBTTtJQUlqQixZQUFZLE9BQWdCLEVBQUUsU0FBaUIsRUFBRSxLQUFjO1FBQzdELElBQUksTUFBTSxHQUFHLHNCQUFzQixDQUFDO1FBRXBDLElBQUksT0FBTyxFQUFFO1lBQ1gsTUFBTSxHQUFHLDhCQUE4QixDQUFDO1NBQ3pDO1FBRUQsSUFBSSxDQUFDLEdBQUcsR0FBRyxXQUFXLFNBQVMsSUFBSSxNQUFNLEVBQUUsQ0FBQztRQUM1QyxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztJQUNyQixDQUFDO0lBRVksT0FBTyxDQUFDLElBQWEsRUFBRSxNQUFjLEVBQUUsSUFBWSxFQUFFLEVBQVEsRUFBRSxJQUFVLEVBQUUsdUJBQWlDOztZQUN2SCxNQUFNLElBQUksR0FBZ0I7Z0JBQ3hCLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQyxHQUFHLElBQUksSUFBSSxFQUFFO2dCQUMxQixJQUFJLEVBQUUsSUFBSTtnQkFDVixNQUFNLEVBQUUsTUFBTTtnQkFDZCxFQUFFLEVBQUUsRUFBRTtnQkFDTixJQUFJLEVBQUUsSUFBSTtnQkFDVix1QkFBdUIsRUFBRSx1QkFBdUI7YUFDakQsQ0FBQztZQUVGLElBQUksSUFBSSxFQUFFO2dCQUNSLElBQUksQ0FBQyxPQUFPLEdBQUc7b0JBQ2IsNkRBQTZEO29CQUM3RCw4QkFBOEI7b0JBQzlCLGFBQWEsRUFBRSxVQUFVLElBQUksQ0FBQyxLQUFLLEVBQUU7aUJBQ3RDLENBQUM7YUFDSDtZQUVELE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2xCLENBQUM7S0FBQTtJQUVNLFlBQVksQ0FBQyxRQUFrQjtRQUNwQyxNQUFNLE1BQU0sR0FBRyxRQUFRLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBRWhELE9BQU87WUFDTCxNQUFNO1lBQ04sT0FBTyxFQUFFLFFBQVEsQ0FBQyxJQUFJO1NBQ3ZCLENBQUM7SUFDSixDQUFDO0NBQ0Y7QUE1Q0Qsd0JBNENDIn0=