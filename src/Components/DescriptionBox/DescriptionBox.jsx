import React from "react";
import "./DescriptionBox.css";

const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
          Welcome to Shopper, your one-stop online destination for all things
          stylish and trendy! Our platform offers a diverse range of products
          including clothing, accessories, footwear, and more for men, women,
          and kids. With a focus on quality, affordability, and the latest
          fashion trends, Shopper ensures you find the perfect items to suit
          your style. Enjoy a seamless shopping experience with our intuitive
          website, detailed product descriptions, and customer reviews. Shop
          with confidence, knowing that our fast shipping, easy returns, and
          dedicated customer service team are here to support you every step of
          the way. Discover the joy of effortless online shopping at Shopper!
        </p>
        <p>
          E-commerce websites typically display products or services along with
          detailed descriptions, images, prices and any available variation
          (e.g. sizes, colors). Each product usually has its own dedicated page
          with relevant features.
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
