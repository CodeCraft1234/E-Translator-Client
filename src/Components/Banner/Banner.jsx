import img1 from "../../assets/415877263_437231245391700_6340538220268059695_n.png";

const Banner = () => {
  return (
    <div>
      <section className=" mt-10 lg:mt-0 md:mt-10">
        <div className="container flex flex-col  justify-center  mx-auto sm:py-12 lg:py-24 lg:flex-row md:flex-row lg:justify-between">
          <div className="flex flex-col justify-center text-center rounded-sm lg:max-w-md md:max-w-xs xl:max-w-lg lg:text-left">
            <h1 className="lg:text-5xl md:text-3xl text-3xl font-extrabold sm:text-6xl ">
              Decode
              <span className=""> the World of Words </span>
            </h1>
            <p className="mt-6 mb-8 text-lg sm:mb-12 ">
              Explore global communication without limits.
              <br className="hidden md:inline lg:hidden" />
              Seamlessly translate languages, unlocking a world of words at your
              fingertips.
            </p>
            <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
              <button className="btn  btn-outline border-0 border-[#d926a9] hover:bg-[#d926a9] hover:border-[#d926a9] border-b-4 hover:text-white">
                Lets Translate
              </button>
              <button className="btn  btn-outline border-0 border-[#d926a9] hover:bg-[#d926a9] hover:border-[#d926a9] border-b-4 hover:text-white">
                Explore Us
              </button>
            </div>
          </div>
          <div className="flex items-center justify-center mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
            <img
              src={img1}
              alt=""
              className="object-contain h-72 sm:h-80 lg:h-[420px] w-[400px] xl:h-112 2xl:h-128"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
