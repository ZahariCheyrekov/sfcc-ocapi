import { Link } from "react-router-dom";

import SalesforceLogo from "../assets/salesforce.svg";

const Header = () => {
  return (
    <header className="bg-dark text-white">
      <nav className="d-flex align-items-center justify-content-between w-75 m-auto">
        <Link to="/">
          <img src={SalesforceLogo} alt="Salesforce" loading="lazy" />
        </Link>
        <Link
          className="d-flex align-items-center position-relative px-3"
          to="/cart"
        >
          <i className="cart_icon bi bi-handbag text-white"></i>
          <span className="position-absolute top-0 end-0 rounded-circle bg-info p-2 badge">
            0
          </span>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
