import React, { useEffect, useState } from "react";
import ProductNav from "./ProductNav";
import ProductsMenu from "./ProductsMenu";
import ProductsFooter from "./ProductsFooter";
import ProductsMenuItems from "./ProductsMenuItems";
import { MainContext } from "./Context";
import productData from "./data";
import menu from "./ProducTabloList";
import "./homepage.css";

const getShopLocal = () => {
  let localShop = localStorage.getItem("shoplist");

  if (localShop) {
    return (localShop = JSON.parse(localStorage.getItem("shoplist")));
  } else {
    return [];
  }
};
const getLikeLocal = () => {
  let liknLocal = localStorage.getItem("likeProduct");
  if (liknLocal) {
    return (liknLocal = JSON.parse(localStorage.getItem("likeProduct")));
  } else {
    return [];
  }
};
const productInfo = () => {
  let productInformationssss = localStorage.getItem("productInformation");
  if (productInformationssss) {
    return (productInformationssss = JSON.parse(
      localStorage.getItem("productInformation")
    ));
  } else {
    return [];
  }
};
const getLikeLocalCompare = () => {
  let compareLocal = localStorage.getItem("compare");
  if (compareLocal) {
    return (compareLocal = JSON.parse(localStorage.getItem("compare")));
  } else {
    return [];
  }
};

