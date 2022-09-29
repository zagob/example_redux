import { changeFavorite, ItemProps } from "../store/reducers/itens";
import {
  AiOutlineHeart,
  AiFillHeart,
  AiFillPlusCircle,
  AiFillMinusCircle,
} from "react-icons/ai";
import { IconBaseProps } from "react-icons";
import { FaCartPlus } from "react-icons/fa";

import { useDispatch, useSelector } from "react-redux";
import { changeCart, changeQuantity } from "../store/reducers/cart";

const iconProps: IconBaseProps = {
  size: 24,
  color: "#041833",
};

const iconQuantityProps: IconBaseProps = {
  size: 32,
  color: "#1875e8",
};

interface ItemPropsComponent extends ItemProps {
  cart?: boolean;
}

export function Item({
  titulo,
  foto,
  preco,
  descricao,
  favorito,
  id,
  quantity,
  cart,
}: ItemPropsComponent) {
  const dispach = useDispatch();
  const hasCart = useSelector<{ carts: ItemProps[] }>((state) =>
    state.carts.some((itemCart) => itemCart.id === id)
  ) as boolean;

  function resolveFavorite() {
    dispach(changeFavorite(id));
  }

  function resolveCart() {
    dispach(changeCart(id));
  }

  return (
    <div className="px-4 py-2 transition-all hover:border-green-500 hover:bg-blue-100">
      <div className="flex justify-center">
        <img width={250} src={foto} alt={titulo} />
      </div>

      <div className="mt-2 flex flex-col gap-2">
        <div className="flex flex-col gap-2">
          <h2 className="text-blue-600 font-semibold text-md">{titulo}</h2>
          <p className="text-sm text-gray-800">{descricao}</p>
        </div>
        <div className="flex items-center justify-between">
          <span className="bg-blue-400 px-2 py-1 rounded-lg text-gray-100">
            R$ {preco.toFixed(2)}
          </span>

          {favorito ? (
            <AiFillHeart
              onClick={resolveFavorite}
              {...iconProps}
              color="#ff0000"
            />
          ) : (
            <AiOutlineHeart onClick={resolveFavorite} {...iconProps} />
          )}

          {cart ? (
            <div>
              <span>
                Quantity:{" "}
                <AiFillMinusCircle
                  {...iconQuantityProps}
                  onClick={() => {
                    if (quantity! >= 1) {
                      dispach(changeQuantity({ id, quantity: -1 }));
                    }
                  }}
                />
              </span>
              <span>{String(quantity || 0).padStart(2, "0")}</span>
              <AiFillPlusCircle
                {...iconQuantityProps}
                onClick={() => dispach(changeQuantity({ id, quantity: +1 }))}
              />
            </div>
          ) : (
            <FaCartPlus
              {...iconProps}
              color={hasCart ? "#1875e8" : iconProps.color}
              onClick={resolveCart}
            />
          )}
        </div>
      </div>
    </div>
  );
}
