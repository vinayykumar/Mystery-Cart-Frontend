import React, { useContext, useState } from 'react'
import axios from 'axios';
import './SignUp.scss'
import { Context } from '../../utils/context';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {

    const {isLoggedIn,setIsLoggedIn} = useContext(Context);
    const navigate = useNavigate();

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
        console.log("Email is : ",data.email," Password is : ",data.password)
    }
    const handleSubmit = () => {
        axios
          .post('http://localhost:1337/api/auth/local/register', {
            username: 'test_username',
            email : 'test@strapi.io',
            password: 'Password',
          })  
          .then(response => {
            console.log('User profile', response.data.user);
            console.log('User token', response.data.jwt);
            setIsLoggedIn(true);
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
                    <p>Please SignUp to proceed</p>
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
                        <button onClick={handleSubmit}>Register</button>
                </div>
            </div>
      </div>
    </div>
  )
}

export default SignUp
