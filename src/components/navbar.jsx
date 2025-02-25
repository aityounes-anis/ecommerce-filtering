import { CgProfile } from "react-icons/cg";
import { FaHeart, FaSearch } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";

const Navbar = () => {
  return (
    <nav>
      <input type="text" placeholder="Search for a product..." />
      <button type="button">
        <FaSearch />
      </button>
      <div>
        <a href="/">
          <FaHeart />
        </a>
        <a href="/">
          <FaCartShopping />
        </a>
        <a href="/">
          <CgProfile />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
