import "./Review.css";
const Review = () => {
  return (
    <div className="testimonials mt-4">
      <div className="testimonial-inner">
        <h1 className="text-4xl hover:text-blue-500">Client Review</h1>
        <div className="border"></div>

        <div className="flex flex-wrap justify-center">
          <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
            <div className="testimonial">
              <img
                src="https://images.pexels.com/photos/3211476/pexels-photo-3211476.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt=""
                className="rounded-full"
              />
              <div className="name text-red-500">Mosaddek Ali</div>
              <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <p className="text-blue-500">
                "I recently started using the online language translator, and it has exceeded my expectations. The interface is user-friendly, making it easy to navigate. I appreciate the accuracy of the translations especially for complex phrases and sentences."
              </p>
            </div>
          </div>

          <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
            <div className="testimonial">
              <img
                src="https://images.pexels.com/photos/3585325/pexels-photo-3585325.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt=""
                className="rounded-full"
              />
              <div className="name text-red-500">Sara Begum</div>
              <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="far fa-star"></i>
              </div>
              <p className="text-blue-500">
                "My experience with the online language translator has been decent so far. The basic translation services work well for everyday use, and the browser extension is handy. However, I encountered a few glitches when dealing with less common language pairs."
              </p>
            </div>
          </div>

          <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
            <div className="testimonial">
              <img
                src="https://images.pexels.com/photos/2690323/pexels-photo-2690323.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt=""
                className="rounded-full"
              />
              <div className="name text-red-500">Aklima Khatun</div>
              <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <p className="text-blue-500">
                "I've been using the online language translator platform for a few months now, and it has truly transformed the way I interact with content in different languages. From the moment I started
                using it, the platform has consistently delivered exceptional results."
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
