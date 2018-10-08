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
exports.Common = Common;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2NvbW1vbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsc0NBQXNDO0FBS3RDLE1BQWEsTUFBTTtJQUlqQixZQUFZLE9BQWdCLEVBQUUsU0FBaUIsRUFBRSxLQUFjO1FBQzdELElBQUksTUFBTSxHQUFHLHNCQUFzQixDQUFDO1FBRXBDLElBQUksT0FBTyxFQUFFO1lBQ1gsTUFBTSxHQUFHLDhCQUE4QixDQUFDO1NBQ3pDO1FBRUQsSUFBSSxDQUFDLEdBQUcsR0FBRyxXQUFXLFNBQVMsSUFBSSxNQUFNLEVBQUUsQ0FBQztRQUM1QyxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztJQUNyQixDQUFDO0lBRVksT0FBTyxDQUFDLElBQWEsRUFBRSxNQUFjLEVBQUUsSUFBWSxFQUFFLEVBQVEsRUFBRSxJQUFVLEVBQUUsdUJBQWlDOztZQUN2SCxNQUFNLElBQUksR0FBZ0I7Z0JBQ3hCLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQyxHQUFHLElBQUksSUFBSSxFQUFFO2dCQUMxQixJQUFJLEVBQUUsSUFBSTtnQkFDVixNQUFNLEVBQUUsTUFBTTtnQkFDZCxFQUFFLEVBQUUsRUFBRTtnQkFDTixJQUFJLEVBQUUsSUFBSTtnQkFDVix1QkFBdUIsRUFBRSx1QkFBdUI7YUFDakQsQ0FBQztZQUVGLElBQUksSUFBSSxFQUFFO2dCQUNSLElBQUksQ0FBQyxPQUFPLEdBQUc7b0JBQ2IsYUFBYSxFQUFFLGdCQUFnQixJQUFJLENBQUMsS0FBSyxHQUFHO2lCQUM3QyxDQUFDO2FBQ0g7WUFFRCxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNsQixDQUFDO0tBQUE7SUFFTSxZQUFZLENBQUMsUUFBa0I7UUFDcEMsTUFBTSxNQUFNLEdBQUcsUUFBUSxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUVoRCxPQUFPO1lBQ0wsTUFBTTtZQUNOLE9BQU8sRUFBRSxRQUFRLENBQUMsSUFBSTtTQUN2QixDQUFDO0lBQ0osQ0FBQztDQUNGO0FBMUNELHdCQTBDQyJ9