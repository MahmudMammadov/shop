import React, { Fragment, useState } from "react";
import "./procuctbasket.css";
import "./screenmode.css";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";
const ProductBasket = ({
  shopList,
  basketMove,
  oneDeleteProducts,
  addProduct,
  reduceProduct,
  listDelete,
  screenModes,
}) => {
  const [listClose, setListClose] = useState(false);
  const totalProduct = shopList.reduce(
    (total, item) => total + item.quantity * item.price,
    0
  );

  const ProductList = () => {
    if (window.screenY > 2) {
      setListClose(true);
    } else {
      setListClose(false);
    }
  };
  window.addEventListener("scroll", ProductList);
  return (
    <Fragment>
      <div className="product-basket-container">
        <div
          className={
            screenModes
              ? "product-basket-elements backlightcolor"
              : "product-basket-elements backdarkcolor"
          }
        >
          <div className="product-basket-items ">
            {shopList.map((item) => {
              const { img, id, name, price, quantity } = item;

              return (
                <div className="product-basket" key={id}>
                  <div>
                    <img src={img} alt="" className="basket-img" />
                  </div>
                  <div
                    className={
                      screenModes ? "name-price" : "name-price linelightcolor"
                    }
                  >
                    <h4>{name}</h4>
                    <span>{price}$</span>
                  </div>
                  <div className="product-buttons-container-items">
                    <div className="add-reduce-buttons">
                      <span>
                        <button
                          className="product-button add-product-btn"
                          onClick={() => addProduct(item)}
                        >
                          +
                        </button>
                      </span>
                      <span
                        className={
                          screenModes ? "quantity" : "quantity linelightcolor"
                        }
                      >
                        {quantity}
                      </span>
                      <span>
                        <button
                          className="product-button remove-product-btn"
                          onClick={() => reduceProduct(item)}
                        >
                          -
                        </button>
                      </span>
                    </div>
                    <button
                      className={
                        screenModes
                          ? "product-delete"
                          : "product-delete deletentncolor"
                      }
                      onClick={() => oneDeleteProducts(item)}
                    >
                      <RiDeleteBin6Fill />
                    </button>
                  </div>
                </div>
              );
            })}
            <div className="basket-empty-inform">
              {shopList.length === 0 ? (
                <span className="empty-baket">Empty Basket</span>
              ) : null}
            </div>
          </div>
          <div className="basket-total">
            <div className="total-price">
              <span>Total Price</span>
              <span>$ {totalProduct}</span>
            </div>
            <div>
              <button className="basket-clear" onClick={listDelete}>
                Clear
              </button>
            </div>
          </div>
          <div className="close-btn-item">
            <div className="product-close-list" onClick={basketMove}>
              <AiOutlineClose
                className={
                  screenModes
                    ? "product-close-list-icon "
                    : "product-close-list-icon linelightcolor"
                }
              />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ProductBasket;
