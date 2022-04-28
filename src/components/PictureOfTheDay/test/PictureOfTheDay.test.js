/* eslint-disable no-undef */
import { render } from '@testing-library/react';
import PictureOfTheDay from '../PictureOfTheDay';

const sampleTodaysInfo = {
  url: 'https://www.youtube.com/embed/m8qvOpcDt1o?rel=0',
  title: 'Animation: Odd Radio Circles',
  explanation: 'Sample Explanation',
  media_type: 'video',
};

describe('PictureOfTheDay Tests', () => {
  it('should render correctly passing video information', () => {
    const { title } = sampleTodaysInfo;
    const { getByRole, getByTitle, getByText } = render(
      <PictureOfTheDay todaysInfo={sampleTodaysInfo} />
    );

    const header = getByRole('heading', { name: title });
    const videoContainer = getByTitle(`Video - ${title}`);
    const description = getByText('Sample Explanation');

    expect(videoContainer).toBeTruthy();
    expect(header).toBeInTheDocument();
    expect(description).toBeInTheDocument();
  });
  it('should render correctly passing image information', () => {
    const sampleImageInfo = {
      ...sampleTodaysInfo,
      url: 'https://apod.nasa.gov/apod/image/2203/Arp244-LRGB1024.jpg',
      media_type: 'image',
    };
    const { getByRole, getByText } = render(<PictureOfTheDay todaysInfo={sampleImageInfo} />);

    const header = getByRole('heading', { name: 'Animation: Odd Radio Circles' });
    const imageContainer = getByRole('img');
    const description = getByText('Sample Explanation');

    expect(imageContainer).toBeTruthy();
    expect(imageContainer.alt).not.toBe(null);
    expect(header).toBeInTheDocument();
    expect(description).toBeInTheDocument();
  });
});
