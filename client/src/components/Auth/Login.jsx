import React, { useContext, useState, useEffect } from 'react'
import axios from 'axios';
import './SignUp.scss'
import {Context} from '../../utils/context'
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
const Login = () => {
    const {isLoggedIn,setIsLoggedIn} = useContext(Context);
    const navigate = useNavigate();

    useEffect(()=> {
      if(localStorage.getItem('token')){
        navigate("/");
      }
    },[]) 

    const [data,setData] = useState({
        email : '',
        password : ''
    })
    
    function changeHandler(event){
        setData( (prev) => (
            {
                ...prev,
                [event.target.name] : event.target.value
            }
        ))
    }

    const handlesubmit = () => {
        axios
          .post('http://localhost:1337/api/auth/local', {
            identifier: 'test_username',
            password: 'Password',
          })
          .then((response) => {
            // console.log('User profile', response.data.user);
            // console.log('User token', response.data.jwt);
            console.log(response);
            localStorage.setItem('token',response.data.jwt)
            localStorage.setItem('userId',response.data.user.id)
            setIsLoggedIn(true);
            console.log("Logged variable ab :",isLoggedIn)
            toast.success("Logged In Successfully");
            navigate('/');
          })
          .catch(error => {
            console.log('An error occurred:', error.response);
          });
    }
  return (
    <div>
      <div className="signup-container">
            <div className="main-box">
                <div className="heading">
                    <h1>Welcome to Mystery Cart</h1>
                    <p>Please Login to proceed</p>
                </div>
                <div className="form">
                        <label>
                            Email
                            <input name='email' type="text" onChange={changeHandler}/>
                        </label>
                        <label>
                            password
                            <input name='password' type="password" onChange={changeHandler}/>
                        </label>
                        <button onClick={handlesubmit}>Login</button>
                </div>
            </div>
      </div>
    </div>
  )
}

export default Login;
