/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from 'react';
import moment from 'moment';

import DatePicker from './components/DatePicker';
import PictureOfTheDay from './components/PictureOfTheDay';
import Footer from './components/Footer';

import { useFetch } from './hooks/useFetch';

import './App.css';
import { Triangle } from 'react-loader-spinner';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const today = moment(new Date()).format('YYYY-MM-DD');
  const [dateState, setDateState] = useState(today);

  const url = `https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_API_KEY}&date=${dateState}`;

  useEffect(() => {
    if (moment(dateState).isAfter(today)) return toast('Future dates are not valid');
  }, [dateState]);

  const { response, loading } = useFetch(url);

  const handleChangeDate = (e) => {
    const newDate = e.target.value;
    setDateState(newDate);
  };

  if (loading)
    return (
      <div className="screen-loader">
        <Triangle height="150" width="150" color="red" ariaLabel="loading" />
      </div>
    );

  return (
    <div className="App">
      <header className="App-header">
        <ToastContainer />
        <h3>NASA - Picture of the Day</h3>
        <div className="main-wrapper">
          <DatePicker date={dateState} handleChangeDate={handleChangeDate} maxDate={today} />
          <PictureOfTheDay todaysInfo={response} />
          <Footer />
        </div>
      </header>
    </div>
  );
}
export default App;
