import React, { useState, useEffect } from 'react';
import { MessageInput } from '../../components/MessageInput/MessageInput';
import { ErrorOverlay } from '../../components/ErrorOverlay/ErrorOverlay';
import './MessageSending.css';

export const MessageSending = () => {
  const [error, setError] = useState('');
  const [overlayVisible, setOverlayVisible] = useState(false);
  const [voice, setVoice] = useState(null);

  useEffect(() => {
    const updateVoices = () => {
      const voices = window.speechSynthesis.getVoices();
      const maleVoice = voices.find(v => v.lang === 'en-US' && v.name.toLowerCase().includes('male'));
      setVoice(maleVoice || voices.find(v => v.lang === 'en-US'));
    };

    updateVoices();
    window.speechSynthesis.onvoiceschanged = updateVoices;
  }, []);

  const onMessageSend = (message) => {
    const messageBox = document.getElementById("message-box");
    const newMessage = document.createElement("p");
    newMessage.style.border = "1px solid #000";
    newMessage.style.display = "inline-block"; // Залишаємо inline-block для ширини
    newMessage.style.padding = "5px 10px"; // Відступи
    newMessage.style.margin = "5px 0"; // Відступи зверху і знизу
    newMessage.style.whiteSpace = "nowrap"; // Не дозволяємо перенесення рядка
    newMessage.textContent = message;
    messageBox.appendChild(newMessage);
  };

  const showError = (ruleDescription) => {
    setError(ruleDescription);
    setOverlayVisible(true);
    speakError(ruleDescription);
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
    }
  };

  return (
    <div>
      <h2>Message Sending</h2>
      <div id="message-box" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
        {/* Повідомлення будуть тут */}
      </div>
      <MessageInput onMessageSend={onMessageSend} showError={showError} />
      {overlayVisible && <ErrorOverlay error={error} onClose={closeOverlay} />}
    </div>
  );
};