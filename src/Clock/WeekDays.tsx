import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers';
import dayjs from 'dayjs';
import 'dayjs/locale/en';
import Clock from "./Clock";
import {TextField} from "@mui/material";
import React from "react"; // Import the desired locale

function Date() {
    const [selectedDate, setSelectedDate] = React.useState(null);

    const handleDateChange = (date:any) => {
        setSelectedDate(date);
    };

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs} locale={dayjs.locale('en')}>
            <DatePicker
                value={selectedDate}
                onChange={handleDateChange}
                renderInput={(params:any) => <TextField {...params} />}
            />
        </LocalizationProvider>
    );
}


export default Date;