
const UpdateBlog = () => {
    return (
        <div>
             <div className="min-h-screen flex items-center justify-center p-10">
      <div className="bg-emerald-400 p-8 rounded-lg shadow-xl w-96">
        <h2 className="text-2xl font-bold mb-4">Add your Blogs</h2>
        <form  action="#" method="post">
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
        </div>
    );
};

export default UpdateBlog;