import React from "react";

const ImageContainer = ({ photos }) => {
  return (
    <div className="imageWrapper">
      {photos.map((photo) => (
        <div key={photo.id} className="imageItem">
          <img src={photo.urls.small} alt="issue displaying" />
        </div>
      ))}
    </div>
  );
};

export default ImageContainer;


