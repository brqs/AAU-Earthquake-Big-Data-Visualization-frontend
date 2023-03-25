import React from 'react';
import { Row, Col, Typography } from 'antd';
import styles from '../pages/index.css'
import { Carousel } from '@jiaminghi/data-view-react';
class DClock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { name: 'Item 1', value: 10 },
        { name: 'Item 2', value: 20 },
        { name: 'Item 3', value: 30 },
        { name: 'Item 4', value: 40 },
      ],
      time: new Date()
    };
  }
  componentDidMount() {
    this.intervalID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalID);
  }
  render() {
    const { data } = this.state;
    return (
      <Row className={styles.border}>
        <div className={styles.bg + ' ' + styles.bgLeftTop}></div>
        <div className={styles.bg + ' ' + styles.bgRightTop}></div>
        <div className={styles.bg + ' ' + styles.bgLeftBottom}></div>
        <div className={styles.bg + ' ' + styles.bgRightBottom}></div>
        <Col sm={12} xs={24} className={styles.cellCont + ' ' + styles.first}>

        </Col>
        <Col sm={12} xs={24} className={styles.cellCont}>
          <Carousel width={400} height={300} autoplay={true} autoplaySpeed={3000} loop={true}>
            {data.map((item, index) => (
              <div key={index}>
                <p>{item.name}</p>
                <p>{item.value}</p>
              </div>
            ))}
          </Carousel>
        </Col>
      </Row>
    );
  }
}

export default DClock;
