import axios from "axios";
import React, {useEffect, useState} from "react";

function App() {
  const [data, setData] =useState('')

  useEffect(()=>{
    axios.get('/Sol/test')
    .then(res=>setData(res.data))
    .catch(err=>console.log(err))
  },[])


  return (
    <div>
      받아온 값 : {data}
    </div>
  );
}

export default App;
