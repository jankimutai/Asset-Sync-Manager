import { Link } from "react-router-dom"
import { useState } from "react";
function Signup(){
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
   
    function handleName(e) {
        setName(e.target.value);
      }
    
    function handleEmail(e) {
      setEmail(e.target.value);
    }
  
    function handlePassword(e) {
      setPassword(e.target.value);
    }
  
    function handleSubmit(e) {
      e.preventDefault();
  
      let newObj = {
        name: name,
        email: email,
        password: password,
      };
  
      fetch("/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newObj),
      })
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(error => console.log(error));
  
      e.target.reset();
    }
  return <div className="d-flex justify-content-center align-items-center bg-primary vh-100"> 
  <div className="bg-white p-3 rounded w-25">
    <h2>Create your account</h2>
      <form onSubmit={handleSubmit}>
      <div className="mb-3">
              <label htmlFor="name"><strong>Full name</strong></label>
              <input type="text" placeholder="Type your name" className="form-control rounded-0" onChange={handleName}/>
          </div>
          <div className="mb-3">
              <label htmlFor="email"><strong>Email</strong></label>
              <input type="email" placeholder="Type your e-mail" className="form-control rounded-0" onChange={handleEmail}/>
          </div>
          <div className="mb-3">
              <label htmlFor="password"><strong>Password</strong></label>
              <input type="password" placeholder="Type your password" className="form-control rounded-0" onChange={handlePassword}/>
          </div>
          <button className="btn btn-success w-100 rounded-0">Sign up</button>
          <p>You agree to our terms and policies</p>
          <Link to="/" className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none">Login</Link>
      </form>
  </div>
</div>
}

export default Signup