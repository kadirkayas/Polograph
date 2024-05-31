'use client';
import React, { useState } from 'react'

export function NavbarComponent() {
    const[isOpen, setIsOpen] = useState(false)
    function handlerButton() {
        setIsOpen(!isOpen)
    }
    return (
        <>
        <nav className="h-32 mx-16 text-white display: flex justify-between items-center">
            <h1 className="text-black text-3xl ">Polograph</h1>
            
            <div className="flex justify-between items-center" >
                {!isOpen?
                <div className='m-3 '>
                    <a href="/" className="navbar-link">Home</a>
                    <a href="/about" className="navbar-link">About</a>
                    <a href="/service" className="navbar-link">Service</a>
                    <a href="/contact" className="navbar-link">Contact</a>
                </div>
                : null}

                <button onClick={handlerButton}>
                    {isOpen ? 
                        <div className="h-10 w-10">
                            <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4 18L20 18" stroke="#000000" stroke-width="2" stroke-linecap="round"/>
                                <path d="M4 12L20 12" stroke="#000000" stroke-width="2" stroke-linecap="round"/>
                                <path d="M4 6L20 6" stroke="#000000" stroke-width="2" stroke-linecap="round"/>
                            </svg>
                        </div>
                    : 
                    <div className="h-10 w-10">
                        <svg fill="#000000"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 650 650">
                            <path d="M285.08,230.397L456.218,59.27c6.076-6.077,6.076-15.911,0-21.986L423.511,4.565c-2.913-2.911-6.866-4.55-10.992-4.55
	                        c-4.127,0-8.08,1.639-10.993,4.55l-171.138,171.14L59.25,4.565c-2.913-2.911-6.866-4.55-10.993-4.55
	                        c-4.126,0-8.08,1.639-10.992,4.55L4.558,37.284c-6.077,6.075-6.077,15.909,0,21.986l171.138,171.128L4.575,401.505
	                        c-6.074,6.077-6.074,15.911,0,21.986l32.709,32.719c2.911,2.911,6.865,4.55,10.992,4.55c4.127,0,8.08-1.639,10.994-4.55
	                        l171.117-171.12l171.118,171.12c2.913,2.911,6.866,4.55,10.993,4.55c4.128,0,8.081-1.639,10.992-4.55l32.709-32.719
	                        c6.074-6.075,6.074-15.909,0-21.986L285.08,230.397z"/>
                        </svg>
                    </div>
                    }
                </button>
            </div>
        </nav>
        <div className='mx-16 border border-black'></div>
        
        
        </>
    )
}
