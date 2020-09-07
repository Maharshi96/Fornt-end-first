import React from 'react';
import '../App.scss';
import { Layout, Avatar, Menu, Breadcrumb, Button } from 'antd';
import loginLogo from "../logo.svg";
import Asn from "./page/asn";
import { Link } from "react-router-dom";
import {DashboardContent} from "./content/content";
import {Route, Switch} from "react-router-dom"
import Lpn from "./page/lpn";
import AsnDetails from "./page/asndetails";
import LpnDetails from "./page/lpndetails"
import Findcontainer from "./page/findcontainer"

const { Header, Footer, Sider } = Layout;

const rightAvatarStyle = {
    float: "right"
}

class Dashboard extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {

        return(
            <div>
                <Layout>
                    <Header>
                        <div>
                            <Avatar src={loginLogo} size={45}/>
                            <div style={rightAvatarStyle}>
                                <Button type="primary"><Link to={"/"}>Log out</Link></Button>
                            </div>
                        </div>
                    </Header>
                    <div className="main-div">
                    <Layout>
                        <Sider style={{height: "49em"}}>
                            <Menu
                                defaultSelectedKeys={['sidebar']}
                                mode="inline"
                            >
                                <Menu.Item key="ASN">
                                    <Link to="/dashboard/asn">ASN</Link>
                                </Menu.Item>
                                <Menu.Item key="ASN Details">
                                    <Link to="/dashboard/asndetails">ASN Details</Link>
                                </Menu.Item>
                                <Menu.Item key="LPN">
                                    <Link to="/dashboard/lpn">LPN</Link>
                                </Menu.Item>
                                <Menu.Item key="Find Container">
                                    <Link to="/dashboard/findcontainer">Find Container</Link>
                                </Menu.Item>
                            </Menu>
                        </Sider>
                        <Layout style={{ padding: '24px 24px 24px' }}>
                            <Breadcrumb style={{ margin: '16px 0' }}>
                                <Breadcrumb.Item>
                                    <h3 style={{ margin: '0px'}}>Dashboard</h3>
                                </Breadcrumb.Item>
                            </Breadcrumb>
                            <DashboardContent>
                                <div>
                                <Switch>
                                    <Route path={"/dashboard/asn"} component={Asn}/>
                                    <Route path={"/dashboard/asndetails"} component={AsnDetails}/>
                                    <Route path={"/dashboard/lpn"} component={Lpn}/>
                                    <Route path={"/dashboard/lpndetails/:lpnNo"} component={LpnDetails}/>
                                    <Route path={"/dashboard/findcontainer"} component={Findcontainer}/>
                                </Switch>
                                </div>
                            </DashboardContent>
                            <Footer style={{ textAlign: 'center' }}>Captsone project</Footer>
                            </Layout>
                    </Layout>
                    </div>
                </Layout>
            </div>
        )
    }
}

export default Dashboard;