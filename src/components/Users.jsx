import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom"

export default function Users() {
    const loadUsers = useLoaderData();
    const [users, setUsers] = useState(loadUsers);

    const handleDelete = (_id) => {
        fetch(`http://localhost:5000/users/${_id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                alert("User deleted successfully");
                const filterUser = users.filter(user => user._id !== _id);
                setUsers(filterUser);
            })
    }
    const style = {
        border: "1px solid black",
        padding: "10px"
    }
    return (
        <div>
            <h1>This is user site {users.length}</h1>
            {
                users.map(user => {
                    return (
                        <div key={user._id} style={style}>
                            <p>Name: {user.name}</p>
                            <p>Email: {user.email}</p>
                            <div style={{ display: "flex", justifyContent: "space-between" }}>
                                <button onClick={() => handleDelete(user._id)}>Delete</button>
                                <button type="button"><Link to={`/update/${user._id}`}>Update</Link></button>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}
