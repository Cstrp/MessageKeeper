import React, { useState } from 'react';
import { useCreateMessageMutation } from '../../../data/createMessage';

export const MessageInput = () => {
  const [newMessage, setNewMessage] = useState('');
  const mutation = useCreateMessageMutation();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (newMessage.trim()) {
      mutation.mutate(newMessage);
      setNewMessage('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={newMessage}
        onChange={(e) => setNewMessage(e.target.value)}
        placeholder="Type your message"
      />
      <button type="submit" disabled={mutation.isError || newMessage.trim() === ''}>
        Send
      </button>
    </form>
  );
};
