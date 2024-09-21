import React, { useState, useEffect } from 'react';
import './App.css';

const rulesData = {
  "1": [
    {
      "rule": "1.1 - Use of inappropriate language detected in the message",
      "key-words": ["f*ck", "sh*t", "d*mn", "a**hole", "freak", "bastard", "с*ка", "б*ять", "х*й", "п*здець", "сука", "блять", "хуй", "піздець", "пиздець"]
    },
    {
      "rule": "1.2 - A threat was detected in the message",
      "key-words": ["kill", "destroy", "burn", "eliminate", "murder", "вб'ю", "уб'ю", "знищу", "спалю", "вбю", "убю"]
    }
  ],
  "2": [
    {
      "rule": "2.1 - Nude content was detected in the sent photo",
      "key-words": ["nude photo", "nudes", "sexual photo", "оголене фото", "ню", "сексуальні фото", "голий", "голою", "гола"]
    },
    {
      "rule": "2.2 - Publication of personal information without consent",
      "key-words": ["phone number", "address", "passport details", "номер телефону", "адреса", "паспортні дані"]
    }
  ]
};

export const App = () => {
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [overlayVisible, setOverlayVisible] = useState(false);
  const [voice, setVoice] = useState(null);

  useEffect(() => {
    const updateVoices = () => {
      const voices = window.speechSynthesis.getVoices();
      console.log("Available voices:", voices);
      const maleVoice = voices.find(v => v.lang === 'en-US' && v.name.toLowerCase().includes('male'));
      setVoice(maleVoice || voices.find(v => v.lang === 'en-US'));
    };

    updateVoices();

    window.speechSynthesis.onvoiceschanged = updateVoices;
  }, []);

  const sendMessage = () => {
    for (let category in rulesData) {
      for (const ruleObj of rulesData[category]) {
        if (ruleObj['key-words'].some(word => message.toLowerCase().includes(word))) {
          showError(ruleObj['rule']);
          speakError(ruleObj['rule']);
          return;
        }
      }
    }

    const messageBox = document.getElementById("message-box");
    const newMessage = document.createElement("p");
    newMessage.textContent = message;
    messageBox.appendChild(newMessage);

    setMessage('');
    setError('');
  };

  const showError = (ruleDescription) => {
    setError(ruleDescription);
    setOverlayVisible(true);
  };

  const closeOverlay = () => {
    setOverlayVisible(false);
  };

  const speakError = (ruleDescription) => {
    if (window.speechSynthesis && voice) {
      const speech = new SpeechSynthesisUtterance();
      speech.text = `Error: Rule violation! ${ruleDescription}`;
      speech.voice = voice;
      speech.lang = 'en-US';
      window.speechSynthesis.speak(speech);
    } else {
      console.error('No voice available for speech synthesis.');
    }
  };

  return (
    <div className="App">
      <h2>Message Sending</h2>
      <div id="message-box"></div>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Enter message"
      />
      <button onClick={sendMessage}>Send</button>

      {overlayVisible && (
        <div className="overlay">
        <div className="overlay-content">
          <p><strong>Rule Violation</strong></p>
          <p>{error}</p>
          <button onClick={closeOverlay} type='submit'>Close</button>
        </div>
        </div>
      )}
    </div>
  );
}