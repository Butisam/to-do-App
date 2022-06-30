import React from "react"
import { Link } from "react-router-dom"
import './navbar.css'
import Addtask from "./tasks"
export default function NavBar(){
  return(
  <nav className="nav">
     <ul className='active'>
      <li>
        <Link to="/tasks"> ADD TASKS</Link>

      </li>
      <li>
      <Link to="/Complete"> COMPLETED</Link>
      </li>
    </ul> 
  </nav>
  )
}

function CustomLink({to, children,...props}) {

  const path = window.location.pathname

  return(

  <li className={path=== to ? "active" : ""}>
<Link to={to} {...props}>
    {children}
</Link>

  </li>
  )
  
}