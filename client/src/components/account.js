import React, { Component } from 'react'
import axios from 'axios';
import { Redirect } from "react-router-dom";
const sizeMain={
  width:'40%',

}
const sizeChild={
  width:'80%'
}

export default class Account extends Component {

    constructor(props) {
        super(props)
      
      this.state={
        response: '',
        moveToHome:false
      }
      }

      componentDidMount() {
        this.callApi()
          .then(res => this.setState({ response: res[0].UserName }))
          .catch(err => console.log(err));
         
      }
    callApi = async () => {
        const response = await fetch('/api/hello');
        const body = await response.json();
    
        if (response.status !== 200) throw Error(body.message);
    
        return body;
      };

      postData =  async()=>{
        axios.post('/api/hello', {
          UserName: this.name.value,
          Password: this.password.value,
          Email:this.email.value
        }
      )
        .then(res=> {
       this.setState({
         moveToHome:true
       })
        })
        .catch(function (error) {
          console.log(error);
        });

        // console.log(this.password.value);
   
      }

      redirect(){
       
     if(this.state.moveToHome) return <Redirect to ={'/home'}/>
      }
    render() {
     
        return (
          <div>
            { this.redirect()}
           <div className="row h-100  justify-content-center align-items-center  ">
           
        <div style={sizeMain} className="row h-100 mt-5 background-footer justify-content-center align-items-center rounded ">
          <div  style={sizeChild}>
                {/* <p >{this.state.response}haha</p> */}
              <h3 className="text-center mt-2">Đăng kí tài khoản</h3>
             
            <div className="form-group" >   <label  htmlFor="name"  className="w-100" > Name <input   ref = {(name)=>{this.name=name}} id="name"  className="form-control" /></label></div>
            <div className="form-group">   <label htmlFor="password" className="w-100" > Password <input ref={(password)=>{this.password=password}} id="password" className="form-control"  /></label></div>
            <div className="form-group">   <label htmlFor="confirmPassword" className="w-100" > Confirm  Password <input ref={(confirmpassword)=>{this.confirmpassword=confirmpassword}} id="confirmpassword" className="form-control"  /></label></div>

            <div className="form-group">   <label htmlFor="email" className="w-100" > Email <input ref = {(email)=>{this.email=email}} id="email" className="form-control"  /></label><br/></div>
               <div className="text-center">  <button className="btn theme-button mb-3 " onClick={()=>this.postData()}>SignUp</button></div>

          </div>   
        </div>
        </div>
        </div>
        )
    }
}
