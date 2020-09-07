import React from 'react';
import '../../App.scss';
import {Tables} from "../table/tables"
import {Button, Input} from 'antd';
import {Link} from "react-router-dom";
const axios = require('axios');

// const { Search } = Input;

const columns = [
    {
        title: 'LPN',
        dataIndex: 'ilpn',
        key: 'ilpn',
    },
    {
        title: 'LPN Status',
        dataIndex: 'ilpn_status',
        key: 'ilpn_status',
    }
];

export default class AsnDetails extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            result : [],
            asn:'',
            ilpn:''
        };
        this.onSearch = this.onSearch.bind(this)
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        // Your axios request here
        axios.get('/users/asndetails')
            .then(res => {
                // console.log(res.data);
                let result = res.data;
                this.setState( {result});
            })
    }

    handleChange(e){
        e.preventDefault();
        console.log(e.target.name + ": "+ e.target.value)
        this.setState( {[e.target.name] : e.target.value });
    }

    onSearch(){
        console.log("inside search")
        // e.preventDefault();
        axios.post('/users/asndetailssearch', {
            asn: this.state.asn,
            ilpn: this.state.lpn
        }).then(res => {
            console.log(res.data);
            let result = res.data;
            this.setState( {result} ,()=>{console.log("++"+this.state.result)});
        })
    }

    render() {
        return(
            <div className="site-layout-content">
                ASN Details
                {/*<div className={"search-bar"}>*/}
                {/*    <label style={{marginRight:"1em"}}>ASN No:</label>*/}
                {/*    <Search*/}
                {/*        placeholder="input search text"*/}
                {/*        // onSearch={(value) => console.log(value)}*/}
                {/*        style={{ width: 200, marginRight:"1em" }}*/}
                {/*    />*/}
                {/*    <label style={{marginRight:"1em"}}>LPN:</label>*/}
                {/*    <Search*/}
                {/*        placeholder="input search text"*/}
                {/*        // onSearch={(value) => console.log(value)}*/}
                {/*        style={{ width: 200, marginRight:"1em" }}*/}
                {/*    />*/}
                {/*</div>*/}
                {/*<form className="form" onSubmit={this.onSearch}>*/}
                <div className={"search-bar"}>
                    <label style={{marginRight:"1em"}}>ASN No:</label>
                    <Input
                        placeholder="input search text"
                        // onSearch={(value) => console.log(value)}
                        style={{ width: 200, marginRight:"1em" }}
                        onChange={this.handleChange}
                        name="asn"
                    />
                    <label style={{marginRight:"1em"}}>LPN:</label>
                    <Input
                        placeholder="input search text"
                        // onSearch={(value) => console.log(value)}
                        style={{ width: 200, marginRight:"1em" }}
                        onChange={this.handleChange}
                        name="lpn"
                    />
                    <Button type="primary" onClick={this.onSearch}>Search</Button>
                </div>
                {/*</form>*/}
                <Tables dataSource = {this.state.result} columns = {columns}/>
            </div>
        )
    }
}
