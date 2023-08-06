import { useState } from 'react'

function Validator() {
    const [name, setName] = useState("");
    const [pass, setPass] = useState("");
    const [error, setError] = useState("");
  return (
    <>
      <p >
        Form Validator
      </p>
      <form onSubmit={(e)=>{
        e.preventDefault()
       console.log(name);
        if (name ==="") {
            setError('Title is required');
          }
        
      }}>
        <label>Enter your name:
            <input
            type="text" 
            value={(name)}
            onChange={(e) => setName(e.target.value)}
            // required
            aria-invalid={!!error}
            />
        </label>
        <br></br>
        <label>Enter your password:
            <input
            type="text" 
            value={(pass)}
            onChange={(e) => setPass(e.target.value)}
             required
            aria-invalid={!!error}
            />
        </label>
        <input type="submit" value="submit" />
    </form>

    {error && <strong id="title-error" role="alert">{error}</strong>}
    
    
    </>
  )
}

export default Validator
