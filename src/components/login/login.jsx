import React from "react";
import loginLogoSVG from "../../images/logo.svg"
const axios = require('axios');

export class Login extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            password: ''
        };
        this.submit = this.submit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    
    handleChange(e){
        e.preventDefault();
        this.setState( {[e.target.name] : e.target.value });
    }

    submit(e) {
        e.preventDefault();
        axios.post('/login', {
            email: this.state.userName,
            password: this.state.password
        }).then((res)=>{
            if (res.status===200){
                window.location = "/dashboard/asn";
            }
            else
            {
                alert("invalid credentials")
            }
        });
        // const formOutput = "Login Successful!!" + "\nUser Name: " + this.state.userName +
        //     "\nPassword: " + this.state.password;
        // console.log(formOutput);
        this.setState({password: '', userName: ''});
        // alert(formOutput);
    }

    render() {
        return(
            <div className="base-container" ref={this.props.containerReference}>
                <div className="header">Login</div>
                <div className="content">
                    <div className="image">
                        <img src={loginLogoSVG} alt={""}/>
                        <form className="form" onSubmit={this.submit}>
                            <div className="form-group">
                                <label htmlFor="username">User Name: </label>
                                <input type="text"
                                       name="userName"
                                       placeholder="enter username"
                                       value={this.state.userName}
                                       onChange={this.handleChange}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input
                                    type="password"
                                    name="password"
                                    placeholder="enter password"
                                    value={this.state.password}
                                    required={true}
                                    minLength={6}
                                    onChange={this.handleChange}
                                    />
                            </div>
                            <div className="footer">
                                <button type="submit" className="btn">Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}