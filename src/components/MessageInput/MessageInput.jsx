import React, { useState } from 'react';
import { rulesData } from '../../data/rulesData';
import './MessageInput.css';

export const MessageInput = ({ onMessageSend, showError }) => {
  const [message, setMessage] = useState('');

  const sendMessage = () => {
    if (message.trim() === '') {
        return;
    }

    for (let category in rulesData) {
      for (const ruleObj of rulesData[category]) {
        if (ruleObj['key-words'].some(word => message.toLowerCase().includes(word))) {
          showError(ruleObj['rule']);
          return;
        }
      }
    }
    onMessageSend(message);
    setMessage('');
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      sendMessage();
    }
  };

  return (
    <div className='chat'>
      <input
        type="text"
        className="input-field"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyPress={handleKeyPress}
        placeholder="Enter message"
      />
      <button onClick={sendMessage} className="send-button">Send</button>
    </div>
  );
};