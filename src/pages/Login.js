import React from 'react'
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const navigate  = useNavigate();

    const LoginHandler  = (e) => {
    e.preventDefault();
    const data = {
        email : e.target.email.value,
        password : e.target.password.value,
    }
    
    const regdata = JSON.parse(localStorage.getItem('register'));
    regdata?.map((i) => {
            if(i.email === data.email && i.password === data.password){
                localStorage.setItem('login',JSON.stringify(data));
                navigate('/book')
            } else {
                alert('please valid fill')
            }
    }) 
}


  return (
    <>
        <div className='row col-md-4 mx-auto mt-5 bg-light'>
            <form onSubmit={LoginHandler}>
                <div className='form-group'>
                    <input className='form-control' name='email'  type='email' placeholder='Enter Email'/>
                </div>
                <br />
                <div className='form-group'>
                    <input className='form-control' name='password'  type='password' placeholder='Enter password'/>
                </div>
                <br />
                <div className='form-group'>
                    <button className='btn btn-primary form-control'>Login</button>
                </div>
                
                <br />
            </form>
        </div> 
    </>
  )
}

export default Login
