import React, { useEffect } from 'react'
import GoogleButton from 'react-google-button';
import { UserAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const {googleSignIn, user} = UserAuth();
  const navigate = useNavigate()
  const handleGoogleSignIn = async()=>{
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error)
    }
  };

  useEffect(()=>{
    console.log(user)
    if(user!=null){
      navigate('/dashboard')
    }
  },[user])

  return (
    <div>
      <h1 style={{color: 'white'}}>Login to Huy</h1>
      <div style={{display: 'flex', justifyContent: 'center', alignContent: 'center'}}>
        <GoogleButton onClick={handleGoogleSignIn}/>
      </div>
      <div style={{color: 'red'}} id="Warning">

      </div>
    </div>
  )
}
