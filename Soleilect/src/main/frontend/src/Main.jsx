import React, { useState } from 'react'

const Main = () => {

  return (
    <div>Main
      <form action='/Sol/joinCon/join'>
       아이디 : <input type='text' name='id' > </input><br/>
       비번 : <input type='text' name='pw'> </input><br/>
       이름 : <input type='text' name='name'> </input><br/>
       사업자번호 : <input type='text' name='b_num'> </input><br/>
        <input type='submit' value='전송'></input>
      </form >
    </div>
  )
}

export default Main