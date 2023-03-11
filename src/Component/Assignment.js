import React from "react";
function Assignment(){
    const initialObj={
        firstName: '',
        lastName: ''
    }

    const[user,setUser]=React.useState(initialObj)
    const[userList,setUserList]=React.useState([])

    const handleInput=(event)=>{
        setUser({...user,[event.target.name]:[event.target.value]})
    }

    const saveData=()=>{
        setUserList([...userList,user])
        document.getElementById("myForm").reset()
        setUser(initialObj)
        alert(initialObj)
    }

    const deleteUsernew=(index)=>{
        let temp=[...userList]
        temp.splice(index,1)
        setUserList(temp)
    }
    return(
        <div>
            <form id="myForm">
                <label> FirstName:</label>
                <input type='text' name="firstName" onChange={handleInput}></input>
                <label> LastName:</label>
                <input type='text' name="lastName" onChange={handleInput}></input>
                <button type="button" onClick={saveData}>Save</button>
            </form> <br></br>
            <div>
                <ul>
                    <div>
                        <table id="demo" >
                            <thead>
                            <tr>
                                <th className="border border-collpse border-slate-900">First Name</th>
                                <th className="border boder-collpse border-slate-900">Last Name</th>
                                <th className="border boder-collpse border-slate-900" >Action</th>

                            </tr>
                            </thead>
                            <tbody>  
                            {userList.map((user,index)=>(
                                <tr>
                                    <td className="border border-collapse border-slate-900" align="text-center" >{user.firstName}</td>
                                    <td className="border border-collapse border-slate-900" align="text-center">{user.lastName}</td>
                                    <button className="border border-collapse border-slate-900"type="button" onClick={()=>deleteUsernew(index)}>Delete</button>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </ul>
            </div>            
        </div>
    )
}

export default Assignment
