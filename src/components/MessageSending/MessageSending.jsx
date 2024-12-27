// import React, { useState, useEffect } from 'react';
// import { MessageInput } from '../../components/MessageInput/MessageInput';
// import { ErrorOverlay } from '../../components/ErrorOverlay/ErrorOverlay';
// import './MessageSending.css';

// export const MessageSending = () => {
//   const [error, setError] = useState('');
//   const [overlayVisible, setOverlayVisible] = useState(false);
//   const [voice, setVoice] = useState(null);

//   useEffect(() => {
//     const updateVoices = () => {
//       const voices = window.speechSynthesis.getVoices();
//       const maleVoice = voices.find(v => v.lang === 'en-US' && v.name.toLowerCase().includes('male'));
//       setVoice(maleVoice || voices.find(v => v.lang === 'en-US'));
//     };

//     updateVoices();
//     window.speechSynthesis.onvoiceschanged = updateVoices;
//   }, []);

//   const onMessageSend = (message) => {
//     const messageBox = document.getElementById("message-box");
//     const newMessage = document.createElement("p");
//     newMessage.style.border = "1px solid #000";
//     newMessage.style.display = "inline-block";
//     newMessage.style.padding = "5px 10px";
//     newMessage.style.margin = "5px 0";
//     newMessage.style.whiteSpace = "nowrap";
//     newMessage.textContent = message;
//     messageBox.appendChild(newMessage);
//   };

//   const showError = (ruleDescription) => {
//     setError(ruleDescription);
//     setOverlayVisible(true);
//     speakError(ruleDescription);
//   };

//   const closeOverlay = () => {
//     setOverlayVisible(false);
//   };

//   const speakError = (ruleDescription) => {
//     if (window.speechSynthesis && voice) {
//       const speech = new SpeechSynthesisUtterance();
//       speech.text = `Error: Rule violation! ${ruleDescription}`;
//       speech.voice = voice;
//       speech.lang = 'en-US';

//       speech.volume = 1;
      
//       window.speechSynthesis.speak(speech);
//     }
//   };

//   return (
//     <div>
//       <h2>Message Sending</h2>
//       <div id="message-box" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}></div>
//       <MessageInput onMessageSend={onMessageSend} showError={showError} />
//       {overlayVisible && <ErrorOverlay error={error} onClose={closeOverlay} />}
//     </div>
//   );
// };


















// import React, { useState, useEffect } from 'react';
// import { MessageInput } from '../../components/MessageInput/MessageInput';
// import { ErrorOverlay } from '../../components/ErrorOverlay/ErrorOverlay';
// import './MessageSending.css';

// // Список поганих слів
// const badWords = [
//   "fuck", "shit", "damn", "asshole", "freak", "bastard", "сука", "блять", "хуй", "пиздец"
// ];

// // Функція для створення регулярного виразу з варіаціями
// const createRegex = (word) => {
//   const escaped = word
//     .split('')
//     .map(char => `[${char}${char.toUpperCase()}]*`) // Додаємо повторення та великі букви
//     .join(`[\\s\\*\\-\\_]*`); // Додаємо можливість вставки символів або пробілів між літерами
//   return new RegExp(`\\b${escaped}\\b`, 'i'); // Додаємо границі слова та ігнорування регістру
// };

// // Створення списку регулярних виразів
// const badWordPatterns = badWords.map(createRegex);

// export const MessageSending = () => {
//   const [error, setError] = useState('');
//   const [overlayVisible, setOverlayVisible] = useState(false);
//   const [voice, setVoice] = useState(null);

//   useEffect(() => {
//     const updateVoices = () => {
//       const voices = window.speechSynthesis.getVoices();
//       const maleVoice = voices.find(v => v.lang === 'en-US' && v.name.toLowerCase().includes('male'));
//       setVoice(maleVoice || voices.find(v => v.lang === 'en-US'));
//     };

//     updateVoices();
//     window.speechSynthesis.onvoiceschanged = updateVoices;
//   }, []);

//   const checkForBadWords = (message) => {
//     for (const pattern of badWordPatterns) {
//       if (pattern.test(message)) {
//         return true; // Якщо знайдено погане слово
//       }
//     }
//     return false;
//   };

//   const onMessageSend = (message) => {
//     if (checkForBadWords(message)) {
//       showError('Inappropriate language detected in the message');
//       return;
//     }

//     const messageBox = document.getElementById("message-box");
//     const newMessage = document.createElement("p");
//     newMessage.style.border = "1px solid #000";
//     newMessage.style.display = "inline-block";
//     newMessage.style.padding = "5px 10px";
//     newMessage.style.margin = "5px 0";
//     newMessage.style.whiteSpace = "nowrap";
//     newMessage.textContent = message;
//     messageBox.appendChild(newMessage);
//   };

//   const showError = (ruleDescription) => {
//     setError(ruleDescription);
//     setOverlayVisible(true);
//     speakError(ruleDescription);
//   };

//   const closeOverlay = () => {
//     setOverlayVisible(false);
//   };

//   const speakError = (ruleDescription) => {
//     if (window.speechSynthesis && voice) {
//       const speech = new SpeechSynthesisUtterance();
//       speech.text = `Error: Rule violation! ${ruleDescription}`;
//       speech.voice = voice;
//       speech.lang = 'en-US';

//       speech.volume = 1;
      
//       window.speechSynthesis.speak(speech);
//     }
//   };

//   return (
//     <div>
//       <h2>Message Sending</h2>
//       <div id="message-box" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}></div>
//       <MessageInput onMessageSend={onMessageSend} showError={showError} />
//       {overlayVisible && <ErrorOverlay error={error} onClose={closeOverlay} />}
//     </div>
//   );
// };










import React, { useState, useEffect } from 'react';
import { MessageInput } from '../../components/MessageInput/MessageInput';
import { ErrorOverlay } from '../../components/ErrorOverlay/ErrorOverlay';
import './MessageSending.css';

// Список поганих слів
const badWords = [
  "fuck", "shit", "damn", "asshole", "freak", "bastard", "сука", "блять", "хуй", "пиздец"
];

// Функція для створення регулярного виразу з варіаціями
const createRegex = (word) => {
  const escapedWord = word.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
  const regexString = escapedWord.split('')
    .map(char => `[${char.toLowerCase()}${char.toUpperCase()}]`)
    .join(`[\\W]*`);
  return new RegExp(`(^|\\W)${regexString}($|\\W)`, 'i');
};

// Створення списку регулярних виразів для кожного слова
const badWordPatterns = badWords.map(createRegex);

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

  const checkForBadWords = (message) => {
    for (const pattern of badWordPatterns) {
      if (pattern.test(message)) {
        return true; // Якщо знайдено погане слово
      }
    }
    return false;
  };

  const onMessageSend = (message) => {
    if (checkForBadWords(message)) {
      showError('1.1 - Use of inappropriate language detected in the message');
      return;
    }

    const messageBox = document.getElementById("message-box");
    const newMessage = document.createElement("p");
    newMessage.style.border = "1px solid #000";
    newMessage.style.display = "inline-block";
    newMessage.style.padding = "5px 10px";
    newMessage.style.margin = "5px 0";
    newMessage.style.whiteSpace = "nowrap";
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

      speech.volume = 1;
      
      window.speechSynthesis.speak(speech);
    }
  };

  return (
    <div>
      <h2>Message Sending</h2>
      <div id="message-box" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}></div>
      <MessageInput onMessageSend={onMessageSend} showError={showError} />
      {overlayVisible && <ErrorOverlay error={error} onClose={closeOverlay} />}
    </div>
  );
};
  
