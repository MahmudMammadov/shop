import React, { Fragment, useState, useContext, useLayoutEffect } from "react";
import ProductsMenu from "./ProductsMenu";
import ProductBasket from "./ProductBasket";
import LikeProduct from "./LikeProduct";
import ProductLook from "./ProductLook";
import ProductsCompare from "./ProductsCompare";
import { MainContext } from "./Context";
import { SiStmicroelectronics } from "react-icons/si";
import { HiOutlineScale } from "react-icons/hi";
import { BsMinecartLoaded } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";
import { BsHeart, BsSearch } from "react-icons/bs";
import { MdOutlineLightMode, MdDarkMode } from "react-icons/md";
import "./screenmode.css";
import "./productnav.css";

const Productnav = () => {
  const {
    shopList,
    likeProduct,
    oneDeleteProducts,
    oneDeleteLikeProduct,
    addProduct,
    reduceProduct,
    listClear,
    listDelete,
    handleSubmit,
    lookProductItem,
    moveLookProduct,
    menuProducts,
    compare,
    lookProduct,
    setCompare,
    deleteLookList,
    setLookProduct,
    productAbout,
    productInform,
    screenModes,
    screenModeMove,
    setScreenModes,
  } = useContext(MainContext);
  const [showBar, setShowBar] = useState(false);
  const [basket, setBasket] = useState(false);
  const [showCompare, setShowCompare] = useState(false);
  const [likeShow, setLikeShow] = useState(false);
  const [navbar, setNavbar] = useState(false);
  const [moveSearch, setMoveSearch] = useState(false);
  const showhiddenbar = () => setShowBar(!showBar);

  const basketMove = () => {
    setBasket(!basket);
    setLikeShow(true);
    setShowCompare(true);
    setLookProduct(false);
  };
  const likeProcutshandle = () => {
    setLikeShow(!likeShow);
    setBasket(true);
    setShowCompare(true);
    setLookProduct(false);
  };
  const closeActivePages = () => {
    setShowCompare(true);
    setLikeShow(true);
    setBasket(true);
    setLookProduct(false);
  };
  const compareMove = () => {
    setShowCompare(!showCompare);
    setLikeShow(true);
    setBasket(true);
    setLookProduct(false);
  };
  useLayoutEffect(() => {
    setBasket(true);
    setLikeShow(true);
    setShowCompare(true);
    setScreenModes(true);
    setMoveSearch(true);
  }, []);
  const checkNavbar = () => {
    if (window.scrollY > 1) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener("scroll", checkNavbar);

  const showHiddenSearch = () => setMoveSearch(!moveSearch);
  return (
    <Fragment>
      <div
        className={
          navbar ? "home-pages-container  active " : "home-pages-container "
        }
      >
        <div className="home-pages">
          <div
            className="nav-logo-element"
            onClick={() => {
              menuProducts();
              closeActivePages();
            }}
          >
            <SiStmicroelectronics />
          </div>
          <div
            className={moveSearch ? "nav-elements" : "nav-elements select-move"}
          >
            <input
              type="search"
              className={
                screenModes ? "input-select" : "input-select input-mode"
              }
              placeholder="Search..."
              onChange={(e) => handleSubmit(e)}
            />
          </div>
          <div className="slaces-shop">
            <div onClick={showHiddenSearch} className="search-product-icon">
              <BsSearch className="search-icon-color" />
            </div>
            <div>
              <span className="icone-element" onClick={compareMove}>
                <HiOutlineScale className="icon-element-nav" />
                <span className="shoplist-length">{compare.length}</span>
              </span>
            </div>
            <div>
              <span className="icone-element" onClick={basketMove}>
                <BsMinecartLoaded className="icon-element-nav" />
                <span className="shoplist-length">{shopList.length}</span>
              </span>
            </div>
            <div>
              <span className="icone-element" onClick={likeProcutshandle}>
                <BsHeart className="icon-element-nav" />
                <span className="shoplist-length">{likeProduct.length}</span>
              </span>
            </div>

            <div className="light-mode" onClick={screenModeMove}>
              {screenModes ? (
                <MdOutlineLightMode className="light-mode-icon" />
              ) : (
                <MdDarkMode className="light-mode-icon" />
              )}
            </div>
          </div>
        </div>

        <ProductsMenu showBar={showBar} showhiddenbar={showhiddenbar} />
        <div onClick={showhiddenbar} className="product-menu-arrow">
          {showBar ? null : (
            <span className="icone-element icone-element-arrow arrow-down">
              <IoIosArrowDown />
            </span>
          )}
        </div>
        <span className={showCompare ? "hidden-basket" : "show-basket"}>
          <ProductsCompare
            compare={compare}
            setCompare={setCompare}
            compareMove={compareMove}
          />
        </span>
        <span className={basket ? "hidden-basket" : "show-basket"}>
          <ProductBasket
            shopList={shopList}
            basketMove={basketMove}
            oneDeleteProducts={oneDeleteProducts}
            addProduct={addProduct}
            reduceProduct={reduceProduct}
            listDelete={listDelete}
            screenModes={screenModes}
          />
        </span>
        <span className={likeShow ? "hidden-basket" : "show-basket"}>
          <LikeProduct
            likeProduct={likeProduct}
            addProduct={addProduct}
            likeProcutshandle={likeProcutshandle}
            oneDeleteLikeProduct={oneDeleteLikeProduct}
            basketMove={basketMove}
            listClear={listClear}
            screenModes={screenModes}
          />
        </span>

        <ProductLook
          lookProductItem={lookProductItem}
          moveLookProduct={moveLookProduct}
          addProduct={addProduct}
          basketMove={basketMove}
          oneDeleteLikeProduct={oneDeleteLikeProduct}
          lookProduct={lookProduct}
          deleteLookList={deleteLookList}
          productAbout={productAbout}
          productInform={productInform}
          screenModes={screenModes}
        />
      </div>
    </Fragment>
  );
};

export default Productnav;
