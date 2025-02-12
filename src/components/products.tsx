import { ProductCard } from "./productcard";
import { StaticImageData } from 'next/image'; // Import StaticImageData type

// Imgage sources
import angyDog from "../images/angry-dog.webp";
import scaredDog from "../images/scared-dog.webp";
import droller from "../images/the-drollr.webp";
import fashion from "../images/the-fashionista.webp";
import player from '../images/the-payer.webp';
import pee from '../images/the-pee-er.webp';
import unicorn from '../images/the-unicorn.webp';
import wagger from '../images/tongue-wagger.webp';

// Define the ProductData type
type productsData = {
    src: StaticImageData | string;
    alt: string;
};

export const Products = () => {

    const productsData = [
        { src: angyDog, alt: "Dog 1", title: "Angry Dog", description: "An angry dog", price: 10 },
        { src: scaredDog, alt: "Dog 2", title: "Scared Dog", description: "A scared dog", price: 12 },
        { src: droller, alt: "Dog 3", title: "Droller", description: "A droller dog", price: 15 },
        { src: fashion, alt: "Dog 4", title: "Dog 4", description: "A cute dog", price: 8 },
    ];

    return (
        // <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
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
                }} />
            ))}
        </div>
    )
}