import { Button, FormControl, Input, InputLabel } from '@material-ui/core';
import React, {useEffect, useState} from 'react';
import './App.css';
import Message from './Message';

function App() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([{username:'dixv', text:'whats up'}, {username:'qazi', text:'hello'}, {username:'sonny', text:'hi there!'}]);
  const [username, setUsername] = useState('');
  
  useEffect(() => {
    setUsername(prompt('Please enter your name'));
  }, []); 

  const sendMessage = (event) => {
    event.preventDefault();
    setMessages([...messages, {username: username, text: input}]);
    setInput('');
  }

  return (
    <div className="App">
      <h1>fb Messenger Clone</h1>
      <h2>Welcome {username}</h2>

      <form>
        <FormControl>        
          <div className="message__entry">
                <InputLabel>Enter a message</InputLabel>
                <Input onChange={event => setInput(event.target.value)} value={input}/>
                <Button type="submit" disabled={!input} color="primary" variant="contained" onClick={sendMessage}>Send Message</Button>
          </div>

          <div className="message__card">
            {
              messages.map(message => (
                <Message username={username} message={message}/>
              ))
            }
          </div>
        </FormControl>        
      </form>
    </div>
  );
}

export default App;
