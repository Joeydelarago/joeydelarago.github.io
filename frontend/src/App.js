import logo from './logo.svg';
import './App.css';
import React, { Component, useState, ListGroup } from "react";

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
    title: "Info",
    link: "/info",
  },
  {
    title: "Contact",
    link: "/contact",
  },
]

const projectItems = [
  {
    title: "Pixel Art Meshifier",
    description: "An application that turns pixel art into meshes",
    link: "https://github.com/Joeydelarago/Pixel-Art-Meshifier",
  },
  {
    title: "Generative Art",
    description: "Art created using p5.js", 
    link: "https://openprocessing.org/user/255301?view=sketches&o=15",
  },
  {
    title: "GitHub",
    description: "My programming projects", 
    link: "https://github.com/Joeydelarago",
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
      <a href={item.link} style={{color: "white"}}>
        <h2 style={{"font-weight": "bold"}}>{item.title}</h2>
      </a>
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

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewCompleted: false,
      projectList: projectItems,
      menuList: menuItems,
    };
    
  }

  renderMenu = () => {
    return this.state.menuList.map((item) => menuBarItem(item))
  }

  renderSubmenu = () => {
    return this.state.projectList.map((item) => projectListItem(item))
  }     

  render() {
    return (      
    <main> 
        <script src="background.js"></script>
        <div class="bg-primary-new text-white p-5 text-left" style={{marginBottom: -10}}>
          <h1>Joey de l'Arago</h1>
          <h5>Software Engineer & Creative</h5>
        </div>
        
        <div class="container-fluid" style={{marginLeft: 37}}> 
          <ul className="list-unstyled">
            {this.renderMenu()}
          </ul>
        </div>
        <div class="container-fluid d-flex justify-content-end" style={{marginRight: 35, width: "100%", position: "fixed", bottom: 0, right: 0}}>     
          <ul className="list-unstyled">
            {this.renderSubmenu()}
          </ul>
        </div>
      </main>
    )
  }
}

export default App;
