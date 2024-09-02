import { handleRequest, handleWss } from './handlers';
import { IncomingMessage } from 'http';
import * as http from 'node:http';
import * as WebSocket from 'ws';

const server = http.createServer((req: IncomingMessage, res) => handleRequest(req, res, wss));

const wss = new WebSocket.Server({ server });

handleWss(wss);

server.listen(3001, () => {
  console.log('Server is listening on port 3001');
});
