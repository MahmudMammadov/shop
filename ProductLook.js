import React, { Fragment } from "react";
import "./productlook.css";
import "./productmenuitems.css";
import "./procuctbasket.css";
import "./screenmode.css";
import { AiTwotoneShopping } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";

const ProductLook = ({
  lookProductItem,
  addProduct,
  basketMove,
  moveLookProduct,
  lookProduct,
  productAbout,
  productInform,
  screenModes,
}) => {
  return (
    <Fragment>
      <div className={lookProduct ? "show-look-page" : "hidden-look-page"}>
        <div className="product-look-container-allitem">
          <div className="product-look-elements">
            <div
              className={
                screenModes
                  ? "product-look-container-page  backlightcolor "
                  : "product-look-container-page  backdarkcolor"
              }
            >
              {lookProductItem.map((item) => {
                const { id, img, name, price } = item;
                return (
                  <div key={id}>
                    <div className="product-look-items">
                      <div>
                        <img src={img} alt={name} className="img-size" />
                      </div>

                      <div
                        className={
                          screenModes
                            ? "product-look-element linedarkcolor"
                            : "product-look-element linelightcolor"
                        }
                      >
                        <h4>{name}</h4>
                        <h4>{price} $</h4>

                        <button
                          className="add-cart-button"
                          onClick={() => {
                            addProduct(item);
                            basketMove();
                            moveLookProduct();
                          }}
                        >
                          <AiTwotoneShopping className="icon-shop" />
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
              <div className="product-look-list-items">
                <ul className="product-look-list">
                  {productAbout.map((item) => (
                    <li
                      key={item.index}
                      className={
                        screenModes
                          ? "item-list-text linedarkcolor"
                          : "item-list-text linelightcolor"
                      }
                    >
                      {item}
                    </li>
                  ))}
                </ul>
                <ul className="product-look-list">
                  {productInform.map((item) => (
                    <li
                      key={item.index}
                      className={
                        screenModes
                          ? "item-list-text linedarkcolor"
                          : "item-list-text linelightcolor"
                      }
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="close-look-product-item">
              <div className="product-close-list" onClick={moveLookProduct}>
                <AiOutlineClose
                  className={
                    screenModes
                      ? "close-look-icon linedarkcolor"
                      : "close-look-icon linelightcolor"
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ProductLook;
