import React from 'react'
import "./sidebar.css"

const Sidebar = () => {
  return (
    <div className="Sidebar">
        <ul className="SidebarList">
            <li className="SidebarListItem" id='main' >NEW TRACK AVAILABLE</li>
            <li className="SidebarListItem">CONCERT</li>
            <li className="SidebarListItem">LIVE FROM NEW YORK</li>
        </ul>
    </div>
  )
}

export default Sidebar
