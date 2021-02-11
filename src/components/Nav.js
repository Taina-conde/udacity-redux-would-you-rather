import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Nav() {
    return (
        <div 
         className = "collapse navbar-collapse" 
         id="navbarToggler"
        >
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                <li className="nav-item">
                    <NavLink className = 'nav-link' to = '/' exact activeClassName = 'active'>
                        Home
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className = 'nav-link' to = '/add' activeClassName = 'active'>
                        New question
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className = 'nav-link' to = '/leaderboard' activeClassName = 'active'>
                        Leader board
                    </NavLink>
                </li>
            </ul>
        </div>
    )
}