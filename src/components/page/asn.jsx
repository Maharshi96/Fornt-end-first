import React from 'react';
import '../../App.scss';
import {Tables} from "../table/tables"
import {Button, Input} from 'antd';
const axios = require('axios');

const { Search } = Input;

const columns = [
    {
        title: 'ASN no',
        dataIndex: 'ASN',
        key: 'ASN',
    },
    {
        title: 'No of Po',
        dataIndex: 'no_po',
        key: 'no_po',
    },
    {
        title: 'No of LPN',
        dataIndex: 'no_ilpn',
        key: 'no_ilpn',
    },
    {
        title: 'ASN Status',
        dataIndex: 'ASN_Status',
        key: 'ASN_Status',
    },
];

export default class Asn extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            result : [],
            asn:'',
            asnStatus:'',
            po:''
        };
        this.onSearch = this.onSearch.bind(this)
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e){
        e.preventDefault();
        // console.log(e.target.name + ": "+ e.target.value)
        this.setState( {[e.target.name] : e.target.value });
    }

    onSearch(){
        console.log("inside search")
        // e.preventDefault();
        axios.post('/users/asn', {
            asn: this.state.asn,
            po: this.state.po,
            asnStatus: this.state.asnStatus
        }).then(res => {
            console.log(res.data);
            let result = res.data;
            this.setState( {result} ,()=>{console.log("++"+this.state.result)});
        })

    }

    componentDidMount() {
        // Your axios request here



        axios.post('/users/asn')
            .then(res => {
                console.log(res.data);
                let result = res.data;
                this.setState( {result});
            })
    }

    render() {
        return(
            <div className="site-layout-content">
                ASN
                <div className={"search-bar"}>
                    <label style={{marginRight:"1em"}}>ASN No:</label>
                    <Input
                        placeholder="input search text"
                        onChange={this.handleChange}
                        style={{ width: 200, marginRight:"1em" }}
                        name="asn"
                    />
                    <label style={{marginRight:"1em"}}>ASN Status:</label>
                    <Input
                        placeholder="input search text"
                        onChange={this.handleChange}
                        style={{ width: 200, marginRight:"1em" }}
                        name="asnStatus"
                    />
                    <label style={{marginRight:"1em"}}>Po:</label>
                    <Input
                        placeholder="input search text"
                        onChange={this.handleChange}
                        style={{ width: 200, marginRight:"1em" }}
                        name="po"
                    />
                    <Button type="primary" onClick={this.onSearch}>Search</Button>
                </div>
                <Tables dataSource = {this.state.result} columns = {columns}/>
            </div>
        )
    }
}
