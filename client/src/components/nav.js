import React, { Component } from 'react'
import '../styles/nav.css';
import logo from "../logo.svg";
import {NavLink,Redirect} from "react-router-dom";
import axios from 'axios';
import $ from "jquery";

const mota={
    height:'100px'
}
export default class Nav extends Component {
constructor(props) {
    super(props)
     this.state={
       moveToHome:false,
       title:"",
       content:""
     }
}





createRoom =  async()=>{
  if(this.roomName.value!==""||this.des.value!=="")
  axios.post('/api/room', {
    title: this.roomName.value,
    content: this.des.value,
  }
  
)
  .then(res=> {
this.setState({
  moveToHome:true
})
$('#toggle').click()
  })
  .catch(function (error) {
    console.log(error);
  });
  this.roomName.value="";
  this.des.value="";


}





RenderNav=()=>{
    const nav= this.props.nav.map((item,key)=><li  key={key}><NavLink 
    style={{ fontWeight: 'bold'}}
    
    activeStyle={{
        borderBottom: '2px solid black',
                    color: 'black',
                    textDecoration: 'none'
                 }} to={item.url}>{item.title}</NavLink></li>)
    return nav;
}

redirect(){

  if(this.state.moveToHome)return <Redirect to ={'/home'}/>
}
    render() {
        return (
           <div >
       {/* {this.redirect()} */}
                <nav className="navbar navbar-expand-lg fixed  background-nav ">
                
                 <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                 <span className="navbar-toggler-icon"></span>
                 </button>
                 <div className=' collapse navbar-collapse' id="navbarTogglerDemo02" >
               
               <ul className="navbar-nav">
                   <li className="nav-item"><img src={logo} alt="lo go cua thoi tiet " style={{width:'75px'}} /></li>

                   {this.RenderNav()}
                
                  
                                   {/* <li><button onClick={()=>this.Click()}>Test</button></li> */}
                

              </ul>
              <div id="toggle" className="nav-item help" data-toggle="modal" data-target="#exampleModal" style={{
                               float:'right', 
                            
                             width:'170px'

                             }}><a 
                        style={{
                               cursor:'pointer',
                                padding:'15px',
                                fontWeight: 'bold',
                                color: 'black',
                                textDecoration: 'none'}}
                        // activeStyle=  {{
                        //                color: 'black',
                        //                borderBottom: '0px solid black',
                        //                textDecoration: 'none'
                        //            }} 
                                   >Tạo phòng</a></div>
              <div className="nav-item help" style={{
                               float:'right', 
                               marginRight: '5%',
                               width:'150px',
                             }}><NavLink 
                               style={{
                               
                                padding:'15px',
                                fontWeight: 'bold',
                                color: 'black',
                                textDecoration: 'none'}}
                     activeStyle=  {{
                                       color: 'black',
                                       borderBottom: '0px solid black',
                                       textDecoration: 'none'
                                   }} 
                                    to="/help">Trợ giúp?</NavLink></div>
                    
  
              </div>
              
              </nav>


<div className="modal fade mt-5 " id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog " role="document">
    <div className="modal-content ">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    
      <div className="modal-body">
       <div>
           <div className="form-group"> <label htmlFor="tenphong">Tên phòng<input ref={roomName=>this.roomName=roomName} id="tenphong" className="form-control w-100"></input></label> </div>
           <div className="form-group"> <label htmlFor="mota" className=" w-100">Mô tả<textarea  ref={des=>this.des=des} id="mota" style={mota} className="form-control" ></textarea ></label> </div>

           </div>
      </div>
      <div >
       <div className="modal-footer ">
        <button  className="btn btn-primary " onClick={()=>this.createRoom()} >Tạo phòng</button>
    </div>
    
      </div>
     
    </div>
  </div>    
</div>

           

</div>
              
        
        )
    }
}
