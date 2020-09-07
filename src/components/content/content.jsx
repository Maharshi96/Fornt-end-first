import React from 'react';
import '../../App.scss';
import { Layout, Avatar, Menu, Breadcrumb } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import {Tables} from "../table/tables"
import Asn from "../page/asn"
import { Link } from "react-router-dom";

const { Header, Footer, Sider, Content } = Layout;

export class DashboardContent extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {

        return(
            <div>

                <Content
                   className="site-layout-background"
                   style={{
                      padding: 24,
                      margin: 0,
                      minHeight: 280,
                      }}
                     >
                    <div className="site-layout-content">
                        {/*<Asn/>*/}
                        {this.props.children}
                    </div>
                    </Content>
            </div>
        )
    }
}
