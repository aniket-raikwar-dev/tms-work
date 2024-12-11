import React from "react";
import { Dropdown } from "antd";

const items = [
  {
    key: "121",
    label: <p>Platform as a Service</p>,
  },
  {
    key: "221",
    label: <p>Software as a Service</p>,
  },
  {
    key: "321",
    label: <p>Door Delivery</p>,
  },
];

const Navbar = () => {
  return (
    <nav className="nav">
      <div className="logo">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M17 18V16H17.5C19.433 16 21 14.433 21 12.5C21 10.567 19.433 9 17.5 9C16.5205 9 15.6351 9.40232 14.9998 10.0507C14.9999 10.0338 15 10.0169 15 10C15 6.68629 12.3137 4 9 4C5.68629 4 3 6.68629 3 10C3 12.6124 4.66962 14.8349 7 15.6586V17.748C3.54955 16.8599 1 13.7277 1 10C1 5.58172 4.58172 2 9 2C12.3949 2 15.2959 4.11466 16.4576 7.09864C16.7951 7.0339 17.1436 7 17.5 7C20.5376 7 23 9.46243 23 12.5C23 15.5376 20.5376 18 17.5 18H17ZM13 16.0048H16L11 22.5048V18.0048H8L13 11.5V16.0048Z"></path>
        </svg>
        <h2 className="logo-text">Ultra Ship</h2>
      </div>
      <ul className="nav-items">
        <li>Home</li>
        <li>Product</li>
        <Dropdown menu={{ items }} placement="bottomRight" arrow>
          <li>
            <p>Services</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path>
            </svg>
          </li>
        </Dropdown>

        <li>
          <p>Pricing</p>
        </li>

        <li>Contact</li>
      </ul>
      <div>
        <button>Login</button>
        <button>Sign Up</button>
      </div>
    </nav>
  );
};

export default Navbar;
