import React, { Component } from 'react';
import {
Container, Row, Button, Nav,
NavItem, NavbarBrand, NavLink,
Col, Collapse, UncontrolledDropdown,
DropdownToggle, DropdownMenu, DropdownItem,
Carousel, CarouselItem
} from 'reactstrap';

class Stock extends Component {
  constructor (props) {
    super (props);
    this.state = {
        };
  }
  render() {
    return (
      <div>
        <p>Stock here</p>
        <Carousel
          title="Carousel"
        >
          <CarouselItem key="hello?">Item</CarouselItem>
          <CarouselItem>Item</CarouselItem>
          <CarouselItem>Item</CarouselItem>
          <CarouselItem>Item</CarouselItem>
        </Carousel>
      </div>
    )
  }
}

export default Stock;