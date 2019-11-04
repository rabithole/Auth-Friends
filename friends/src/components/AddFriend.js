import React, { useState } from 'react';
// import { Link, Route, withRouter } from 'react-router-dom';
// import axios from 'axios';
// import './App.css';
import api from '../utils/api';

function FriendsList(props) {
  const [newFriend, addNewFriend] = useState([]);
console.log(newFriend);

  const handleChange = (event) => {
    addNewFriend({ 
      ...newFriend,  
        [event.target.name]: event.target.value, 
    })
  } 

  const handleSubmit = (event) => {
    event.preventDefault()

    api()
    .post('/api/friends', newFriend)
    .then(result => {
      console.log(result);
      
    })
    .catch(error => {
      console.log('error you idiot')
    })
  }

  return (
    <div className="friendsList">
     <h1>New Friends</h1>
     
     <form onSubmit={handleSubmit}>
      <input 
        type='text'
        name='name'
        placeholder='Full Name'
        value={newFriend.name}
        onChange={handleChange}
      />

      <input 
        type='text'
        name='age'
        placeholder='Your Age'
        value={newFriend.age}
        onChange={handleChange}
      />

      <input
        type='email'
        name='email'
        placeholder='Email Address'
        value={newFriend.email}
        onChange={handleChange}
      />
     </form>
    </div>
  );
}

export default FriendsList;
