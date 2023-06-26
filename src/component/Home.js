import React, { useEffect, useState } from 'react'
import "../style/Home.css"
import ReorderIcon from '@mui/icons-material/Reorder';
import { Link, useLocation } from 'react-router-dom';
export default function Home() {
    const [expandNavbar, setExpandNavbar] = useState(false);

    const location = useLocation();

    useEffect(() => {
        setExpandNavbar(false)
    }, [location])
    return (

        <div className="navbar" id={expandNavbar ? "open" : "close"}>
            <div className='toggleButton'>
                <button onClick={() => {
                    setExpandNavbar((prev) => !prev);
                }}><ReorderIcon /></button>
            </div>
            <div className='links'>
                <Link to="/">Home</Link>
                <Link to="/login">UserLogin</Link>
                <Link to="/Register">UserRegister</Link>
                <Link to="/search">CandidateSearch</Link>
            </div>
            <div>
                <h1>Welcome to our Online Recruitment Solution!</h1>
                <p>Efficiently find the best candidates for your company.</p>
                {/* Add additional content, features, and benefits */}
                <img src="avatar.jpg" alt="" />
            </div>
        </div>

    )
}
