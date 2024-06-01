'use client';
import { IconBurger, IconX } from '@/app/public/svgimage';
import React, { useState } from 'react'

export function NavbarComponent() {
    const[isOpen, setIsOpen] = useState(false)
    function handlerButton() {
        setIsOpen(!isOpen)
    }
    return (
        <>
        <nav className="h-32 mx-5 md:mx-16 text-white display: flex justify-between items-center">
            <h1 className="text-black text-3xl ">Polograph</h1>
            
            <div className="flex justify-between items-center" >
                <div className='m-3 hidden md:block'>
                    <a href="/" className="navbar-link p-10">Home</a>
                    <a href="/about" className="navbar-link p-10">About</a>
                    <a href="/service" className="navbar-link p-10">Service</a>
                    <a href="/contact" className="navbar-link p-10">Contact</a>
                </div>
                {isOpen ? 
                    <div className='m-3 md:hidden flex flex-col mt-40 border-2 rounded-md bg-[rgba(255,191,0,0.24)] border-black border-collapse px-10 py-2'>
                        <a href="/" className="navbar-link p-3" onClick={handlerButton}>Home</a>
                        <a href="/about" className="navbar-link p-3">About</a>
                        <a href="/service" className="navbar-link p-3">Service</a>
                        <a href="/contact" className="navbar-link p-3">Contact</a>
                    </div>
                    :null
                }
                

                <button className='block md:hidden' onClick={handlerButton}>
                    {isOpen ? 
                        <div className="h-10 w-10">
                            <IconX/>
                        </div>
                    : 
                    <div className="h-10 w-10">   
                        <IconBurger/> 
                    </div>
                    }
                </button>
            </div>
        </nav>
        <div className='mx-5 md:mx-16 border border-black'></div>
        
        
        </>
    )
}
