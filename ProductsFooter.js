import React from "react";
import "./productsfooter.css";
const ProductsFooter = () => {
  let date = new Date();
  let liveDate = date.toDateString();
  return (
    <div className="products-footer">
      <div className="products-footer-inform">
        <div className="live-date">{liveDate}</div>
        <div>
          <span>More Information</span>
          <a className="website-link" href="http://mahmudmammadov.info/">
            Website
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductsFooter;
