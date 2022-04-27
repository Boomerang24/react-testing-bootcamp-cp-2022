/* eslint-disable react/prop-types */
import React from 'react';
import MediaContainer from '../MediaContainer';

const PictureOfTheDay = ({ todaysInfo }) => {
  const { hdurl, title, explanation: description, media_type } = todaysInfo;
  return (
    <div className="main-sections">
      <div className="picture-information">
        <h3>{title}</h3>
        <MediaContainer mediaSource={hdurl} alt={title} mediaType={media_type} />
      </div>
      <div className="picture-description">
        <p>{description}</p>
      </div>
    </div>
  );
};

export default PictureOfTheDay;
