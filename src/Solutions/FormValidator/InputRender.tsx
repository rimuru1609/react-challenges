import { useState  } from 'react';
import { ErrorType } from './ErrorRender';
import ErrorRender from './ErrorRender';
export type InputProps = {
  handleChangeUser?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleChangePass?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleChangeAge?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  email?: string;
  password?: string;
  age?: string;
  formErrors:{age:"",email:"",password:""}  ;
   
  };
export default function InputRender({
  handleChangeUser ,
  handleChangePass,
  handleChangeAge,
  email,
  password,
  age,
  formErrors
  //formErrors
  }: InputProps) {
    
  return (
    <>
    <div className="inputcontainer">
            <label  htmlFor="name">Email:</label>
            <input type="text" name="name"  placeholder="Email" value={email} onChange={handleChangeUser} required/>
            <span className="error"> {formErrors.email}</span>
            <br></br>
            
            <label  htmlFor="name">Age:</label>
            <input type="number" name="name"  placeholder="Age" value={age}  onChange={handleChangeAge} required/>
            <span className="error"> {formErrors.age}</span>
            <br></br>
           
            <label  htmlFor="name">Pass:</label>
            <input type="password" name="name"  placeholder="Password" value={password}  onChange={handleChangePass} required/>
            <span className="error"> {formErrors.password}</span>
            <br></br>
       </div>
    </>
  )
};


