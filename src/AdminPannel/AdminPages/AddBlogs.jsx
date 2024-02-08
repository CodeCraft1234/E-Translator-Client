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
    <div className="min-h-screen flex items-center justify-center p-10">
      <div className="bg-emerald-400 p-8 rounded-lg shadow-xl w-96">
        <h2 className="text-2xl font-bold mb-4">Add your Blogs</h2>
        <form onSubmit={handleSubmit} action="#" method="post">
          <label htmlFor="title" className="block font-bold mb-1">
            Title:
          </label>
          <input
            type="text"
            id="title"
            name="title"
            className="w-full p-2 mb-4 border rounded"
            required
          />

          <label htmlFor="description" className="block font-bold mb-1">
            Description:
          </label>
          <textarea
            id="description"
            name="description"
            rows="4"
            className="w-full p-2 mb-4 border rounded"
            required
          ></textarea>

          <label htmlFor="image" className="block font-bold mb-1">
            Image Upload:
          </label>
          <input
            type="file"
            id="image"
            name="image"
            onChange={handleImageChange}
            className="w-full p-2 mb-4 border rounded"
            accept="image/*"
            required
          />

          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddBlogs;

