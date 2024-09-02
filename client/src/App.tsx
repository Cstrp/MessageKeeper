import React, { useEffect } from 'react';
import { MessageInput, MessageList } from './view';
import { useGetMessagesQuery } from './data/fetchMessages';
import { Message } from './data/types';

export const App: React.FC = () => {
  const { data: messages, refetch, isLoading } = useGetMessagesQuery();

  useEffect(() => {
    const socket = new WebSocket('ws://localhost:3001');

    socket.onmessage = (event) => {
      const data: Message = JSON.parse(event.data);
      if (data.type === 'added') {
        refetch();
      }
      if (data.type === 'initial') {
        refetch();
      }
    };

    return () => {
      socket.close();
    };
  }, [refetch]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Messages</h1>
      <MessageList messages={messages} />
      <MessageInput />
    </div>
  );
};
