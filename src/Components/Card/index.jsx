import { PlusIcon } from "@heroicons/react/24/solid";
import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";

const Card = (data) => {
  const context = useContext(ShoppingCartContext);

  const showProduct = (productDetail) => {
    context.openProductDetail();
    context.setIsproductToShow(productDetail);
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
        <div
          className="absolute  flex justify-center items-center  rounded-full top-0 right-0 m-2 bg-white"
          onClick={(e) => {
            e.stopPropagation();
            context.setCount(context.count + 1);
          }}
        >
          <PlusIcon className="h-6 w-6 text-black " />
        </div>
      </figure>
      <p className="flex justify-between">
        <span className="text-sm font-light">{data.data.title}</span>
        <span className="text-lg font-medium">${data.data.price}</span>
      </p>
    </div>
  );
};

export default Card;
