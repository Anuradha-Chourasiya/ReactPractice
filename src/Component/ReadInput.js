import React from 'react'
function ReadInput(){
    const[firstName,setFirstName]=React.useState('')
    const[lastName,setLastName]=React.useState('')

    const handleFirstInput=(event)=>{
        console.log(event.target);
        setFirstName(event.target.value)
    }

    const handleSecondInput=(event)=>{
        console.log(event.target);
        setLastName(event.target.value)
    }
    return(
        <div>
            <h1>Read Input!!</h1>
            <label>firstName input :</label>
            <input type='text' name="firstName" onChange={handleFirstInput}/>
            <p>FirstName: {firstName}</p>
            <label>lastName input  :</label> <br></br>
            <input type='text' name="lastName" onChange={handleSecondInput}/>
            <p>LastName: {lastName}</p>
        </div>
    )
}

export default ReadInput