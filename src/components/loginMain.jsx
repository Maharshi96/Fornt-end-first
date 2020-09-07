import React from 'react';
import '../App.scss';
import {Login} from "./login/index";
import {Register} from "./login/index";

class LoginMain extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            isLoggedIn: true
        }
    }

    animationStateChange () {
        if (this.state.isLoggedIn)
        {
            this.rightSide.classList.remove("right")
            this.rightSide.classList.add("left")
        }
        else{
            this.rightSide.classList.remove("left")
            this.rightSide.classList.add("right")
        }
        this.setState((prevState) => ({isLoggedIn : !prevState.isLoggedIn}))
    }

    render() {
        const current = this.state.isLoggedIn ? "Register" : "Login";

        return(
            <div className="App">
                <div className="login">
                    <div className="container">
                        {this.state.isLoggedIn && (<Login containerReference = { ref => (this.current = ref)}/>)}
                        {!this.state.isLoggedIn && (<Register containerReference = { ref => (this.current = ref)}/>)}
                    </div>
                    <RightSide
                        current={current}
                        containerReference = { ref => this.rightSide = ref}
                        onClick = {this.animationStateChange.bind(this)}
                        isLoggedIn = {this.state.isLoggedIn}
                    />
                </div>
            </div>
        )
    }
}

const innerStyleRight = {
    marginRight: "2em"
}

const innerStyleLeft = {
    marginLeft: "2em"
}

const RightSide = props => {
    return(
        <div className="side-right" ref={props.containerReference} onClick={props.onClick}>
            <div className="inner-container" >
                <div className="text" style={Object.assign({},props.isLoggedIn ? innerStyleRight: innerStyleLeft )}>
                    <p>{props.current}</p>
                    <p>Click Here</p>
                </div>
            </div>
        </div>
    )
}

export default LoginMain;