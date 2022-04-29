/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from 'react';
import moment from 'moment';

import DatePicker from './components/DatePicker';
import PictureOfTheDay from './components/PictureOfTheDay';
import Footer from './components/Footer';
import { Triangle } from 'react-loader-spinner';
import { ToastContainer, toast } from 'react-toastify';

import { useFetch } from './hooks/useFetch';

import './App.css';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const today = moment(new Date()).format('YYYY-MM-DD');
  const [dateState, setDateState] = useState(today);

  // const url = `https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_API_KEY}&date=${dateState}`;
  const url = 'https://api.nasa.gov/planetary/apod??'; // URL para forzar error

  useEffect(() => {
    if (moment(dateState).isAfter(today))
      return toast.warning('Future dates are not valid', { theme: 'dark' });
  }, [dateState]);

  const { response, loading, error } = useFetch(url);

  useEffect(() => {
    if (error != null)
      return toast.error('There was an error, please try again', { theme: 'dark' });
  }, [error]);

  const handleChangeDate = (e) => {
    const newDate = e.target.value;
    setDateState(newDate);
  };

  if (loading)
    return (
      <Triangle
        wrapperClass="screen-loader"
        height="150"
        width="150"
        color="red"
        ariaLabel="loading"
      />
    );

  return (
    <div className="App">
      <header className="App-header">
        <ToastContainer />
        <h3>NASA - Picture of the Day</h3>
        <div className="main-wrapper">
          <DatePicker date={dateState} handleChangeDate={handleChangeDate} maxDate={today} />
          {!error && <PictureOfTheDay todaysInfo={response} />}
          <Footer />
        </div>
      </header>
    </div>
  );
}
export default App;
