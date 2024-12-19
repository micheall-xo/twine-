export interface TimelineDataPoint {
  date: string;
  value: number;
}

export interface DemographicDataPoint {
  label: string;
  value: number;
}

export interface PostAnalytics {
  impressions: number;
  engagement: number;
  shares: number;
  timelineData: TimelineDataPoint[];
  demographicsData: DemographicDataPoint[];
}