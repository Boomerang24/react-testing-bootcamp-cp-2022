/* eslint-disable react/no-unescaped-entities */

import './App.css';
import { DatePicker } from './components/DatePicker';
import { Footer } from './components/Footer';
import { PictureOfTheDay } from './components/PictureOfTheDay';

const title = 'Planet Parade over Sydney Opera House';
const picture = 'https://apod.nasa.gov/apod/image/2204/PlanetParadeSydney_Agrawal_1663.jpg';
const description = `The world is waking up to a picturesque planet parade. Just before dawn, the
eastern skies over much of planet Earth are decorated by a notable line of
familiar planets. In much of Earth's northern hemisphere, this line of planets
appears most nearly horizontal, but in much of Earth's southern hemisphere, the
line appears more nearly vertical. Pictured over the Sydney Opera House in
southern Australia, the planet line was captured nearly vertical about five days
ago. From top to bottom, the morning planets are Saturn, Mars, Venus, and Jupiter.
As April ends, the angular distance between Venus and Jupiter will gradually pass
below a degree as they switch places. Then, as May ends, Jupiter will pass near
Mars as those two planets switch places. In June, the parade will briefly expand
to include Mercury. Notable Submissions to APOD: Morning Planet Parade 2022`;

const tempDay = { title, picture, description };

function App() {
  return (
    <>
      <div className="App">
        <header className="App-header">
          <h3>NASA - Picture of the Day</h3>
          <div className="main-wrapper">
            <DatePicker />
            <PictureOfTheDay todaysInfo={tempDay} />
            <Footer />
          </div>
        </header>
      </div>
    </>
  );
}

export default App;
