import React, { useEffect, useState } from 'react'
import './Navbar.scss'

function Navbar(){
    const [show, handleShow] = useState(false)
    useEffect(()=>{
        window.addEventListener("scroll", ()=>{
            if(window.scrollY){
                handleShow(true)
            }
            else{
                handleShow(false)
            }
        })
        return ()=>{
            window.removeEventListener("scroll")
        }
    },[])
    return(
        <div className={`navbar ${show && "nav__black"}`}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/170px-Netflix_2015_logo.svg.png" alt="logo"/>
            <img src={require('../../assets/images/logo_2.png')} alt="logo 2" />
        </div>
    )
}

export default Navbar