import React from 'react'
import { Navigate } from 'react-router-dom'

const LoginRouter = (props) => {

    if(JSON.parse(localStorage.getItem('login'))?.email){
        return <Navigate to='/' />
    }
  return (
    <>
      {props.children}
    </>
  )
}

export default LoginRouter
