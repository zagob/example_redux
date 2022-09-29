import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Header } from "../components/Header";
import { Item } from "../components/Item";
import { CategoriasProps } from "../store";
import { ItemProps } from "../store/reducers/itens";

interface useSelectorCategoriaProps {
  categorias: CategoriasProps[];
  itens: ItemProps[];
  search: string;
}

interface returnUseSelectorCategoriaProps {
  categoria: CategoriasProps;
  itens: ItemProps[];
}

export default function Categoria() {
  const { nameCategoria } = useParams();

  const { categoria, itens } = useSelector<
    useSelectorCategoriaProps,
    returnUseSelectorCategoriaProps
  >((state) => {
    const rexexp = new RegExp(state.search, "i");

    return {
      categoria: state.categorias.find(
        (categoria) => categoria.id === nameCategoria
      )!,
      itens: state.itens.filter(
        (item) => item.categoria === nameCategoria && item.titulo.match(rexexp)
      ),
    };
  });

  return (
    <div>
      <Header
        title={categoria.name}
        description={categoria.description}
        image={categoria.header}
      />

      <div className="my-10 grid grid-cols-3 gap-4">
        {itens?.map((item) => (
          <Item key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}
