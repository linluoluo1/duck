let store = {
  _state: {
    userData: [
        {username: 'Tom',/* id: 1 */},
        {username: 'Julia',/* id: 2*/},
        {username: 'Sasha',/* id: 3*/},
        {username: 'Merab',/* id: 4*/},
      ],
    messageData: [
        {text: 'Lorem Ipsum is simply dummy text'},
        {text: 'Hello! Where i can find cheap tickets to NZ?'},
        {text: 'USA if a great country for travellin'},
        {text: ' Moscow is a beautiful city'},
      ],
      newName: '',
      newPost: '',
},
_callSubscriber () {
  console.log('')
  },


  getState () {
    return this._state;
  },
  subscribe (observer) {
    this._callSubscriber = observer;
  },



 dispatch (action) {
  if (action.type === 'ADD-POST')
    {    
  let newPost = {
    text: action.newPst, 
  };
  let newUser = {
    username: action.newUsr,
  };
  
  this._state.userData.push(newUser);
  this._state.messageData.push(newPost);
  this._state.newName = '';
  this._state.newPost= '';
  
  
  return this._callSubscriber(this._state);
  } else if ( action.type === 'UPDATE-NAME')
   {
      this._state.newName = action.newNm;
        
      return this._callSubscriber(this._state);
      
  } else if (action.type === 'UPDATE-POST')
    {
      this._state.newPost = action.newMes;
     
     return this._callSubscriber(this._state);
     
  }
 }
 
}

export let addPostActionCreator = (text, userText) => {
  return {
    type: 'ADD-POST', 
     newPst: text,
      newUsr: userText
  }
}

export let updateNameActionCreator = (userNm) => {
  return{
    type: 'UPDATE-NAME',
   newNm: userNm
   }
}

export let updatePostActionCreator = (newMes) => {
  return {
    type: 'UPDATE-POST', 
     newMes: newMes,
    
  }
}
 

export default store;

