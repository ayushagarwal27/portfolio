import { useState, useEffect } from 'react';
const ProgressiveImage = props => {
  const { height, width, placeholderImg, src } = props;
  const [imgSrc, setSrc] = useState(placeholderImg || src);

  const customClass =
    placeholderImg && imgSrc === placeholderImg ? 'loading' : 'loaded';
  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      setSrc(src);
    };
  }, [src]);

  return (
    <img
      src={imgSrc}
      className={customClass}
      height={height}
      width={width}
      alt=''
    />
  );
};

export default ProgressiveImage;
