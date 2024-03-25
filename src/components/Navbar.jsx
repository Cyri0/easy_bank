import React from 'react'

const Navbar = () => {
  return (
    <nav>
      <div className="wrapper">
        <span className="logo">easybank</span>

        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">Careers</a></li>
        </ul>

        <button>Request Invite</button>
      </div>
    </nav>
  )
}

export default Navbar