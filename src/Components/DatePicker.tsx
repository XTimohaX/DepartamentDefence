import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const MyDatePicker = () => {
    const [selectedDate, setSelectedDate] = useState();

    return (
        <div>
            <h1>Date Picker</h1>
            <DatePicker
                selected={selectedDate}
                onChange={(date) => setSelectedDate(selectedDate)}
                dateFormat="dd/MM/yyyy"
                isClearable
            />
        </div>
    );
};

export default MyDatePicker;