import { CgProfile } from "react-icons/cg";
import { FaHeart, FaSearch } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";

const Navbar = () => {
  return (
    <div className="navbar">
      <nav>
        <input type="text" placeholder="Search for a product..." />
        <button type="button">
          <FaSearch />
        </button>
        <div className="icon-links">
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
    </div>
  );
};

export default Navbar;
