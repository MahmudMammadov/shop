import React from "react";
import "./procuctbasket.css";
import "./screenmode.css";
import { AiOutlineClose, AiOutlineCloseCircle } from "react-icons/ai";

const LikeProduct = ({
  likeProduct,
  addProduct,
  likeProcutshandle,
  oneDeleteLikeProduct,
  basketMove,
  listClear,
  screenModes,
}) => {
  return (
    <div className="product-basket-container">
      <div
        className={
          screenModes
            ? "product-basket-elements backlightcolor"
            : "product-basket-elements backdarkcolor"
        }
      >
        <div className="product-basket-items ">
          {likeProduct.map((item) => {
            const { id, img, name, price } = item;
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
                  <span className="product-basket-name">
                    <h4>{name}</h4>
                  </span>
                  <span>
                    <span>{price}$</span>
                  </span>
                </div>
                <div className="product-buttons-container-items">
                  <button
                    className="add-product-button"
                    onClick={() => {
                      addProduct(item);
                      basketMove();
                      oneDeleteLikeProduct(item);
                    }}
                  >
                    Add To Basket
                  </button>
                  <button
                    className={
                      screenModes
                        ? "product-delete"
                        : "product-delete linelightcolor"
                    }
                    onClick={() => oneDeleteLikeProduct(item)}
                  >
                    <AiOutlineCloseCircle />
                  </button>
                </div>
              </div>
            );
          })}
          <div className="basket-empty-inform ">
            {likeProduct.length === 0 ? (
              <span className="empty-baket">Not Like</span>
            ) : null}
          </div>
        </div>

        <div
          className={
            likeProduct.length === 2 ? "hidden-clear-btn" : "basket-total"
          }
        >
          <div>
            <button
              className="basket-clear like-clear-btn "
              onClick={listClear}
            >
              Clear
            </button>
          </div>
        </div>
        <div className="close-btn-item">
          <div className="product-close-list" onClick={likeProcutshandle}>
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
  );
};

export default LikeProduct;
