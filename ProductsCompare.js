import React, { useState, useContext, Fragment, useEffect } from "react";
import { MainContext } from "./Context";
import "./productcompare.css";
import "./procuctbasket.css";
import "./screenmode.css";
import { AiOutlineCloseCircle, AiOutlineClose } from "react-icons/ai";

const Productscompare = ({ compare, setCompare, compareMove }) => {
  const [list, setList] = useState([]);
  const [featuresList, setFeaturesList] = useState([]);
  const allButtons = [...new Set(compare.map((item) => item.category))];
  const {
    productInformation,
    setProductInformation,
    compareProductShowMove,
    setCompareProductShowMove,
    screenModes,
  } = useContext(MainContext);

  const productcomparelist = (productItem) => {
    const compareFindCategory = compare.filter(
      (item) => item.category === productItem
    );
    let productInformationItem = productInformation.flat();
    const productAboutInformatin = productInformationItem.filter(
      (item) => item.category === productItem
    );
    setFeaturesList(productAboutInformatin);
    setList(compareFindCategory);
  };

  useEffect(() => {
    let compareFirstElement = productInformation.flat();
    let compareFirstElemetItem = compareFirstElement[0];
    let showCompareProduct = compare[0];
    const showCompareItem = compare.filter(
      (item) => item.category === showCompareProduct.category
    );
    if (showCompareItem) {
      setList(showCompareItem);
    }
    const compareFirstElementTake = compareFirstElement.filter(
      (compareProduct) => compareProduct.id === compareFirstElemetItem.id
    );

    if (compareFirstElementTake) {
      setFeaturesList(compareFirstElementTake);
    }
  }, [productInformation, compareProductShowMove]);

  const deleteProduct = (e) => {
    const copyCompare = [...compare];
    const copyList = [...list];
    const newComare = copyCompare.filter((item) => item.id !== e.id);
    const newList = copyList.filter((item) => item.id !== e.id);
    setCompare(newComare);
    setList(newList);

    const productWithoutArr = productInformation.flat();

    if (newComare.length === 0 && newList.length === 0) {
      setFeaturesList([]);
      setProductInformation([]);
      setCompareProductShowMove(0);
    } else if (list.length === 1) {
      const newProductAboutList = productWithoutArr.filter(
        (productAboutItem) => productAboutItem.category !== e.category
      );
      setProductInformation(newProductAboutList);
    }
  };
  return (
    <Fragment>
      <div
        className={
          screenModes
            ? "product-compare-container backlightcolor"
            : "product-compare-container backdarkcolor"
        }
      >
        <div
          className={
            screenModes
              ? "product-compare-list backlightcolor"
              : "product-compare-list backdarkcolor"
          }
        >
          <div className="left-bar">
            <div className="product-buttons-container">
              {allButtons.map((item, index) => {
                return (
                  <button
                    key={index}
                    onClick={() => productcomparelist(item)}
                    className="product-compare-btns"
                  >
                    {item}
                  </button>
                );
              })}
            </div>
            <div>
              {featuresList.map((item) => {
                return (
                  <div key={item.id}>
                    <ul
                      className={
                        screenModes ? "list-about" : "list-about linelightcolor"
                      }
                      id="list-top-line"
                    >
                      <li>{item.about1}</li>
                      <li>{item.about2}</li>
                      <li>{item.about3}</li>
                      <li>{item.about4}</li>
                      <li>{item.about5}</li>
                      <li>{item.about6}</li>
                      <li>{item.about7}</li>
                      <li>{item.about8}</li>
                      <li>{item.about9}</li>
                      <li>{item.about10}</li>
                      <li>{item.about11}</li>
                      <li>{item.about12}</li>
                      <li>{item.about13}</li>
                      <li>{item.about14}</li>
                      <li>{item.about15}</li>
                      <li>{item.about16}</li>
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="product-compare-list-items">
            {list.map((item) => {
              return (
                <div key={item.id}>
                  <div className="compare-remove-element">
                    <button
                      className={
                        screenModes
                          ? "compare-remove-element-btn"
                          : "compare-remove-element-btn linelightcolor"
                      }
                      onClick={() => deleteProduct(item)}
                    >
                      <AiOutlineCloseCircle className="compare-remove-icon" />
                    </button>
                  </div>
                  <div className="img-compare">
                    {<img src={item.img} alt={item.name} className="img" />}
                  </div>
                  <ul className={screenModes ? "list" : "list linelightcolor"}>
                    <li>{item.item1}</li>
                    <li>{item.item2}</li>
                    <li>{item.item3}</li>
                    <li>{item.item4}</li>
                    <li>{item.item5}</li>
                    <li>{item.item6}</li>
                    <li>{item.item7}</li>
                    <li>{item.item8}</li>
                    <li>{item.item9}</li>
                    <li>{item.item10}</li>
                    <li>{item.item11}</li>
                    <li>{item.item12}</li>
                    <li>{item.item13}</li>
                    <li>{item.item14}</li>
                    <li>{item.item15}</li>
                    <li>{item.item16}</li>
                  </ul>
                </div>
              );
            })}
          </div>
          <div className="close-look-product-item">
            <div className="product-close-list" onClick={compareMove}>
              <AiOutlineClose
                className={
                  screenModes
                    ? "close-look-icon"
                    : "close-look-icon linelightcolor"
                }
              />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default Productscompare;
