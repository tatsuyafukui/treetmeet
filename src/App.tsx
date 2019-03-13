import React, { Component } from 'react';
import axios from "./axios-config";
import Header from './organisms/header/header';
import Home from "./pages/home/home";
const { Route, Switch, Redirect } = require('react-router-dom');


class App extends Component {

    componentDidMount(){
        axios.get('/').then((res: any) => {
            console.log(res);
        });
    }

  render() {
    return (
        <>
            <Header />
            <Switch>
                <Route path="/" exact component={Home}/>
            </Switch>
        </>

    );
  }
}

export default App;
