/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import UseAxiosPublic from "../../Axios/UseAxiosPublic";
import UseAxiosSecure from "../../Axios/UseAxiosSecure";

const AddBlogs = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const image_hosting_key = "6fbc3358bbb1a92b78e2dee0f5ca1b94";
  const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
  const AxiosPublic = UseAxiosPublic();
  const AxiosSecure = UseAxiosSecure();

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("Title:", title);
    console.log("Description:", description);
    console.log("Image:", image);

    // Upload image
    const images = { image: image };
    const res = await AxiosPublic.post(image_hosting_api, images, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    const photo = res.data.data.display_url;
    console.log(photo);

    // Prepare blog info
    const date = new Date();
    const blogInfo = { title, description, photo, date };
    console.log(blogInfo);

    // Post blog to the server
    AxiosSecure.post("/blogs", blogInfo).then((res) => console.log(res.data));

    // Reset the form
    setTitle("");
    setDescription("");
    setImage(null);
  };

  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    setImage(selectedImage);
  };

  return (
    <div className="min-h-screen  bg-gradient-to-r from-[#1e1b4b] via-indigo-800 to-[#1e1b4b] flex items-center justify-center p-10 overflow-x-hidden">
      <div className="bg-teal-800 p-8 rounded-lg shadow-xl w-96">
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
            value={title}
            onChange={(e) => setTitle(e.target.value)}
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
            value={description}
            onChange={(e) => setDescription(e.target.value)}
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
