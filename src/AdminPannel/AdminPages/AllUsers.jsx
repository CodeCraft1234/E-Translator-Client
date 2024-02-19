import Swal from "sweetalert2";
import UseAxiosSecure from "../../Axios/UseAxiosSecure";
import UseUsers from "../../AxiosFetch/UseUsers";


const AllUsers = () => {
  const [users,refetch]=UseUsers()
  const AxiosSecure=UseAxiosSecure()
  console.log(users)

  const handleMakeAdmin=(id)=>{
    AxiosSecure.patch(`/users/${id}`).then(res=>{
      console.log(res.data)
      refetch()
    })
  }

  const handleDelete =(id)=>{
    console.log(id)
    Swal.fire({
      title: "Are you sure?",
      text: "You want to delete this user!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete user"
    })
    .then(res=>{
      console.log(res.data)
      AxiosSecure.delete(`/users/${id}`).then(res=>{
        console.log(res.data)
        refetch()
        if(res.data.deletedCount>0){
          Swal.fire({
              title: "deleted!",
              text: "Your file has been deleted.",
              icon: "success"
            });
      }
      })
    })
  
    
  }
    return (
        <div className="min-h-screen text-white bg-gradient-to-r from-[#1e1b4b] via-indigo-800 py-6 to-[#1e1b4b]">
          {
            users.map(user=>  <article key={user._id}
              className="hover:animate-background overflow-hidden mx-auto w-[800px] mt-6  rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s]"
            >
              <div className="rounded-[10px] text-white bg-[#031321] grid grid-cols-3 justify-center  items-center p-4  sm:p-6">
                {/* <time datetime="2022-10-10" className="block text-xs text-gray-500"> 10th Oct 2022 </time> */}
                <div className="flex justify-start items-center gap-5">
                <div className="mask mask-squircle w-16 h-16">
                            <img src={user.photo} alt="Avatar Tailwind CSS Component" />
                           
                          </div>
                          <p>{user.name}</p>
                </div>
            
                <a href="#">
                  <h3 className="mt-0.5 text-lg font-medium ">
                  {user.email}
                  </h3>
                </a>
            
                <div className="mt-4 flex justify-center items-center gap-5">
                <button onClick={()=>handleMakeAdmin(user._id)} className="bg-indigo-950 border-b-2 rounded-lg">
             <a className="b" >
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              {user?.admin===false ? "Make Admin" : "Admin" }
              </a>
             </button>
                <button onClick={()=>handleDelete(user._id)} className="bg-indigo-950 inline-block border-b-2 rounded-lg">
             <a className="b" >
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Delete User
              </a>
             </button>
                 
                    
                  


                    {/* <button  className="btn  btn-outline border-0 border-[##2b3440] hover:bg-[#2b3440] hover:border-[#2b3440] border-b-4 hover:text-white">
                             
                              
                            </button> */}
                 
                  {/* <span
                    className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600"
                  >
                    <button  className="btn  btn-outline border-0 border-[##2b3440] hover:bg-[#2b3440] hover:border-[#2b3440] border-b-4 hover:text-white">
                              Delete User
                            </button>
                  </span> */}
                  {/* <span
                    className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600"
                  >
                    <button className="btn  btn-outline border-0 border-[##2b3440] hover:bg-[#2b3440] hover:border-[#2b3440] border-b-4 hover:text-white">
                              Category
                            </button>
                  </span> */}
            
                 
                </div>
              </div>
            </article>)
          }
        </div>
    );
};

export default AllUsers;