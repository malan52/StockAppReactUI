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

var stockInfo = [
  {
    symbol: 'AAPL',
    currentPrice: 2.99
  },
  {
    symbol: 'FB',
    currentPrice: 222.99
  },
  {
    symbol: 'TSLA',
    currentPrice: 22.99
  },
  {
    symbol: 'RBC',
    currentPrice: 402.99
  }
];

var stockInfo2 = [
  {
    symbol: 'RBC',
    currentPrice: 2.99
  },
  {
    symbol: 'IQ',
    currentPrice: 222.99
  },
  {
    symbol: 'MOMO',
    currentPrice: 22.99
  }
];

var stockInfo3 = [
  {
    symbol: 'ABC',
    currentPrice: 2.99
  },
  {
    symbol: 'FRRF',
    currentPrice: 222.99
  },
  {
    symbol: 'DDDD',
    currentPrice: 22.99
  },
  {
    symbol: 'RBC',
    currentPrice: 402.99
  }
];

var stockInfo4 = [
  {
    symbol: 'ABC',
    currentPrice: 2.99
  },
  {
    symbol: 'FRRF',
    currentPrice: 222.99
  },
  {
    symbol: 'RBC',
    currentPrice: 402.99
  }
];

var stockInfo5 = [
  {
    symbol: 'ABC',
    currentPrice: 2.99
  },
  {
    symbol: 'FRRF',
    currentPrice: 222.99
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
      const rbc = (symbol.symbol == "RBC") ? "danger" : "success";
      return (
        <ListGroupItem
          active={active}
          tag="button"
          action
          onClick={() => console.log("Clicked")}
          key={symbol.symbol}
        >
          <Row>
            <Col >
              {symbol.symbol}
            </Col>
            <Col className="StocksCarouse-ListGroupItem-Col2">
              {symbol.currentPrice}
              <Badge color={rbc} className="StocksCarouse-ListGroupItem-Col2-Badge">Primary</Badge>
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
          <CarouselIndicators items={watchLists} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
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