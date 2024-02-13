import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Main = () => {

  const nav = useNavigate();

  const submitPost = (e)=>{
    let formData = new FormData();
    formData.append("user_id",e.target.user_id.value)
    formData.append("user_pw",e.target.user_pw.value)
    formData.append("user_nick",e.target.user_nick.value)
    formData.append("user_name",e.target.user_name.value)
    axios
    .post('/Sol/joinCon/join',formData)
    .then((response)=>{
      console.log(response.data)
    })
    .catch((error)=>{
      console.log(error)
    })
  
  }

  return (
    <div>Main
      <form onSubmit={submitPost}>
       아이디 : <input type='text' name='user_id'></input><br/>
       비번 : <input type='text' name='user_pw'></input><br/>
       닉네임 : <input type='text' name='user_nick'></input><br/>
       이름 : <input type='text' name='user_name'></input><br/>
        <input type='submit' value='전송'></input>
      </form >
    </div>
  )
}

export default Main