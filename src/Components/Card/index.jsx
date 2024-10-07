import { PlusIcon, CheckIcon } from "@heroicons/react/24/solid";
import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";

const Card = (data) => {
  const context = useContext(ShoppingCartContext);

  const showProduct = (productDetail) => {
    context.openProductDetail();
    context.setIsproductToShow(productDetail);
  };

  const addProductsToCart = (e, productDetail) => {
    e.stopPropagation();
    context.setCount(context.count + 1);
    context.setcartProducts([...context.cartProducts, productDetail]);
    context.openCheckOutSideMenu();
  };

  const renderIcon = (id) => {
    const isInCart =
      context.cartProducts.filter((product) => product.id === id).length > 0;
    if (isInCart) {
      return (
        <div className="absolute  flex justify-center items-center  rounded-full top-0 right-0 m-2 bg-black">
          <CheckIcon className="h-6 w-6 text-white " />
        </div>
      );
    } else {
      return (
        <div
          className="absolute  flex justify-center items-center  rounded-full top-0 right-0 m-2 bg-white"
          onClick={(e) => {
            addProductsToCart(e, data.data);
          }}
        >
          <PlusIcon className="h-6 w-6 text-black " />
        </div>
      );
    }
  };

  return (
    <div
      className="bg-white cursor-pointer w-56 h-60 rounded-lg select-none"
      onClick={() => showProduct(data.data)}
    >
      <figure className="relative mb-2 w-full h-4/5">
        <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5">
          {data.data.category}
        </span>
        <img
          src={data.data.image}
          alt={data.data.title}
          className="w-full h-full object-cover rounded-lg"
        />
        {renderIcon(data.data.id)}
      </figure>
      <p className="flex justify-between">
        <span className="text-sm font-light">{data.data.title}</span>
        <span className="text-lg font-medium">${data.data.price}</span>
      </p>
    </div>
  );
};

export default Card;
