import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const List = () => {

    const [apidata, setapidata] = useState([]);

    function getdata() {
        axios.get('https://63cd3b7ad4d47898e3950596.mockapi.io/crud')
            .then((response) => {
                setapidata(response.data);
            })
    }

    const Deletehandler = (id) => {
        axios.delete(`https://63cd3b7ad4d47898e3950596.mockapi.io/crud/${id}`)
        .then(()=>{
            getdata()
        })

    }

    const EditHandler = (id,name,price,quantity)=>{
        localStorage.setItem('id',id)
        localStorage.setItem('name',name)
        localStorage.setItem('price',price)
        localStorage.setItem('quantity',quantity)
    }
    

    useEffect(() => {
        getdata()
    }, []);

    return (
        <>
            <div className='row'>
                <div className='col-md-12'>

                    <table className='table table-bordered table-striped table-dark table-hover'>
                        <thead>
                            <tr>

                                <th>NAME</th>
                                <th>PRICE</th>
                                <th>QUANTITY</th>
                                <th>EDIT</th>
                                <th>DELETE</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                apidata.map((i) => {
                                    return (
                                        <>
                                            <tr>

                                                <td>{i.e_name}</td>
                                                <td>{i.e_price}</td>
                                                <td>{i.e_quantity}</td>
                                                <td>
                                                <Link to='/edit'>
                                                    <button onClick={(e) => EditHandler(i.id,i.e_name,i.e_price,i.e_quantity)} className='btn btn-primary'>Edit</button>
                                                </Link>
                                                </td>
                                                <td>
                                                    <button onClick={(e) => Deletehandler(i.id)} className='btn btn-danger'>Delete</button>
                                                </td>
                                            </tr>
                                        </>
                                    )

                                })
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default List
