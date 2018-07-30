import React, { Component } from 'react';
import {
  Row, Col, Badge,
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
  ListGroup, ListGroupItem, CardHeader,
  ListGroupItemHeading, ListGroupItemText
} from 'reactstrap';

import icon_up from '../images/icon_up_white.png';
import icon_down from '../images/icon_down_white.png';

var stockInfo = [
  {
    symbol: 'AAPL',
    currentPrice: 2.99,
    growth: false
  },
  {
    symbol: 'FB',
    currentPrice: 222.99,
    growth: true
  },
  {
    symbol: 'TSLA',
    currentPrice: 22.99,
    growth: true
  },
  {
    symbol: 'RBC',
    currentPrice: 402.99,
    growth: false
  }
];

var stockInfo2 = [
  {
    symbol: 'RBC',
    currentPrice: 2.99,
    growth: true
  },
  {
    symbol: 'IQ',
    currentPrice: 222.99,
    growth: false
  },
  {
    symbol: 'MOMO',
    currentPrice: 22.99,
    growth: false
  }
];

var stockInfo3 = [
  {
    symbol: 'ABC',
    currentPrice: 2.99,
    growth: true
  },
  {
    symbol: 'FRRF',
    currentPrice: 222.99,
    growth: false
  },
  {
    symbol: 'DDDD',
    currentPrice: 22.99,
    growth: true
  },
  {
    symbol: 'RBC',
    currentPrice: 402.99,
    growth: true
  }
];

var stockInfo4 = [
  {
    symbol: 'ABC',
    currentPrice: 2.99,
    growth: true
  },
  {
    symbol: 'FRRF',
    currentPrice: 222.99,
    growth: false
  },
  {
    symbol: 'RBC',
    currentPrice: 402.99,
    growth: true
  }
];

var stockInfo5 = [
  {
    symbol: 'ABC',
    currentPrice: 2.99,
    growth: true
  },
  {
    symbol: 'FRRF',
    currentPrice: 222.99,
    growth: false
  }
];

const watchLists = [
  {
    src: "0", /*src needed as CarouselItem's key. Reactstrap problem.*/
    watchListId: "1", /*or give watchListId with name src, since watchListId is unique*/
    watchListName: "Yong's WatchList",
    stocksList: stockInfo
  },
  {
    src: "1",
    watchListId: "2",
    watchListName: "Ivy's WatchList",
    stocksList: stockInfo2
  },
  {
    src: "2",
    watchListId: "3",
    watchListName: "Alexander's WatchList",
    stocksList: stockInfo3
  },
  {
    src: "3",
    watchListId: "4",
    watchListName: "Kaydence's WatchList",
    stocksList: stockInfo4
  },
  {
    src: "4",
   watchListId: "5",
   watchListName: "Kaydence's WatchList 5",
   stocksList: stockInfo5
  }
];

class StocksCarouse extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === watchLists.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? watchLists.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;

    const slides = watchLists.map((item) => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}
        >
          <div className="Stock-CarouselItem-div">{item.watchListName}</div>

        </CarouselItem>
      );
    });

    const symbolList = watchLists[this.state.activeIndex].stocksList.map((symbol) => {
      const active = (this.state.activeIndex == 2) ? true : false;
      const growth = (symbol.growth) ? "success" : "danger";
      const icon = (symbol.growth) ?
      <img src={icon_up} width="10px" height="10px" />
      :
      <img src={icon_down} width="10px" height="10px" />;
      return (
        <ListGroupItem
          active={active}
          tag="button"
          action
          onClick={() => console.log("Clicked: " + symbol.symbol)}
          key={symbol.symbol}
        >
          <Row>
            <Col >
              {symbol.symbol}
            </Col>
            <Col className="StocksCarouse-ListGroupItem-Col2">
              {symbol.currentPrice}
              <Badge color={growth} className="StocksCarouse-ListGroupItem-Col2-Badge">
                {icon}
              </Badge>
            </Col>
          </Row>
        </ListGroupItem>
      );
    });

    return (
      <div>
        <Carousel
          activeIndex={activeIndex}
          next={this.next}
          previous={this.previous}
          interval={null}
          className="Stock-Carousel"
        >
          <CarouselIndicators className="StocksCarouse-CarouselIndicators" items={watchLists} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
          {slides}
          <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
          <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
        </Carousel>


         <ListGroup>{symbolList}</ListGroup>
      </div>
    );
  }
}


export default StocksCarouse;