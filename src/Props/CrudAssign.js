import React, { useState } from "react";

function CrudAssign() {
  const [names, setName] = useState([]);
  const [newName, setNewName] = useState("");
  const [editIndex, setEditIndex] = useState(-1);

  const handleInputChange = (event) => {
    setNewName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (editIndex > -1) {
      let temp = [...names];
      temp[editIndex] = newName;
      setName(temp);
    } 
    else {
      setName([...names, newName]);
    }
    setNewName("");
    setEditIndex(-1);
  };
  const handleEdit = (index) => {
    setEditIndex(index);
    setNewName(names[index]);
  };
  const deleteUser=(index)=>{
    let temp=[...names]
    temp.splice(index,1)
    setName(temp)    
}



  return (
    <div>
      <h1>Create,update,delete</h1>
      <form onSubmit={handleSubmit}>
        First Name:
        <input className="border-4" type="text" value={newName} onChange={handleInputChange} />
        {editIndex > -1 ? (
          <button className="border-4" type="submit">Save</button>
        ) : (
          <button className="border-4" type="submit">Add</button>
        )}
      </form>
      <table border  >
        <tbody>
          <tr  >
            <td  className="border-4">Name</td>
            <td className="border-4">Edit</td>
          </tr>
          {names.map((name, index) => (
            <tr key={index}>
              <td>
                {editIndex === index ? (
                  <input
                    type="text"
                    value={newName}
                    onChange={handleInputChange}
                  />
                ) : (
                  name
                )}
              </td>
              <td>
                {editIndex === index ? (
                  <button className="border-4" type="submit">edit</button>
                ) : (
                  <button className="border-4" type="button" onClick={() => handleEdit(index)}>
                    edit
                  </button>
                )}
                <button className="border-4" type="button" onClick={()=>deleteUser(index)}>Del</button>

              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default CrudAssign;