"use client";
import React from "react";
import ProductCard from "./ProductCard";

const products = [
  {
    title: "Everyday Fresh Meat",
    image:
      "https://react.marketpro.wowtheme7.com/assets/images/thumbs/promotional-banner-img1.png",
  },
  {
    title: "Daily Fresh Vegetables",
    image:
      "https://react.marketpro.wowtheme7.com/assets/images/thumbs/promotional-banner-img2.png",
  },
  {
    title: "Everyday Fresh Milk",
    image:
      "https://react.marketpro.wowtheme7.com/assets/images/thumbs/promotional-banner-img3.png",
  },
  {
    title: "Everyday Fresh Fruits",
    image:
      "https://react.marketpro.wowtheme7.com/assets/images/thumbs/promotional-banner-img4.png",
  },
];

function SellerCard() {
  return (
    <div className="container-fluid p-4">
      <div class="three">
        <h1>Best Seller</h1>
      </div>
      <div className="d-flex justify-content-space-between align-items-center flex-wrap">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            title={product.title}
            image={product.image}
          />
        ))}
      </div>
    </div>
  );
}

export default SellerCard;
