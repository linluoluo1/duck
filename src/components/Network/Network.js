import React from 'react';
import networkcss from './Network.module.css';
import Users from './Userinfo/Users';
import Messages from './Messaginfo/Messages';
import { addPostActionCreator, updateNameActionCreator, updatePostActionCreator } from '../../redux/State';




export const Network = (props) => {

let usersElements = props.state.userData.map ( (props, idx) => <Users username={props.username} id={props.id} key={idx} />)
let messagesElements = props.state.messageData.map ( (props, idx) => <Messages text={props.text} key={idx} />)
let newMsg = React.createRef();
let newUsr = React.createRef();

let getNewInfo = () => {
  let text = newMsg.current.value;
  let userText = newUsr.current.value;
  console.log(props);
   props.dispatch (addPostActionCreator(text, userText))
  }


let nameChange = () => {
  let userNm = newUsr.current.value;
  props.dispatch (updateNameActionCreator(userNm));

}

let postChange = () => {
  let newMes = newMsg.current.value;
  
  props.dispatch(updatePostActionCreator(newMes));

}


// let addPost = () => {

// } 

  
  return (
    <div className={networkcss.society}>
    <div className={networkcss.userIcon}>
      {usersElements}
     </div>
     <div className={networkcss.userMessage}>
        {messagesElements}
     </div>
     <div className='newUser'>
      <textarea onChange={nameChange} ref={newUsr} value={props.state.newName} /> 
     </div>
     <div className='newPost'>
      <textarea onChange={postChange} ref={newMsg} value={props.state.newPost} />
     </div>
      <div className='postBtn'>
      <button onClick={getNewInfo}>Send</button>
     </div>
    </div>
  )
}

//export default Network;
