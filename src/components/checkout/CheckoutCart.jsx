const CheckoutCart = ({ data }) => {
  const { totalPrice, image, title, price } = data;
  return (
    <div className="flex flex-col bg-white rounded-lg sm:flex-row">
      <img
        className="object-contain object-center h-24 m-2 border rounded-md w-28"
        src={image}
        alt={title}
      />
      <div className="flex flex-col w-full px-4 py-4">
        <span className="font-semibold">{title}</span>
        <span className="float-right text-gray-400">42EU - 8.5US</span>
        <p className="mt-auto text-lg font-bold">
          &#8377; {totalPrice || price}
        </p>
      </div>
    </div>
  );
};

export default CheckoutCart;
