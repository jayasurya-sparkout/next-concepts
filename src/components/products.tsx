'use client';
import { useState } from "react";
import { ProductCard } from "./productcard";
import { ProductDetailPopup } from "./productdetailpopup";
import { StaticImageData } from "next/image";

// Image sources
import angyDog from "../images/angry-dog.webp";
import scaredDog from "../images/scared-dog.webp";
import droller from "../images/the-drollr.webp";
import fashion from "../images/the-fashionista.webp";
import player from '../images/the-payer.webp';
import pee from '../images/the-pee-er.webp';
import unicorn from '../images/the-unicorn.webp';
import wagger from '../images/tongue-wagger.webp';

type ProductData = {
    src: StaticImageData | string;
    alt: string;
    title: string;
    description: string;
    price: number;
};

export const Products = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState<ProductData | null>(null);

    const productsData: ProductData[] = [
        { src: angyDog, alt: "Dog 1", title: "Angry Dog", description: "An angry dog", price: 10 },
        { src: scaredDog, alt: "Dog 2", title: "Scared Dog", description: "A scared dog", price: 12 },
        { src: droller, alt: "Dog 3", title: "Droller", description: "A droller dog", price: 15 },
        { src: fashion, alt: "Dog 4", title: "Fashionista Dog", description: "A Fashionista  dog", price: 8 },
        { src: player, alt: "Dog 4", title: "player Dog", description: "A player dog", price: 48 },
        { src: pee, alt: "Dog 4", title: "pee Dog", description: "A pee dog", price: 38 },
        { src: unicorn, alt: "Dog 4", title: "unicorn Dog", description: "A unicorn dog", price: 28 },
        { src: wagger, alt: "Dog 4", title: "wagger Dog", description: "A wagger dog", price: 18 },
    ];

    const handleOpenPopup = (product: ProductData) => {
        setSelectedProduct(product);
        setIsOpen(true);
    };

    const handleClosePopup = () => {
        setIsOpen(false);
        setSelectedProduct(null);
    };

    return (
        <div className="productCardWrapper">
            {productsData.map((productData, index) => (
                <ProductCard 
                    key={index} 
                    productData={{
                        src: typeof productData.src === 'string' ? productData.src : productData.src.src, 
                        alt: productData.alt,
                        title: productData.title,
                        description: productData.description,
                        price: productData.price
                    }}
                    onOpenPopup={handleOpenPopup}
                />
            ))}

            <div className={`ProductDetailPopupWrap ${isOpen && selectedProduct ? 'open' : 'close'}`} onClick={handleClosePopup}>
                {isOpen && selectedProduct && (
                    <ProductDetailPopup 
                        img={typeof selectedProduct.src === 'string' ? selectedProduct.src : selectedProduct.src.src} 
                        title={selectedProduct.title} 
                        description={selectedProduct.description} 
                        price={selectedProduct.price} 
                        onOpenPopup={handleClosePopup}
                    />
                )}
            </div>
        </div>
    );
};
