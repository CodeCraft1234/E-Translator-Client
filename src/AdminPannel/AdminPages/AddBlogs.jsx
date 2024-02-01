/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import UseAxiosPublic from '../../Axios/UseAxiosPublic';
import UseAxiosSecure from '../../Axios/UseAxiosSecure';

const AddBlogs = () => {
  // State variables to store input values
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);
  const image_hosting_key = "6fbc3358bbb1a92b78e2dee0f5ca1b94";
  const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
  const AxiosPublic = UseAxiosPublic();
  const AxiosSecure=UseAxiosSecure()
  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    // You can perform any further actions with the input values here
    console.log('Title:', title);
    console.log('Description:', description);
    console.log('Image:', image);
    const images = { image:image };
    const res = await AxiosPublic.post(image_hosting_api, images, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    const photo = res.data.data.display_url;
    console.log(photo)
    const date=new Date()
    const blogInfo={title,description,photo,date}
    console.log(blogInfo)

    AxiosSecure.post('/blogs',blogInfo)
    .then(res=>console.log(res.data))


    // Reset the form
    setTitle('');
    setDescription('');
    setImage(null);
  };

  // Function to handle image upload
  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    setImage(selectedImage);
  };

  return (
    <div className="max-w-md mx-auto my-10 p-6 bg-white rounded-md shadow-md">
      <h1 className="text-2xl text-center font-semibold mb-4">Add your Blogs</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="title" className="block text-sm font-medium text-gray-600">
            Title:
          </label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block text-sm font-medium text-gray-600">
            Description:
          </label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="image" className="block text-sm font-medium text-gray-600">
            Image Upload:
          </label>
          <input
            id="image"
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddBlogs;
