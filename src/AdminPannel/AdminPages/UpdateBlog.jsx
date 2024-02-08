import { useLoaderData } from "react-router-dom";
import UseAxiosSecure from "../../Axios/UseAxiosSecure";
import Swal from "sweetalert2";



const UpdateBlog = () => {
  const blog=useLoaderData()
  console.log(blog)
  const AxiosSecure=UseAxiosSecure()

const handleupdate=(e)=>{
  console.log('ihsjkafgss')
  e.preventDefault()
const title=e.target.title.value
const description=e.target.description.value
console.log(title,description)
const body={title,description}
AxiosSecure.patch(`/blogs/${blog._id}`,body)
.then(res=>{
  Swal.fire({
    title: "updated!",
    text: "This blog has been updated.",
    icon: "success"
  });
  console.log(res.data)      
  })
}
    return (
        <div>
             <div className="min-h-screen flex items-center justify-center p-10">
      <div className="bg-emerald-400 p-8 rounded-lg shadow-xl w-96">
        <h2 className="text-2xl font-bold mb-4">Update your Blogs</h2>
        <form onSubmit={handleupdate} >
          <label className="block font-bold mb-1">
            Title:
          </label>
          <input
            type="text"
            name="title"
            defaultValue={blog.title}
            className="w-full p-2 mb-4 border rounded"
            required
          />

          <label  className="block font-bold mb-1">
            Description:
          </label>
          <textarea
            name="description"
            rows="4"
            className="w-full p-2 mb-4 border rounded"
            required
            defaultValue={blog.description}
          ></textarea>

          <label htmlFor="image" className="block font-bold mb-1">
            Image Upload:
          </label>
          <input
            type="file"
            id="image"
            name="image"
           defaultValue={blog.image}
            className="w-full p-2 mb-4 border rounded"
            accept="image/*"
           
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