import { Link } from 'react-router-dom'

const Create = () => {
  
  const handleSubmit = (e) => {
    e.preventDefault();
    window.location.href='/countries';
  }


  return ( 
    <div className="create">
      <h2>Sign In</h2>
      <form onSubmit={handleSubmit}>
        <label>E-mail:</label>
        <input 
          type="email"
          required
        />
        <label>Username:</label>
        <input 
          type="text"
          required
        />
        <label>Password:</label>
        <input 
          type="password"
          required
        />
        <br/>
        <button>Sign In</button>
      </form>
    </div>
   );
}
 
export default Create;

