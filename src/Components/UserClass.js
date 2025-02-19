import React from "react";

class UserClass extends React.Component{

    constructor(props){
        super(props);

    }

    render() {
        return (
            <div className="user-card">
            <h2>Lokesh Kallepalli {this.props.name}</h2>
            <h3>Location Missouri</h3>
            <h4>contact lokeshkallepalli92@gmiil.com</h4>
        </div>
        );
    }
}

export default UserClass;