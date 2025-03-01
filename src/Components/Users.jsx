import { useState } from "react";
import { useLoaderData } from "react-router-dom";


const Users = () => {
    const loadedUsers = useLoaderData();
    const [users, setUsers]=useState(loadedUsers)

    const handleDelete= _id =>{
        console.log(_id)
        fetch(`http://localhost:4000/users/${_id}`,{
            method:"DELETE"
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.deleteCounted>0){
                alert('delete successfully')
                const remaining = users.filters(user => user._id !== _id);
                setUsers(remaining);
            }
        })
    }
    return (
        <div>
            <h2>{users.length}</h2>
            <div>
                {
                    users.map(user => <p key={user._id}>{user.name}:{user.email} <button onClick={()=>handleDelete(user._id)}> X</button></p>)
                }
            </div>
        </div>
    );
};

export default Users;