import React from 'react';
import '../../App.scss';
import { Table } from 'antd';

const tableStyle = {
    boxShadow: "0px 0px 0.2em 0.2em rgba(15,15,15,0.28)",
    marginTop: "1em"
}

export const Tables = props =>{
    return(
        <div>
            <Table dataSource={props.dataSource} columns={props.columns} style={tableStyle}/>
        </div>
    )
}