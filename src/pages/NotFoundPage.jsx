import React from 'react'
import { Link } from 'react-router-dom'

const NotFoundPage = () => {
  return (
    <div className='container  d-flex justify-content-center mt-5 '>
    <Link to='/'><img width={500}  src="https://freefrontend.com/assets/img/html-funny-404-pages/CodePen-404-Page.gif" alt="" /></Link>
    </div>
  )
}

export default NotFoundPage