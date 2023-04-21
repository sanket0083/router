import React from 'react'
import { useNavigate } from 'react-router-dom';

const Register = () => {

    const navigate = useNavigate()

    const submithandler = (e) => {
        e.preventDefault();
        const data ={
            name:e.target.name.value,
            email:e.target.email.value,
            password:e.target.password.value,
            phone:e.target.phone.value,
        }
        if(localStorage.getItem('register')){
          const reg =  JSON.parse(localStorage.getItem('register'))
          reg.push(data)
          localStorage.setItem('register', JSON.stringify(reg))
        }else{

            localStorage.setItem('register' , JSON.stringify([data]));
        }
        navigate('/login');
    }
  return (
    <>
          <div className='row col-md-4 mx-auto mt-5 bg-light'>
            <form onSubmit={submithandler}>
                <div className='form-group'>
                    <input className='form-control' name='name'  type='text' placeholder='Enter Name'/>
                </div>
                <br />
                <div className='form-group'>
                    <input className='form-control' name='email'  type='email' placeholder='Enter Email'/>
                </div>
                <br />
                <div className='form-group'>
                    <input className='form-control' name='password'  type='password' placeholder='Enter password'/>
                </div>
                <br />
                <div className='form-group'>
                    <input className='form-control' name='phone'  type='number' placeholder='Enter Phone'/>
                </div>
                <br />
                <div className='form-group'>
                    <button className='btn btn-primary form-control'>Register</button>
                </div>
                <br />
            </form>
        </div>  
    </>
  )
}

export default Register
