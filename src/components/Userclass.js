import React from "react";

class Userclass extends React.Component {
    constructor(props) {
        super(props);

this.state = {
    count:0,
    count2: 2,
}

    }

    render() {        
        const { name, location } = this.props;
const { count, count2 } = this.state;
         return (
        <div className="user-card">

            <h1>count: {count}</h1>

            <button onClick={()=>{
                this.setState({
                    count:this.state.count + 1,
                });
            }}>count increase</button>
            <h2>count2: {count2}</h2>
            <h2>Name: {name}</h2>
            <h3>Location: {location}</h3>
            <h4>Contact: vararanjith79</h4>
        </div>
    );

    }
}

export default Userclass;