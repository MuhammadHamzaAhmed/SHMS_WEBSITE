import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import {RadioButtonData} from "./Data";

export default function RowRadioButtonsGroup(param) {
    return (
        <FormControl>
            <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
                onChange={param.change}
            >
                {RadioButtonData.map((button, id) => {
                    return (
                        <FormControlLabel
                            key={id}
                            value={button.value}
                            control={<Radio/>}
                            label={button.label}/>
                    );
                })}

            </RadioGroup>
        </FormControl>
    );
}
