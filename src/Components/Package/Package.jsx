import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

const Package = () => {
  const plans = [
    {
      type: "basic",
      id: 1,
      name: "Basic",
      price: "Free",
      features: [
        "Text Translation",
        "Basic Language Pairs",
        "Browser Extension",
      ],
      action: (e) => {
        e.preventDefault();
        window.location.href = "/translate";
      },
    },
    {
      type: "standard",
      id: 2,
      name: "Standard",
      price: "$24",
      features: [
        "Advance Accuracy",
        "Multilingual Translation",
        "Text and Document Translation",
        "Priority Customer Support",
      ],
      action: () => {
        window.location.href = `/order/2`;
      },
    },
    {
      type: "premium",
      id: 3,
      name: "Premium",
      price: "$30",
      features: [
        "Unlimited Translation Quotes",
        "Enhanced Language Support",
        "Secure File Handling",
        "Collaboration Tools",
        "Advance Features",
      ],
      action: (e) => {
        e.preventDefault();
        window.location.href = "/order/3";
      },
    },
  ];

  return (
    <div className="mb-24 sm:pt-20 mt-36 lg:mt-0 md:mt-80">
      <div className="  dark:text-red-100">
        <div className="container mx-auto">
          <div className="max-w-2xl mx-auto mb-16 text-center">
            <h2 className="text-4xl font-bold  lg:text-5xl" data-aos="zoom-in">
              Choose your best plan
            </h2>
          </div>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
            {plans.map((plan, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 500}
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="false"
              >
                <div
                  className={`flex flex-grow flex-col p-6 space-y-6 h-[450px] rounded-md border shadow sm:p-8 dark:bg-gray-900 justify-between`}
                >
                  <div className="space-y-2">
                    <h4 className="text-2xl font-bold">{plan.name}</h4>
                    <span className="text-6xl font-bold">{plan.price}</span>
                  </div>
                  <p className="leadi dark:text-gray-400">{plan.features[0]}</p>
                  <ul className="space-y-2 dark:text-gray-400">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start space-x-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="flex-shrink-0 w-6 h-6 dark:text-violet-400"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                        <span>{feature}</span>
                      </li>
                    ))}
                    <button
                      onClick={plan.action}
                      className="bg-indigo-950 items-center flex text-center mx-auto border-b-2 rounded-lg"
                    >
                      <a className="b rounded-lg">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        Get {plan.name} Plan
                      </a>
                    </button>
                  </ul>
                  {/* <button
                    onClick={plan.action}
                    className="btn btn-outline border-0 border-[#006bcb] hover:bg-[#006bcb] hover:border-[#006bcb] border-b-4 hover:text-white"
                  >
                    Get {plan.name} Plan
                  </button> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Package;

// Trying to add mongoose

// import { Link } from "react-router-dom";

// const Package = () => {
//   const plans = [
//     {
//       type: "basic",
//       id: 1,
//       name: "Basic",
//       price: "Free",
//       features: [
//         "Text Translation",
//         "Basic Language Pairs",
//         "Browser Extension",
//       ],
//     },
//     {
//       type: "standard",
//       id: 2,
//       name: "Standard",
//       price: "$24",
//       features: [
//         "Advance Accuracy",
//         "Multilingual Translation",
//         "Text and Document Translation",
//         "Priority Customer Support",
//       ],
//     },
//     {
//       type: "premium",
//       id: 3,
//       name: "Premium",
//       price: "$24",
//       features: [
//         "Unlimited Translation Quotes",
//         "Enhanced Language Support",
//         "Secure File Handling",
//         "Collaboration Tools",
//         "Advance Features",
//       ],
//     },
//   ];

//   return (
//     <div className="">
//       <div className="py-20 dark:bg-gray-800 dark:text-red-100">
//         <div className="container mx-auto">
//           <div className="max-w-2xl mx-auto mb-16 text-center">
//             <span className="font-bold tracki uppercase dark:text-violet-400">
//               Package
//             </span>
//             <h2 className="text-4xl font-bold lg:text-5xl" data-aos="zoom-in">
//               Choose your best plan
//             </h2>
//           </div>
//           <div className="grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 gap-5">
//             {plans.map((plan, index) => (
//               <div
//                 key={index}
//                 data-aos="fade-right"
//                 data-aos-delay={index * 500}
//                 data-aos-duration="1000"
//                 data-aos-easing="ease-in-out"
//                 data-aos-mirror="true"
//                 data-aos-once="false"
//               >
//                 <div
//                   className={`flex flex-grow flex-col p-6 space-y-6 h-[450px] rounded-md border shadow sm:p-8 dark:bg-gray-900 justify-between`}
//                 >
//                   <div className="space-y-2">
//                     <h4 className="text-2xl font-bold">{plan.name}</h4>
//                     <span className="text-6xl font-bold">{plan.price}</span>
//                   </div>
//                   <p className="leadi dark:text-gray-400">{plan.features[0]}</p>
//                   <ul className="space-y-2 dark:text-gray-400">
//                     {plan.features.map((feature, i) => (
//                       <li key={i} className="flex items-start space-x-2">
//                         <svg
//                           xmlns="http://www.w3.org/2000/svg"
//                           viewBox="0 0 20 20"
//                           fill="currentColor"
//                           className="flex-shrink-0 w-6 h-6 dark:text-violet-400"
//                         >
//                           <path
//                             fillRule="evenodd"
//                             d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
//                             clipRule="evenodd"
//                           ></path>
//                         </svg>
//                         <span>{feature}</span>
//                       </li>
//                     ))}
//                   </ul>
//                   <Link
//                     to="/checkout"
//                     className="btn btn-outline border-0 border-[#006bcb] hover:bg-[#006bcb] hover:border-[#006bcb] border-b-4 hover:text-white"
//                   >
//                     Get {plan.name} Plan
//                   </Link>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Package;
