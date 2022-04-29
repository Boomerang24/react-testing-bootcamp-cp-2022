/* eslint-disable react/prop-types */
const DatePicker = ({ date, handleChangeDate, maxDate }) => {
  return (
    <input
      className="picture-information-calendar"
      type="date"
      id="calendarPicker"
      name="date-picker"
      aria-label="calendar-picker"
      value={date}
      onChange={handleChangeDate}
      max={maxDate}
    />
  );
};

export default DatePicker;
