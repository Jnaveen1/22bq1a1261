import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './StatsPage.css';

function StatsPage() {
  const { shortcode } = useParams();

  // Dummy stats — replace with API later
  const stats = {
    originalUrl: 'https://example.com/your-original-url',
    shortUrl: `https://short.ly/${shortcode}`,
    clicks: 12,
    createdAt: '2025-08-01 10:00 AM',
    expiresAt: '2025-08-01 10:30 AM',
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.href = stats.originalUrl;
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="stats-wrapper">
      <div className="stats-card">
        <h2>🔍 Stats for: {shortcode}</h2>
        <p><strong>Original URL:</strong> {stats.originalUrl}</p>
        <p><strong>Short URL:</strong> {stats.shortUrl}</p>
        <p><strong>Clicks:</strong> {stats.clicks}</p>
        <p><strong>Created At:</strong> {stats.createdAt}</p>
        <p><strong>Expires At:</strong> {stats.expiresAt}</p>
        <p className="redirect-note">Redirecting in 3 seconds...</p>
      </div>
    </div>
  );
}

export default StatsPage;
