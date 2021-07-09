import React from "react";
import "./Header.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
export default function Header(props) {
  let HeadStyle = {
    textDecoration: "none",
    color:"White",
    fontWeight:"800",
    fontSize:"1.2em",
    marginRight:"20px"
  }
  let addTaskStyle = {
    color:"green",
    fontWeight:"600",
    fontSize:"18px",
  }
  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Todo List app</title>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css"
        />
        <link rel="stylesheet" href="../App.css" />
      </head>
      <body>
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container-fluid">
          <Link className="nav-link" style={HeadStyle} to="/">Todo List App</Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="/about"
                  >
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/addItem" style={addTaskStyle}>
                    <button className="btn btn-sm btn-dark">Add Item</button>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </body>
    </html>
  );
}
Header.defaultProps = {
  // title: "Your title goes here",
  searchbar: true,
};
Header.propTypes = {
  title: PropTypes.string, // we can also do (PropTypes.string.isrequired);
};
