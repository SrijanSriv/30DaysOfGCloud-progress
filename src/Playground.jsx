import React from 'react';
import Badge from './Badge';
import list from './list.json';

const Playground = () => {

    function sortResults(prop1, prop2, asc) {
    list.sort(function(a, b) {
        if (asc) {
            return (a[prop1] + a[prop2]> b[prop1]+b[prop2]) ? 1 : ((a[prop1] + a[prop2]< b[prop1]+b[prop2]) ? -1 : 0);
        } else {
            return (a[prop1] + a[prop2]< b[prop1]+b[prop2]) ? 1 : ((a[prop1] + a[prop2]> b[prop1]+b[prop2]) ? -1 : 0);
        }
    });
    }
    sortResults('# of Skill Badges Completed in Track 1', '# of Skill Badges Completed in Track 2' , false);
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