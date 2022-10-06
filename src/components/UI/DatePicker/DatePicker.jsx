import { useState } from 'react';
import dayjs from 'dayjs';
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';

export const DatePicker = ({ label, inputFormat, ...params}) => {
	  const [dateValue, setDateValue] = useState(dayjs(new Date()));

    const handleDateChange = (newValue) => {
      setDateValue(newValue);
    };
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <MobileDatePicker
        label={label}
        inputFormat={inputFormat}
        value={dateValue}
        onChange={handleDateChange}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
  );
};
