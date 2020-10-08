import React, { Component } from 'react'
import { Router } from "@reach/router"
import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './components/homepage/Home';
import HireMe from './components/hire-me/HireMe';
import Blog from './components/blog/Blog';
import BlogHome from './components/blog/BlogHome';
import Post from './components/blog/Post';
import Shop from './components/shop/Shop';
import Products from './components/shop/Products';
import Product from './components/shop/Product';
import Error404 from './components/error/Error404';

class App extends Component {
  state = {};
  render() {
    return (
      <div className="App">
        <Header />
        <Router>
          <Home path="/" />
          <HireMe path="hire-me" />
          <Blog path="blog">
            <BlogHome path="/" />
            <Post path=":postId" />
          </Blog>
          <Shop path="/shop">
            <Products path="/" />
            <Product path=":productId" />
          </Shop>
          <Error404 default />
        </Router>
        <Footer />
      </div>
    );
  }
}
export default App;


