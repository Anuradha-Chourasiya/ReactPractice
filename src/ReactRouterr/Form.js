import React from 'react'
import "./Form.css";
import { useNavigate } from 'react-router-dom'

function Form()
 {
  const initialObj={
    Username: '',
    Password: ''
}
const[user,setUser]=React.useState(initialObj)
const navigate=useNavigate()
const status=true
const handleInput=(event)=>{
  setUser({...user,[event.target.name]:event.target.value})

  }
  const Login=()=>{
    if(status){
      console.log(user);
        navigate(`/Navbar`,{state:user})
    }
  }


  return (
    <div className='Container1'>

    <div className='SetImg'>
    <img src='Images/img2.jpg' height='400' width='400'/>
    </div>
    <div>
    <form id="myForm" className='Container2'>
        <h1 className="text-center">Login Form</h1><br></br>
            <label>Username:</label><br></br>
            <input type="text" name="Username" onChange={handleInput}/><br></br><br></br>
            <label>Password:</label><br></br>
            <input type="password" name="Password" onChange={handleInput}/><br></br><br></br>
            <button type="button" className='Setlogin' onClick={Login} >Login</button>
    </form>
    </div>
    </div>
    
  )
}


export default Form