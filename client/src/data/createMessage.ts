import { apiUrl } from './constants';
import { useMutation } from '@tanstack/react-query';
import { invalidaeGetMessagesQuery } from './fetchMessages';

const CREATE_MESSAGE_QUERY = `${apiUrl}/messages`;

const createMessage = async (message: string) => {
  await fetch(CREATE_MESSAGE_QUERY, {
    method: 'POST',
    body: message,
    headers: { 'Content-Type': 'text/plain' },
  });
};

export const useCreateMessageMutation = () => {
  return useMutation({
    mutationFn: createMessage,
    onSuccess: () => {
      invalidaeGetMessagesQuery();
    },
  });
};
