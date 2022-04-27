import { useState } from 'react';
import moment from 'moment';

export const DatePicker = () => {
  const today = moment(new Date()).format('YYYY-MM-DD');
  const [dateState, setDateState] = useState(today);

  const handleChangeDate = (e) => {
    const newDate = e.target.value;
    setDateState(newDate);
  };
  return (
    <input
      className="picture-information-calendar"
      type="date"
      id="start"
      name="trip-start"
      value={dateState}
      onChange={handleChangeDate}
      min="2018-01-01"
      max={today}
    />
  );
};
