import { useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

const Review = () => {
  const [testimonials, setTestimonials] = useState([
    {
      id: 1,
      name: "Mosaddek Ali",
      image:
        "https://images.pexels.com/photos/3211476/pexels-photo-3211476.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      rating: 3,
      review:
        "Precision in translation is non-negotiable for me, and eTranslator consistently delivers. Whether it's technical documents, creative content, or casual conversations, the translations are not just accurate but retain the essence and cultural nuances.",
    },
    {
      id: 2,
      name: "Sara Begum",
      image:
        "https://images.pexels.com/photos/3585325/pexels-photo-3585325.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      rating: 3,
      review:
        "The addition of voice translation has elevated my interactions. Conversing in real-time across languages is no longer a challenge. The clarity and natural flow of voice translations are impressive, making eTranslator a communication powerhouse.",
    },
    {
      id: 3,
      name: "Aklima Khatun",
      image:
        "https://images.pexels.com/photos/2690323/pexels-photo-2690323.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      rating: 3,
      review:
        "I've been using the online language translator platform for a few months now, and it has truly transformed the way I interact with content in different languages. From the moment I started using it, the platform has consistently delivered exceptional results.",
    },
  ]);

  const handleRatingChange = (testimonialId, newRating) => {
    setTestimonials((prevTestimonials) =>
      prevTestimonials.map((testimonial) =>
        testimonial.id === testimonialId
          ? { ...testimonial, rating: newRating }
          : testimonial
      )
    );
  };

  return (
    <div className="testimonials mt-4">
      <div className="testimonial-inner text-center">
        <h1 className="text-4xl hover:text-blue-500 font-bold mb-8">
          Client Review
        </h1>
        <div className="border"></div>
        <div
          className="grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 gap-5 mt-16"
          data-aos="zoom-in"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="false"
        >
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className={`px-4 mb-8  py-5 shadow-xl rounded-md border ${
                testimonial.rating === 3
                  ? "bg-opacity-10 bg-white dark:bg-black dark:bg-opacity-10 p-8 rounded-lg shadow-md backdrop-blur-md"
                  : ""
              }`}
            >
              <div className="testimonial">
                <img
                  src={testimonial.image}
                  alt=""
                  className="rounded-full w-[150px] mx-auto"
                />
                <div className="name text-[#006bcb] text-xl font-semibold mt-4">
                  {testimonial.name}
                </div>
                <div className="rating py-3 z-0">
                  {Array.from({ length: 5 }, (_, index) => (
                    <input
                      key={index}
                      type="radio"
                      name={`rating-${testimonial.id}`}
                      className="mask mask-star-2 bg-orange-400"
                      checked={index + 1 === testimonial.rating}
                      onChange={() =>
                        handleRatingChange(testimonial.id, index + 1)
                      }
                    />
                  ))}
                </div>
                <p>{testimonial.review}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Review;
