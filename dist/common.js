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
    constructor(uri, token) {
        this.uri = uri;
        this.token = token;
    }
    request(auth, method, path, qs, body) {
        return __awaiter(this, void 0, void 0, function* () {
            const opts = {
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
                const error = err.error;
                error.error_status = err.statusCode;
                throw error;
            });
        });
    }
}
exports.Common = Common;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2NvbW1vbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsc0NBQXNDO0FBR3RDO0lBSUUsWUFBWSxHQUFXLEVBQUUsS0FBYztRQUNyQyxJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUNmLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0lBQ3JCLENBQUM7SUFFWSxPQUFPLENBQUMsSUFBYSxFQUFFLE1BQWMsRUFBRSxJQUFZLEVBQUUsRUFBUSxFQUFFLElBQVU7O1lBWXBGLE1BQU0sSUFBSSxHQUFnQjtnQkFDeEIsR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDLEdBQUcsSUFBSSxJQUFJLEVBQUU7Z0JBQzFCLElBQUksRUFBRSxJQUFJO2dCQUNWLE1BQU0sRUFBRSxNQUFNO2dCQUNkLEVBQUUsRUFBRSxFQUFFO2dCQUNOLElBQUksRUFBRSxJQUFJO2FBQ1gsQ0FBQztZQUVGLElBQUksSUFBSSxFQUFFO2dCQUNSLElBQUksQ0FBQyxPQUFPLEdBQUc7b0JBQ2IsYUFBYSxFQUFFLGdCQUFnQixJQUFJLENBQUMsS0FBSyxHQUFHO2lCQUM3QyxDQUFDO2FBQ0g7WUFFRCxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUM7aUJBQ1osS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFO2dCQUNYLE1BQU0sS0FBSyxHQUFhLEdBQUcsQ0FBQyxLQUFLLENBQUM7Z0JBQ2xDLEtBQUssQ0FBQyxZQUFZLEdBQUcsR0FBRyxDQUFDLFVBQVUsQ0FBQztnQkFFcEMsTUFBTSxLQUFLLENBQUM7WUFDZCxDQUFDLENBQUMsQ0FBQztRQUNQLENBQUM7S0FBQTtDQUNGO0FBM0NELHdCQTJDQyJ9