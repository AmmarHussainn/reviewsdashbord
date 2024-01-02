// import React, { useState } from 'react';
// import Plotly from 'plotly.js';
// import createPlotlyComponent from 'react-plotly.js/factory';

// const Plot = createPlotlyComponent(Plotly);

// const InnerBar = () => {
//   const [url, setUrl] = useState('');
//   const [result, setResult] = useState('');
//   const [apiType, setApiType] = useState('');

//   const makeApiCall = async () => {
//     try {
//       let apiUrl;
//       let method;
//       let bodyData;

//       switch (apiType) {
//         case 'booking':
//           apiUrl = 'https://jnjd8s9d-8000.euw.devtunnels.ms/scrape_booking/';
//           method = 'POST';
//           bodyData = JSON.stringify({ url });
//           break;
//         case 'trustpilot':
//           apiUrl = 'https://jnjd8s9d-8000.euw.devtunnels.ms/scrape_trustpilot/';
//           method = 'POST';
//           bodyData = JSON.stringify({ url });
//           break;
//         case 'google':
//           apiUrl = 'https://jnjd8s9d-8000.euw.devtunnels.ms/scrape_google/';
//           method = 'POST';
//           bodyData = JSON.stringify({ url });
//           break;
//         default:
//           apiUrl = '';
//           method = 'GET';
//       }

//       const response = await fetch(apiUrl, {
//         method,
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: bodyData,
//       });

//       const data = await response.json();
//       setResult(data);
//       console.log(data, "i am data review");
//     } catch (error) {
//       console.error('Error fetching data:', error);
//       setResult(`Error fetching data from ${apiType} API.`);
//     }
//   };

//   const renderGraph = (graphData) => {
//     if (!graphData) {
//       return null;
//     }

//     const { type, data, layout } = graphData;

//     return <Plot data={data} layout={layout} config={{ displayModeBar: false }} />;
//   };

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
//       <label htmlFor="inputField" className="mb-2 text-lg font-semibold">
//         Enter something:
//       </label>
//       <input
//         type="text"
//         id="inputField"
//         value={url}
//         onChange={(e) => setUrl(e.target.value)}
//         className="p-2 border border-gray-300 rounded-md"
//       />

//       <div className="mt-4 mb-8">
//         <label htmlFor="apiSelect" className="text-lg font-semibold">
//           Select API:
//         </label>
//         <select
//           id="apiSelect"
//           value={apiType}
//           onChange={(e) => setApiType(e.target.value)}
//           className="ml-2 p-2 border border-gray-300 rounded-md"
//         >
//           <option value="">Select an API</option>
//           <option value="booking">Booking API</option>
//           <option value="trustpilot">Trustpilot API</option>
//           <option value="google">Google API</option>
//         </select>
//         <button
//           className="ml-2 p-2 bg-blue-500 text-white rounded-md"
//           onClick={makeApiCall}
//           disabled={!apiType}
//         >
//           Get Reviews
//         </button>
//       </div>

//       <div className="text-left container px-6">
//         <p className="mb-2 text-lg font-semibold">Results:</p>
//         {result.reviews && result.reviews.length > 0 ? (
//           <div>
//             {result.reviews
//               .filter(review => review.trim() !== '')
//               .map((review, index) => (
//                 <div key={index} className="mb-4">
//                   <p className="font-semibold">{review}</p>
//                   {result.details && result.details[index] && result.details[index].trim() !== '' && (
//                     <p>{result.details[index]}</p>
//                   )}
//                   {result.graphData && result.graphData[index] && renderGraph(result.graphData[index])}
//                 </div>
//               ))}
//           </div>
//         ) : (
//           <p>No reviews available</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default InnerBar;
