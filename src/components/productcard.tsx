'use client';

import { useState } from "react";
import { StaticImageData } from "next/image";

type ProductData = {
    src: string;
    alt: string;
    title: string;
    description: string;
    price: number;
    thumbnails: (string | StaticImageData)[];
};

type Props = {
    productData: ProductData;
    onOpenPopup: (product: ProductData) => void;
};

export const ProductCard = ({ productData, onOpenPopup }: Props) => {

    function handleClick() {
        onOpenPopup(productData);
    }

    return (
        <div onClick={handleClick} className="w-72 productCard p-5">
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
