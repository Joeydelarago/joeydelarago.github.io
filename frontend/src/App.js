import logo from './logo.svg';
import './App.css';
import React, { Component } from "react";
import {BrowserRouter, Routes, Route, Link } from 'react-router-dom'

let background = require('./background.js');

const menuItems = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "Projects",
    link: "/projects",
  },
  {
    title: "About",
    link: "/about",
  },
  {
    title: "Contact",
    link: "/contact",
  },
]

const projectItems = [ 
  {
    title: "GitHub",
    description: "My programming projects", 
    link: "https://github.com/Joeydelarago",
  },
  {
    title: "Pixel Art Meshifier",
    description: "Turn pixel art into meshes",
    link: "https://github.com/Joeydelarago/Pixel-Art-Meshifier",
  },
  {
    title: "Generative Art",
    description: "Art created using p5.js", 
    link: "https://openprocessing.org/user/255301?view=sketches&o=15",
  },
  {
    title: "3D Models",
    description: "Objects I have modeled and 3D printed",
    link: "https://www.thingiverse.com/joeydelarago/designs",
  },
];

function menuBarItem (item) {
  return (
    <li>
      <Link to={item.link} style={{color: "white"}}>
        <h2 style={{"fontWeight": "bold"}}>
          {item.title}
        </h2>
      </Link>
    </li>
  )
}

function projectListItem(item) {
  return (
    <li>
        <a href={item.link} style={{color: "white"}}>
          <h2 style={{color: "white", "font-size": 65}}>{item.title}</h2>
        </a>
    </li>
  )
}

function Home() {
  return;
}

function Projects() {
  return (
    <div className="container-fluid d-flex justify-content-end" style={{marginRight: 35, width: "100%", position: "fixed", bottom: 0, right: 0}}>     
      <ul className="list-unstyled">
        {projectItems.map((item) => projectListItem(item))}
      </ul>
    </div>
  )
}

function About() {
  return (
    <div class="container-fluid d-flex justify-content-end" style={{marginRight: 35, marginLeft: 37, width: "100%"}}>     
      About
    </div>
    );
}

function Contact() {
  return <h1>Contact</h1>;
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewCompleted: false,
      menuList: menuItems,
      visibleSubmenu: "None"
    };
    
  }

  renderMenu = () => {
    return this.state.menuList.map((item) => menuBarItem(item))
  }

  render() {
    return (      
    <main> 
        <script src="background.js"></script> 
        <BrowserRouter> 
          <div class="bg-primary-new text-white p-5 text-left" style={{marginBottom: -10}}>
            <h1>Joey de l'Arago</h1>
            <h5>Software Engineer & Creative</h5>
          </div>
          
          <div class="container-fluid" style={{marginLeft: 37}}> 
            <ul className="list-unstyled">
              {this.renderMenu()}
            </ul>
          </div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects/>}/>
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </BrowserRouter> 
      </main>
    )
  }
}

export default App;
