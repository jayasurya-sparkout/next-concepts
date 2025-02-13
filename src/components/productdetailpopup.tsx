'use client';

import { useState } from "react";
import { FaLongArrowAltLeft, FaShoppingCart } from "react-icons/fa";

type Props = {
    img: string;
    title: string;
    description: string;
    price: number;
    onOpenPopup: () => void;
}

export const ProductDetailPopup = (props: Props) => {
    function handleClose() {
        props.onOpenPopup();
    }

    return (
        <div className="wrapper">
            <div className="proudctDetailPopup">
                <div className="proudctDetailPopupWrap">
                    <div className="left">
                        <img src={props.img} alt={props.title} />
                    </div>
                    <div className="right">
                        <div className="cloeBtnWrap" onClick={handleClose}>
                            <span>
                                <FaLongArrowAltLeft color="#5b21b6" fontSize={28} />
                            </span>
                            <span>Back To All Products</span>
                        </div>
                        <div>
                            <h3>{props.title}</h3>
                            <p>{props.description}</p>
                            <div className="price">${props.price}</div>
                        </div>
                        <div>
                            <div className="quantityWrap">
                                <div className="quantity">
                                    <label>Qty.</label>
                                    <input inputMode="numeric" min="1" type="number" placeholder="1" />
                                </div>
                                <div className="size">
                                    <label>Size</label>
                                    <select>
                                        <option>3 X 3</option>
                                        <option>4 X 4</option>
                                        <option>5.5 X 5.5</option>
                                    </select>
                                </div>
                            </div>
                            <div className="button">
                                <button>Add To Cart
                                    <span>
                                        <FaShoppingCart color="#5b21b6" fontSize={20} />
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
