import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import "../css/Table.css"

export default function HeartTable(props) {
    return (
        <div>
            <div className="heading">
                <h3>Recent Record</h3>
            </div>
            <TableContainer component={Paper}>
                <Table sx={{minWidth: 650}} aria-label="simple table">
                    <TableHead>
                        <TableRow className="row">
                            <TableCell align="left">Date</TableCell>
                            <TableCell align="left">Result</TableCell>
                            <TableCell align="left">Suggestion</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {props.rows.map((row, key) => (
                            <TableRow key={key} style={{border:"none"}}>
                                <TableCell style={{border:"none"}} align="left">{row.date}</TableCell>
                                <TableCell style={{border:"none"}} align="left">{row.result}</TableCell>
                                <TableCell style={{border:"none"}} align="left">{row.sug}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}
