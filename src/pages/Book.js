import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Book = () => {

    const [name,setname] = useState('');
    const [price,setprice] = useState('');
    const [quantity,setquantity] = useState('');

    const navigate = useNavigate();

    const SubmitHandler = (e) => {
        e.preventDefault();
        axios.post('https://63cd3b7ad4d47898e3950596.mockapi.io/crud',{
            e_name:name,
            e_price:price,
            e_quantity:quantity,
        }).then((respones) =>{
            console.log(respones.data);
            navigate('/list');
        })
    }


  return (
    <>
        <div className='row col-md-4 mx-auto mt-5 bg-light'>
        <form onSubmit={SubmitHandler}>
          <div className='form-group'>
            <input  type='text' onChange={(e) => setname(e.target.value) } placeholder='Enter product Name' className='form-control mt-3'/>
          </div>
          <br />
          <div className='form-group'>
            <input  type='number' onChange={(e) => setprice(e.target.value)} placeholder='Enter product Price' className='form-control mt-3'/>
          </div>
          <br /><div className='form-group'>
            <input  type='number' onChange={(e) => setquantity(e.target.value)} placeholder='Enter product Quatity' className='form-control mt-3'/>
          </div>
          <br />
          <div className='form-group'>
            <button className='form-control btn btn-primary mb-3'>Send Appoinments</button>
          </div>
        </form>
      </div>
    </>
  )
}

export default Book
