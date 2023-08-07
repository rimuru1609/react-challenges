import { useState,useEffect } from 'react'
import './App.css'
import AccountRender from './AccountRender';
import InputRender from './InputRender';
import ButtonRender from './ButtonRender';

function Validator() {
    const [formValue, setFormValue] = useState({age:"",email:"",password:""});
    const [formErrors, setFormErrors] = useState({age:"",email:"",password:""});
    const [email,setUsername]=useState('');
    const [password,setPass]=useState('');
    const [age,setAge]=useState('');
    const [isSubmit, setIsSubmit] = useState(false);

    const handleChangeUser = (e: React.ChangeEvent<HTMLInputElement>) =>{
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
      const handleSubmit = (e:React.ChangeEvent<HTMLInputElement>)=>{
       e.preventDefault();
        formErrors.age=age;
        formErrors.email=email;
        formErrors.password=password;
        setFormErrors(validate(formErrors));
       
      };
      useEffect(() => {
        console.log(formErrors);
        if (Object.keys(formErrors.age).length == 0 &&isSubmit==true&&Object.keys(formErrors.email).length === 0 && Object.keys(formErrors.password).length === 0) {
          formValue.age=age;
          formValue.email=email;
          formValue.password=password;
          setFormValue(formValue);
          setIsSubmit(true);
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
        }else if (values.age < 18) {
            errors.age = "Age must be more than 18 year old";
        } else if (values.age > 25) {
            errors.age = "Age cannot exceed more than 25 year old";
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
    
    {Object.keys(formValue).length !=null  && isSubmit? (
       
        <div className="ui message success">Signed in successfully</div>
      ) : (
        <pre>not</pre>
      )}
    <div className="main-block">
      <h1>Registration</h1>
      <form >
      <hr></hr>
        <AccountRender/>
       <hr></hr>
        <InputRender handleChangeUser={handleChangeUser} 
                      handleChangePass={handleChangePass}
                      handleChangeAge={handleChangeAge}
                      email={email}
                      password={password}
                      age={age}
                      formErrors={formErrors}
        />
        <hr></hr>
        <div className="gender">
          <input type="radio" value="none" id="male" name="gender" checked/>
          <label htmlFor="male" className="radio">Male</label>
          <input type="radio" value="none" id="female" name="gender" />
          <label htmlFor="female" className="radio">Female</label>
        </div>
        <hr></hr>
        <ButtonRender handleSubmit={handleSubmit}/>
      </form>
    </div>
    </>
  )
}
export default Validator
