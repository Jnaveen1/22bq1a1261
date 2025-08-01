import React, { useState } from 'react';
import './UrlShortenerForm.css';

function UrlShortenerForm() {
  const [url, setUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');
  const [error, setError] = useState('');

  const handleShorten = () => {
    if (!url.startsWith('http')) {
      setError('Please enter a valid URL (http or https)');
      setShortUrl('');
      return;
    }

    setError('');
    const code = Math.random().toString(36).substring(6);
    setShortUrl('https://short.ly/' + code);
  };

  return (
    <div className="wrapper">
      <div className="card">
        <h2>🔗 Simple URL Shortener</h2>

        <input
          type="text"
          placeholder="Enter your long URL here"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          className="input-box"
        />

        <button onClick={handleShorten} className="button">
          Shorten URL
        </button>

        {error && <p className="error-text">{error}</p>}

        {shortUrl && (
          <div className="result">
            <strong>Shortened:</strong>
            <a href={url} target="_blank" rel="noopener noreferrer">
              {shortUrl}
            </a>
            <a
              href={`/stats/${shortUrl.split('/').pop()}`}
              className="stats-link"
            >
              ➤ View Stats
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

export default UrlShortenerForm;

