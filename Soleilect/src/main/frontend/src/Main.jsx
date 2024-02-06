import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Main = () => {

  const nav = useNavigate();

  const submitPost = (e)=>{
    let formData = new FormData();
    formData.append("id",e.target.id.value)
    formData.append("pw",e.target.pw.value)
    formData.append("nickname",e.target.nickname.value)
    formData.append("name",e.target.name.value)
    formData.append("b_num",e.target.b_num.value)
    axios
    .post('/Sol/joinCon/join',formData)
    .then((response)=>{
      console.log(response.data)
    })
    .catch((error)=>{
      console.log(error)
    })
    nav('/')
  }

  return (
    <div>Main
      <form onSubmit={submitPost}>
       아이디 : <input type='text' name='id' ></input><br/>
       비번 : <input type='text' name='pw'></input><br/>
       닉네임 : <input type='text' name='nickname'></input><br/>
       이름 : <input type='text' name='name'></input><br/>
       사업자번호 : <input type='text' name='b_num'></input><br/>
        <input type='submit' value='전송'></input>
      </form >
    </div>
  )
}

export default Main