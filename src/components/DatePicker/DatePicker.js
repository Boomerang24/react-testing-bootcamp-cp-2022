/* eslint-disable react/prop-types */
const DatePicker = ({ date, handleChangeDate, maxDate }) => {
  return (
    <input
      className="picture-information-calendar"
      type="date"
      id="start"
      name="trip-start"
      value={date}
      onChange={handleChangeDate}
      max={maxDate}
    />
  );
};

export default DatePicker;
