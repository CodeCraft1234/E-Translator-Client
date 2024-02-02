import { useParams } from "react-router-dom";
import Swal from "sweetalert2";

const Checkout = () => {
  const { id } = useParams();

  const handleAddProduct = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const address = form.address.value;
    const price = form.price.value;
    const postcode = form.postcode.value;
    const phonenumber = form.phonenumber.value;
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
        window.location.replace(data.url);
        console.log(data);
        data.productId = id;

        if (data.insertedId) {
          Swal.fire({
            title: "success",
            text: "Payment Process Successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };

  return (
    <div className="mt-16 hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse py-10">
        <div className="card flex-shrink-0 max-w-sm shadow-2xl bg-base-100 border">
          <form onSubmit={handleAddProduct} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="name"
                className="input input-bordered "
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
                className="input input-bordered "
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
                className="input input-bordered "
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
                className="input input-bordered"
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
                className="input input-bordered"
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

        <div className="card bg-white shadow-2xl border">
          <div className="card-body">
            <div className="flex gap-2">
              <img
                className="w-[80px] h-[40px] border p-1 hover:transform hover:scale-105 transition-transform"
                src="https://i.ibb.co/3h08NbR/kisspng-mastercard-logo-credit-card-maestro-payment-card-mastercard-mastercard-logo-design-vector-fr.png"
                alt=""
              />
              <img
                className="w-[80px] h-[40px] border p-1 hover:transform hover:scale-105 transition-transform"
                src="https://i.ibb.co/LngVTp0/visa-logo-png-transparent.png"
                alt=""
              />
              <img
                className="w-[80px] h-[40px] border p-1 hover:transform hover:scale-105 transition-transform"
                src="https://i.ibb.co/QCbXnYp/downloaddbbl-removebg-preview.png"
                alt=""
              />
              <img
                className="w-[80px] h-[40px] border p-1 hover:transform hover:scale-105 transition-transform"
                src="https://i.ibb.co/N683FZC/bkash-logo-250-D6142-D9-seeklogo-com.png"
                alt=""
              />
              <img
                className="w-[80px] h-[40px] border p-1 hover:transform hover:scale-105 transition-transform"
                src="https://i.ibb.co/stVJPdt/rocket.png"
                alt=""
              />
            </div>

            <div className="flex items-center gap-8">
              <div className="flex items-center mt-10">
                <img
                  className="w-[210px] h-[150px]"
                  src="https://i.ibb.co/ZJNBd4K/kisspng-logo-mastercard-pentagram-flat-design-brand-5b6806c4a2a674-6261668415335441326662-removebg-p.png"
                  alt=""
                />
                <div>
                  <span className="border-2 py-12"></span>
                </div>
              </div>
              <div className="mt-14">
                <img
                  className="w-[140px] h-[90px]"
                  src="https://i.ibb.co/N683FZC/bkash-logo-250-D6142-D9-seeklogo-com.png"
                  alt=""
                />
              </div>
            </div>
            <div className="bg-[#006bcb] p-2 rounded-s-2xl rounded-e-2xl text-white">
              <h2 className="text-center text-2xl font-bold tracking-wider font-serif">
                sslcommerz
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
