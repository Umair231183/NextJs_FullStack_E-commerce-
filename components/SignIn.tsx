import { SignInButton } from '@clerk/nextjs'
import React from 'react'

const SignIn = () => {
  return (
    <SignInButton mode='modal'>
    <button className='text-xs font-semibold
    hover:text-darkColor text-lightColor hoverEffect hover:cursor-pointer'>
        Login      
    </button>
    </SignInButton>
  )
}

export default SignIn
