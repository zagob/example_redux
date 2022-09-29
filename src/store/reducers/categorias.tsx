import { createSlice } from "@reduxjs/toolkit";

import automotivoThumb from "../../assets/categorias/thumbnail/automotivo.png";
import eletronicosThumb from "../../assets/categorias/thumbnail/eletronicos.png";
import escritorioThumb from "../../assets/categorias/thumbnail/escritorio.png";
import jogosThumb from "../../assets/categorias/thumbnail/jogos.png";
import somThumb from "../../assets/categorias/thumbnail/som.png";

import automotivoHeader from "../../assets/categorias/header/automotivo.png";
import eletronicosHeader from "../../assets/categorias/header/eletronicos.png";
import escritorioHeader from "../../assets/categorias/header/escritorio.png";
import jogosHeader from "../../assets/categorias/header/jogos.png";
import somHeader from "../../assets/categorias/header/som.png";

const initialState = [
  {
    name: "Eletrônicos",
    thumbnail: automotivoThumb,
    header: automotivoHeader,
    id: "eletronicos",
    description:
      "Os melhores e mais atuais dispositivos eletrônicos estão aqui!",
  },
  {
    name: "Automotivo",
    thumbnail: eletronicosThumb,
    header: eletronicosHeader,
    id: "automotivos",
    description:
      "Encontre aqui equipamentos para deixar seu carro com a sua cara!",
  },
  {
    name: "Jogos",
    thumbnail: jogosThumb,
    header: jogosHeader,
    id: "jogos",
    description: "Adquira os consoles e jogos mais atuais do mercado!",
  },
  {
    name: "Escritório",
    thumbnail: escritorioThumb,
    header: escritorioHeader,
    id: "escritorio",
    description: "Adquira os consoles e jogos mais atuais do mercado!",
  },
  {
    name: "Som e imagem",
    thumbnail: somThumb,
    header: somHeader,
    id: "som",
    description: "Curta suas músicas e seus filmes com a melhor qualidade!",
  },
];

export const categoriasSlice = createSlice({
  name: "categorias",
  initialState,
  reducers: {},
}).reducer;
