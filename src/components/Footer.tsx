import { IconBaseProps } from "react-icons";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const iconsProps: IconBaseProps = {
  color: "#fff",
  size: 24,
};

export function Footer() {
  return (
    <footer className="bg-blue-500 p-4 flex justify-between px-20">
      <div className="flex items-center gap-2">
        <FaFacebook {...iconsProps} />
        <FaTwitter {...iconsProps} />
        <FaInstagram {...iconsProps} />
      </div>

      <span className="text-gray-200">Desenvolvido por Matheus</span>
    </footer>
  );
}
