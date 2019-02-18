import React, { Component } from 'react';
import { NavLink } from "react-router-dom";

export default class Nav extends Component {
  render() {
    return (
      <div className='navbar-wrapper'>
        <div className="navlinks-wrapper">
          <div className="navlink">
            <NavLink exact to="/" classNameActive="navlink-active">HOME</NavLink>
          </div> 

          <div className="navlink">
            <NavLink exact to="/blog" classNameActive="navlink-active">BLOG</NavLink>
          </div>

          <div className="navlink">  
            <NavLink exact to="/editBlog" classNameActive="navlink-active">ADD BLOG</NavLink>
          </div>
        </div>
      </div>
    );
  }
}
