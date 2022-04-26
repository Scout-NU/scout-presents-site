import { useState, useEffect } from 'react';

const getDimensions = () => {
  if (typeof window !== 'undefined') {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height,
    };
  }
  return { width: 0, height: 0 };
};

const useDimensions = () => {
  const [dimensions, setDimensions] = useState(getDimensions());

  useEffect(() => {
    const handleResize = () => {
      setDimensions(getDimensions());
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return dimensions;
};

export default useDimensions;
