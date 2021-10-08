import React from 'react';
import Badge from './Badge';
import list from '../list.json';
import { DataGrid } from '@mui/x-data-grid';

let rows = [
    // { id: 1, col1: 'Hello', col2: 'World' },
    // { id: 2, col1: 'DataGridPro', col2: 'is Awesome' },
    // { id: 3, col1: 'MUI', col2: 'is Amazing' },
];

const columns = [
    { field: 'id', headerName: 'Rank' },
    { field: 'name', headerName: 'Student Name', width: 300 },
    { field: 'track1', headerName: 'No. of skill badges in track 1', width: 300 },
    { field: 'track2', headerName: 'No. of skill badges in track 2', width: 300 },
];

const Playground = () => {

    function sortResults(prop1, prop2, asc) {
        list.sort(function (a, b) {
            if (asc) {
                return (a[prop1] + a[prop2] > b[prop1] + b[prop2]) ? 1 : ((a[prop1] + a[prop2] < b[prop1] + b[prop2]) ? -1 : 0);
            } else {
                return (a[prop1] + a[prop2] < b[prop1] + b[prop2]) ? 1 : ((a[prop1] + a[prop2] > b[prop1] + b[prop2]) ? -1 : 0);
            }
        });
    }
    sortResults('# of Skill Badges Completed in Track 1', '# of Skill Badges Completed in Track 2', false);

    function createData() {
        list.map((val, index) => {
            rows.push({
                id: index + 1,
                name: val['Student Name'].toLocaleUpperCase(),
                track1: val['# of Skill Badges Completed in Track 1'],
                track2: val['# of Skill Badges Completed in Track 2']
            })
            // return (
            //     <Badge id={index} name={val['Student Name']} track1={val['# of Skill Badges Completed in Track 1']} track2={val['# of Skill Badges Completed in Track 2']} />
            // );
        })
    }

    createData();
    return (
        <div id="playground">
            <DataGrid rows={rows} columns={columns} />
        </div>
    );
};

export default Playground;