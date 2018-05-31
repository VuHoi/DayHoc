import React, { Component } from 'react'
import '../styles/App.css';
import "../styles/nav.css";
import item1 from "../images/Maze.jpg";
import background from "../images/bexy.jpg";
import background1 from "../images/1.jpg";
import Footer from "./footer";
import $ from "jquery"
import { Redirect } from "react-router-dom";
export default class Home extends Component {
constructor(props) {
  super(props);
  this.state={
    chooseItem:-1,
    allRoom: [],
  }
}

 
componentDidMount() {
  window.addEventListener('scroll', this.handleScroll);
  // call  all room 
  this.callApi()
  .then(res => {
    this.setState({allRoom:res});
   
  })
  .catch(err => console.log(err));

  // console.log(this.state.allRoom);
}

componentWillUnmount() {
  window.removeEventListener('scroll', this.handleScroll);

}


redirect=(key)=>
{
 this.setState({
   chooseItem:key
 })
  
}
handleScroll() {
document.documentElement.scrollTop>345?$('#carouselExampleSlidesOnly').css({"visibility":"hidden"}):$('#carouselExampleSlidesOnly').css({"visibility" :"visible"})

}

callApi = async () => {
  const response = await fetch('/api/allroom');
  const body = await response.json();

  if (response.status !== 200) throw Error(body.message);

  return body;
};


renderRoom(){


  
var items=this.state.allRoom.map((item,key)=>{
  return (
          <div onClick={()=>this.redirect(key)} key={key} className="card background-item m-2" style={{width: '31.8%'}}>
            <img className="card-img-top" src={item1} alt="hshsh"/>
            <div className="card-body">
              <h5 className="card-title">{item.title}</h5>
              <p className="card-text">{item.content}</p>
              <a href="" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>
  )
})
  return items;
}



    render() {
      
      
        return this.state.chooseItem!==-1?<Redirect to ={'/chat/'+this.state.chooseItem}/>:(
         
          <div>
            
            <div className="container border1">
            
      <div id="carouselExampleSlidesOnly"  className="carousel slide fixed2 container" data-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img className="d-block w-100" style={{height:'300px'}} src={background} alt="First slide"/>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100"  style={{height:'300px'}} src={background1}  alt="Second slide"/>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" style={{height:'300px'}} src={background}  alt="Third slide"/>
    </div>
  </div>
  </div>


<div id="parent" className=" row" >
{this.renderRoom()}




</div>
</div>


<Footer/>
   </div>

               
        )
    }
}
