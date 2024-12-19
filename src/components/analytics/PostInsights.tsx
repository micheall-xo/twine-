import React from 'react';
import { BarChart, LineChart } from '../charts';
import { usePostAnalytics } from '../../hooks/usePostAnalytics';
import { formatNumber } from '../../utils/formatters';

interface PostInsightsProps {
  postId: string;
}

export function PostInsights({ postId }: PostInsightsProps) {
  const { analytics, loading } = usePostAnalytics(postId);

  if (loading) {
    return <div className="p-4 text-center">Loading analytics...</div>;
  }

  return (
    <div className="bg-white rounded-lg shadow p-6 space-y-6">
      <div className="grid grid-cols-3 gap-4">
        <div className="text-center">
          <div className="text-2xl font-bold text-blue-500">
            {formatNumber(analytics.impressions)}
          </div>
          <div className="text-sm text-gray-500">Impressions</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-green-500">
            {formatNumber(analytics.engagement)}
          </div>
          <div className="text-sm text-gray-500">Engagement</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-purple-500">
            {formatNumber(analytics.shares)}
          </div>
          <div className="text-sm text-gray-500">Shares</div>
        </div>
      </div>

      <div>
        <h3 className="font-semibold mb-2">Engagement Over Time</h3>
        <LineChart data={analytics.timelineData} />
      </div>

      <div>
        <h3 className="font-semibold mb-2">Audience Demographics</h3>
        <BarChart data={analytics.demographicsData} />
      </div>
    </div>
  );
}