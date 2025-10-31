import React, { useLayoutEffect, useRef, useState } from 'react';

const ToolTrip: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useLayoutEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height); // Accurate height before screen paint
    }
  }, []);

  return (
    <div ref={ref}>
      Tooltip height is: {height}px
    </div>
  );
};

export default ToolTrip;