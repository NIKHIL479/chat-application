import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';
import './App.css';

const projectID = '1b7801d6-8a66-4be4-a442-89219d833dfc';

const App = () => {
  if (!sessionStorage.getItem('username')) {
    return <LoginForm />;
  }

  return (
    <ChatEngine
      height="100vh"
      projectID={projectID}
      userName={sessionStorage.getItem('username')}
      userSecret={sessionStorage.getItem('password')}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      onNewMessage={(chatId, message) => {
        if (message.sender.username !== sessionStorage.getItem('username')) {
          // Play a notification sound for incoming messages
          const audio = new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3');
          audio.play();
        }
      }}
    />
  );
};

export default App;
