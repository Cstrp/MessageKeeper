import { IncomingMessage, ServerResponse } from 'http';
import { MAX_MESSAGES, messages } from '../constants';
import * as WebSocket from 'ws';

export const handlePostMessage = (req: IncomingMessage, res: ServerResponse, wss: WebSocket.Server) => {
  let body = '';

  req.on('data', (chunk) => {
    body += chunk.toString();
  });

  req.on('end', () => {
    let removedMessage: string | null = null;

    if (messages.length >= MAX_MESSAGES) {
      removedMessage = messages.shift() || null;
    }

    messages.push(body);

    wss.clients.forEach((client) => {
      if (client.readyState === WebSocket.OPEN) {
        if (removedMessage) {
          client.send(JSON.stringify({ type: 'removed', message: removedMessage }));
        }
        client.send(JSON.stringify({ type: 'added', message: body }));
      }
    });

    res.writeHead(200);
    res.end();
  });
};
