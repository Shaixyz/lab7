import React, { useEffect } from 'react';
import GoogleButton from 'react-google-button';
import { UserAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const { googleSignIn, user } = UserAuth();
  const navigate = useNavigate();

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    console.log(user);
    if (user != null) {
      navigate('/dashboard');
    }
  }, [user]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h1 style={{ color: '#f05123', marginBottom: '30px' }}>Login to your Google account</h1>

      <form style={{ width: '300px', marginTop: '20px', marginBottom: '40px' }}>
        <label htmlFor="email">Email:</label>
        <br />
        <input type="email" id="email" name="email" required style={{ width: '100%', padding: '10px', marginBottom: '10px' }} />

        <label htmlFor="password">Password:</label>
        <br />
        <input type="password" id="password" name="password" required style={{ width: '100%', padding: '10px', marginBottom: '20px' }} />

        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
          <button type="submit" style={{ background: '#f05123', color: '#fff', border: 'none', padding: '10px 20px', borderRadius: '5px', cursor: 'pointer' }}>Forgot password</button>
          <button type="submit" style={{ background: '#f05123', color: '#fff', border: 'none', padding: '10px 20px', borderRadius: '5px', cursor: 'pointer' }}>Confirm</button>
        </div>
      </form>

      <GoogleButton onClick={handleGoogleSignIn} />

      <div style={{ color: 'red', marginTop: '20px' }} id="Warning"></div>
    </div>
  );
}
