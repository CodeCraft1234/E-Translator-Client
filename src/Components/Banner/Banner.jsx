import React from 'react';
import img1 from "../../assets/415877263_437231245391700_6340538220268059695_n.png"

const Banner = () => {
    return (

        <div className='bg-violet-200'>
            <section className="dark:bg-gray-800 dark:text-gray-100">
                <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
                    <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                        <h1 className="text-5xl font-extrabold leadi sm:text-6xl"> Decode
                            <span className="dark:text-violet-400"> the World of Words </span>
                        </h1>
                        <p className="mt-6 mb-8 text-lg sm:mb-12">Explore global communication without limits. 
                            <br className="hidden md:inline lg:hidden"/>Seamlessly translate languages, unlocking a world of words at your fingertips.
                        </p>
                        <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                            <button className="btn-primary rounded-md px-3 py-3">Lets Translate</button>
                            <button className="btn-primary  rounded-md px-3 py-3">Explore Us</button>
                           
                        </div>
                    </div>
                    <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                        <img src={img1} alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Banner;