import React, { useEffect } from "react";
function ApiCallUseEffect(){
    const[posts,setPosts]=React.useState([])
    useEffect(() =>{
        console.log('hii')
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response=>response.json())
        .then(res=>
            {
                setPosts(res)
            })
    },[])
    return(
        <div>
            <h2>API DATA</h2>
            <ul>
                {posts.map((post)=>(
                    <li>{post.title}</li>
                ))}
            </ul>
        </div>
    )
}
export default ApiCallUseEffect