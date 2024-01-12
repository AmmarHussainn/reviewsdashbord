import React, { useState, useEffect } from 'react';
import { Bar, Doughnut } from 'react-chartjs-2';
import Sidebar from './Sidebar';
import { fbLogo, googleLogo, trustpilotLogo } from '../../assets';

const UserDashboard = () => {
    const [starCounts, setStarCounts] = useState([1, 4, 6, 8, 0]);
    const [reviews, setReviews] = useState([]);
    const numberOfReviews = reviews.length;

    const [data, setData] = useState({
        barChart: {
            labels: ['1 Star', '2 Stars', '3 Stars', '4 Stars', '5 Stars'],
            datasets: [
                {
                    label: 'Star Distribution',
                    data: Array(5).fill(0),
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.5)',
                        'rgba(255, 165, 0, 0.5)',
                        'rgba(255, 255, 0, 0.5)',
                        'rgba(0, 128, 0, 0.5)',
                        'rgba(0, 0, 255, 0.5)',
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(255, 165, 0, 1)',
                        'rgba(255, 255, 0, 1)',
                        'rgba(0, 128, 0, 1)',
                        'rgba(0, 0, 255, 1)',
                    ],
                    borderWidth: 1,
                },
            ],
        },
        pieChart: {
            labels: ['1 Star', '2 Stars', '3 Stars', '4 Stars', '5 Stars'],
            datasets: [
                {
                    data: Array(5).fill(0),
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.5)',
                        'rgba(255, 165, 0, 0.5)',
                        'rgba(255, 255, 0, 0.5)',
                        'rgba(0, 128, 0, 0.5)',
                        'rgba(0, 0, 255, 0.5)',
                    ],
                    hoverBackgroundColor: [
                        'rgba(255, 99, 132, 0.8)',
                        'rgba(255, 165, 0, 0.8)',
                        'rgba(255, 255, 0, 0.8)',
                        'rgba(0, 128, 0, 0.8)',
                        'rgba(0, 0, 255, 0.8)',
                    ],
                },
            ],
        },
    });

    useEffect(() => {
        // Replace 'your_backend_api_endpoint' with the actual URL of your backend API
        fetch('your_backend_api_endpoint')
            .then(response => response.json())
            .then(apiData => {
                setStarCounts(apiData.star_counts); // Assuming your API response has an array of star_counts
            })
            .catch(error => {
                console.error('Error fetching star counts:', error);
            });
    }, []);

    useEffect(() => {
        // Update chart data based on the received star counts
        const counts = Array(5).fill(0);
        starCounts.forEach((count, index) => {
            counts[index] = count;
        });

        setData((prevData) => ({
            ...prevData,
            barChart: {
                ...prevData.barChart,
                datasets: [
                    {
                        ...prevData.barChart.datasets[0],
                        data: counts,
                    },
                ],
            },
            pieChart: {
                ...prevData.pieChart,
                datasets: [
                    {
                        ...prevData.pieChart.datasets[0],
                        data: counts,
                    },
                ],
            },
        }));
    }, [starCounts]);

    return (
        <div className="flex">
            {/* Sidebar */}
            <div>
                <Sidebar />
            </div>

            {/* Content */}
            <div className='bg-[#F3F3F3] w-full '>

                {/* Cards */}
                <div className='flex'>
                    <div className="flex flex-col max-w-md w-[300px] h-[200px] mx-auto overflow-hidden shadow-lg px-3 py-4 my-3 rounded-md">
                        <h2 className="text-xl font-semibold mb-4">Reviews</h2>
                        <p className="text-4xl font-bold text-blue-500 mr-2">{numberOfReviews}</p>
                        <p className="text-gray-600 ">New reviews</p>
                    </div>

                    <div className="flex flex-col max-w-lg w-[300px] h-[200px] mx-auto overflow-hidden shadow-lg px-3 py-4 my-3 rounded-md">
                        <h2 className="text-xl font-semibold mb-4">Google Ratings</h2>
                        <p className="text-4xl font-bold text-black-500 mr-2">{numberOfReviews}</p>
                        <p className="text-4xl text-gray-500 mr-2 ">{numberOfReviews} reviews</p>
                        <p className="text-gray-600 ">New reviews</p>
                    </div>
                </div>


                <div className='flex'>
                    <div className="max-w-md mx-auto rounded-md overflow-hidden shadow-lg px-3 py-10 my-3">
                        <div className="flex gap-4">
                            <div>
                                <img className="h-20 w-20" src={fbLogo} alt="Your Business Logo" />
                            </div>
                            <div className='mt-2'>
                                <p className='text-gray-600 font-semibold'>New review</p>
                                <p className="mt-4 text-black-600 font-semibold">{numberOfReviews} New Facebook Reviews</p>
                            </div>
                        </div>
                    </div>

                    <div className="max-w-md mx-auto rounded-md overflow-hidden shadow-lg px-6 py-10 my-4">
                        <div className="flex gap-4">
                            <div>
                                <img className="h-20 w-20" src={googleLogo} alt="Your Business Logo" />
                            </div>
                            <div className='mt-2'>
                                <p className='text-gray-600 font-semibold'>New reviews</p>
                                <p className="mt-4 text-black-600 font-semibold">{numberOfReviews} New Google Reviews</p>
                            </div>
                        </div>
                    </div>

                    <div className="max-w-md mx-auto rounded-md overflow-hidden shadow-lg px-6 py-10 my-4">
                        <div className="flex gap-4">
                            <div>
                                <img className="h-20 w-20" src={trustpilotLogo} alt="Your Business Logo" />
                            </div>
                            <div className='mt-2'>
                                <p className='text-gray-600 font-semibold'>New review</p>
                                <p className="mt-4 text-black-600 font-semibold">{numberOfReviews} New Trustpilot Reviews</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Charts */}
                <div className="flex justify-around">
                    <div className="w-[40%] h-[400px] p-4">
                        <div className="bg-white rounded-md overflow-hidden shadow-lg p-6">
                            <h2 className="text-xl font-semibold mb-4">Bar Chart</h2>
                            <Bar data={data.barChart} />
                        </div>
                    </div>
                    <div className="w-[30%] h-[400px] p-4">
                        <div className="bg-white rounded-md overflow-hidden shadow-lg p-6">
                            <h2 className="text-xl font-semibold mb-4">Pie Chart</h2>
                            <Doughnut data={data.pieChart} />
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default UserDashboard;
