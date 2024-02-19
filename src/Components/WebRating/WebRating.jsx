
// Import the CSS file for styling
import { useEffect, useState } from 'react';
import { FaStar } from 'react-icons/fa';

import UseAxiosSecure from '../../Axios/UseAxiosSecure';
// import UseAxiosPublic from '../../Axios/UseAxiosPublic';
// import ProgressBar from './ProgressBar';



const WebRating = () => {
  const [ratingHistory, setRatingHistory] = useState([]);


const AxiosSecure = UseAxiosSecure();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await AxiosSecure.get("/rating");
        // const response = await AxiosPublic.get("/rating"); // Assuming you have an endpoint to fetch user data
        // setTotalUsers(response.data.length); // Update the state with the total user count
        
        console.log(response.data);
        setRatingHistory(response.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      } finally {
        // setLoading(false);
      }
    };

    fetchData();
  // }, [AxiosPublic]);
}, [AxiosTest1]);
const calculateTotalRating = () => {
  if (ratingHistory.length === 0) {
    return 0; // or any default value you prefer when there are no ratings
  }

  return ((ratingHistory.reduce((sum, item) => sum + item.rating, 0))/ratingHistory.length).toFixed(2);
};
  return (
    <div >
      {/* <ProgressBar  label="5 Star" percentage={80} duration={1000} />
      
      <ProgressBar label="4 Star" percentage={70} duration={1000} />
      <ProgressBar label="3 Star" percentage={50} duration={1000} />
      <ProgressBar label="2 Star" percentage={30} duration={1000} />
      <ProgressBar label="1 Star" percentage={15} duration={1000} /> */}
      {/* <div className="flex ">

        <div className="stat">

          <div className="stat-title  flex ">
            <FaStar className='text-yellow-400'></FaStar>
            <FaStar className='text-yellow-400'></FaStar>
            <FaStar className='text-yellow-400'></FaStar>
            <FaStar className='text-yellow-400'></FaStar>
            <FaStar className='text-yellow-400'></FaStar>
          </div>
          <div className="font-bold text-center">31</div>

        </div>

        <div className="stat ">

          <div className="stat-title  flex ">

            <FaStar className='text-yellow-400'></FaStar>
            <FaStar className='text-yellow-400'></FaStar>
            <FaStar className='text-yellow-400'></FaStar>
            <FaStar className='text-yellow-400'></FaStar>
          </div>
          <div className="font-bold text-center">31</div>

        </div>

        <div className="stat ">

          <div className="stat-title  flex ">

            <FaStar className='text-yellow-400'></FaStar>
            <FaStar className='text-yellow-400'></FaStar>
            <FaStar className='text-yellow-400'></FaStar>

          </div>
          <div className="font-bold text-center">31</div>

        </div>
        
        <div className="stat ">
          <div className="stat-title  flex ">

            <FaStar className='text-yellow-400'></FaStar>
            <FaStar className='text-yellow-400'></FaStar>


          </div>
          <div className=" font-bold text-center">31</div>

        </div>

        <div className="stat ">
          <div className="stat-title flex ">

            <FaStar className='text-yellow-400'></FaStar>
           


          </div>
          <div className=" font-bold text-center">31</div>

        </div>

      </div> */}
      <div className="flex ">

<div className="flex">

  
  <div>
    <p>Average rating:</p>
  </div>
  
  <div className="font-bold text-center">{calculateTotalRating()}</div>
  <div className="">
    <FaStar className='text-yellow-400'></FaStar>
   
  </div>

</div>







</div>
    </div >
  );
};

export default WebRating;
