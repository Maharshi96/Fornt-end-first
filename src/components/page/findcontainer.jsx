import React from 'react';
import '../../App.scss';
import {Tables} from "../table/tables"
import {Button, Card} from 'antd';
const axios = require('axios');

const cardDivStyle = {
    padding: "30px",
}

const cardStyle = {
    width: "100%",
    border: "2px solid grey",
    borderRadius: "5px"
}

const cardContent = {
    display: "flex",
    justifyContent: "space-evenly"
}

export default class Findcontainer extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            result : [],
            lpnLocation: {},
            ilpn: ''
        };

        this.columns = [
            {
                title: 'LPN',
                dataIndex: 'ilpn',
                key: 'ilpn',
            },
            {
                title: 'Submit',
                dataIndex: 'submit',
                key: 'submit',
                render: (text, record) => (
                    <Button type="primary" onClick={(e) => { this.onFind(record, e)}}>
                        Find
                    </Button>
                )
            }
        ];
        this.onFind = this.onFind.bind(this);
    }

    onFind(record,e){
    e.preventDefault();
    this.setState({ilpn: record.ilpn}, ()=>{
        axios.post('/users/findparticularcontainer',{ilpn: this.state.ilpn})
            .then(result => {
                this.setState( {lpnLocation: result.data} ,()=>{console.log(this.state.lpnLocation)});
            })
    })
    }

    componentDidMount() {
        // Your axios request here
        axios.post('/users/findbox')
            .then(res => {
                console.log(res.data);
                let result = res.data;
                this.setState( {result});
            })
    }

    render() {
        return(
            <div className="site-layout-content">
                Find Container
                <Tables dataSource = {this.state.result} columns = {this.columns}/>
                {this.state.ilpn &&
                <div style = {cardDivStyle}>
                    <Card title="Details" bordered={true} style={cardStyle}>
                            <div style={cardContent}>
                                <div>
                                    <label style={{marginRight:"1em"}}>LPN:</label>
                                    <label style={{marginRight:"10em"}}>{this.state.lpnLocation.ilpn}</label>
                                </div>
                                <div>
                                    <label style={{marginRight:"1em"}}>Location:</label>
                                    <label style={{marginRight:"10em"}}>{this.state.lpnLocation.Found_location}</label>
                                </div>
                            </div>
                    </Card>
                </div>}
            </div>

        )
    }
}
