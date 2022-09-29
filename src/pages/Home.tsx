import { Header } from "../components/Header";
import relogio from "../assets/inicial.png";

import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { CategoriasProps } from "../store";

export function Home() {
  const navigate = useNavigate();
  const categorias = useSelector<{ categorias: CategoriasProps }>(
    (state) => state.categorias
  ) as CategoriasProps[];

  return (
    <div className="flex flex-col">
      <Header
        title="Classificados Tech"
        description="Compre diversos tipos de produtos no site"
        image={relogio}
      />

      <div className="flex flex-col items-center justify-center absolute top-[350px] right-[300px]">
        <div className="">
          <h1 className="text-2xl font-black text-gray-200">Categorias</h1>
        </div>

        <div className="flex gap-4 mt-4">
          {categorias.map((categoria, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-2 hover:cursor-pointer hover:opacity-70 transition-all"
              onClick={() => navigate(`/categoria/${categoria.id}`)}
            >
              <img
                className="rounded-full"
                src={categoria.thumbnail}
                alt={categoria.name}
              />
              <h1>{categoria.name}</h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
