import React from "react"

import { Link } from "gatsby"
export default function Navbar({ websiteName }) {
  return (
    <div>
      <ul className="nav justify-content-left  lighten-4 py-4">
        <li className="nav-item">
          <Link to="/" className="font24 nav-link">
            {websiteName}
          </Link>
        </li>{" "}
        <li className="nav-item">
          {" "}
          <Link to="/basketball/" className="font24 nav-link">
            Basketball
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/soccer/" className="font24 nav-link">
            Soccer
          </Link>
        </li>
      </ul>
    </div>
  )
}
