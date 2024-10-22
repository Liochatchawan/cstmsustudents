import { useState, useEffect } from 'react';

const WindowSize = () => {
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleResize = () => {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      };

      window.addEventListener('resize', handleResize);

      // Set initial size after page load
      handleResize();

      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  return (
    <div>
      Width: {windowSize.width}, Height: {windowSize.height}
    </div>
  );
};

export default WindowSize;
