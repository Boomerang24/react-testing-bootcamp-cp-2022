/* eslint-disable react/prop-types */
import React, { useState } from 'react';

export const MediaContainer = ({ mediaSource, alt }) => {
  const [zoomImg, setZoomImg] = useState(false);

  const handleImgClick = () => {
    setZoomImg(!zoomImg);
  };

  const isImgZoomed = zoomImg ? 'picture-focus' : 'picture';

  return (
    <div className="picture-container">
      <img className={isImgZoomed} src={mediaSource} alt={alt} onClick={handleImgClick} />
    </div>
  );
};
