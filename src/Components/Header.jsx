import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
    <header className='bg-darkPrimary px-10 py-4'>
        <Link to="/"><h1 className='font-black text-2xl text-lightPrimary'>AnonNest</h1></Link>
        
    </header>
    <hr className='border border-lightPrimary'/>
    </>
  )
}

export default Header