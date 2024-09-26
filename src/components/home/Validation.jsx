"use client"
import React, { useState } from 'react'

const Validation = () => {
    const formData = {
        Name: "",
        Email: "",
        Password: "",
        ConfirmPassword: "",
    }
    const [formValue, setFormvalue] = useState(formData)
    const [error, setError] = useState(false)

    const SumitHandler = (e) => {
        e.preventDefault()
        setError(true)
    }
    console.log("value", formValue)

    return (
        <div className='max-w-[555px] mx-auto p-4 pb-5'>
            <div className='border-[2px] border-grey-500 rounded-[12px] p-4'>
                <div className='mt-4 p-3 border-[2px] border-grey-700'>
                    <input type="text" placeholder='Name' onChange={(e) => setFormvalue({ ...formValue, Name: e.target.value })} value={formValue.Name} />
                    <p className='text-red-500'>{error && formValue.Name === "" ? "Name is required" : ""}</p>
                </div>
                <div className='mt-4 p-3 border-[2px] border-grey-700'>
                    <input type="email" placeholder='Email' onChange={(e) => setFormvalue({ ...formValue, Email: e.target.value })} value={formValue.Email} />
                    <p className='text-red-500'>{error && formValue.Email === "" ? "Name is required" : ""}</p>
                </div>
                <div className='mt-4 p-3 border-[2px] border-grey-700'>
                    <input type="password" placeholder='Password' onChange={(e) => setFormvalue({ ...formValue, Password: e.target.value })} value={formValue.Password} />
                    <p className='text-red-500'>{error && formValue.Password === "" ? "Name is required" : ""}</p>
                </div>
                <div className='mt-4 p-3 border-[2px] border-grey-700'>
                    <input type="confirmpassword" placeholder='Confirm Password' onChange={(e) => setFormvalue({ ...formValue, ConfirmPassword: e.target.value })} value={formValue.ConfirmPassword} />
                    <p className='text-red-500'>{error && formValue.ConfirmPassword === "" ? "Name is required" : ""}</p>
                </div>
                <button onClick={(e) => SumitHandler(e)} className='p-5 mt-4 w-full border-[2px] border-red-800 rounded-lg'>Sumited</button>
            </div>
        </div>
    )
}

export default Validation