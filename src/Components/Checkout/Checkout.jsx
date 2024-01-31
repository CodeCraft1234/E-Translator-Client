

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
      </div>
    </div>
  );
};

export default Checkout;
