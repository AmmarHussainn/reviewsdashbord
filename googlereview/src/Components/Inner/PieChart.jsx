// import React, { useEffect, useState } from 'react';
// import { Pie, Bar } from 'react-chartjs-2';
// import 'chart.js/auto';

// const Charts = () => {
//   const [formData, setFormData] = useState({
//     url: '',
//     endpoint: 'booking', // Default endpoint
//   });

//   const [apiData, setApiData] = useState(null);

//   useEffect(() => {
//     // Check if the button has been clicked
//     if (apiData === null) {
//       return;
//     }

//     // If formData has values and the button has been clicked, make the API call
//     if (formData.url && formData.endpoint) {
//       makeApiCall();
//     }
//   }, [apiData, formData]);

//   const makeApiCall = async () => {
//     try {
//       let apiUrl;
//       let method;
//       let bodyData;

//       const { url, endpoint } = formData;

//       switch (endpoint) {
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
//           throw new Error('Invalid endpoint');
//       }

//       const response = await fetch(apiUrl, {
//         method,
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: bodyData,
//       });

//       const data = await response.json();
//       setApiData(data);
//       console.log(data, "Thois is my api")
//     } catch (error) {
//       console.error('Error fetching data:', error);
//       setApiData({ error: `Fetching data from ${formData.endpoint} API.` });
//     }
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleGetReviews = () => {
//     setApiData(null); // Reset apiData before making the API call
//     if (formData.url && formData.endpoint) {
//       makeApiCall();
//     }
//   };

//   if (!apiData) {
//     return (
//       <div className="mt-8 bg-[#3F6884]">
//         <div className="flex flex-col items-center">
//           <label htmlFor="urlInput" className="mb-2 text-lg font-semibold">
//             Enter URL:
//           </label>
//           <input
//           placeholder='www.kfc.com'
//             type="text"
//             id="urlInput"
//             name="url"
//             value={formData.url}
//             onChange={handleChange}
//             className="p-2 border border-gray-300 rounded-md"
//           />

//           <div className="mt-4 mb-8">
//             <label htmlFor="endpointSelect" className="text-lg font-semibold">
//               Select Endpoint:
//             </label>
//             <select
//               id="endpointSelect"
//               name="endpoint"
//               value={formData.endpoint}
//               onChange={handleChange}
//               className="ml-2 p-2 border border-gray-300 rounded-md"
//             >
//               <option value="booking">Booking API</option>
//               <option value="trustpilot">Trustpilot API</option>
//               <option value="google">Google API</option>
//             </select>
//             <button
//               type="button"
//               className="ml-2 p-2 bg-blue-500 text-white rounded-md"
//               onClick={handleGetReviews}
//               disabled={!formData.endpoint}
//             >
//               Get Reviews
//             </button>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   // Extracting data from the API response
//   const { star_count, score } = apiData;

//   // Data for Pie Chart
//   // const pieChartData = {
//   //   labels: ['Positive', 'Neutral', 'Negative'],
//   //   datasets: [{
//   //     data: [star_count["5"], star_count["3"] || 0, star_count["1"] + star_count["2"] || 0],
//   //     backgroundColor: ['#009245', '#1BFFFF', '#FF5733'],
//   //     hoverBackgroundColor: ['#38EF7D', '#2E3192', '#FF4500']
//   //   }]
//   // };

//   const pieChartData = {
//     labels: ['Positive', 'Neutral', 'Negative'],
//     datasets: [{
//       data: [
//         star_count?.["5"] || 0,
//         star_count?.["3"] || 0,
//         (star_count?.["1"] || 0) + (star_count?.["2"] || 0)
//       ],
//       backgroundColor: ['#009245', '#1BFFFF', '#FF5733'],
//       hoverBackgroundColor: ['#38EF7D', '#2E3192', '#FF4500']
//     }]
//   };


//   // Data for Bar Chart
//   const barChartData = {
//     labels: ['Positive', 'Neutral', 'Negative'],
//     datasets: [{
//       label: 'Review Counts',
//       backgroundColor: ['#4CAF50', '#FFC107', '#FF5733'],
//       borderColor: 'rgba(0,0,0,1)',
//       borderWidth: 1,
//       data: [star_count["5"], star_count["3"] || 0, star_count["1"] + star_count["2"] || 0]
//     }]
//   };

//   // Map scores to emojis
//   const scoreEmojis = score.map(s => {
//     if (s >= 0.7) {
//       return '😄'; // Happy
//     } else if (s >= 0.5) {
//       return '😐'; // Neutral
//     } else {
//       return '😞'; // Sad
//     }
//   });

//   const getStarRating = (star) => {
//     const numStars = parseInt(star, 10);

//     return (
//       <div>
//         {[...Array(numStars)].map((_, index) => (
//           <span key={index} role="img" aria-label="Filled Star">
//             ⭐️
//           </span>
//         ))}
//       </div>
//     );
//   };

//   return (
//     <div className="mt-8 bg-[#3F6884]">
//       {/* Pie Chart */}
//       <div className="w-1/2 mx-auto">
//         <h2 className="text-center text-xl font-bold mb-4">Pie Chart</h2>
//         <Pie data={pieChartData} />
//       </div>

//       {/* Bar Chart */}
//       <div className="w-1/2 mx-auto mt-8">
//         <h2 className="text-center text-xl font-bold mb-4">Bar Chart</h2>
//         <Bar data={barChartData} />
//       </div>

//       {/* Display Details and Reviews */}
//       <div className="mt-8">
//         <h2 className="text-center text-xl font-bold mb-4">Details and Reviews</h2>
//         {apiData.reviews.map((review, index) => (
//           <div key={index} className="mb-4">
//             <p className="font-bold">Review:</p>
//             <p>{review}</p>
//           </div>
//         ))}
//       </div>


//       {/* Display Stars */}
//       <div>
//         {apiData.stars && apiData.stars.length > 0 ? (
//           <div>
//             <p className="mb-2 text-lg font-semibold">Stars:</p>
//             {apiData.stars.map((star, index) => (
//               <div key={index} className="mb-4">
//                 <p className="font-semibold">Stars: {star}</p>
//                 <p>{getStarRating(star)}</p>
//               </div>
//             ))}
//           </div>
//         ) : (
//           <p>No stars available</p>
//         )}
//       </div>

//       {/* Display Emojis based on Scores */}
//       <div className="mt-8">
//         <h2 className="text-center text-xl font-bold mb-4">Emojis based on Scores</h2>
//         {scoreEmojis.map((emoji, index) => (
//           <div key={index} className="mb-2">
//             {emoji}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Charts;


import React, { useEffect, useState } from 'react';
import { Pie, Bar } from 'react-chartjs-2';
import 'chart.js/auto';
import "./PieChart.css"

const Charts = () => {
  const [formData, setFormData] = useState({
    name: '',
    endpoint: 'trustpilot', // Default endpoint set to 'trustpilot'
  });

  const [apiData, setApiData] = useState(null);
  const [loading, setLoading] = useState(false); // New state for loading
  const [getReviewsClicked, setGetReviewsClicked] = useState(false);

  useEffect(() => {
    // Only make API call if name is provided and button is clicked
    if (formData.name && getReviewsClicked) {
      makeApiCall();
    }
  }, [formData.name, getReviewsClicked]); 

  const makeApiCall = async () => {
    try {
      setLoading(true); // Set loading to true when making the API call

      let apiUrl;
      let method;
      let bodyData;

      const { name } = formData;
      // apiUrl ='https://jnjd8s9d-8000.euw.devtunnels.ms/scrape_trustpilot/';
      apiUrl = 'http://16.170.240.231:8000/scrape_trustpilot/';
      method = 'POST';
      bodyData = JSON.stringify({ name });

      const response = await fetch(apiUrl, {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: bodyData,
      });

      const data = await response.json();
      setApiData(data);
      console.log(data, "This is my api");
    } catch (error) {
      console.error('Error fetching data:', error);
      setApiData({ error: `Error Fetching data.` });
    } finally {
      setLoading(false); // Reset loading to false after fetching data
      setGetReviewsClicked(false); 
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleGetReviews = () => {
    // Reset apiData before making the API call
    setApiData(null);

    // Check if name is provided before making the API call
    if (formData.name) {
      setGetReviewsClicked(true); // Set button click state
    }
  };



  if (loading) {
    // Show loader while reviews are being fetched
    return (
      <div className="flex flex-col justify-center items-center h-screen">
        <div className="loader"></div>
        <div className='my-4 font-bold'>Loading...</div>
        <div className='font-bold'>Please Wait...</div>
      </div>
    );
  }

  if (!apiData || apiData.error) {
    return (
      <div className="py-4 h-screen">
        <div className="flex flex-col items-center">
          <label htmlFor="urlInput" className="mb-2 text-lg font-semibold">
            Enter URL:
          </label>
          <input
            placeholder='www.xyz.com or xyz.com'
            type="text"
            id="urlInput"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="p-2 border w-full max-w-[500px] border-gray-300 rounded-md"
          />
  
          <button
            type="button"
            className="mt-4 p-2 bg-blue-500 rounded-md"
            onClick={handleGetReviews}
            disabled={!formData.name}
          >
            Get Reviews
          </button>
  
          {apiData && apiData.error && <p className="text-red-500 mt-2">{apiData.error}</p>}
        </div>
      </div>
    );
  }

  // Check if the necessary data is available for reviews
  if (apiData && apiData.reviews && apiData.stars && apiData.score)  {
    // Extracting data from the API response
    const { star_count } = apiData;

    const pieChartData = {
      labels: ['Positive', 'Neutral', 'Negative'],
      datasets: [{
        data: [
          (star_count?.["5"] || 0) + (star_count?.["4"] || 0),
          star_count?.["3"] || 0,
          (star_count?.["1"] || 0) + (star_count?.["2"] || 0)
        ],
        backgroundColor: ['#009245', '#1BFFFF', '#FF5733'],
        hoverBackgroundColor: ['#38EF7D', '#2E3192', '#FF4500']
      }]
    };

    const barChartData = {
      labels: ['Positive', 'Neutral', 'Negative'],
      datasets: [{
        label: 'Review Counts',
        backgroundColor: ['#4CAF50', '#FFC107', '#FF5733'],
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 1,
        data: [(star_count["5"] || 0) + (star_count["4"] || 0), star_count["3"] || 0, star_count["1"] + star_count["2"] || 0]
      }]
    };

    const getEmojiForScore = (stars) => {
      if (stars >= 4) {
        return '😄'; // Happy
      } else if (stars >= 3) {
        return '😐'; // Neutral
      } else {
        return '😞'; // Sad
      }
    };

    const getStarRating = (star) => {
      const numStars = parseInt(star, 10);

      return (
        <div>
          {[...Array(numStars)].map((_, index) => (
            <span key={index} role="img" aria-label="Filled Star">
              ⭐️
            </span>
          ))}
        </div>
      );
    };

    return (
      <div className="mt-8">
        <div className="w-1/2 mx-auto">
          <h2 className="text-center text-xl font-bold mb-4">Pie Chart</h2>
          <Pie data={pieChartData} />
        </div>

        <div className="w-1/2 mx-auto mt-8">
          <h2 className="text-center text-xl font-bold mb-4">Bar Chart</h2>
          <Bar data={barChartData} />
        </div>

        <div className="mt-8">
          <h2 className="text-center text-xl font-bold mb-4">Details and Reviews</h2>
          {apiData.reviews.map((review, index) => (
            <div key={index} className="mb-4 container px-3">
              <p className="font-bold">Review:</p>
              <p>{review}</p>

              {apiData.stars && apiData.stars.length > index && (
                <div className="mt-2">
                  <p className="font-semibold">Stars: {apiData.stars[index]}</p>
                  {getStarRating(apiData.stars[index])}
                  <p className="font-semibold">{getEmojiForScore(apiData.stars[index])}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  }

  // If reviews data is not available, you can return a placeholder or handle accordingly
  return (
    <div className="py-4 h-screen">
      <p>Error: Reviews data not available.</p>
    </div>
  );
};

export default Charts;

