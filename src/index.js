import { adapter } from '@nerujs/express';
import express from 'express';
import { neru } from 'neru';
import * as line from '@line/bot-sdk';
import 'dotenv/config'
import config from './config.js';

const server = express();

server.use(line.middleware(config))

await neru({
    server,
    adapter,
    routes: 'src/routes',
});

server.listen(4000, () => {
    console.log('Online on http://localhost:4000');
});
