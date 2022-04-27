/* eslint-disable react/prop-types */
import React, { useState } from 'react';

const MediaContainer = ({ mediaSource, alt, mediaType }) => {
  const [zoomImg, setZoomImg] = useState(false);

  const handleImgClick = () => {
    setZoomImg(!zoomImg);
  };

  const isImgZoomed = zoomImg ? 'picture-focus' : 'picture';

  return (
    <div className="picture-container">
      {mediaType === 'image' ? (
        <img className={isImgZoomed} src={mediaSource} alt={alt} onClick={handleImgClick} />
      ) : (
        <iframe className="picture" src={mediaSource} />
      )}
    </div>
  );
};

export default MediaContainer;
