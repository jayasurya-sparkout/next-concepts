
type ProductData = {
    src: string;
    alt: string;
    title: string;
    description: string;
    price: number;
}

type Props = {
    productData: ProductData;
}

export const ProductCard = ({ productData }: Props) => {
    
    return (
        <a href="#" className="w-72 productCard p-5">
            <div className="cardWrap shadow-lg ">
                <div className="productImageWrap">
                    <img src={productData.src} alt={productData.alt} />
                </div>
                <div className="productCardBody">
                    <h4 className="">{productData.title}</h4>
                    <p className="py-4">{productData.description}</p>
                </div>
                <div className="priceTag">
                    <span className="currencySymbol">$</span><span className="priceAmount">{productData.price}</span>
                </div>
            </div>
        </a>
    )

}