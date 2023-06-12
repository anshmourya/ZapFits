import { useContext } from "react";
import { CiSearch } from "react-icons/ci";
import { MdOutlineLocalOffer } from "react-icons/md";
import { BsFillPersonFill } from "react-icons/bs";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";

const iconComponents = {
  CiSearch: CiSearch,
  MdOutlineLocalOffer: MdOutlineLocalOffer,
  BsFillPersonFill: BsFillPersonFill,
  AiOutlineShoppingCart: AiOutlineShoppingCart,
};

function NavList({ list }) {
  return (
    <>
      <ul className="flex items-center justify-around flex-1">
        {list.map((data, index) => {
          const { name, icon, link } = data;
          const IconComponent = iconComponents[icon];

          if (!IconComponent) {
            console.warn(`Unsupported icon: ${icon}`);
            return null;
          }

          return (
            <Link key={index} to={link}>
              <li className="flex items-center justify-around gap-2 text-lg font-semibold transition-all cursor-pointer hover:text-orange-400">
                <IconComponent /> {name}
              </li>
            </Link>
          );
        })}
      </ul>
    </>
  );
}

export default NavList;
