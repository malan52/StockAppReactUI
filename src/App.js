import React, { Component } from 'react';
//import { HashRouter, Route, Switch } from 'react-router-dom';
import { Container } from 'reactstrap';
import './App.css';
// Styles
// CoreUI Icons Set
//import '@coreui/icons/css/coreui-icons.min.css';
// Import Flag Icons Set
//import 'flag-icon-css/css/flag-icon.min.css';
// Import Font Awesome Icons Set
//import 'font-awesome/css/font-awesome.min.css';
// Import Simple Line Icons Set
//import 'simple-line-icons/css/simple-line-icons.css';
// Import Main styles for this application
import './scss/style.css'

// Containers
//import { DefaultLayout } from './containers';
// Pages
//import { Login, Page404, Page500, Register } from './views/Pages';
// Header
import Header from './components/Header';
import SideBar from './components/SideBar';
import Main from './components/Main';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showSideBar: true,
      count: 0
    };
  }

  handleClickBurger() {
    console.log('Tong@handleClickBurger');
    this.setState({
      showSideBar: !this.state.showSideBar,
      count: this.state.count + 1
    });
  }


  render() {
    return (
      <div className="App-container">
        <Header
          onClickBurger={() => this.handleClickBurger()}
          tag="nav"
        />
        <SideBar
          showSideBar={this.state.showSideBar}
        />
        <Main
          showSideBar={this.state.showSideBar}
        />
      </div>
    );
  }
}

export default App;
