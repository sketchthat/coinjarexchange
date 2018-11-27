# Typescript Examples

Examples are written in Typescript and can be run with `ts-node`.

```
npm install ts-node -g
```

Data examples don't require an API token.

```
ts-node data/getTrades
```

Trade examples require an API token - copy `keys.json.dist` to `keys.json` and enter your token details.

When running through the examples be aware of any `patch` or `post` requests as they will run on the live network.

You can switch to sandbox mode by passing the `sandbox` token and `true` as the second parameter in the class initialization.

```
// Import Keys
import * as fs from 'fs';
const keys = JSON.parse(fs.readFileSync('./examples/keys.json', 'utf8'));

// Start Example
import { CoinJarExchange } from '../../src/index';

const cjeSandbox = new CoinJarExchange(keys.sandbox, true);
```
