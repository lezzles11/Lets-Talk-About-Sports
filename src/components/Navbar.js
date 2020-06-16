import React from "react"

import { Link } from "gatsby"
export default function Navbar({ websiteName }) {
  return (
    <div>
      <ul className="nav justify-content-center grey lighten-4 py-4">
        <li className="nav-item">
          <Link to="/" className="nav-link">
            {websiteName}
          </Link>
        </li>{" "}
        <li className="nav-item">
          {" "}
          <Link to="/basketball/" className="nav-link">
            Basketball
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/soccer/" className="nav-link">
            Soccer
          </Link>
        </li>
      </ul>
    </div>
  )
}
