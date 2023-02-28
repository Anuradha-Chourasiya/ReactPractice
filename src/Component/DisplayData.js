import React from "react";
function DisplayData(){
    const initialObj={
        firstName: '',
        lastName: ''
    }
    const[user,setUser]=React.useState(initialObj)
    const[userList,setUserList]=React.useState([])

    const handleInput=(event)=>{
        setUser({...user,[event.target.name]:event.target.value})
    }
    const saveData=()=>{
        setUserList([...userList,user])
        document.getElementById("myForm").reset()
        setUser(initialObj)
    }
    return(
        <div>
            <h1>Read Input!!!</h1>
            <form id="myForm">
            <label> FirstName:</label>
            <input type='text' name="firstName" onChange={handleInput}></input>
            <label> LastName:</label>
            <input type='text' name="lastName" onChange={handleInput}></input>
            <button type="button" onClick={saveData}>Save</button>
            
            </form>
            <UserListDisplay userList={userList} setUserList={setUserList}></UserListDisplay>
            
        </div>
    )
}
function UserListDisplay(props){
    const deleteUser=(index)=>{
        let temp=[...props.userList]
        temp.splice(index,1)
        props.setUserList(temp)
    }
    return(
        <div>
            <ul>
                {props.userList.map((user,index)=>(
                    <div>
                        <li>{user.firstName+""+user.lastName}</li>
                        <button type="button" onClick={()=>deleteUser(index)}>Del</button>
                    </div>
                )
                )}
            </ul>
        </div>
    )
}
export default DisplayData
