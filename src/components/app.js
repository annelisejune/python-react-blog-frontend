import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Nav from "./navbar";
import Blog from "./blog";
import EditBlog from "./editBlog";
import Home from "./home";
import ViewBlog from "./viewBlog";


export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <BrowserRouter>
          <div className="routes">
            <Nav />

            <Switch>
              <Route exact path="/"component={Home}/>
              <Route exact path="/blog"component={Blog}/>
              <Route exact path="/editBlog" component={EditBlog}/>
              <Route exact path="/return_blog/:id" component={ViewBlog}/>
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}
