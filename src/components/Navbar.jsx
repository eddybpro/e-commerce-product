import { useState } from "react";
import PropTypes from "prop-types";
import {
  Logo,
  MenuIcon,
  CloseIcon,
  CartIcon,
  Avatar,
  Thumbnail1,
  DeleteIcon,
} from "../assets";
import "./Navbar.css";

function Navbar(props) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleDelete = () => {
    props.setIsEmpty(true);
    props.setCountItem(0);
    props.setShowInCart(false);
  };

  return (
    <nav className={props.showLargeImg ? "Nav-Blur" : ""}>
      <div className="FirstContainer">
        <div className="FirstContainer-Menu">
          {isMenuOpen ? (
            <button
              aria-label="close menu"
              onClick={() => setIsMenuOpen((prev) => !prev)}
            >
              <img src={CloseIcon} alt="" />
            </button>
          ) : (
            <button
              aria-label="menu"
              onClick={() => setIsMenuOpen((prev) => !prev)}
            >
              <img src={MenuIcon} alt="" />
            </button>
          )}
        </div>
        <a href="#" className="FirstContainer-Logo" aria-label="sneakers">
          <img src={Logo} alt="sneakers" />
        </a>
        <ul
          className={
            isMenuOpen
              ? "FirstContainer-NavLinks open"
              : "FirstContainer-NavLinks"
          }
        >
          <li className="FirstContainer-NavLinks-Link">
            <a href="#" onClick={() => setIsMenuOpen((prev) => !prev)}>
              collections
            </a>
          </li>
          <li className="FirstContainer-NavLinks-Link">
            <a href="#" onClick={() => setIsMenuOpen((prev) => !prev)}>
              men
            </a>
          </li>
          <li className="FirstContainer-NavLinks-Link">
            <a href="#" onClick={() => setIsMenuOpen((prev) => !prev)}>
              women
            </a>
          </li>
          <li className="FirstContainer-NavLinks-Link">
            <a href="#" onClick={() => setIsMenuOpen((prev) => !prev)}>
              about
            </a>
          </li>
          <li className="FirstContainer-NavLinks-Link">
            <a href="#" onClick={() => setIsMenuOpen((prev) => !prev)}>
              contact
            </a>
          </li>
        </ul>
      </div>
      <div className="SecondContainer">
        <button
          className="SecondContainer-CartBtn"
          aria-label="cart"
          onClick={() => setIsCartOpen((prev) => !prev)}
        >
          <img src={CartIcon} alt="cart" />
          {props.showInCart && (
            <span className="SecondContainer-CartBtn-PopUp">
              {props.countItem}
            </span>
          )}
        </button>
        {isCartOpen && (
          <div className="CartBox">
            <h1 className="CartBox-Title">Cart</h1>
            <div className="CartBox-Cart">
              {props.isEmpty ? (
                <p className="CartBox-Cart-Para">Your cart is empty.</p>
              ) : (
                <ul className="CartBox-Cart-ItemsList">
                  <li className="CartBox-Cart-ItemsList-ItemBox">
                    <div className="CartBox-Cart-ItemsList-ItemBox-Container">
                      <img src={Thumbnail1} alt="" />
                      <div>
                        <p className="CartBox-Cart-ItemsList-ItemBox-Container-Title">
                          fall limited edition sneakers
                        </p>
                        <p className="CartBox-Cart-ItemsList-ItemBox-Container-Price">
                          $125.00 x
                        </p>
                        <span className="countItem">{props.countItem}</span>
                        <span className="FullPrice">
                          ${(125 * props.countItem).toFixed(2)}
                        </span>
                      </div>
                    </div>
                    <button
                      className="CartBox-Cart-ItemsList-ItemBox-TrashIconBox"
                      aria-label="trash icon"
                      onClick={handleDelete}
                    >
                      <img src={DeleteIcon} alt="" />
                    </button>
                  </li>
                  <li className="CartBox-Cart-ItemsList-Btn">checkout</li>
                </ul>
              )}
            </div>
          </div>
        )}
        <button className="SecondContainer-UserBtn" aria-label="user avatar">
          <img src={Avatar} alt="user" />
        </button>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  isEmpty: PropTypes.bool,
  showInCart: PropTypes.bool,
  showLargeImg: PropTypes.bool,
  countItem: PropTypes.number,
  setCountItem: PropTypes.func,
  setIsEmpty: PropTypes.func,
  setShowInCart: PropTypes.func,
};

export default Navbar;
