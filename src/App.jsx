import './App.css'

function App() {

  const handleAddUser = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const user = { name, email }

    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        'content-type': "application/json"
      },
      body: JSON.stringify(user)

    }).then(res => res.json()).then(data => {
      console.log(data);
      alert("User create successfully");
      form.reset();
    })

  }
  return (
    <>

      <h1>Client side React</h1>
      <form onSubmit={handleAddUser}>
        <input type="text" name="name" id="" placeholder='Enter your name' />
        <br />
        <input type="email" name="email" id="" placeholder='Enter your email' />
        <br />

        <input type="submit" value="Add user" id="" />
      </form>


    </>
  )
}

export default App
