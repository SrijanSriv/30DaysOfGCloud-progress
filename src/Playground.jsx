import React from 'react';
import Badge from './Badge';
import list from './list.json';

const Playground = () => {
    return(
        <div id = "playground">
            {list.map((val,index) => {
                return(
                    <Badge id = {index} name = {val['Student Name']} track1 = {val['# of Skill Badges Completed in Track 1']} track2 = {val['# of Skill Badges Completed in Track 2']} />
                );
            })}
        </div>
    );
};

export default Playground;