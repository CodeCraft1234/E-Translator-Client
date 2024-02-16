/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import UseAxiosSecure from '../../Axios/UseAxiosSecure';

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
    <div className="hero min-h-screen bg-base-200">
      <div className="container mx-auto p-4">
        <h1 className="text-4xl font-bold mb-8">Users Feedbacks</h1>
        {feedbacks?.map((feedback) => (
          <div key={feedback.id} className="border p-4 mb-4 bg-white rounded-lg">
            <h2 className="text-2xl font-bold mb-2">{feedback.name}</h2>
            <p className="py-2">{feedback.feedback}</p>
            <button
              className="bg-red-500 text-white px-4 py-2 mt-2 rounded-md"
              onClick={() => handleDelete(feedback.id)}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserFeedback;

