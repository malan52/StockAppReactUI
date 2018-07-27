import React, { Component } from 'react';
import {
Container, Row, Button, Nav,
NavItem, NavbarBrand, NavLink,
Col, Collapse, UncontrolledDropdown,
DropdownToggle, DropdownMenu, DropdownItem,
Breadcrumb, BreadcrumbItem
} from 'reactstrap';

import Stocks from './Stocks';
import News from './News';

class Main extends Component {
  constructor (props) {
    super (props);
    this.state = {
      showSideBar: false,
    };
  }

  mainContainerPaddingSize() {
    console.log("TONG: enter mainContainerPaddingSize");
    if (this.props.showSideBar) {
      console.log("TONG: enter showSideBar");
      return 118;
    } else { return 0; }
  }

  render() {
    return (
      <div>
        <div>
          <Breadcrumb tag="nav">
            <BreadcrumbItem tag="a" href="#">Home</BreadcrumbItem>
            <BreadcrumbItem tag="a" href="#">Library</BreadcrumbItem>
            <BreadcrumbItem tag="a" href="#">Data</BreadcrumbItem>
            <BreadcrumbItem active tag="span">Bootstrap</BreadcrumbItem>
          </Breadcrumb>
        </div>

        <div className="Main-Container" style={{ paddingLeft: this.mainContainerPaddingSize() }}>
          <Stocks />
          <News />
        </div>
      </div>
    )
  }
}

export default Main;