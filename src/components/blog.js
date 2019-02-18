import React, { Component } from 'react';
import { Link } from "react-router-dom";

export default class Blog extends Component {
  constructor(props) {
    super(props);

    this.state = {
      blogs: [],
    }
  }

  componentWillMount() {
    fetch('https://python-blog-react-api.herokuapp.com/return_blogs', {
      method: "GET",
      headers: {
        'accept': "application/json",
        'Content-Type': "application/json"
      }
    })
    .then(response => response.json())
    .then(responseData => responseData)
    .then(data => this.setState({blogs: data}))
    .catch(err => console.log("Fetch error: " + err))
  }

  render() {
    return (
      <div className='blogpage'>
        <h1>Blog</h1>
        {this.state.blogs.map((blogs, index) => (
          <div className="blogcard" key={index}>
            <h2>{blogs[1]}</h2>
            <p>{blogs[2]}</p>
            <p>{blogs[3]}</p>
            <Link to={`/return_blog/${blogs[0]}`}>View Blog</Link>
            <br/>
          </div>
        ))}
      </div>
    );
  }
}