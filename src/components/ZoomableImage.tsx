import React from "react";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

const ZoomableImage = ({ src, alt }) => {
    return (
        <Zoom>
            <img src={src} alt={alt} />
        </Zoom>
    );
}

export default ZoomableImage;