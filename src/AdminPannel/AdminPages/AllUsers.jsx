import UseUsers from "../../AxiosFetch/UseUsers";


const AllUsers = () => {
  const [users]=UseUsers()
  console.log(users)
    return (
        <div className="">
          {
            users.map(user=>  <article key={user._id}
              className="hover:animate-background mx-auto w-[800px] mt-5 rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s]"
            >
              <div className="rounded-[10px] bg-white grid grid-cols-3 justify-center  items-center p-4  sm:p-6">
                {/* <time datetime="2022-10-10" className="block text-xs text-gray-500"> 10th Oct 2022 </time> */}
                <div className="flex justify-start items-center gap-5">
                <div className="mask mask-squircle w-16 h-16">
                            <img src={user.photo} alt="Avatar Tailwind CSS Component" />
                           
                          </div>
                          <p>{user.name}</p>
                </div>
            
                <a href="#">
                  <h3 className="mt-0.5 text-lg font-medium text-gray-900">
                  {user.email}
                  </h3>
                </a>
            
                <div className="mt-4 flex justify-center items-center gap-5">
                  <span
                    className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600"
                  >
                    <button className="btn  btn-outline border-0 border-[##2b3440] hover:bg-[#2b3440] hover:border-[#2b3440] border-b-4 hover:text-white">
                              Make Admin
                            </button>
                  </span>
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