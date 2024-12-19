import React from 'react';
import type { DemographicDataPoint } from '../../types/analytics';

interface BarChartProps {
  data: DemographicDataPoint[];
}

export function BarChart({ data }: BarChartProps) {
  const maxValue = Math.max(...data.map(d => d.value));

  return (
    <div className="space-y-2">
      {data.map((item) => (
        <div key={item.label} className="flex items-center">
          <span className="w-16 text-sm text-gray-600">{item.label}</span>
          <div className="flex-1 h-6 bg-gray-100 rounded-full overflow-hidden">
            <div
              className="h-full bg-blue-500 rounded-full transition-all duration-500"
              style={{ width: `${(item.value / maxValue) * 100}%` }}
            />
          </div>
          <span className="w-12 text-right text-sm text-gray-600">
            {item.value}%
          </span>
        </div>
      ))}
    </div>
  );
}