import React, { Component } from 'react';

import EditBlog from "./editBlog";

export default class ViewBlog extends Component {
  constructor(props) {
    super(props);

    this.state = {
      blog: [],
      redirect: false,
    }
  }

  componentWillMount() {
    const { id } = this.props.match.params
    fetch(`https://python-blog-react-api.herokuapp.com/return_blog/${id}`, {
      method: "GET",
      headers: {
        'accept': "application/json",
        'Content-Type': "application/json"
      }
    })
    .then(response => response.json())
    .then(responseData => responseData)
    .then(data => this.setState({blog: data}))
    .catch(err => console.log("Fetch error: " + err))
  }

  editInfo() {
    this.props.ourProp.map((x) => {
         this.setState({id: x[0]})
         this.setState({title: x[1]})
         this.setState({author: x[2]})
         this.setState({body: x[3]})
         this.setState({formHidden: !this.state.formHidden})
    })
  }

  deleteBlog = () => {
    const { id } = this.props.match.params
    fetch(`https://python-blog-react-api.herokuapp.com/delete/${id}`, {
      method: "DELETE",
      headers: {
        'accept': "application/json",
        'Content-Type': "application/json"
      }
    })
    .then(response => response.json())
    .then(responseData => responseData)
    .then(data => this.setState({blog: data}))
    .catch(err => console.log("Fetch error: " + err))
  }

  render() {
    return (
      <div className='blogpage'>
        {this.state.blog.map((blogs, index) => (
          <div className="blogpage" key={index}>
            <h2>{blogs[1]}</h2>
            <p>{blogs[2]}</p>
            <p>{blogs[3]}</p>
            <br/>
          </div>
        ))}

        <div className="buttons">    
          <button onClick={this.deleteBlog}>Delete Blog</button>
          <br/>
          <button onClick={this.deleteBlog}>Update Blog</button>
        </div>

        <div className="update-blog">
          <form onSubmit={this.handleSubmit}>
            <label>Title</label><br/>
            <input type="text" name="title" placeholder="title" value={this.state.title} onChange={this.handleChange}/><br/><br/>
            <label>Author</label><br/>
            <input type="text" name="author" placeholder="author" value={this.state.author} onChange={this.handleChange}/><br/><br/>
            <label>Main Blog</label><br/>
            <input type="text" name="body" placeholder="body" value={this.state.body} onChange={this.handleChange}/><br/><br/>
            <input type="submit" value="submit" />
          </form>
        </div>
      </div>
    );
  }
}