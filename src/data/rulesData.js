export const rulesData = {
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