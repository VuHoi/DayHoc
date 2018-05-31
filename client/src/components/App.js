import React, { Component } from 'react';

import '../styles/App.css';
import {BrowserRouter as Router} from "react-router-dom";
 import Nav from './nav';
import RouterUrl from "./returnUrl";


class App extends Component {

  constructor(props) {
    super(props)
    this.state={
      nav:[
       { title:"Trang  chủ",url:'/home'},
       { title:"Bài tập online",url:'/exercise'},
       { title:"Tài khoản",url:'/account'}
      ],
      name:'vu khac hoi'
    }

  }
  





  render() {
    return (
      <body >
       
        <Router>
            <div  className="background-image">
             
               <Nav  nav={this.state.nav} name={this.state.name} changed={this.change}></Nav>
               <br/>
              <br/>
              <br/>
               <RouterUrl className="router"  value= {this.state.name}/>
               {/* <h1>{this.state.name}</h1> */}
               
            </div>
        </Router>
    
      </body>
    );
  }
}

export default App;
