import React, { Component } from 'react';
import {} from 'reactstrap';

import StocksCarouse from './StocksCarouse';

class Stocks extends Component {
  constructor (props) {
    super (props);
    this.state = {
      showSideBar: false,
    };
  }



  render() {
    return (
      <div>
        <div className="Stocks-div2">
          <StocksCarouse />


        </div>

      </div>
    )
  }
}

export default Stocks;