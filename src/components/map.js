import React from 'react';
import { Dot } from '@antv/l7plot';

class Mapld extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  async componentDidMount() {
    await this.fetchAndSetSaleData();
  }

  async fetchAndSetSaleData() {
    try {
      const response = await fetch(`/api/getMap`);
      const data = await response.json();
      this.setState({ data: data.data });
    } catch (error) {
      console.error(error);
    }
  }
  componentDidUpdate() {
    // 当数据获取完成并更新 state 后才会渲染图表
    new Dot(this.chartRef, {
      map: {
        type: 'amap',
        style: 'dark',
        center: [103.447303, 31.753574],
        zoom: 7,
        pitch: 0,
      },
      source: {
        data: this.state.data,
        parser: { type: 'json', x: 'lng', y: 'lat' },
      },
      color: {
        field: 'depth',
        value: ['#82cf9c', '#10b3b0', '#2033ab'],
        scale: { type: 'quantize' },
      },
      size: {
        field: 'level',
        value: ({ level }) => (level - 3) * 10,
      },
      style: {
        opacity: 0.8,
        strokeWidth: 0,
      },
      state: {
        active: { color: '#FFF684' },
      },
      autoFit: true,
      zoom: {
        position: 'topright',
      },
      scale: {
        position: 'bottomright',
      },
      tooltip: {
        items: ['title', 'level', 'depth'],
      },
      legend: {
        position: 'bottomleft',
      },
    });
  }
  render() {
    console.info(this.state.data)
    return (
      <div id="container" style={{ height: '500px' }} ref={ref => this.chartRef = ref} />
    );
  }

  
}

export default Mapld;
