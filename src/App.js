import React, { useState } from "react";
import Home from './components/Home'
import Portfolio from './components/Portfolio'
import Gallery from './components/Gallery'
import Pages from './components/Pages'
import Blog from './components/Blog'
import Features from './components/Features'
import Elements from './components/Elements'
import Contact from './components/Contact'
import MobileMenu from './components/MobileMenu'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './style/App.css'

function App() {
  const homeComponent = {
    title: 'Lorem ipsum',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo iste quo, neque dolorum fuga tenetur sapiente in beatae, laborum impedit reprehenderit rem culpa tempore fugit necessitatibus. Rem laborum accusantium ut?'
  }
  const portfolioComponent = [
    { id: 1, img: '', title: 'Lorem ipsum', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo iste quo, neque dolorum fuga tenetur sapiente in beatae, laborum impedit reprehenderit rem culpa tempore fugit necessitatibus. Rem laborum accusantium ut?' },
    { id: 2, img: '', title: 'Lorem ipsum', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo iste quo, neque dolorum fuga tenetur sapiente in beatae, laborum impedit reprehenderit rem culpa tempore fugit necessitatibus. Rem laborum accusantium ut?' },
    { id: 3, img: '', title: 'Lorem ipsum', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo iste quo, neque dolorum fuga tenetur sapiente in beatae, laborum impedit reprehenderit rem culpa tempore fugit necessitatibus. Rem laborum accusantium ut?' },
    { id: 4, img: '', title: 'Lorem ipsum', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo iste quo, neque dolorum fuga tenetur sapiente in beatae, laborum impedit reprehenderit rem culpa tempore fugit necessitatibus. Rem laborum accusantium ut?' },
    { id: 5, img: '', title: 'Lorem ipsum', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo iste quo, neque dolorum fuga tenetur sapiente in beatae, laborum impedit reprehenderit rem culpa tempore fugit necessitatibus. Rem laborum accusantium ut?' },
    { id: 6, img: '', title: 'Lorem ipsum', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo iste quo, neque dolorum fuga tenetur sapiente in beatae, laborum impedit reprehenderit rem culpa tempore fugit necessitatibus. Rem laborum accusantium ut?' },
    { id: 7, img: '', title: 'Lorem ipsum', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo iste quo, neque dolorum fuga tenetur sapiente in beatae, laborum impedit reprehenderit rem culpa tempore fugit necessitatibus. Rem laborum accusantium ut?' },

  ]
  const pagesComponent = {
    title: 'Lorem ipsum',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo iste quo, neque dolorum fuga tenetur sapiente in beatae, laborum impedit reprehenderit rem culpa tempore fugit necessitatibus. Rem laborum accusantium ut?'
  }
  const mobileMenuComponent = {
    title: 'Lorem ipsum',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo iste quo, neque dolorum fuga tenetur sapiente in beatae, laborum impedit reprehenderit rem culpa tempore fugit necessitatibus. Rem laborum accusantium ut?'
  }
  const galleryComponent = {
    title: 'Lorem ipsum',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo iste quo, neque dolorum fuga tenetur sapiente in beatae, laborum impedit reprehenderit rem culpa tempore fugit necessitatibus. Rem laborum accusantium ut?'
  }
  const featuresComponent = {
    title: 'Lorem ipsum',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo iste quo, neque dolorum fuga tenetur sapiente in beatae, laborum impedit reprehenderit rem culpa tempore fugit necessitatibus. Rem laborum accusantium ut?'
  }
  const contactComponent = {
    title: 'Lorem ipsum',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo iste quo, neque dolorum fuga tenetur sapiente in beatae, laborum impedit reprehenderit rem culpa tempore fugit necessitatibus. Rem laborum accusantium ut?'
  }
  const blogComponent = {
    title: 'Lorem ipsum',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo iste quo, neque dolorum fuga tenetur sapiente in beatae, laborum impedit reprehenderit rem culpa tempore fugit necessitatibus. Rem laborum accusantium ut?'
  }

  return (
    <div className="bg_home">
      <div className="filter_home">
        <div className="wrapper_home">
          <div className="menu">
            <div className="logo"><img src="../public/logo.svg" /></div>
            <ul>
              <a href='/' className="nav_wrapper_home_1">Home</a>
              <a href='/portfolio' className="nav_wrapper_home_2">Portfolio</a>
              <a href='/gallery' className="nav_wrapper_home_3">Gallery</a>
              <a href='/pages' className="nav_wrapper_home_4">Pages</a>
              <a href='/blog' className="nav_wrapper_home_5">Blog</a>
              <a href='/features' className="nav_wrapper_home_6">Features</a>
              <a href='/elements' className="nav_wrapper_home_7">Elements</a>
              <a href='/contact' className="nav_wrapper_home_8">Contact</a>
            </ul>
            {/* <MobileMenu className="MobileMenu"/> */}
            <div className='btn_wrapper_buy_now_block'>
              <a href='/' className="btn_wrapper_buy_now">Buy Now</a>
            </div>
          </div>
          <Router>
            <Switch>
              <Route exact path="/"  render={() => <Home props={homeComponent} />}/>
              <Route path="/portfolio"   render={() => <Portfolio props={portfolioComponent} />}/>
              <Route path="/gallery" component={Gallery}></Route>
              <Route path="/pages" component={Pages}></Route>
              <Route path="/blog" component={Blog}></Route>
              <Route path="/features" component={Features}></Route>
              <Route path="/elements" component={Elements}></Route>
              <Route path="/contact" component={Contact}></Route>
            </Switch>
          </Router>
        </div>
      </div>
    </div>
  );

}

export default App;
