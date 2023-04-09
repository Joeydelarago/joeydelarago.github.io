import logo from './logo.svg';
import './App.css';
import React, { Component, useState, ListGroup } from "react";

let background = require('./background.js');

class MenuSection extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}

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
    description: "Buy ingredients to prepare dinner",
    link: "https://www.google.com",
    thumbnail: "",
  },
  {
    title: "Generative Art",
    description: "Read Algebra and History textbook for the upcoming test", 
    link: "https://www.google.com",
    thumbnail: "",
  },
  {
    title: "GitHub",
    description: "Go to library to return Sammy's books", 
    link: "https://www.google.com",
    thumbnail: "",
  },
  {
    title: "Bingus",
    description: "Write article on how to use Django with React",
    link: "https://www.google.com",
    thumbnail: "",
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
        <h2 style={{color: "white", "font-size": 65}}>{item.title}</h2>
    </li>
  )
}

function ResizableList(props) {
  const { items } = props;
  const [hovered, setHovered] = useState(false);
  const [fontSizes, setFontSizes] = useState(
    items.reduce((acc, item) => {
      acc[item] = "1rem";
      return acc;
    }, {})
  );

  const handleMouseMove = (e) => {
    const targetItem = e.target.textContent;
    const itemPosition = e.target.getBoundingClientRect();
    const distanceFromTop = Math.abs(e.clientY - itemPosition.top);
    const distanceFromBottom = Math.abs(e.clientY - itemPosition.bottom);
    let newFontSize;
    if (distanceFromTop <= distanceFromBottom) {
      newFontSize = `${1 + distanceFromTop / 100}rem`;
    } else {
      newFontSize = `${1 + distanceFromBottom / 100}rem`;
    }
    setFontSizes((prevState) => {
      return {
        ...prevState,
        [targetItem]: newFontSize,
      };
    });
  };

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <ul
      className="list-unstyled"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {items.map((item) => (
        <li
          key={item}
          style={{ fontSize: hovered ? fontSizes[item] : "1rem" }}
          onMouseMove={handleMouseMove}
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewCompleted: false,
      projectList: projectItems,
      menuList: menuItems,
      items: ["Item 1", "Item 2", "Item 3"],
    };
    
  }

  displayCompleted = (status) => {
    if (status) {
      return this.setState({ viewCompleted: true });
    }

    return this.setState({ viewCompleted: false });
  };

  renderItems = () => {
    const { viewCompleted } = this.state;

    return this.state.projectList.map((item) => (
      <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
        <span className={`todo-title mr-2 ${this.state.viewCompleted ? "completed-todo" : ""}`} title={item.description}>
          {item.title}
        </span>
      </li>
    ));
  };

  renderMenu = () => {
    return this.state.menuList.map((item) => menuBarItem(item))
  }

  renderSubmenu = () => {
    return this.state.projectList.map((item) => projectListItem(item))
  }     

  // renderSubmenu2 = () => {
  //   return this.state.projectList.map((item) => (<ListItem text={item.title} />))
  // }
  

  render() {
    return (      
    <main> 
        <script src="background.js"></script>
        <div class="bg-primary-new text-white p-5 text-left" style={{marginBottom: -10}}>
          <h1>Joey de l'Arago</h1>
          <h5>Software Engineer & Creative</h5>
        </div>
        {/* <ul>
          {this.renderSubmenu2()}
        </ul> */}
        {/* {this.renderSubmenu3()} */}
        {/* <ResizableList items={this.state.items} /> */}
        
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
