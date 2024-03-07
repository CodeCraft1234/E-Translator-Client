import { Rating } from "@smastrom/react-rating";

import { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../../Security/AuthProvider";
import UseAxiosPublic from "../../Axios/UseAxiosPublic";
import toast from "react-hot-toast";

// import UseAxiosTest from '../../Axios/UseAxiosTest';
const MyRating = () => {
  const AxiosPublic = UseAxiosPublic();
  // const AxiosTest = UseAxiosTest();
  const [ratings, setRatings] = useState(
    Array(5).fill({ value: 0, clicked: false })
  );
  const { user } = useContext(AuthContext);

  const handleChange = (index) => {
    if (!ratings[index].clicked) {
      const newRatings = [...ratings];
      newRatings[index] = {
        ...newRatings[index],
        value: newRatings[index].value + 1,
        clicked: true,
      };
      setRatings(newRatings);
    }
  };
  const handleSubmit = (e) => {
    const ratingInfo = { name: user.displayName, rating: e };
    console.log(ratingInfo);
    AxiosPublic.post("/rating", ratingInfo)
      // AxiosTest.post("/rating", ratingInfo)
      .then((res) => {
        console.log(res.data);
        if (res.data.acknowledged) {
          return toast.success("rating submitted successfully");
        }
      })
      // new product created for server side here

      .catch((error) => {
        console.log(error);
        return toast.error("user doesn't exist");
      });
  };

  const totalRating = ratings.reduce((acc, { value }) => acc + value, 0);

  return (
    <div>
      <div className="grid gap-4 md:grid-cols-5 w-1/2 mx-auto rating rating-md">
        {ratings.map(({ value, clicked }, index) => (
          <Rating
            key={index}
            type="radio"
            name="rating-7"
            value={value}
            onChange={() => handleChange(index)}
            // filledSymbol={<span style={{ color: 'green' }}>&#9733;</span>}
            // name="rating-2"
            className={`mask mask-star-2 ${clicked ? "bg-green-400" : ""}`}
            style={{
              transform: clicked ? "scale(1.6)" : "scale(1.0)",
              transition: "transform 0.3s ease",
            }}
            readOnly={clicked}
            // emptySymbol={<span className="text-gray-300">&#9733;</span>}
          />
        ))}
      </div>
      <div className="flex justify-center gap-4 mx-auto mt-4">
        <button
          className="btn btn-primary"
          onClick={() =>
            setRatings(Array(5).fill({ value: 0, clicked: false }))
          }
        >
          Reset
        </button>
        <button
          className="btn btn-accent"
          onClick={() => {
            handleSubmit(totalRating);
          }}
        >
          Submit
        </button>
      </div>
      <div>
        <p className="flex justify-center gap-4 mx-auto mt-4">
          Total rating: {totalRating}/5
        </p>
      </div>
    </div>
  );
};

export default MyRating;
