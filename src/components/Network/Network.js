import React from 'react';
import networkcss from './Network.module.css';
import Users from './Userinfo/Users';
import Messages from './Messaginfo/Messages';



let userData = [
  {name: 'Tom', id: 1},
  {name: 'Julia', id: 2},
  {name: 'Sasha', id: 3},
  {name: 'Merab', id: 4},
];

let messageData = [
  {text: 'Lorem Ipsum is simply dummy text'},
  {text: 'Hello! Where i can find cheap tickets to NZ?'},
  {text: 'USA if a great country for travellin'},
  {text: ' Moscow is a beautiful city'},
]

let usersElements = userData.map ( (u) => <Users username={u.name} id={u.id} />)
let messagesElements = messageData.map ( (m) => <Messages text={m.text} />)

const Network = () => {
  return (
    <div className={networkcss.society}>
    <div className={networkcss.userIcon}>
      {usersElements}
     </div>
     <div className={networkcss.userMessage}>
        {messagesElements}
     </div>
    </div>
  )
}

export default Network;
