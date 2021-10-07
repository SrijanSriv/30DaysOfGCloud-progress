import React from 'react';

const Badge = (props) =>{
    return(
        <div className = "badge">
            <img alt = "Badge" src = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fenricoteterra.com%2Fcontent%2Fimages%2F2020%2F01%2FGoogle-Cloud-icon.png&f=1&nofb=1" 
            height = "60rem"/>
            <div className = "progress">
                <div>{ props.name }</div>
                <div>{ props.track1 }</div>
                <div>{ props.track2 }</div>
            </div>
        </div>
    );
};

export default Badge;