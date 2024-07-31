import React, { useEffect, useState } from 'react'
import './Navbar.scss'
import {Link} from 'react-router-dom'
const Navbar = () => {
    const [active,setActive]=useState(false);
    const [open,setOpen] = useState(false);
    const currentUser ={
        id:1,
        username:"John Done",
        isSeller:true,
    }
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
                    {!currentUser?.isSeller&& <span>Become a Seller</span>}
                    {!currentUser && <button>Join</button>}
                    {currentUser &&(
                        <div onClick={()=>setOpen(!open)} className='user'>
                            <img src="https://www.perfocal.com/blog/content/images/size/w960/2021/01/Perfocal_17-11-2019_TYWFAQ_100_standard-3.jpg" alt="" />
                            <span>{currentUser?.username}</span>
                            {
                                open&&<div className="options">
                                {
                                    currentUser?.isSeller &&(
                                        <>
                                        <span>Gigs</span>
                                        <span>Add New Gig</span>
                                        </>
                                    )
                                }
                                <span>Orders</span>
                                <span>Messages</span>
                                <span>Logout</span>
                            </div>
                            }
                        </div>
                    )}
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
