import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Edit = () => {

    const [id,setid] = useState(0);
    const [name,setname] = useState();
    const [price,setprice] = useState();
    const [quantity,setquantity] = useState();

    const navigate = useNavigate();


    useEffect(()=>{
        setid(localStorage.getItem('id'));
        setname(localStorage.getItem('name'));
        setprice(localStorage.getItem('price'));
        setquantity(localStorage.getItem('quantity'));
    },[])

    const updateHandler = (e) => {
        e.preventDefault();
        axios.put(`https://63cd3b7ad4d47898e3950596.mockapi.io/crud/${id}`,{
            e_name: name,
            e_price: price,
            e_quantity: quantity,
        })
        .then(()=>{
            navigate('/list');
        })
    }

  return (
    <>
      <div className='row col-md-4 mx-auto mt-5 bg-light'>
        <form onSubmit={updateHandler}>
          <div className='form-group'>
            <input  type='text' value={name} onChange={(e) => setname(e.target.value)} placeholder='Enter product Name' className='form-control mt-3'/>
          </div>
          <br />
          <div className='form-group'>
            <input  type='number' value={price} onChange={(e) => setprice(e.target.value)} placeholder='Enter product Price' className='form-control mt-3'/>
          </div>
          <br /><div className='form-group'>
            <input  type='number' value={quantity} onChange={(e) => setquantity(e.target.value)} placeholder='Enter product Quatity' className='form-control mt-3'/>
          </div>
          <br />
          <div className='form-group'>
            <button className='form-control btn btn-primary mb-3'>Update Appoinments</button>
          </div>
        </form>
      </div> 
    </>
  )
}

export default Edit
