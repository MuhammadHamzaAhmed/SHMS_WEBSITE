import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import "../css/Table.css"
import {useState} from "react";
import {healthMonitoringDB} from "../../Model/Database";

export default function BasicTable(props) {
    const [rows, setRow] = useState([])
    healthMonitoringDB(props.email, setRow)
    return (
        <div>
            <div className="heading">
                <h3>Recent Record</h3>
            </div>
            <TableContainer component={Paper}>
                <Table sx={{minWidth: 650}} aria-label="simple table">
                    <TableHead>
                        <TableRow >
                            <TableCell align="left">Date</TableCell>
                            <TableCell align="left">Temperature</TableCell>
                            <TableCell align="left">Blood Pressure</TableCell>
                            <TableCell align="left">Heart Rate</TableCell>
                            <TableCell align="left">Sugar</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row, key) => (
                            <TableRow key={key} style={{border:"none"}}>
                                <TableCell style={{border:"none"}} align="left">{row.dt}</TableCell>
                                <TableCell style={{border:"none"}} align="left">{row.temp}</TableCell>
                                <TableCell style={{border:"none"}} align="left">{row.bp}</TableCell>
                                <TableCell style={{border:"none"}} align="left">{row.hr}</TableCell>
                                <TableCell style={{border:"none"}} align="left">{row.sg}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}
