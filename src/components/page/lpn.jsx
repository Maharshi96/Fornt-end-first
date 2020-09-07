import React from 'react';
import '../../App.scss';
import {Tables} from "../table/tables"
import {Button, Input} from 'antd';
import { Link } from "react-router-dom";
const axios = require('axios');


const columns = [
    {
        title: 'LPN',
        dataIndex: 'ilpn',
        key: 'ilpn',
        render: (text, record) => (
            <Link to={`lpndetails/${text}`}>{text}</Link>
        )
    },
    {
        title: 'LPN Status',
        dataIndex: 'ilpn_status',
        key: 'ilpn_status',
    },
    {
        title: 'Quantity',
        dataIndex: 'qty',
        key: 'qty',
    },
    {
        title: 'Current Location',
        dataIndex: 'Current_location',
        key: 'Current_location',
    },
    {
        title: 'SKU',
        dataIndex: 'SKU',
        key: 'SKU',
    },
];

export default class Lpn extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            result : [],
            asn:'',
            lpnStatus:'',
            lpn:''
        };
        this.onSearch = this.onSearch.bind(this)
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e){
        e.preventDefault();
        console.log(e.target.name + ": "+ e.target.value)
        this.setState( {[e.target.name] : e.target.value });
    }

    onSearch(){
        console.log("inside search")
        // e.preventDefault();
        axios.post('/users/lpn', {
            asn: this.state.asn,
            lpn: this.state.lpn,
            lpnStatus: this.state.lpnStatus
        }).then(res => {
            console.log(res.data);
            let result = res.data;
            this.setState( {result} ,()=>{console.log("++"+this.state.result)});
        })

    }

    componentDidMount() {
        // Your axios request here
        axios.post('/users/lpn')
            .then(res => {
                // console.log(res.data);
                let result = res.data;
                this.setState( {result});
            })
    }

    render() {
        return(
            <div className="site-layout-content">
                Lpn
                <div className={"search-bar"}>
                    <label style={{marginRight:"1em"}}>ASN No:</label>
                    <Input
                        placeholder="input search text"
                        style={{ width: 200, marginRight:"1em" }}
                        onChange={this.handleChange}
                        name="asn"
                    />
                    <label style={{marginRight:"1em"}}>LPN Status:</label>
                    <Input
                        placeholder="input search text"
                        style={{ width: 200, marginRight:"1em" }}
                        onChange={this.handleChange}
                        name="lpnStatus"
                    />
                    <label style={{marginRight:"1em"}}>LPN:</label>
                    <Input
                        placeholder="input search text"
                        style={{ width: 200, marginRight:"1em" }}
                        onChange={this.handleChange}
                        name="lpn"
                    />
                    <Button type="primary" onClick={this.onSearch}>Search</Button>
                </div>
                <Tables dataSource = {this.state.result} columns = {columns}/>
            </div>
        )
    }
}
