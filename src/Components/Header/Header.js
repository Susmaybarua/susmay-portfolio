import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    let activeStyle = {
        textDecoration: "underline",
        padding : "10px",
      };
    return (
        <div>
            <h2>My Portfolio Website</h2>
           <nav className="navbar">
          <NavLink
            to="home"
            style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }
          >
            Home
          </NavLink>
       
          <NavLink
            to="projects"
            style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }
          >
            Projects
          </NavLink>

          <NavLink
            to="about"
            style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }
          >
            About
          </NavLink>

          <NavLink
            to="contact"
            style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }
          >
            Contact
          </NavLink>
       
          <NavLink
            to="downloadResume"
            style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }
          >
            Download Resume
          </NavLink>
    </nav>
        </div>
    );
};

export default Header;