import React from 'react'
import { NavLink } from 'react-router-dom'
import LogInfo from './LogInfo'

export default function Nav() {
    return (
        <nav className = 'navbar navbar-expand-md navbar-light mb-5'>
            <div className = 'container'>
              <button 
                className="navbar-toggler" 
                type="button" 
                data-toggle="collapse" 
                data-target="#navbarToggler" 
                aria-controls="navbarToggler" 
                aria-expanded="false" 
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
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
              <LogInfo/>
            </div>
        </nav>







        
    )
}