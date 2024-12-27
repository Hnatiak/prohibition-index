export const rulesData = {
    "1": [
      {
        "rule": "1.1 - Use of inappropriate language detected in the message",
        "key-words": [
          "f*ck", "fack", "fuck", "fаck", "фak",
          "sh*t", "shit",
          "d*mn", "dumb",
          "a**hole", "a**h0le", "a**h0l3", "asshole",
          "freak", 
          "bastard", 
          "с*ка", "сука", "sука", "suка", "syка", "sykа", "syka", "сuка", "cyka",
          "б*ять", "б*ть", "б**ть", "бл**ь", "бл*ять", "б*лять", "бля*ь", "бл*ть", "х*й", "п*здець", "блять", "хуй", "піздець", "пиздець",
        ]
      },
      {
        "rule": "1.2 - A threat was detected in the message",
        "key-words": ["kill", "destroy", "burn", "eliminate", "murder", "вб'ю", "уб'ю", "знищу", "спалю", "вбю", "убю", "закопаю", "заріжу"]
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