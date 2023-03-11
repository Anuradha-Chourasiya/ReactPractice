import React,{useState} from "react";
function Assignment(){
    let obj={
        firstname: "",
        lastname: ""
    }

    const [data, setData] =React.useState(obj)
    const [dataList, setdataList]=React.useState([])

    const submit1=(event)=>{
        setdataList({...data,[event.target.name]:event.target.value});
    };
    const submit2=()=>{
        setData(...dataList,data)
        document.getElementById("myform").reset()
        setData(obj)
    };
    return(
        <div>
            <form id="myform">
                <label>First name:</label>
                <input type="text" name="firstname" onChange={submit1}/>
                <label>lastName:</label>
                <input type="text" name="lastname" onChange={submit1}/>
                <button type="button" onClick={submit2}>Save</button>
            </form>
            <Display dataList={dataList} setdataList={setdataList}/>
            
        </div>
    )
}
function Display(props){
    const deleteData=(index)=>{
        let temp=[...props.dataList]
        temp.splice(index,1)
        props.setdataList(temp)
    }
    return(
        <div>
            <ul>
                {props.dataList.map((data,index)=>(
                    <div>
                        <li>{data.firstname+""+data.lastname}</li>
                        <button type="button" onClick={()=>deleteData(index)}>Delete</button>
                    </div>
                ))}
            </ul>
        </div>
    )
}

export default Assignment