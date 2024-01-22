import { useState } from 'react';

const Review = () => {
  const [testimonials, setTestimonials] = useState([
    {
      id: 1,
      name: 'Mosaddek Ali',
      image: 'https://images.pexels.com/photos/3211476/pexels-photo-3211476.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      rating: 3,
      review:
        "Anika Dental Point has been my go-to dental clinic for years. The staff is incredibly friendly, and Dr. Smith is an expert at what he does. The clinic is well-maintained, and they use the latest technology for treatments. I always feel comfortable and well taken care of during my visits.."
    },
    {
      id: 2,
      name: 'Sara Begum',
      image: 'https://images.pexels.com/photos/3585325/pexels-photo-3585325.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      rating: 3,
      review:
        "I had a fantastic experience at Anika Dental Point. The team is professional, and they take the time to explain procedures thoroughly. The clinic is clean and inviting, and the atmosphere is calming. Dr. Horkil Alom is not only skilled but also genuinely cares about the well-being of his patients."
    },
    {
      id: 3,
      name: 'Aklima Khatun',
      image: 'https://images.pexels.com/photos/2690323/pexels-photo-2690323.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      rating: 3,
      review:
        "I've been using the online language translator platform for a few months now, and it has truly transformed the way I interact with content in different languages. From the moment I started using it, the platform has consistently delivered exceptional results."
    }
  ]);

  const handleRatingChange = (testimonialId, newRating) => {
    setTestimonials((prevTestimonials) =>
      prevTestimonials.map((testimonial) =>
        testimonial.id === testimonialId ? { ...testimonial, rating: newRating } : testimonial
      )
    );
  };

  return (
    <div className="testimonials mt-4">
      <div className="testimonial-inner text-center">
        <h1 className="text-4xl hover:text-blue-500 font-bold mb-8">Client Review</h1>
        <div className="border"></div>

        <div className="grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 gap-5">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className={`px-4 mb-8 bg-base-200 py-5 shadow-xl rounded-md border ${
                testimonial.rating === 3 ? 'border-blue-500' : ''
              }`}
            >
              <div className="testimonial">
                <img src={testimonial.image} alt="" className="rounded-full w-[150px] mx-auto" />
                <div className="name text-red-500 text-xl font-semibold mt-4">{testimonial.name}</div>
                <div className="rating py-3 z-0">
                  {Array.from({ length: 5 }, (_, index) => (
                    <input
                      key={index}
                      type="radio"
                      name={`rating-${testimonial.id}`}
                      className="mask mask-star-2 bg-orange-400"
                      checked={index + 1 === testimonial.rating}
                      onClick={() => handleRatingChange(testimonial.id, index + 1)}
                    />
                  ))}
                </div>
                <p className="text-blue-500">{testimonial.review}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Review;
