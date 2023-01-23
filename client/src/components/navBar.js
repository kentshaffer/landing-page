import React from 'react';
import { Link, useLocation } from "react-router-dom"

const styles = {
  header: {
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    borderWidth: '1px',
    borderColor: '#dee2e6',
    borderStyle: 'solid'
  },
  navTabs: {
    paddingBottom: '1%',
    borderStyle: 'none'
  }
}

export default function NavBar() {
  const location = useLocation()
  return (
    <div style={styles.header}>
      <ul style={styles.navTabs} className="nav nav-tabs">
        <li className="nav-item">
          <Link
            to="/login"
            className={location === '/login' ? 'nav-link active' : 'nav-link'}
          >Login</Link>
        </li>

        <li className="nav-item">
          <Link
           to="/signup"
            className={location === '/signup' ? 'nav-link active' : 'nav-link'}
          >Signup</Link>
        </li>

        <li className="nav-item">
          <Link
            to="/homepage"
            className={location === '/homepage' ? 'nav-link active' : 'nav-link'}
          >Homepage</Link>
        </li>

        <li className="nav-item">
          <Link
            to="/userprofile"
            className={location === '/userprofile' ? 'nav-link active' : 'nav-link'}
          >User Profile</Link>
        </li>
        <li className="nav-item">
          <button>Logout</button>
        </li>
      </ul>
      
    </div>
  );
}
