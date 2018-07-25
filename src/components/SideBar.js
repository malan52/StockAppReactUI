import React, { Component } from 'react';
import {
Container, Row, Button, Nav,
NavItem, NavbarBrand, NavLink,
Col, Collapse, UncontrolledDropdown,
DropdownToggle, DropdownMenu, DropdownItem
} from 'reactstrap';

class SideBar extends Component {
  constructor (props) {
    super (props);
    this.state = {
        };
  }
  render() {
    return (
      <Collapse
        className="SideBar-Collapse collapse.width"
        isOpen={this.props.showSideBar}
        display="lg"
      >
        <div>> Menu 1</div>
      </Collapse>
    )
  }
}

export default SideBar;