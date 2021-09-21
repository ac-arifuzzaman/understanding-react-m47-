import React from 'react';
import Config from '../Config/Config';

const Device = (props) => {
    return (
        <div>
            <h1>My device {props.name}</h1>
            <h4>My steps: {props.steps}</h4>
            <Config price={props.price}></Config>
        </div>
    );
};

export default Device;