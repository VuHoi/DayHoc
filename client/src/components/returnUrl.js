import React, { Component } from 'react'
import { Route,Switch } from "react-router-dom";
import Home from "./home";
import Table from "./table";
import Account from "./account";
import Exercise from "./exercise";
import Help from "./help";
import Chat from "./chat";
export default class ReturnUrl extends Component {
    render() {
        return (
            <div>
               
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/chat/:room" component={Chat} />
                        <Route path="/home" component={Home} />
                        <Route path="/exercise" component={Exercise} />
                        <Route path="/account" component={Account} />
                        <Route path="/table" component={Table} />
                        <Route path="/help" component={Help} />
                        <Route component={Home} />
                    </Switch>
            </div>
        )
    }
}
