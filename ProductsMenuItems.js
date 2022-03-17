import React, { useContext } from "react";
import "./productmenuitems.css";
import "./screenmode.css";
import { AiOutlineHeart, AiFillEye, AiTwotoneShopping } from "react-icons/ai";
import { MainContext } from "./Context";
import { HiOutlineScale } from "react-icons/hi";

const ProductsMenuItems = () => {
  const {
    addProduct,
    like,
    datamenu,
    scaleProduct,
    productLook,
    moveLookProduct,
    addInformList,
    screenModes,
  } = useContext(MainContext);
  return (
    <div className="product-menu-container">
      {datamenu.map((items) => {
        const { img, id, price, name } = items;
        return (
          <div
            key={id}
            className={
              screenModes
                ? "products-menu-items  backlightcolor"
                : "products-menu-items  backdarkcolor"
            }
          >
            <div
              className="look-eye-product"
              onClick={() => {
                productLook(items);
                moveLookProduct();
              }}
            >
              <AiFillEye className="eye-icon" />
            </div>
            <div>
              <img src={img} alt={name} className="products-img" />
            </div>
            <div>
              <h4
                className={
                  screenModes
                    ? "product-name-item linedarkcolor"
                    : "product-name-item linelightcolor"
                }
              >
                {name}
              </h4>
            </div>
            <div className="procust-components">
              <div className="price-add-items">
                <h4
                  className={screenModes ? "linedarkcolor" : "linelightcolor"}
                >
                  {price} $
                </h4>
                <button
                  onClick={() => addProduct(items)}
                  className="add-cart-button"
                >
                  <AiTwotoneShopping className="icon-shop" />
                </button>
              </div>
              <div className="scale-heart">
                <span
                  onClick={() => like(items)}
                  className={
                    screenModes
                      ? "icone-item linedarkcolor"
                      : "icone-item linelightcolor"
                  }
                >
                  <AiOutlineHeart />
                </span>
                <span
                  className={
                    screenModes
                      ? "icone-item linedarkcolor"
                      : "icone-item linelightcolor"
                  }
                  onClick={() => {
                    scaleProduct(items);
                    addInformList(items);
                  }}
                >
                  <HiOutlineScale />
                </span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductsMenuItems;
