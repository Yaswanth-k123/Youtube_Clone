import React, { useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import "./Navbar.css";
export default function Navbar(props) {
  const [val,setVal]=useState("");
  const onChange= (e) => {
    setVal(e.target.value);
  }
  const handleClick= () => {
    props.setCategory(val);
    console.log(val)
    setVal("");
  }
  return (
    <div>
        <nav>
            <div>
            <h2>Youtube</h2>
            </div>
            <div className='search'>
                <input onChange={onChange} type="text" value={val} />
                <button onClick={handleClick}><SearchIcon /></button>
            </div>
            <div>
                <h2>Icons</h2>
            </div>
        </nav>
       
        
    </div>
  )
}
