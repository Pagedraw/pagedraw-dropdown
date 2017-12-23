import React, { Component } from 'react';

const InjectClassList = (props) =>
    <React.Fragment>
        {React.Children.map(props.children, (thisArg) => {
            const className = thisArg.props.className + ' ' + props.classList.join(' ');
            return React.cloneElement(thisArg, {className}, thisArg.props.children);
        })}
    </React.Fragment>;

export { InjectClassList };

