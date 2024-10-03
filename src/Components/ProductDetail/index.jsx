import { XMarkIcon } from "@heroicons/react/24/solid";
import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import "./style.css";

const ProductDetail = () => {
  const context = useContext(ShoppingCartContext);

  return (
    <aside
      className={`${
        context.isProductDetailOpen ? "flex" : "hidden"
      } product-detail  flex-col fixed right-0 border border-black rounded-lg bg-white p-6 overflow-y-auto`}
    >
      <div className="flex justify-between items-center">
        <h2 className="font-medium text-xl">Detail</h2>
        <XMarkIcon
          className="h-6 w-6 cursor-pointer"
          onClick={() => context.closeProductDetail()}
        />
      </div>
      <figure className="px-6">
        <img
          className="w-full h-full rounded-lg"
          src={context.productToShow.image}
          alt={context.productToShow.tittle}
        />
      </figure>
      <p className="flex flex-col p-6 gap-3">
        <span className="font-medium text-2xl">
          ${context.productToShow.price}
        </span>
        <span className="font-medium text-xl">
          {context.productToShow.title}
        </span>
        <span className="font-light text-m">
          {context.productToShow.description}
        </span>
      </p>
    </aside>
  );
};

export default ProductDetail;
