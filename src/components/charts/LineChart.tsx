import React from 'react';
import type { TimelineDataPoint } from '../../types/analytics';

interface LineChartProps {
  data: TimelineDataPoint[];
}

export function LineChart({ data }: LineChartProps) {
  const maxValue = Math.max(...data.map(d => d.value));
  const points = data.map((d, i) => ({
    x: (i / (data.length - 1)) * 100,
    y: ((maxValue - d.value) / maxValue) * 100
  }));

  const pathData = points
    .map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`)
    .join(' ');

  return (
    <div className="w-full h-48 relative">
      <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
        <path
          d={pathData}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="text-blue-500"
        />
      </svg>
      <div className="absolute bottom-0 left-0 right-0 flex justify-between text-xs text-gray-500">
        {data.map((d, i) => (
          <span key={i}>{new Date(d.date).toLocaleDateString()}</span>
        ))}
      </div>
    </div>
  );
}