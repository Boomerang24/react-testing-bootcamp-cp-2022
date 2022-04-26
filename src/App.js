/* eslint-disable react/no-unescaped-entities */
import { useState } from 'react';
import DatePicker from 'react-date-picker';

import 'react-calendar/dist/Calendar.css';
import './App.css';

const testImg = 'https://apod.nasa.gov/apod/image/2204/PlanetParadeSydney_Agrawal_960_ann.jpg';

function App() {
  const [value, onChange] = useState(new Date());

  console.log(value);

  return (
    <>
      <div className="App">
        <header className="App-header">
          <h1>Picture of the Day</h1>
          <div className="main-wrapper">
            <DatePicker className="react-date-picker__styles" onChange={onChange} value={value} />
            <div className="main-sections">
              <div className="picture-information">
                <h3>Planet Parade over Sydney Opera House</h3>
                <p>2022-04-26</p>
                <div className="picture-container">
                  {/* <img src="/testImg.jpg" alt="img" /> */}
                  <img src={testImg} alt="img" />
                </div>
              </div>
              <div className="picture-description">
                <p>
                  The world is waking up to a picturesque planet parade. Just before dawn, the
                  eastern skies over much of planet Earth are decorated by a notable line of //
                  eslint-disable-next-line react/no-unescaped-entities familiar planets. In much of
                  Earth's northern hemisphere, this line of planets appears most nearly horizontal,
                  but in much of Earth's southern hemisphere, the line appears more nearly vertical.
                  Pictured over the Sydney Opera House in southern Australia, the planet line was
                  captured nearly vertical about five days ago. From top to bottom, the morning
                  planets are Saturn, Mars, Venus, and Jupiter. As April ends, the angular distance
                  between Venus and Jupiter will gradually pass below a degree as they switch
                  places. Then, as May ends, Jupiter will pass near Mars as those two planets switch
                  places. In June, the parade will briefly expand to include Mercury. Notable
                  Submissions to APOD: Morning Planet Parade 2022
                </p>
              </div>
            </div>
            <div className="mainscreen-footer">
              <p>Project created during Wizeline Academy React Testing Bootcamp</p>
            </div>
          </div>
        </header>
      </div>
    </>
  );
}

export default App;
