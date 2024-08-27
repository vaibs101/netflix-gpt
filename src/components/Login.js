import React, { useRef, useState } from 'react'
import Header from './Header';
import { checkValidData } from '../utils/validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth";
import { auth } from '../utils/firebase';


const Login = () => {
const [isSignInForm,setIsSignForm]=useState(true);
const [errorMessage,setErrorMessage]=useState(null);
const email=useRef(null);
const password=useRef(null);


    const toggleSignInForm=()=>{
    setIsSignForm(!isSignInForm);
    }

    const handleButtonClick=()=>{
    //validate the form data
    const message=checkValidData(email.current.value, password.current.value);
   setErrorMessage(message);

   if(message) return;

   //Sign In / Sign Up
   if(!isSignInForm){
     //Sign Up Logic
     createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
     .then((userCredential) => {
       // Signed up 
       const user = userCredential.user;
       console.log(user);
       // ...
     })
     .catch((error) => {
       const errorCode = error.code;
       const errorMessage = error.message;
       setErrorMessage(errorCode + "-" + errorMessage)
       // ..
     });
   }
   else{
   //Sign In Logic
   signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user)
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode+"-"+errorMessage);
  });
   }
    }
  return (
    <div >
      <Header/>
      <div className='absolute' 
      >
      <img
       src="https://assets.nflxext.com/ffe/siteui/vlv3/36a4db5b-dec2-458a-a1c0-662fa60e7473/1115a02b-3062-4dcc-aae0-94028a0dcdff/IN-en-20240820-TRIFECTA-perspective_WEB_eeff8a6e-0384-4791-a703-31368aeac39f_small.jpg"
      alt="logo"></img>
   
    </div>
    <form onSubmit={(e)=>e.preventDefault()} className='w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80'>
    <h1 className='font-bold text-3xl py-4'>{isSignInForm?"Sign In":"Sign Up"}</h1>
    {!isSignInForm && <input type='text' placeholder='Full Name' className='p-4 my-4 w-full bg-gray-700'></input>
  }
  <input type='text' ref={email} placeholder='Email Address' className='p-4 my-4 w-full bg-gray-700'></input>
  
  <input type='password' ref={password} placeholder='Password' className='p-4 my-4 w-full bg-gray-700'></input>
  <p className='text-red-600 font-bold text-lg py-2'>{errorMessage!==null?errorMessage:""}</p>
  <button className='p-4 my-6 bg-red-700 w-full rounded-lg' onClick={handleButtonClick}>{isSignInForm?"Sign In":"Sign Up"}</button>
  <p className='py-4 cursor-pointer' onClick={toggleSignInForm}>{isSignInForm?"New to Netflix? Sign Up Now":"Already Registered? Sign In Now"}</p>
    </form>
    </div>
  )
}

export default Login;
