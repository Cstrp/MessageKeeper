import { WebSocketServer } from 'ws';

export const handleWss = (wss: WebSocketServer) => {
  const timestamp = new Date();
  const localDate = timestamp.toLocaleDateString();
  const localTime = timestamp.toLocaleTimeString();

  wss.on('connection', (ws) => {
    console.log(`CLIENT CONNECT [${localDate} | ${localTime}]`);

    ws.on('close', () => {
      console.log(`CLIENT DISCONNECT [${localDate} | ${localTime}]`);
    });
  });
};
