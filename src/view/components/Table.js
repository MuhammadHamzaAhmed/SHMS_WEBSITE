import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import "../css/Table.css"

function createData(temp, bp, hr, sg) {
    return {temp, bp, hr, sg};
}

const rows = [
    createData( 159, 6.0, 24, 4.0),
    createData( 237, 9.0, 37, 4.3),
    createData(262, 16.0, 24, 6.0),
    createData( 305, 3.7, 67, 4.3),
    createData(356, 16.0, 49, 3.9),
];

export default function BasicTable() {
    return (
        <div>
            <div className="heading">
                <h3>Recent Record</h3>
            </div>
            <TableContainer component={Paper}>
                <Table sx={{minWidth: 650}} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="left">Temperature</TableCell>
                            <TableCell align="left">Blood Pressure</TableCell>
                            <TableCell align="left">Heart Rate</TableCell>
                            <TableCell align="left">Sugar</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow
                                key={row.name}
                                sx={{'&:last-child td, &:last-child th': {border: 0}}}
                            >
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="left">{row.temp}</TableCell>
                                <TableCell align="left">{row.bp}</TableCell>
                                <TableCell align="left">{row.hr}</TableCell>
                                <TableCell align="left">{row.sg}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}
