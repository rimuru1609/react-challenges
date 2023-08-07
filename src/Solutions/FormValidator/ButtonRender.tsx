import { useState  } from 'react';
export type ButtonProps = {
  handleSubmit: (e: React.ChangeEvent<HTMLInputElement>) => void;

};
export default function ButtonRender({
  handleSubmit
  }: ButtonProps) {
  
  const handleSubmits = (e:any)=>{
    handleSubmit(e);
  };
  return (
    <>
        <div>
          <p>By clicking Register, you agree on our <a href="https://www.w3docs.com/privacy-policy">Privacy Policy for W3Docs</a>.</p>
          <button onClick={handleSubmits} type="submit" >Submit</button>
        </div>
    </>
  )
}




/*import { useState,useEffect } from 'react'
import './App.css'
import AccountRender from './AccountRender';
import InputRender from './InputRender';
import ButtonRender from './ButtonRender';

export type ErrorType = {
  email: string;
  password: string;
  age:string;
};
export default function ErrorRender({ email, password,age }: ErrorType) {
    
  return (
    <>

    </>
  )
}*/


