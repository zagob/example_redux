import { IconBaseProps } from "react-icons";
import { RiShoppingCartFill, RiShoppingBag2Line } from "react-icons/ri";
import { Link, useLocation } from "react-router-dom";

import LogoSvg from "../assets/logo.svg";
import { Busca } from "./Busca";

const iconProps: IconBaseProps = {
  color: "#fff",
  size: 24,
};

export function Navbar() {
  const { pathname } = useLocation();

  return (
    <nav className="bg-blue-500 flex justify-around items-center py-4">
      <div className="flex items-center gap-20">
        <img width={200} src={LogoSvg} alt="" />

        <div>
          <div>
            <Link to="/" className={``}>
              Página inicial
            </Link>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-10">
        <div className="">
          <Busca />
        </div>

        <div className="">
          <Link to="/cart">
            {pathname === "/cart" ? (
              <RiShoppingBag2Line {...iconProps} />
            ) : (
              <RiShoppingCartFill {...iconProps} />
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
}
