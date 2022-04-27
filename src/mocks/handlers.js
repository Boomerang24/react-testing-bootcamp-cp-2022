import { rest } from 'msw';

export const handlers = [
  // Handles a GET /user request
  rest.get('https://api.nasa.gov/planetary/apod', (req, res, ctx) => {
    const API_KEY = req.url.searchParams.get('api_key');

    if (!API_KEY)
      return res(
        ctx.status(403),
        ctx.json({
          error: {
            code: 'API_KEY_MISSING',
            message: 'No api_key was supplied. Get one at https://api.nasa.gov:443',
          },
        })
      );

    return res(
      ctx.status(200),
      ctx.json({
        copyright: 'Prasun Agrawal',
        date: '2022-04-26',
        explanation:
          "The world is waking up to a picturesque planet parade. Just before dawn, the eastern skies over much of planet Earth are decorated by a notable line of familiar planets. In much of Earth's northern hemisphere, this line of planets appears most nearly horizontal, but in much of Earth's southern hemisphere, the line appears more nearly vertical. Pictured over the Sydney Opera House in southern Australia, the planet line was captured nearly vertical about five days ago.  From top to bottom, the morning planets are Saturn, Mars, Venus, and Jupiter.  As April ends, the angular distance between Venus and Jupiter will gradually pass below a degree as they switch places.  Then, as May ends, Jupiter will pass near Mars as those two planets switch places.  In June, the parade will briefly expand to include Mercury.   Notable Submissions to APOD: Morning Planet Parade 2022",
        hdurl: 'https://apod.nasa.gov/apod/image/2204/PlanetParadeSydney_Agrawal_1663.jpg',
        media_type: 'image',
        service_version: 'v1',
        title: 'Planet Parade over Sydney Opera House',
        url: 'https://apod.nasa.gov/apod/image/2204/PlanetParadeSydney_Agrawal_960_ann.jpg',
      })
    );
  }),
];
