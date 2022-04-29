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
  const url =
    'https://api.nasa.gov/planetary/apod?api_key=pQdaH66O2sQEEvw0wRbYd3nI3NxzR5ZCvT5AEcVS&?';

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
      <Triangle
        wrapperClass="screen-loader"
        height="150"
        width="150"
        color="red"
        ariaLabel="loading"
      />
    );

  //TODO: display error from failed fetch
  // {
  //   response && (
  //     <Triangle
  //       wrapperClass="screen-loader"
  //       height="150"
  //       width="150"
  //       color="red"
  //       ariaLabel="loading"
  //     />
  //   );
  // }

  // console.log(response.code);
  // return (
  //   <Triangle
  //     wrapperClass="screen-loader"
  //     height="150"
  //     width="150"
  //     color="red"
  //     ariaLabel="loading"
  //   />
  // );

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
