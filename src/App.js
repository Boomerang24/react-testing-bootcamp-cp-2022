/* eslint-disable react/no-unescaped-entities */

import { useState } from 'react';
import moment from 'moment';

import DatePicker from './components/DatePicker';
import PictureOfTheDay from './components/PictureOfTheDay';
import Footer from './components/Footer';

import { useFetch } from './hooks/useFetch';

import './App.css';

function App() {
  const today = moment(new Date()).format('YYYY-MM-DD');
  const [dateState, setDateState] = useState(today);

  const url = `https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_API_KEY}&date=${dateState}`;

  const { response, loading } = useFetch(url);

  const handleChangeDate = (e) => {
    const newDate = e.target.value;
    setDateState(newDate);
  };

  if (loading) return <div>Carganding</div>;

  return (
    <>
      <div className="App">
        <header className="App-header">
          <h3>NASA - Picture of the Day</h3>
          <div className="main-wrapper">
            <DatePicker date={dateState} handleChangeDate={handleChangeDate} maxDate={today} />
            <PictureOfTheDay todaysInfo={response} />
            <Footer />
          </div>
        </header>
      </div>
    </>
  );
}
export default App;
