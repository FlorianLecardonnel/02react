import { useState, useEffect } from 'react';
import { createConnection } from '../utils/chatFunctions';
type Props = {
    roomId: string,
  };

const ChatRoom: React.FC<any> = (props:Props) => {
  const [serverUrl, setServerUrl] = useState('https://localhost:1234');

  useEffect(() => {

    const connection = createConnection(serverUrl, props.roomId);
    connection.connect();
    return () => {
      connection.disconnect();
    };
  }, [props.roomId, serverUrl]);

  return (
    <>
      <label>
        Server URL:{' '}
        <input
          value={serverUrl}
          onChange={e => setServerUrl(e.target.value)}
        />
      </label>
      <h1>Welcome to the {props.roomId} room!</h1>
    </>
  );
}

export default ChatRoom;