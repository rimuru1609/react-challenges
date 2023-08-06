import { useState,useEffect  } from 'react';

function Validators() {
  const [formValue, setFormValue] = useState({age:"",email:"",password:""});
  const [formErrors, setFormErrors] = useState({age:"",email:"",password:""});
    const [email,setUsername]=useState('');
    const [password,setPass]=useState('');
    const [age,setAge]=useState('');
    const [isSubmit, setIsSubmit] = useState(false);

    const handleChangeUser = (e:any) =>{
      const value = e.target.value;
      setUsername(value);
       };
    const handleChangePass = (e:any) =>{
        const value = e.target.value;
        setPass(value);
        
      };
      const handleChangeAge = (e:any) =>{
        const value = e.target.value;
        setAge(value);
        
      };
      const handleSubmit = (e:any)=>{
        e.preventDefault();
       
        formErrors.age=age;
        formErrors.email=email;
        formErrors.password=password;
        setFormErrors(validate(formErrors));
        setIsSubmit(true);
      };
      useEffect(() => {
        console.log(formErrors);
        if (Object.keys(formErrors.age).length === 0 && isSubmit &&Object.keys(formErrors.email).length === 0 && Object.keys(formErrors.password).length === 0) {
          formValue.age=age;
          formValue.email=email;
          formValue.password=password;
          setFormValue(formValue);
          
          console.log('age:',formValue.age);
          console.log('Email: ',formValue.email);
          console.log('Password: ',formValue.password);
        }
      }, [formErrors]);
      const validate = (values:any) => {
        const errors = {age:"",email:"",password:""};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if (!values.age) {
          errors.age = "Age is required!";
        }
      
        if (!values.email) {
          errors.email = "Email is required!";
        } else if (!regex.test(values.email)) {
          errors.email = "This is not a valid email format!";
        }
        if (!values.password) {
          errors.password = "Password is required";
        } else if (values.password.length < 5) {
          errors.password = "Password must be more than 5 characters";
        } else if (values.password.length > 8) {
          errors.password = "Password cannot exceed more than 8 characters";
        }
        return errors;
      };
  
   
  return (
    <>
      <figure className="text-center">
        <blockquote className="blockquote">
          <p>FORM VALIDATOR</p>
        </blockquote>
        <figcaption className="blockquote-footer">
          Learn with <cite title="Source Title">Viet Japan Partner</cite>
      </figcaption>
      </figure>
      {Object.keys(formValue).length === 0 && isSubmit ? (
        <div className="ui message success">Signed in successfully</div>
      ) : (
        <pre>not</pre>
      )}
      <form className="was-validated" onSubmit={handleSubmit}>
        <div className="input-group mb-3">
          <label  className="input-group-text">Email</label>
          <input type="text" value={email} onChange={handleChangeUser}  className="form-control"   placeholder="Fill the email"  aria-label="file example" />
          <br></br>
          <span className=""> {formErrors.email}</span>
          
        </div>
        <div className="input-group mb-3">
          <label  className="input-group-text">Password</label>
          <input type="password" value={password}  onChange={handleChangePass} className="form-control" placeholder="Fill the password"  aria-label="file example" />
          <br></br>
          <span className=""> {formErrors.password}</span>
          
        </div>
        <div className="input-group mb-3">
          <label  className="input-group-text">The Age</label>
          <input type="text" value={age}  onChange={handleChangeAge} className="form-control"   placeholder="Fill the age"  aria-label="file example" />
         <br></br>
         <span className=""> {formErrors.age}</span>
        </div>
        <div >
          <button type="submit" className="btn btn-primary mb-3">Submit</button>
        </div>
      </form>
    </>
  )
}

export default Validators
