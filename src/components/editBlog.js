import React, { Component } from 'react';

export default class EditBlog extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      author: '',
      body: '',
    }
  }

  handleSubmit = event => {
    event.preventDefault();
    let title = this.state.title;
    let author = this.state.author;
    let body = this.state.body;
    fetch('https://python-blog-react-api.herokuapp.com/blog_post', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body:JSON.stringify({title:title, author:author, body:body})
    }).then(resources => resources.json())
      .then(responseData => responseData)
      .catch(err => console.log(err))
  }

  handleChange = event => {
    this.setState({[event.target.name]: event.target.value})
  }

  render() {
    return (
      <div className='blog'>
        <h1>Create New Blog</h1>
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
    );
  }
}