const HomePage = () => {
  const [productAbout, setProductAbout] = useState([]);
  const [productInformation, setProductInformation] = useState(productInfo());
  const [productInform, setProductInform] = useState([]);
  const [shopList, setshopList] = useState(getShopLocal());
  const [likeProduct, setLikeProduct] = useState(getLikeLocal());
  const [datamenu, setMenudata] = useState(productData);
  const [productsValue, setProcustValue] = useState("");
  const [compare, setCompare] = useState(getLikeLocalCompare());
  const [lookProductItem, setLookProductItem] = useState([]);
  const [productFeatures, setProductFeatures] = useState([]);
  const [productCustomized, setProductCustomized] = useState([]);
  const [compareProductShowMove, setCompareProductShowMove] = useState(0);
  const [lookProduct, setLookProduct] = useState(false);
  const [quantity] = useState(1);
  const moveLookProduct = () => {
    setLookProduct(!lookProduct);
  };
  const addProduct = (productAddCart) => {
    const pItemsFind = shopList.find((item) => item.id === productAddCart.id);
    if (pItemsFind) {
      setshopList(
        shopList.map((item) => {
          if (item.id === productAddCart.id) {
            return { ...item, quantity: item.quantity + 1 };
          }
          return item;
        })
      );
    } else {
      setshopList([...shopList, { ...productAddCart, quantity }]);
    }
  };

  const like = (likeproductsItem) => {
    const findLikeProducts = likeProduct.find(
      (item) => item.id === likeproductsItem.id
    );
    if (findLikeProducts) {
    } else {
      setLikeProduct([...likeProduct, likeproductsItem]);
    }
  };
  const reduceProduct = (product) => {
    const pItemsFind = shopList.find((item) => item.id === product.id);
    if (pItemsFind.quantity === 1) {
      const deleteProduct = shopList.filter((item) => item.id !== product.id);
      setshopList(deleteProduct);
    } else {
      setshopList(
        shopList.map((item) =>
          item.id === product.id
            ? { ...item, quantity: pItemsFind.quantity - 1 }
            : item
        )
      );
    }
  };
  const oneDeleteLikeProduct = (productDeletProduct) => {
    const deleteLikeProduct = likeProduct.filter(
      (item) => item.id !== productDeletProduct.id
    );
    setLikeProduct(deleteLikeProduct);
  };
  const oneDeleteProducts = (productDelete) => {
    const findRemoveProduct = shopList.filter(
      (shopListItem) => shopListItem.id !== productDelete.id
    );
    setshopList(findRemoveProduct);
  };

  const listClear = () => {
    setLikeProduct([]);
  };

  const aItemsHandler = (productHandle) => {
    const productI = productData.filter(
      (item) => item.product === productHandle
    );
    setMenudata(productI);
  };
  const sItemsHandler = (product) => {
    const productS = productData.filter((item) => item.product === product);
    setMenudata(productS);
  };
  const allNotebook = (productAllNotebook) => {
    const allNotebookhandle = productData.filter(
      (item) => item.category === productAllNotebook
    );
    setMenudata(allNotebookhandle);
  };
  const aNotProductsHandler = (product) => {
    const aNotebookhandle = productData.filter(
      (item) => item.productnotebook === product
    );
    setMenudata(aNotebookhandle);
  };
  const hpNotProductsHandler = (productHpHandler) => {
    const hpNotebookhandle = productData.filter(
      (item) => item.productnotebook === productHpHandler
    );
    setMenudata(hpNotebookhandle);
  };
  const allTablet = (productTablet) => {
    const allTabletHandle = productData.filter(
      (item) => item.category === productTablet
    );
    setMenudata(allTabletHandle);
  };
  const sTabProductHanle = (productTabletHandle) => {
    const sTabletHandle = productData.filter(
      (item) => item.producttablet === productTabletHandle
    );
    setMenudata(sTabletHandle);
  };
  const aTabProductHanle = (productAppleHandle) => {
    const aTableHandle = productData.filter(
      (item) => item.producttablet === productAppleHandle
    );
    setMenudata(aTableHandle);
  };
  const allPhoneHandle = (productAllPhone) => {
    const phoneItems = productData.filter(
      (item) => item.category === productAllPhone
    );
    setMenudata(phoneItems);
  };
  const handleSubmit = (keyHandle) => {
    const keywords = keyHandle.target.value.toUpperCase();
    const searchProduct = productData.filter((item) =>
      item.name.toLocaleUpperCase().includes(keywords)
    );
    setMenudata(searchProduct);
  };

  const menuProducts = () => {
    setMenudata(productData);
  };
  const listDelete = () => {
    setshopList([]);
  };

  const addInformList = (infoList) => {
    const productAboutWithoutArr = productInformation.flat();
    const scaleProductItemsList = productAboutWithoutArr.find(
      (scaleItem) => scaleItem.category === infoList.category
    );
    const scaleProductItems = menu.filter(
      (scaleMenu) => scaleMenu.category === infoList.category
    );

    if (scaleProductItemsList) {
    } else {
      setProductInformation([...productInformation, scaleProductItems]);
    }
  };

  const scaleProduct = (products) => {
    const oneScaleProduct = compare.find(
      (compareItem) => compareItem.id === products.id
    );

    if (oneScaleProduct) {
    } else {
      setCompare([...compare, products]);
    }
    setCompareProductShowMove(compareProductShowMove + 1);
  };

  const productLook = (items) => {
    const menuFilterProduct = menu.filter(
      (item) => item.category === items.category
    );
    const dataFilterProduct = productData.filter(
      (item) => item.category === items.category && item.id === items.id
    );
    for (let i of menuFilterProduct) {
      setProductAbout(i.aboutproduct);
    }
    for (let i of dataFilterProduct) {
      setProductInform(i.about);
    }
    setLookProductItem([items]);
  };

  const deleteLookList = () => {
    setProductAbout([]);
    setProductInform([]);
  };
  useEffect(() => {
    localStorage.setItem("shoplist", JSON.stringify(shopList));
    localStorage.setItem("likeProduct", JSON.stringify(likeProduct));
    localStorage.setItem("compare", JSON.stringify(compare));
    localStorage.setItem("productFeatures", JSON.stringify(productFeatures));
    localStorage.setItem(
      "productCustomized",
      JSON.stringify(productCustomized)
    );
    localStorage.setItem(
      "productInformation",
      JSON.stringify(productInformation)
    );
  }, [
    shopList,
    likeProduct,
    compare,
    productFeatures,
    productCustomized,
    productInformation,
  ]);
  const [screenModes, setScreenModes] = useState(false);
  const screenModeMove = () => setScreenModes(!screenModes);

  const data = {
    screenModeMove,
    setScreenModes,
    screenModes,
    shopList,
    addProduct,
    like,
    likeProduct,
    oneDeleteProducts,
    reduceProduct,
    listClear,
    listDelete,
    oneDeleteLikeProduct,
    aItemsHandler,
    datamenu,
    sItemsHandler,
    menuProducts,
    allPhoneHandle,
    productsValue,
    setProcustValue,
    handleSubmit,
    moveLookProduct,
    compare,
    scaleProduct,
    productLook,
    lookProductItem,
    setProductInformation,
    lookProduct,
    setLookProduct,
    productAbout,
    productInform,
    deleteLookList,
    setCompare,
    productFeatures,
    productCustomized,
    setProductFeatures,
    setProductCustomized,
    productInformation,
    allNotebook,
    aNotProductsHandler,
    hpNotProductsHandler,
    sTabProductHanle,
    aTabProductHanle,
    allTablet,
    addInformList,
    compareProductShowMove,
    setCompareProductShowMove,
  };
  return (
    <div
      className={
        screenModes
          ? "homepage homepagelightcolor"
          : "homepage homepagedarkcolor"
      }
    >
      <MainContext.Provider value={data}>
        <ProductNav />
        <ProductsMenuItems />
        <ProductsMenu />
      </MainContext.Provider>
      <ProductsFooter />
    </div>
  );
};

export default HomePage;
