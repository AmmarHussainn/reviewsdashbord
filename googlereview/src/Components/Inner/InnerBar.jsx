import React, { useState } from 'react';
import Plotly from 'plotly.js';
import createPlotlyComponent from 'react-plotly.js/factory';
import probeImageSize from 'probe-image-size';

const Plot = createPlotlyComponent(Plotly);

const InnerBar = () => {
  const [url, setUrl] = useState('');
  const [result, setResult] = useState({});
  const [apiType, setApiType] = useState('');

  const makeApiCall = async () => {
    try {
      let apiUrl;
      let method;
      let bodyData;

      switch (apiType) {
        case 'booking':
          apiUrl = 'https://jnjd8s9d-8000.euw.devtunnels.ms/scrape_booking/';
          method = 'POST';
          bodyData = JSON.stringify({ url });
          break;
        case 'trustpilot':
          apiUrl = 'https://jnjd8s9d-8000.euw.devtunnels.ms/scrape_trustpilot/';
          method = 'POST';
          bodyData = JSON.stringify({ url });
          break;
        case 'google':
          apiUrl = 'https://jnjd8s9d-8000.euw.devtunnels.ms/scrape_google/';
          method = 'POST';
          bodyData = JSON.stringify({ url });
          break;
        default:
          apiUrl = '';
          method = 'GET';
      }

      const response = await fetch(apiUrl, {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: bodyData,
      });

      const data = await response.json();
      setResult(data);
      console.log(data, "i am data review");
    } catch (error) {
      console.error('Error fetching data:', error);
      setResult({ error: `Error fetching data from ${apiType} API.` });
    }
  };

  const renderGraph = (graphData) => {
    if (!graphData) {
      return null;
    }

    const { type, data, layout } = graphData;

    return <Plot data={data} layout={layout} config={{ displayModeBar: false }} />;
  };

  const handleImageError = (error) => {
    console.error('Error processing image:', error);
    // Handle the error appropriately
  };

  const getImageSize = async () => {
    try {
      const imageSize = await probeImageSize(url);
      console.log('Image Size:', imageSize);
    } catch (error) {
      handleImageError(error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      {/* Existing code */}
      <button
        className="ml-2 p-2 bg-blue-500 text-white rounded-md"
        onClick={getImageSize}
        disabled={!url}
      >
        Get Image Size
      </button>
    </div>
  );
};

export default InnerBar;
