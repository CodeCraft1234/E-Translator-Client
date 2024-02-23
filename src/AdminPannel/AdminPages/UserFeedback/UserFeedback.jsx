/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import UseAxiosSecure from '../../../Axios/UseAxiosSecure';

const UserFeedback = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const AxiosSecure = UseAxiosSecure();

  const handleDelete = async (id) => {
    try {
      await AxiosSecure.delete(`/feedback/${id}`);
      setFeedbacks((prevFeedbacks) => prevFeedbacks.filter((feedback) => feedback.id !== id));
    } catch (error) {
      console.error('Error deleting feedback:', error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await AxiosSecure.get('/feedback');
        setFeedbacks(response.data);
      } catch (error) {
        console.error('Error fetching feedbacks:', error);
      }
    };

    fetchData();
  }, [AxiosSecure]);

  return (
    <div className="hero min-h-screen px-24 bg-gradient-to-r from-[#1e1b4b] via-indigo-800 to-[#1e1b4b]">
      <div className="container mx-auto p-4">
        <h1 className="text-4xl text-white font-bold mb-8">Users Feedbacks</h1>
        {feedbacks?.map((feedback) => (
          <div key={feedback._id} className="border  mb-4  bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-1 shadow-xl transition hover:bg-[length:400%_400%]  rounded-lg">
            <div className='bg-[#031321] p-4 text-white'>
            <h2 className="text-2xl font-bold mb-2">{feedback.name}</h2>
            <p className="py-2">{feedback.feedback}</p>
            <button
              className="b bg-cyan-950 rounded-md"
              onClick={() => handleDelete(feedback.id)}
            >
              Delete 
            </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserFeedback;

