import React, { useContext } from "react";
import "./productsmenu.css";
import "./productnav.css";
import { MainContext } from "./Context";
import { IoIosArrowUp } from "react-icons/io";
const ProductsMenu = ({ showBar, showhiddenbar }) => {
  const {
    aItemsHandler,
    sItemsHandler,
    menuProducts,
    allPhoneHandle,
    allNotebook,
    aNotProductsHandler,
    hpNotProductsHandler,
    sTabProductHanle,
    aTabProductHanle,
    allTablet,
    screenModes,
  } = useContext(MainContext);

  return (
    <div className="products-container">
      <div className={showBar ? "nav-products nav-active" : "nav-products"}>
        <div className="products-movebar-container">
          <div className="products-movebar">
            <ul className="main">
              <li className="menu-button">
                <button onClick={menuProducts}>Menu</button>
              </li>
              <li>
                <button
                  className={screenModes ? "menu-light-mode" : "menu-dark-mode"}
                  onClick={() => {
                    allPhoneHandle("Phone");
                    showhiddenbar();
                  }}
                >
                  Phone
                </button>
                <ul>
                  <li>
                    <button
                      className={
                        screenModes ? "menu-light-mode" : "menu-dark-mode"
                      }
                      onClick={() => {
                        aItemsHandler("Iphone");
                        showhiddenbar();
                      }}
                    >
                      Iphone
                    </button>
                  </li>
                  <li>
                    <button
                      className={
                        screenModes ? "menu-light-mode" : "menu-dark-mode"
                      }
                      onClick={() => {
                        sItemsHandler("Samsung");
                        showhiddenbar();
                      }}
                    >
                      Samsung
                    </button>
                  </li>
                </ul>
              </li>
              <li>
                <button
                  className={screenModes ? "menu-light-mode" : "menu-dark-mode"}
                  onClick={() => {
                    allNotebook("Notebook");
                    showhiddenbar();
                  }}
                >
                  Notebook
                </button>
                <ul>
                  <li>
                    <button
                      className={
                        screenModes ? "menu-light-mode" : "menu-dark-mode"
                      }
                      onClick={() => {
                        aNotProductsHandler("Asus");
                        showhiddenbar();
                      }}
                    >
                      Asus
                    </button>
                  </li>
                  <li>
                    <button
                      className={
                        screenModes ? "menu-light-mode" : "menu-dark-mode"
                      }
                      onClick={() => {
                        hpNotProductsHandler("HP");
                        showhiddenbar();
                      }}
                    >
                      HP
                    </button>
                  </li>
                </ul>
              </li>
              <li>
                <button
                  className={screenModes ? "menu-light-mode" : "menu-dark-mode"}
                  onClick={() => {
                    allTablet("Tablet");
                    showhiddenbar();
                  }}
                >
                  Tablet
                </button>
                <ul>
                  <li>
                    <button
                      className={
                        screenModes ? "menu-light-mode" : "menu-dark-mode"
                      }
                      onClick={() => {
                        sTabProductHanle("Samsung");
                        showhiddenbar();
                      }}
                    >
                      Samsung
                    </button>
                  </li>
                  <li>
                    <button
                      className={
                        screenModes ? "menu-light-mode" : "menu-dark-mode"
                      }
                      onClick={() => {
                        aTabProductHanle("Ipad");
                        showhiddenbar();
                      }}
                    >
                      IPAD
                    </button>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div onClick={showhiddenbar} className="product-menu-arrow">
        {showBar ? (
          <span className="icone-element-arrow arrow-up icon-arrow">
            <IoIosArrowUp />
          </span>
        ) : null}
      </div>
    </div>
  );
};

export default ProductsMenu;
