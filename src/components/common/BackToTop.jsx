"use client"
import React, { useState } from 'react'


const BackToTop = () => {
    const [value, setvalue] = useState(false)
    const backToTopHandle = () => {
        window.scrollTo(top)
    }
    const backToTopHand = () => {
        if (window.scrollY > 200) {
            setvalue(true);
        }
        else {
            setvalue(false);
        }
        window.addEventListener(
            "scroll,backToTopClick"
        )
        return () => {
            window.removeEventListener(
                "scroll,backToTopClick"
            )
        }
    }


    return (
        <div className='relative'>
            <button className='absolute right-2 bottom-2 hover:text-white hover:bg-red-500  text-red-700 font-bold border p-5 border-red-900' onClick={backToTopHandle}>BackToTop</button>
        </div>
    )
}

export default BackToTop