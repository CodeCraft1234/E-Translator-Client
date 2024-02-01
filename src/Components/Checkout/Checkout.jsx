import { useParams } from "react-router-dom";

import Swal from "sweetalert2";

const Checkout = () => {

const {id} = useParams();

  const handleAddProduct = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const address = form.address.value;
    const price = form.price.value;
    const postcode = form.postcode.value;
    const phonenumber = form.phonenumber.value;

    //product checkout page added in the server side
    const product = {
      name,
      address,
      price,
      postcode,
      phonenumber,
    };

    console.log(product);
    fetch(`http://localhost:5000/order/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        data.productId = id;
      
        if (data.insertedId) {
          Swal.fire({
            title: "success",
            text: "Payment Process Successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
          //   useNavigate("/");
        }
      });
  };

  return (
    <div>
      <div className="mt-16 hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleAddProduct} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="name"
                  className="input input-bordered text-black"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Address</span>
                </label>
                <input
                  type="text"
                  name="address"
                  placeholder="address"
                  className="input input-bordered text-black"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Price</span>
                </label>
                <input
                  type="number"
                  name="price"
                  placeholder="price"
                  className="input input-bordered text-black"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Post Code</span>
                </label>
                <input
                  type="text"
                  name="postcode"
                  pattern="[0-9]{4}"
                  placeholder="Enter 5-digit zip code"
                  className="input input-bordered text-black"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Phone Number</span>
                </label>
                <input
                  type="tel"
                  name="phonenumber"
                  pattern="[0-9]{11}"
                  placeholder="Format: 123-456-7890"
                  className="input input-bordered text-black"
                  required
                />
              </div>

              <div className="form-control mt-6">
                <button className="btn btn-outline border-0 border-[#006bcb] hover:bg-[#006bcb] hover:border-[#006bcb] border-b-4 hover:text-whit">
                  Make Payment
                </button>
              </div>
            </form>
          </div>
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
