// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { FaStar } from 'react-icons/fa';

// const Reviews = () => {
//   const [googleReviews, setGoogleReviews] = useState([]);
//   const [facebookReviews, setFacebookReviews] = useState([]);

//   useEffect(() => {
//     // Fetch Google Reviews
//     axios.get('YOUR_GOOGLE_API_ENDPOINT')
//       .then(response => {
//         setGoogleReviews(response.data.reviews);
//       })
//       .catch(error => {
//         console.error('Error fetching Google reviews:', error);
//       });

//     // Fetch Facebook Reviews
//     axios.get('YOUR_FACEBOOK_API_ENDPOINT')
//       .then(response => {
//         setFacebookReviews(response.data.reviews);
//       })
//       .catch(error => {
//         console.error('Error fetching Facebook reviews:', error);
//       });
//   }, []); // Empty dependency array ensures that the effect runs once on component mount

//   const renderStars = (rating) => {
//     const stars = [];
//     for (let i = 1; i <= 5; i++) {
//       const starColor = i <= rating ? '#ffd700' : '#e4e5e9';
//       stars.push(<FaStar key={i} color={starColor} />);
//     }
//     return stars;
//   };

//   return (
//     <div className="p-4">
//       <div className="mb-4">
//         <h2 className="text-2xl font-bold mb-2">Google Reviews</h2>
//         <ul>
//           {googleReviews.map((review, index) => (
//             <li key={index} className="cursor-pointer" onClick={() => window.open(review.link, '_blank')}>
//               <p>{review.text}</p>
//               <div className="flex mt-2">
//                 {renderStars(review.rating)}
//                 <span className="ml-2">{review.rating}</span>
//               </div>
//             </li>
//           ))}
//         </ul>
//       </div>

//       <div>
//         <h2 className="text-2xl font-bold mb-2">Facebook Reviews</h2>
//         <ul>
//           {facebookReviews.map((review, index) => (
//             <li key={index} className="cursor-pointer" onClick={() => window.open(review.link, '_blank')}>
//               <p>{review.text}</p>
//               <div className="flex mt-2">
//                 {renderStars(review.rating)}
//                 <span className="ml-2">{review.rating}</span>
//               </div>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Reviews;


import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { fbLogo, googleLogo } from '../../assets';

const ReviewCard = () => {
  // Dummy data for Google Reviews
  const googleReviewsData = [
    {
      rating: 5,
      text: 'Excellent service! Highly recommended.',
      link: 'https://www.google.com/review1',
    },
    {
      rating: 4,
      text: 'Great experience. Will visit again.',
      link: 'https://www.google.com/review2',
    },
    {
      rating: 3,
      text: 'Good service, but room for improvement.',
      link: 'https://www.google.com/review3',
    },
  ];

  // Dummy data for Facebook Reviews
  const facebookReviewsData = [
    {
      rating: 5,
      text: 'Amazing place! Loved it!',
      link: 'https://www.facebook.com/review1',
    },
    {
      rating: 2,
      text: 'Not satisfied with the service.',
      link: 'https://www.facebook.com/review2',
    },
    {
      rating: 4,
      text: 'Good experience overall.',
      link: 'https://www.facebook.com/review3',
    },
  ];

  const [showAllGoogleReviews, setShowAllGoogleReviews] = useState(false);
  const [showAllFacebookReviews, setShowAllFacebookReviews] = useState(false);

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      const starColor = i <= rating ? '#ffd700' : '#e4e5e9';
      stars.push(<FaStar key={i} color={starColor} />);
    }
    return stars;
  };

  const renderReviewList = (reviews, showAll, toggleShowAll) => {
    return (
      <div>
        <ul>
          {reviews.slice(0, showAll ? reviews.length : 1).map((review, index) => (
            <li key={index} className="cursor-pointer" onClick={() => window.open(review.link, '_blank')}>
              <div className="flex mt-2">
                {renderStars(review.rating)}
              </div>
              <p>{review.text}</p>
            </li>
          ))}
        </ul>
        {!showAll && (
          <button
            className="text-blue-500 hover:underline mt-2 cursor-pointer"
            onClick={() => toggleShowAll(!showAll)}
          >
            Show all reviews
          </button>
        )}
      </div>
    );
  };

  return (
    <div className="p-4">
      <div className="mb-4 flex gap-4">
        <img src={googleLogo} alt="googlelogo" className='h-10 w-10'/>
        {renderReviewList(googleReviewsData, showAllGoogleReviews, setShowAllGoogleReviews)}
      </div>

      <div className="mb-4 flex gap-4">
        <img src={fbLogo} alt="googlelogo" className='h-10 w-10'/>
        {renderReviewList(facebookReviewsData, showAllFacebookReviews, setShowAllFacebookReviews)}
      </div>
    </div>
  );
};

export default ReviewCard;

