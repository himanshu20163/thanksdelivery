"use client";
import React from 'react'
import "./product-slider.css";
import { ShoppingCart } from "lucide-react";

const Demoslider = ()=>{
    const list = [
        "All",
        "grocery",
        "Fruits",
         "grocery",
        "Fruits",
    ]
    const products_data =[
        {
            img:"https://react.marketpro.wowtheme7.com/assets/images/thumbs/product-img7.png",
            title:"C-500 Antioxidant Protect Dietary Supplement",
            subtitle:"By Lucky Supermarket",
            saleprice:"$28.99",
            regprice:"$14.99",
            rating:"4.8(17k)"
        },
        {
            img:"https://react.marketpro.wowtheme7.com/assets/images/thumbs/product-img7.png",
            title:"C-500 Antioxidant Protect Dietary Supplement",
            subtitle:"By Lucky Supermarket",
            saleprice:"$28.99",
            regprice:"$14.99",
            rating:"4.5(5k)"
        },
        {
            img:"https://react.marketpro.wowtheme7.com/assets/images/thumbs/product-img7.png",
            title:"C-500 Antioxidant Protect Dietary Supplement",
            subtitle:"By Lucky Supermarket",
            saleprice:"$28.99",
            regprice:"$14.99",
            rating:"4.2(8k)"
        },
        {
            img:"https://react.marketpro.wowtheme7.com/assets/images/thumbs/product-img7.png",
            title:"C-500 Antioxidant Protect Dietary Supplement",
            subtitle:"By Lucky Supermarket",
            saleprice:"$28.99",
            regprice:"$14.99",
            rating:"4.2(8k)"
        },
    ]
    return(
        <div className="rcmdproductcontainer">
            <div className="cotainer">
                <div className="row p-2">
                    <div className="col-lg-6">
                        <h2>Our Product</h2>
                    </div>
                    <div className="col-lg-6">
                       <div className="tabs-container">
                        {
                            list.map((ele , index)=>{
                                return(
                                    <span key={index} className='active'>{ele}</span>
                                )
                            })
                        }
                        </div>  
                    </div>
                </div>
                <div className="row">
                {
                            products_data.map((ele)=>{
                                return(
                                   <div className='col-lg-3 col-md-6 col-12 productcard'>
                                    <img src={ele.img} />
                                    <h4>{ele.title}</h4>
                                    <h5>{ele.subtitle}</h5>
                                    <span><stong>{ele.regprice}</stong>{ele.saleprice}</span>
                                    <p>{ele.rating}</p>
                                    <button className='btncard'>Add to cart<ShoppingCart /></button>
                                    </div>
                                )
                            })
                         }
                </div>
            </div>
        </div>
    )
}

export default Demoslider;