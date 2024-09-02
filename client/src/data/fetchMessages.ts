import { useQuery } from '@tanstack/react-query';
import { apiUrl, queryClient } from './constants';

const GET_MESSAGES_QUERY = `${apiUrl}/messages`;

const fetchMessages = async () => {
  const response = await fetch('http://localhost:3001/messages');
  if (!response.ok) throw new Error('Network error');
  return response.json();
};

export const useGetMessagesQuery = () => {
  return useQuery({
    queryKey: [GET_MESSAGES_QUERY],
    queryFn: fetchMessages,
    refetchOnMount: false,
  });
};

export const invalidaeGetMessagesQuery = () => {
  queryClient.invalidateQueries({ queryKey: [GET_MESSAGES_QUERY] });
};
