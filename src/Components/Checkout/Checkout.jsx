import { MdOutlinePayment } from "react-icons/md";

const Checkout = () => {
  const months = [
    "01-January",
    "02-February",
    "03-March",
    "04-April",
    "05-May",
    "06-June",
    "07-July",
    "08-August",
    "09-September",
    "10-October",
    "11-November",
    "12-December",
  ];

  return (
    <div className="bg-[#5170ea] dark:bg-slate-800 flex items-center justify-center min-h-screen">
      <div className="flex flex-col items-center justify-center bg-base-300 p-8 rounded-lg shadow-md w-3/5 my-28">
        <div className="flex items-center justify-center mb-4 rounded-full w-[80px] h-[80px] bg-[#6366f1] text-white">
          <MdOutlinePayment size={32} />
        </div>
        <h2 className="text-2xl font-bold py-5">SECURE PAYMENT INFO</h2>

       
          <div className=" flex-0">
            <img
              className="w-[90px] h-[60px]"
              src="https://i.ibb.co/xsP6Bmd/368005893-1025931988644973-4963193154215642506-n-removebg-preview.png"
              alt=""
            />

            <img
              className="w-[90px] h-[60px]"
              src="https://i.ibb.co/qFZ1BFR/358155300-1713562929075213-4078109085611420553-n-removebg-preview.png"
              alt=""
            />
          </div>
       

        <form className="text-center">
          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold">Name on card</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="input input-bordered text-black"
              required
            />
          </div>
          <div className="form-control py-4">
            <label className="label">
              <span className="label-text font-bold">Card number</span>
            </label>
            <input
              type="number"
              name="number"
              placeholder="0000 0000 0000 0000"
              className="input input-bordered text-black"
              required
            />
          </div>

          <div className="flex gap-5">
            <div className="form-control py-4">
              <label className="label">
                <span className="label-text font-bold">Expiration date</span>
              </label>
              <div className="relative">
                <select
                  className="input input-bordered text-black w-[322px]"
                  required
                >
                  <option value="" disabled>
                    MM
                  </option>
                  {months.map((month, index) => (
                    <option key={index} value={index + 1}>
                      {month}
                    </option>
                  ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"></div>
              </div>
            </div>

            <div className="form-control py-4">
              <label className="label">
                <span className="label-text font-bold">Expiration year</span>
              </label>
              <div className="relative">
                <select
                  className="input input-bordered text-black w-[322px]"
                  required
                >
                  <option value="" disabled>
                    YYYY
                  </option>
                  {[...Array(10).keys()].map((year) => (
                    <option key={year + 2022} value={year + 2022}>
                      {year + 2022}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold">Security code</span>
            </label>
            <input
              type="text"
              name="securityCode"
              placeholder="0000"
              className="input input-bordered text-black"
              required
            />
          </div>

          <div className="mt-6">
            <button className="btn btn-outline border-0 border-[#006bcb] hover:bg-[#006bcb] hover:border-[#006bcb] border-b-4 hover:text-white">
              Make Payment
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
