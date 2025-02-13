'use client';

import { useState } from "react";

type ProductData = {
    src: string;
    alt: string;
    title: string;
    description: string;
    price: number;
};

type Props = {
    productData: ProductData;
    onOpenPopup: (product: ProductData) => void;
};

export const ProductCard = ({ productData, onOpenPopup }: Props) => {
    const [countClick, setCountClick] = useState(0);

    function handleClick() {
        console.log("Increment like count");
        console.log("Product Data:", productData);
        onOpenPopup(productData);
        setCountClick(prev => prev + 1);
    }

    return (
        <div onClick={handleClick} className="w-72 productCard p-5">
            <h2> State value: {countClick} </h2>
            <div className="cardWrap shadow-lg">
                <div className="productImageWrap">
                    <img src={productData.src} alt={productData.alt} />
                </div>
                <div className="productCardBody">
                    <h4>{productData.title}</h4>
                    <p className="py-4">{productData.description}</p>
                </div>
                <div className="priceTag">
                    <span className="currencySymbol">$</span>
                    <span className="priceAmount">{productData.price}</span>
                </div>
            </div>
        </div>
    );
};
