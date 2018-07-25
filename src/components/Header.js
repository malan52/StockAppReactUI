import React, { Component } from 'react';
import {
Container, Row, Button, Nav,
NavItem, NavbarBrand, NavLink,
Col, Collapse, UncontrolledDropdown,
DropdownToggle, DropdownMenu, DropdownItem
} from 'reactstrap';

class Header extends Component {
  constructor (props) {
    super (props);
    this.state = {
          isOpen: true,
        };
  }
  render() {
    return (

      <Container fluid className="Header-Container">
        <Row>
          <Col md={8}><Row>
            <button
              className="navbar-toggler aside-menu-toggler Header-BurgerButton"
              type="button"
              data-toggle="aside-menu-show"
              onClick={() => this.props.onClickBurger()}
            >
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/220px-Hamburger_icon.svg.png" width="20px" height="20px" />
            </button>

            <NavbarBrand className="NavbarBrand" href="/">StocksApp</NavbarBrand>

            <Nav tabs className="NavLinks">
              <NavItem>
                <NavLink href="#" >Link1</NavLink>
              </NavItem>

              <NavItem>
                <NavLink href="#" className={this.props.link2}>Link2</NavLink>
              </NavItem>

              <NavItem>
                <NavLink href="#" className={this.props.link3}>Link3</NavLink>
              </NavItem>
            </Nav>

            <p className="NavWelcome">{this.props.welcomeMessage}Welcome</p>
          </Row></Col>

          <Col offset={{md:5}} className="NavRight">
            <Nav className="NavRight">
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
              </NavItem>

              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Options
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    Option 1
                  </DropdownItem>
                  <DropdownItem>
                    Option 2
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Reset
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>

              <NavItem>
               <Button color="danger">Logout</Button>
              </NavItem>

            </Nav>
          </Col>
        </Row>
      </Container>

    );
  }
}

export default Header;