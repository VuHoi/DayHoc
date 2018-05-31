import React, { Component } from 'react'
import $ from 'jquery'
import logo from "../logo.svg"
import openSocket from 'socket.io-client';
export default class Table extends Component {
    constructor(props) {
        super(props)
      
      this.state={
        response: '',
        socket:openSocket('http://localhost:5000')
      }
      }


      btnClick=()=>{
        this.state.socket.emit("Client-sent-data","hello");
        // console.log(this.state.socket)
      }
        componentDidMount() {
          this.callApi()
            .then(res => this.setState({ response: res.express }))
            .catch(err => console.log(err));
           
        }
      
        callApi = async () => {
          const response = await fetch('/api/hello');
          const body = await response.json();
      
          if (response.status !== 200) throw Error(body.message);
      
          return body;
        };
      
      componentWillMount(){
        this.setState ({socket : openSocket('http://localhost:5000')});
        let socket=this.state.socket?this.state.socket:" "
        this.state.socket.on("Server-send-data",function(data){
          $("#txtnoidung").append(data+ " "+socket.id);
        
        });
      }
    render() {
        return (
            <div className="App ">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">{this.state.response}haha</p>
        <button onClick={()=>this.btnClick()}>Click me!</button>
        <p id="txtnoidung"></p>
      </div>
        )
    }
}
