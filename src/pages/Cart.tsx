import { useDispatch, useSelector } from "react-redux";
import { Header } from "../components/Header";
import { Item } from "../components/Item";
import { resetCart } from "../store/reducers/cart";
import { ItemProps } from "../store/reducers/itens";

interface CartsProps {
  id: string;
  quantity: number;
}

interface useSelectorCartProps {
  carts: CartsProps[];
  itens: ItemProps[];
  search: string;
}

interface returnUseSelectorCartProps {
  carts: ItemProps[];
  total: number;
}

export function Cart() {
  const dispatch = useDispatch();
  const { carts, total } = useSelector<
    useSelectorCartProps,
    returnUseSelectorCartProps
  >((state) => {
    let total = 0;
    const regexp = new RegExp(state.search, "i");

    const cartReduce = state.carts.reduce<ItemProps[]>(
      (oldValues, itemCart) => {
        const item = state.itens.find((item) => item.id === itemCart.id);

        if (!item) {
          return [];
        }

        total += item?.preco * itemCart.quantity;

        if (item.titulo.match(regexp)) {
          oldValues.push({
            ...item,
            quantity: itemCart.quantity,
          });
        }

        return oldValues;
      },
      []
    );
    return { carts: cartReduce, total };
  });
  return (
    <div>
      <Header
        title="Carrinho de compras"
        description="Confira produtos que você adicionou ao carrinho"
        image=""
      />

      <div>
        <div className="grid grid-cols-3">
          {carts.map((item) => (
            <Item key={item.id} {...item} cart />
          ))}
        </div>
        <div className="p-4 flex justify-between border-t border-t-gray-400">
          <strong className="text-2xl">Resumo da compra</strong>
          <span className="text-xl">
            Subotal: <strong>R$ {total.toFixed(2)}</strong>
          </span>
        </div>
      </div>
      <button className="" onClick={() => dispatch(resetCart())}>
        Finalizar compra
      </button>
    </div>
  );
}
