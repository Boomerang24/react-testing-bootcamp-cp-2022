/* eslint-disable no-undef */

import { render } from '@testing-library/react';
import MediaContainer from '../MediaContainer';

describe('MediaContainer Tests', () => {
  it('should render correctly receiving an image', () => {
    const mediaSource = 'https://apod.nasa.gov/apod/image/2203/Arp244-LRGB1024.jpg';
    const alt = 'Exploring the Antennae';
    const mediaType = 'image';

    const { getByRole } = render(
      <MediaContainer mediaSource={mediaSource} alt={alt} mediaType={mediaType} />
    );

    const imageContainer = getByRole('img');

    expect(imageContainer).toBeTruthy();
    expect(imageContainer.alt).not.toBe(null);
  });
  it('should render correctly receiving an video', () => {
    const mediaSource = 'https://www.youtube.com/embed/m8qvOpcDt1o?rel=0';
    const alt = 'Exploring the Antennae';
    const mediaType = 'video';
    const { getByTitle } = render(
      <MediaContainer mediaSource={mediaSource} alt={alt} mediaType={mediaType} />
    );

    const imageContainer = getByTitle(`Video - ${alt}`);

    expect(imageContainer).toBeTruthy();
    expect(imageContainer.alt).not.toBe(null);
  });
});
