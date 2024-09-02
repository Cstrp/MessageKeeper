import { IncomingMessage, ServerResponse } from 'http';
import { messages } from '../constants';

export const handleGetMessages = (req: IncomingMessage, res: ServerResponse) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify(messages));
};
