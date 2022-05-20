import React from "react";
import Stack from "@mui/material/Stack";
import TextField from '@mui/material/TextField';
import {AdapterDateFns} from '@mui/x-date-pickers/AdapterDateFns';
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import {DesktopDatePicker} from '@mui/x-date-pickers/DesktopDatePicker';

function DatePicker(param) {
    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <Stack spacing={3}>
                <DesktopDatePicker
                    label="Date of birth"
                    inputFormat="MM/dd/yyyy"
                    value={param.value}
                    onChange={param.change}
                    renderInput={(params) => <TextField {...params} />}
                />
            </Stack>
        </LocalizationProvider>
    )
}

export default DatePicker