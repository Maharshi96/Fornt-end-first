import React from "react";
import loginLogoSVG from "../../images/logo.svg"

export class Register extends React.Component{

    constructor(props) {
        super(props);

        this.state = {
            email: '',
            userName: '',
            password: '',
            passwordError:''
        };

        this.submit = this.submit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.formValidate = this.formValidate.bind(this)
    }


    handleChange(e){
        e.preventDefault();
        this.setState( {[e.target.name] : e.target.value });
    }

    formValidate(){
        let passwordError = "";
        let password = this.state.password;
        let regExp = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
        if(!regExp.test(password)){
            passwordError = "One special character needed in password";
            return passwordError;
        }
        return false;
    }

    submit(e) {
        e.preventDefault();
        let passwordError = this.formValidate()
        if(typeof passwordError === 'boolean'){
            this.setState({passwordError: ''})
            const formOutput = "Form submitted successfully!!" + "\nUser Name: " + this.state.userName + "\nEmail: "
                + this.state.email +
                "\nPassword: " + this.state.password;
            console.log(formOutput);
            this.setState({email:'', password: '', userName: ''});
            alert(formOutput);
        }
        else{
            this.setState({passwordError}, ()=>{console.log(passwordError)});
        }
    }

    render() {
        return(
            <div className="base-container" ref={this.props.containerReference}>
                <div className="header">Register</div>
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
                                       onChange={this.handleChange}
                                       required/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email: </label>
                                <input type="email"
                                       name="email"
                                       placeholder="abc@xyz.com"
                                       value={this.state.email}
                                       onChange={this.handleChange}
                                       required/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input
                                    type="password"
                                    name="password"
                                    placeholder="enter password"
                                    value={this.state.password}
                                    required
                                    minLength={6}
                                    onChange={this.handleChange}
                                    style={{marginBottom: "0em"}}/>
                                    <label style={{color:"red",fontSize: "small",
                                        fontWeight: "600"}}>{this.state.passwordError}</label>
                            </div>
                            <div className="footer">
                                <button type="submit" className="btn">Register</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}