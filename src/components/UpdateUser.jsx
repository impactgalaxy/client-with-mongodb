import { useLoaderData } from "react-router-dom";

export default function UpdateUser() {
    const loadedUser = useLoaderData();
    const handleUserUpdate = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const updateInfo = { name, email };
        console.log(updateInfo);
        fetch(`http://localhost:5000/users/${loadedUser._id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updateInfo)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    alert("Update profile successfully");
                    form.reset();
                }
            })
    }
    return (
        <div>
            <h1>Welcome {loadedUser?.name} to update your profile</h1>
            <form onSubmit={handleUserUpdate}>
                <input type="text" name="name" placeholder={loadedUser?.name} />
                <br />
                <input type="email" name="email" id="" placeholder={loadedUser?.email} />
                <br />
                <input type="submit" value="Update" />
            </form>
        </div>
    )
}
