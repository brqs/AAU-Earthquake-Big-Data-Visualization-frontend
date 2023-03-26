import React from "react";
import { ScrollBoard } from "@jiaminghi/data-view-react";

class Lunbo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
            ],
            oddRowBGC: "",
            evenRowBGC: "",
        };
    }
    async componentDidMount() {
        await this.fetchAndSetSaleData();
    }
    async fetchAndSetSaleData(year) {
        try {
            const response = await fetch(`/api/getLast10`);
            const Data = await response.json();
            this.setState({ data: Data.data });
        } catch (error) {
            console.error(error);
        }
    }
    render() {

        return <ScrollBoard config={this.state} style={{ width: '100%', height: '220px' }} />;
    }
}

export default Lunbo;