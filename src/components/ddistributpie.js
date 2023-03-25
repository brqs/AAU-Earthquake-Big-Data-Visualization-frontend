import React from 'react';
import { DonutChart} from 'bizcharts';
class DistributPie extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Data: []
        };
    }
    async componentDidMount() {
        await this.fetchAndSetSaleData();
    }
    async fetchAndSetSaleData(year) {
        try {
            const response = await fetch(`/api/getProportion/?year=total`);
            const Data = await response.json();
            this.setState({ Data: Data.data });
        } catch (error) {
            console.error(error);
        }
    }
    render() {
        const { Data } = this.state;
        return (
            <DonutChart
			data={Data}
			autoFit
			height={300}
			radius={0.8}
			padding='auto'
			angleField='value'
			colorField='type'
			statistic={{
				title: {
					customHtml: () => 'total'
				}
			}}
            legend={{
                visible: true,
                position: 'left-center', 
                offsetX:40,
                text:{
                    style:{ fontSize: 18, fill: 'white' }
                }
            }}
            color={['#c7b8a1','#c9c0d3','#eee5f8','#E9D1A1']}
		/>
        );
    }
}
export default DistributPie;
