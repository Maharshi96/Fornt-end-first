import React from 'react';
import '../../App.scss';
import { Card } from 'antd';

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


export const CardContent = props =>{
    return(
        <div style = {cardDivStyle}>
            <Card title="Details" bordered={false} style={cardStyle}>
                <div >
                    <div style={cardContent}>
                        <div>
                            <label style={{marginRight:"1em"}}>SKU:</label>
                            <label style={{marginRight:"10em"}}>{props.result.SKU}</label>
                        </div>
                        <div>
                            <label style={{marginRight:"1em"}}>Quantity:</label>
                            <label style={{marginRight:"10em"}}>{props.result.qty}</label>
                        </div>
                        <div>
                            <label style={{marginRight:"1em"}}>Height:</label>
                            <label style={{marginRight:"10em"}}>{props.result.hieght}</label>
                        </div>
                    </div>
                    <div style={Object.assign({},cardContent,{marginTop: "3em"})}>
                        <div>
                            <label style={{marginRight:"1em"}}>Width:</label>
                            <label style={{marginRight:"10em"}}>{props.result.width}</label>
                        </div>
                        <div>
                            <label style={{marginRight:"1em"}}>Length:</label>
                            <label style={{marginRight:"10em"}}>{props.result.length}</label>
                        </div>
                        <div>
                            <label style={{marginRight:"1em"}}>Active Location:</label>
                            <label style={{marginRight:"10em"}}>{props.result.SKU}</label>
                        </div>
                    </div>
                    <div style={Object.assign({},cardContent,{marginTop: "3em"})}>
                        <div>
                            <label style={{marginRight:"1em"}}>Current Location:</label>
                            <label style={{marginRight:"10em"}}>{props.result.Current_location}</label>
                        </div>
                    </div>
                </div>
            </Card>
        </div>
    )
}