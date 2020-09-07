import React from 'react';
import '../../App.scss';
import './page.scss';
import {Tables} from "../table/tables"
import { Input } from 'antd';
import { CardContent } from "../card/card"
const axios = require('axios');
// import {axios} from "axios";

const { Search } = Input;

const dataSource = [
    {
        key: '1',
        name: 'Mike',
        age: 32,
        address: '10 Downing Street',
    },
    {
        key: '2',
        name: 'John',
        age: 42,
        address: '10 Downing Street',
    },
];

const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
    },
    {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
    },
];

export default class LpnDetails extends React.Component{
    constructor(props) {
        super(props);

        this.state={
            result : {}
        };
    }

    componentDidMount() {
        // Your axios request here
        console.log(this.props.match.params.lpnNo)
        axios.post('/users/lpndetails',{lpnNo: this.props.match.params.lpnNo})
            .then(result => {
                this.setState( {result: result.data} ,()=>{console.log(this.state.result)});
                // console.log("++"+result.data)
            })
    }

    render() {
        return(
            <div className="site-layout-content">
                Lpn
                <div className={"content-details"}>
                    <div className="row">
                        <div>
                            <label style={{marginRight:"1em"}}>LPN Number:</label>
                            <label style={{marginRight:"1em"}}>{this.state.result.ilpn}</label>
                        </div>
                        <div>
                            <label style={{marginRight:"1em"}}>ASN:</label>
                            <label style={{marginRight:"1em"}}>{this.state.result.ASN}</label>
                        </div>
                    </div>
                    <div className="row" style={{marginTop: "1em"}}>
                        <div>
                            <label style={{marginRight:"1em"}}>PO:</label>
                            <label style={{marginRight:"1em"}}>{this.state.result.PO}</label>
                        </div>
                        <div>
                            <label style={{marginRight:"1em"}}>LPN Status:</label>
                            <label style={{marginRight:"1em"}}>{this.state.result.ilpn_status}</label>
                        </div>
                    </div>
                </div>
                <CardContent result = {this.state.result}/>
            </div>
        )
    }
}
