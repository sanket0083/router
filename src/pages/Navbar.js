import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = (props) => {

    const [ bool, setbool ] = useState(false)

    useEffect(() => {
        localStorage.getItem('login') ? setbool(true) : setbool(false)
    },[])
    
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <Link className="navbar-brand" href="#">Navbar</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav m-auto">
                            <li className="nav-item">
                                <Link to='/' className="nav-link active" aria-current="page" >Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/book' className="nav-link" >Bookappoinment</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/list' className="nav-link" >Listappoinment</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div>
                    {bool === false ? <Link to='/login'>
                        <button className='btn btn-primary'>Login</button>
                    </Link> :
                    <Link to='/login'>
                        <button className='btn btn-primary' onClick={() => localStorage.removeItem('login')}>LogOut</button>
                    </Link>}
                </div>
                
                <div>
                    <Link to='/register'>
                        <button className='btn btn-info me-5'>Register</button>

                    </Link>
                </div>
            </nav>

        </>
    )
}

export default Navbar
