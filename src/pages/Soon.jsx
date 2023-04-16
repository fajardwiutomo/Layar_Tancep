import React from 'react'
import under from "./under_const.svg"
import { useNavigate } from 'react-router-dom'

const Soon = () => {
    const navigate = useNavigate()
  return (
    <div className='flex flex-col w-full h-screen justify-center items-center'>
        <img className='w-2/4' src={under} />
        <h1 className='mt-5 text-2xl font-bold text-slate-300'>Under Construction</h1>
        <button
        className='mt-2 bg-red-500 text-white p-2 rounded-lg'
        onClick={() => {
            navigate("/")
        }}>Back to home</button>
    </div>
  )
}

export default Soon