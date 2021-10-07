import React from 'react';
import Badge from './Badge';
import list from './list.json';

const Playground = () => {
    return(
        <div id = "playground">
            {list.map((val,index) => {
                return(
                    <Badge id = {index} name = {val.name} track1 = {val.track1} track2 = {val.track2} />
                );
            })}
        </div>
    );
};

export default Playground;