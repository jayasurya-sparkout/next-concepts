'use client';
import { useState } from "react";
import { ProductCard } from "./productcard";
import { ProductDetailPopup } from "./productdetailpopup";
import { StaticImageData } from "next/image";

// Image sources
import angyDog from "../images/angry-dog.webp";
import angry_1 from "../images/angry_1.jpeg";
import angry_2 from "../images/angry_2.jpg";
import angry_3 from "../images/angry_3.jpeg";
import angry_4 from "../images/angry_4.png";
import scaredDog from "../images/scared-dog.webp";
import scaredDog_1 from "../images/Scared_1.png";
import scaredDog_2 from "../images/Scared_1.png";
import scaredDog_3 from "../images/Scared_1.png";
import scaredDog_4 from "../images/Scared_1.png";
import droller from "../images/the-drollr.webp";
import droller_1 from "../images/droller_1.avif";
import droller_2 from "../images/droller_2.avif";
import droller_3 from "../images/droller_3.jpg";
import droller_4 from "../images/droller_4.jpeg";
import fashion from "../images/the-fashionista.webp";
import fashion_1 from "../images/fashion_1.jpeg";
import fashion_2 from "../images/fashion_2.jpeg";
import fashion_3 from "../images/fashion_3.jpeg";
import fashion_4 from "../images/fashion_4.jpeg";
import player from '../images/the-payer.webp';
import player_1 from "../images/player_1.jpg";
import player_3 from "../images/player_3.jpg";
import player_4 from "../images/player_4.png";
import pee from '../images/the-pee-er.webp';
import unicorn from '../images/the-unicorn.webp';
import wagger from '../images/tongue-wagger.webp';

type ProductData = {
    src: StaticImageData | string;
    alt: string;
    title: string;
    description: string;
    price: number;
    thumbnails: (StaticImageData | string)[];
};

export const Products = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState<ProductData | null>(null);

    const productsData: ProductData[] = [
        { src: angyDog, alt: "Dog 1", title: "Angry Dog", description: "An angry dog", price: 10, thumbnails: [angry_1, angry_2, angry_3, angry_4] },
        { src: scaredDog, alt: "Dog 2", title: "Scared Dog", description: "A scared dog", price: 12, thumbnails: [scaredDog_1, scaredDog_2, scaredDog_3, scaredDog_4] },
        { src: droller, alt: "Dog 3", title: "Droller", description: "A droller dog", price: 15, thumbnails: [droller_1, droller_2, droller_3, droller_4] },
        { src: fashion, alt: "Dog 4", title: "Fashionista Dog", description: "A Fashionista  dog", price: 8, thumbnails: [fashion_1, fashion_2, fashion_3, fashion_4] },
        { src: player, alt: "Dog 4", title: "player Dog", description: "A player dog", price: 48, thumbnails: [player_1, player_3, player_4] },
        { src: pee, alt: "Dog 4", title: "pee Dog", description: "A pee dog", price: 38, thumbnails: [angyDog, scaredDog] },
        { src: unicorn, alt: "Dog 4", title: "unicorn Dog", description: "A unicorn dog", price: 28, thumbnails: [angyDog, scaredDog] },
        { src: wagger, alt: "Dog 4", title: "wagger Dog", description: "A wagger dog", price: 18, thumbnails: [angyDog, scaredDog] },
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
                        price: productData.price,
                        thumbnails: productData.thumbnails,
                    }}
                    onOpenPopup={handleOpenPopup}
                />
            ))}

            <div className={`ProductDetailPopupWrap ${isOpen && selectedProduct ? 'open' : 'close'}`}>
                {isOpen && selectedProduct && (
                    <ProductDetailPopup 
                        img={typeof selectedProduct.src === 'string' ? selectedProduct.src : selectedProduct.src.src} 
                        title={selectedProduct.title} 
                        description={selectedProduct.description}   
                        price={selectedProduct.price} 
                        onOpenPopup={handleClosePopup}
                        thumbnails={selectedProduct.thumbnails.map(thumbnail => typeof thumbnail === 'string' ? thumbnail : thumbnail.src)}
                    />
                )}
            </div>
        </div>
    );
};
