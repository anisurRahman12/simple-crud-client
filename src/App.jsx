
import './App.css'


function App() {
  
  const handleAddUser =event =>{
    event.preventDefault();
    const form = event.target;
    const name =form.name.value;
    const email =form.email.value;
    const users= {name,email};
    console.log(users)
    fetch('http://localhost:4000/users',{
      method:'POST',
      headers:{
        'content-type': 'application/json'
      },
      body:JSON.stringify(users)
    })
    .then(res=>res.json())
    .then(data=>{
      console.log(data)
    })

  }

  return (
    <>
      
      <h1>Simple Crud</h1>
      <form onSubmit={handleAddUser}>
        <input type="text" name="name" id="" /> <br />
        <input type="email" name="email" id="" /> <br />
        <input type="submit" value="Add user" />
      </form>

     
   
    </>
  )
}

export default App
