import { Button, FormControl, Input, InputLabel } from '@material-ui/core';
import React, {useEffect, useState} from 'react';
import './App.css';
import db from './firebase';
import Message from './Message';
import firebase from 'firebase';
import FlipMove from 'react-flip-move';

function App() {
  const [input, setInput] = useState('');
  // const [messages, setMessages] = useState([{username:'dixv', message:'whats up'}, {username:'qazi', message:'hello'}, {username:'sonny', message:'hi there!'}]);
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState('');
  
  useEffect(() =>{
    db.collection('messages')
      .orderBy('timestamp', 'desc')
      .onSnapshot(snapshot => {
      setMessages(snapshot.docs.map(doc => ({id: doc.id, message: doc.data()})))
    })
  },[]);

  useEffect(() => {
    setUsername(prompt('Please enter your name'));
  }, []); 

  const sendMessage = (event) => {
    event.preventDefault();
    //---push locally
    //setMessages([...messages, {username: username, message: input}]);
    db.collection('messages')
    .add({
          message: input, 
          username: username, 
          timestamp: firebase.firestore.FieldValue.serverTimestamp()
        });
    setInput('');
  }

  return (
    <div className="App">
      <div className="app__header">
        <img src="https://facebookbrand.com/wp-content/uploads/2018/09/header-e1538151782912.png?w=100&h=100" alt=""/>
        <h1>fb Messenger Clone</h1>
        <h2>Welcome {username}</h2>
      </div>
      <div className="app__message">
              <FlipMove>
              {
                messages.map(({id, message}) => (
                  <Message key={id} username={username} message={message}/>
                ))
              }
              </FlipMove>
      </div>
      <div className="app__input">
        <form>
          <FormControl>        
                  <InputLabel className="input__label">Enter a message</InputLabel>
                  <Input onChange={event => setInput(event.target.value)} value={input}/>
                  <Button type="submit" disabled={!input} color="primary" variant="contained" onClick={sendMessage}>Send Message</Button>
          </FormControl>        
        </form>
      </div>
     
    </div>
  );
}

export default App;
