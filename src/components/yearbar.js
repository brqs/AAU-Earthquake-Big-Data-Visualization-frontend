import React from 'react';
import { StackedColumnChart} from 'bizcharts';
class Yearstack extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Data: []
        };
    }

    async componentDidMount() {
        await this.fetchAndSetSaleData(); // 初始化数据
    }
    async fetchAndSetSaleData(year) {
        try {
            const response = await fetch(`/api/getYear`);
            const Data = await response.json();
            this.setState({ Data: Data.data });
        } catch (error) {
            console.error(error);
        }
    }

    render() {
        const { Data } = this.state;
        return (
            <StackedColumnChart
            data={Data}
            title={{
              visible: false,
              text: '堆叠柱状图',
            }}
            height={300}
            autoFit
            padding='auto'
            xField='year'
            yField='value'
            yAxis={{
              min: 0,
            }}
            legend={{
                visible: true,
                position: 'top-center',
                flipPage: true 
            }}
            color={['#E9D1A1','#BD9277','#E9A578']}
            stackField='level'
          />
        );
    }
}

export default Yearstack;
