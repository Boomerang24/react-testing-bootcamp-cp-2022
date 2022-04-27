/* eslint-disable react/prop-types */
import React from 'react';
import { MediaContainer } from './MediaContainer';

export const PictureOfTheDay = ({ todaysInfo }) => {
  const { picture, title, description } = todaysInfo;
  return (
    <div className="main-sections">
      <div className="picture-information">
        <h3>{title}</h3>
        <MediaContainer mediaSource={picture} alt={title} />
      </div>
      <div className="picture-description">
        <p>{description}</p>
      </div>
    </div>
  );
};
