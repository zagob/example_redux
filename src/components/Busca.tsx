import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { changeSearch, resetSearch } from "../store/reducers/Search";

interface useSelectorProps {
  search: string;
}

export function Busca() {
  const dispatch = useDispatch();
  const search = useSelector<useSelectorProps, string>((state) => state.search);
  const location = useLocation();

  useEffect(() => {
    dispatch(resetSearch());
  }, [location.pathname]);

  return (
    <div className="flex items-center bg-gray-100 rounded-md shadow-lg py-[14px] px-4 w-full">
      <input
        type="text"
        placeholder="O que você procura"
        className="outline-none w-full h-4"
        value={search}
        onChange={(event) => dispatch(changeSearch(event.target.value))}
      />
    </div>
  );
}
