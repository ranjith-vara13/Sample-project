import { useState } from "react";

const User = ()=>{

    const [count ] = useState(0);
const [count2] = useState(1);

    return (
        <div className="user-card">
            <h1>count={count}</h1>
            <h1>count2={count2}</h1>
            <h1>name:ranjith</h1>
            
            <h2>location:narayanapuram</h2>
            <h3>contact:vararanjith79@gmail.com</h3>
        </div>
    )
};

export default User;