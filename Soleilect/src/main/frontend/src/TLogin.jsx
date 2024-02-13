import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';


const TLogin = () => {
    const nav = useNavigate();

    const submitPost = (e)=>{
        let formData = new FormData();
        formData.append("user_id",e.target.user_id.value)
        formData.append("user_pw",e.target.user_pw.value)
        axios
        .post('/Sol/logCon/login',formData)
        .then((response)=>{
          console.log(response.data)
        })
        .catch((error)=>{
          console.log(error)
        })
        nav('/');
      }

  return (
    <div>TLogin
    <form onSubmit={submitPost}>
     아이디 : <input type='text' name='user_id'></input><br/>
     비번 : <input type='text' name='user_pw'></input><br/>
      <input type='submit' value='전송'></input>
    </form >
  </div>
  )
}

export default TLogin