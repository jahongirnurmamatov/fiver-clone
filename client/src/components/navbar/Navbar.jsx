import React, { useEffect, useState } from 'react'
import './Navbar.scss'
import {Link} from 'react-router-dom'
const Navbar = () => {
    const [active,setActive]=useState(false);

    const isActive = ()=>{
        window.scrollY > 0 ? setActive(true):setActive(false);
    }
    useEffect(()=>{
        window.addEventListener("scroll",isActive);
        return ()=>{
            window.removeEventListener('scroll', isActive);
        }
    })

    return (
        <div className={active? 'active navbar':"navbar"}>
            <div className="container">
                <div className="logo">
                    {/* <Link to={'/'}> */}
                        <span className='text'>fiverr</span>
                        <span className='dot'>.</span>
                    {/* </Link> */}
                </div>
                <div className="links">
                    <span>Fiverr Business</span>
                    <span>Explore</span>
                    <span>English</span>
                    <span>Sign in</span>
                    <span>Become a Seller</span>
                    <button>Join</button>
                </div>
                
            </div>
            {active && <>
            <hr />
            <div className="menu">
                <span>TEst</span>
                <span>test2</span>
            </div>
            </>
            }
        </div>
    )
}

export default Navbar
