import NavList from "./Navlist";

const Nav = () => {
  const navData = [
    { name: "store", icon: "CiSearch", link: "/store" },
    { name: "Offer", icon: "BiSolidOffer", link: "/" },
    { name: "User", icon: "BsFillPersonFill", link: "/" },
    { name: "Cart", icon: "AiOutlineShoppingCart", link: "/cart" },
  ];

  return (
    <>
      <nav className="flex items-center justify-around gap-4 p-5 border ">
        <div className="transition-all cursor-pointer logo hover:scale-125">
          LOGO
        </div>
        <span className="flex-1 text-sm transition-all cursor-pointer hover:text-gray-400">
          Mumbai, Maharashtra 400065, India{" "}
        </span>
        <NavList list={navData} />
      </nav>
    </>
  );
};

export default Nav;
