import { useState } from "react";
import PropTypes from "prop-types";
import {
  NextIcon,
  PrevIcon,
  Image1,
  Image2,
  Image3,
  Image4,
  Thumbnail1,
  Thumbnail2,
  Thumbnail3,
  Thumbnail4,
  MinusIcon,
  PlusIcon,
  CartIcon,
  CloseIcon,
} from "../assets";
import "./MainCard.css";

function MainCard(props) {
  const [count, setCount] = useState(0);
  const [countS, setCountS] = useState(0);

  const handleCountPrev = () => {
    setCount((prev) => (prev == 0 ? 3 : prev - 1));
  };

  const handleCountNext = () => {
    setCount((prev) => (prev == 3 ? 0 : prev + 1));
  };

  const handleCountSPrev = () => {
    setCountS((prev) => (prev == 0 ? 3 : prev - 1));
  };

  const handleCountSNext = () => {
    setCountS((prev) => (prev == 3 ? 0 : prev + 1));
  };

  const handleCountItemPrev = () => {
    props.setCountItem((prev) => (prev == 0 ? 0 : prev - 1));
  };

  const handleCountItemNext = () => {
    props.setCountItem((prev) => prev + 1);
  };

  const handleCart = () => {
    if (props.countItem != 0) {
      props.setIsEmpty(false);
      props.setShowInCart(true);
    } else {
      props.setIsEmpty(true);
      props.setShowInCart(false);
    }
  };
  return (
    <main>
      <div
        className={props.showLargeImg ? "FirstWrapper blur" : "FirstWrapper"}
      >
        <div className="ImgBox">
          <button
            className="ImgBox-PrevBtnBox mobile"
            aria-label="previous image"
            onClick={handleCountPrev}
          >
            <img src={PrevIcon} alt="" />
          </button>

          <div className="ImgBox-Slider">
            <img
              src={Image1}
              className={count == 0 ? "show" : ""}
              alt="image product"
              onClick={() => props.setShowLargeImg((prev) => !prev)}
            />
            <img
              src={Image2}
              className={count == 1 ? "show" : ""}
              alt="image product"
              onClick={() => props.setShowLargeImg((prev) => !prev)}
            />
            <img
              src={Image3}
              className={count == 2 ? "show" : ""}
              alt="image product"
              onClick={() => props.setShowLargeImg((prev) => !prev)}
            />
            <img
              src={Image4}
              className={count == 3 ? "show" : ""}
              alt="image product"
              onClick={() => props.setShowLargeImg((prev) => !prev)}
            />
          </div>
          <button
            className="ImgBox-NextBtnBox mobile"
            aria-label="next image"
            onClick={handleCountNext}
          >
            <img src={NextIcon} alt="" />
          </button>

          <div className="desktop ThumnailBox">
            <img
              src={Thumbnail1}
              alt=""
              className={count == 0 ? "thumb" : ""}
              onClick={() => setCount(0)}
            />
            <img
              src={Thumbnail2}
              alt=""
              className={count == 1 ? "thumb" : ""}
              onClick={() => setCount(1)}
            />
            <img
              src={Thumbnail3}
              alt=""
              className={count == 2 ? "thumb" : ""}
              onClick={() => setCount(2)}
            />
            <img
              src={Thumbnail4}
              alt=""
              className={count == 3 ? "thumb" : ""}
              onClick={() => setCount(3)}
            />
          </div>
        </div>
        <div className="TxtBox">
          <p className="TxtBox-CompanyName">sneakers company</p>
          <h1 className="TxtBox-Title">fall limited edition sneakers</h1>
          <p className="TxtBox-Para">
            These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole, they&apos;ll withstand
            everything the weather can offer.
          </p>
          <div className="TxtBox-PriceBox">
            <div className="TxtBox-PriceBox-Box">
              <strong className="TxtBox-PriceBox-Box-Price">$125.00</strong>
              <span className="TxtBox-PriceBox-Box-Discount">50%</span>
            </div>
            <span className="TxtBox-PriceBox-FullPrice">$250.00</span>
          </div>
          <div className="TxtBox-CartBox">
            <div className="TxtBox-CartBox-Btns">
              <button
                className="TxtBox-CartBox-MinusBtn"
                aria-label="remove item"
                onClick={handleCountItemPrev}
              >
                <img src={MinusIcon} alt="" />
              </button>
              <button
                className="TxtBox-CartBox-ValueBtn"
                value={props.countItem}
              >
                {props.countItem}
              </button>
              <button
                className="TxtBox-CartBox-PlusBtn"
                aria-label="add item"
                onClick={handleCountItemNext}
              >
                <img src={PlusIcon} alt="" />
              </button>
            </div>

            <button className="CartBtn" onClick={handleCart}>
              <img src={CartIcon} alt="" />
              Add to cart
            </button>
          </div>
        </div>
      </div>
      {props.showLargeImg && (
        <div className="SecondWrapper desktop">
          <img
            src={CloseIcon}
            alt=""
            className="SecondWrapper-CloseBox"
            onClick={() => props.setShowLargeImg((prev) => !prev)}
          />
          <div className="SecondWrapper-ImgBox">
            <button
              className="SecondWrapper-ImgBox-PrevBtn"
              aria-label="prev image"
              onClick={handleCountSPrev}
            >
              <img src={PrevIcon} alt="" />
            </button>
            <div className="SecondWrapper-ImgBox-Slider">
              <img
                src={Image1}
                className={countS == 0 ? "S-show" : ""}
                alt="image product"
              />
              <img
                src={Image2}
                className={countS == 1 ? "S-show" : ""}
                alt="image product"
              />
              <img
                src={Image3}
                className={countS == 2 ? "S-show" : ""}
                alt="image product"
              />
              <img
                src={Image4}
                className={countS == 3 ? "S-show" : ""}
                alt="image product"
              />
            </div>
            <button
              className="SecondWrapper-ImgBox-NextBtn"
              aria-label="next image"
              onClick={handleCountSNext}
            >
              <img src={NextIcon} alt="" />
            </button>
            <div className="SecondWrapper-ImgBox-Thumbnails">
              <img
                src={Thumbnail1}
                alt=""
                className={countS == 0 ? "S-thumb" : ""}
                onClick={() => setCountS(0)}
              />
              <img
                src={Thumbnail2}
                alt=""
                className={countS == 1 ? "S-thumb" : ""}
                onClick={() => setCountS(1)}
              />
              <img
                src={Thumbnail3}
                alt=""
                className={countS == 2 ? "S-thumb" : ""}
                onClick={() => setCountS(2)}
              />
              <img
                src={Thumbnail4}
                alt=""
                className={countS == 3 ? "S-thumb" : ""}
                onClick={() => setCountS(3)}
              />
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

MainCard.propTypes = {
  setIsEmpty: PropTypes.func,
  countItem: PropTypes.number,
  setCountItem: PropTypes.func,
  setShowInCart: PropTypes.func,
  showLargeImg: PropTypes.bool,
  setShowLargeImg: PropTypes.func,
};

export default MainCard;
