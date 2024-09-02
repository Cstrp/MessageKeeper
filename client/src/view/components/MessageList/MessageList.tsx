import { MessageListItem } from '../MessageListItem/MessageListItem';

export const MessageList = ({ messages }: { messages: string[] }) => {
  return (
    <div
      style={{
        textAlign: 'start',
        textTransform: 'capitalize',
      }}
    >
      <ul>{messages?.map((msg, idx) => <MessageListItem key={idx} message={msg} />)}</ul>
    </div>
  );
};
