import { IncomingMessage, ServerResponse } from 'http';
import { handleGetMessages } from './get-messages';
import { handlePostMessage } from './post-message';
import { WebSocketServer } from 'ws';

export const handleRequest = (req: IncomingMessage, res: ServerResponse, wss: WebSocketServer) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.writeHead(204);
    res.end();
    return;
  }

  if (req.method === 'GET' && req.url === '/messages') {
    handleGetMessages(req, res);
  } else if (req.method === 'POST' && req.url === '/messages') {
    handlePostMessage(req, res, wss);
  } else {
    res.writeHead(404);
    res.end();
  }
};
