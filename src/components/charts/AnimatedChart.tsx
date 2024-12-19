import React, { useEffect, useState } from 'react';
import { useSpring, animated } from '@react-spring/web';

interface AnimatedChartProps {
  data: number[];
  height?: number;
  color?: string;
}

export function AnimatedChart({ 
  data, 
  height = 200, 
  color = '#3B82F6' 
}: AnimatedChartProps) {
  const [isVisible, setIsVisible] = useState(false);
  const maxValue = Math.max(...data);
  
  const springs = useSpring({
    from: { height: 0 },
    to: { height: isVisible ? '100%' : '0%' },
    delay: 200,
    config: { tension: 280, friction: 60 }
  });

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div 
      style={{ height }} 
      className="flex items-end justify-between gap-1"
    >
      {data.map((value, index) => (
        <animated.div
          key={index}
          style={{
            ...springs,
            width: `${100 / data.length}%`,
            backgroundColor: color,
            transformOrigin: 'bottom',
            maxHeight: `${(value / maxValue) * 100}%`
          }}
          className="rounded-t transition-all duration-300 hover:opacity-80"
        />
      ))}
    </div>
  );
}