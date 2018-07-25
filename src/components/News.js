import React, { Component } from 'react';
import {
Container, Row, Button, Nav,
NavItem, NavbarBrand, NavLink,
Col, Collapse, UncontrolledDropdown,
DropdownToggle, DropdownMenu, DropdownItem
} from 'reactstrap';

class News extends Component {
  constructor (props) {
    super (props);
    this.state = {
        };
  }
  render() {
    return (
      <p>News here</p>
    )
  }
}

export default News;