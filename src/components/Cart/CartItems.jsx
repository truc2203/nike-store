import React from "react";
import { MinusIcon, PlusIcon, TrashIcon } from "@heroicons/react/24/solid";
import { useDispatch } from "react-redux";
import { setChangeQuantity, setRemoveItemFromCart } from "../../app/CartSlice";
const CartItems = ({
  item: { id, title, img, text, color, shadow, price, cartQuantity },
}) => {
  const dispatch = useDispatch();
  const removeItemFromCart = () => {
    dispatch(
      setRemoveItemFromCart({
        id,
        title,
        img,
        text,
        color,
        shadow,
        price,
        cartQuantity,
      })
    );
  };

  const changeQuantity = (number) => {
    dispatch(
      setChangeQuantity({
        id,
        title,
        img,
        text,
        color,
        shadow,
        price,
        cartQuantity,
        number,
      })
    );
  };
  return (
    <>
      <div className="flex items-center justify-between w-full px-5">
        <div className="flex items-center gap-5">
          <div
            className={`bg-gradient-to-b ${color} ${shadow} realtive rounded hover:scale-105 transition-all duration-300 ease-in-out grid items-center`}
          >
            <img
              src={img}
              alt="img/cart-item"
              className="w-36 h-20 object-fill lg:w-28"
            />
          </div>
          <div className="grid item-center gap-4">
            <div className="grid items-center leading-none">
              <h1 className="font-medium text-slate-900 text-lg lg:text-sm">
                {title}
              </h1>
              <p className="text-sm text-slate-800 lg:text-xs">{text}</p>
            </div>
            <div className="flex items-center justify-around w-full ">
              <button
                onClick={() => changeQuantity(-1)}
                type="button"
                className="bg-theme-cart rounded w-6 h-6 lg:w-5 lg:h-5 flex items-center justify-center active:scale-90 "
              >
                <MinusIcon className="text-slate-200 w-5 h-5 lg:w-4 lg:h-4 stroke-[2]" />
              </button>
              <div className="bg-theme-cart text-slate-200 font-medium w-6 h-6 lg:w-5 lg:h-5 rounded text-center">
                {cartQuantity}
              </div>
              <button
                onClick={() => changeQuantity(1)}
                type="button"
                className="bg-theme-cart rounded w-6 h-6 lg:w-5 lg:h-5 flex items-center justify-center active:scale-90"
              >
                <PlusIcon className="text-slate-200 w-5 h-5 lg:w-4 lg:h-4 stroke-[2]" />
              </button>
            </div>
          </div>
        </div>
        <div className="grid items-center gap-5 justify-items-center">
          <div className="grid items-center justify-items-center">
            <h1 className="text-lg lg:text-base text-slate-900 font-medium">
              ${price * cartQuantity}
            </h1>
          </div>
          <button
            type="button"
            className="bg-theme-cart rounded w-6 h-6 lg:w-5 lg:h-5 grid items-center justify-items-center "
          >
            <TrashIcon
              onClick={() => removeItemFromCart()}
              className="text-slate-200 w-5 h-5 lg:w-4 lg:h-4 stroke-[2]"
            />
          </button>
        </div>
      </div>
    </>
  );
};

export default CartItems;
