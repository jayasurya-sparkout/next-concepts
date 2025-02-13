'use client';

import { useState } from "react";
import { FaLongArrowAltLeft, FaLongArrowAltRight, FaShoppingCart } from "react-icons/fa";
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

type Props = {
    img: string;
    title: string;
    description: string;
    price: number;
    onOpenPopup: () => void;
    thumbnails: string[];
}

export const ProductDetailPopup = (props: Props) => {

    const [selectedThumbnail, setSelectedThumbnail] = useState(props.thumbnails[0]);

    function handleClose() {
        props.onOpenPopup();
    }

    function handleThumbnailClick(event: React.MouseEvent<HTMLDivElement>, thumbnail: string) {
        setSelectedThumbnail(thumbnail);
        console.log("Thumbnail clicked:", thumbnail);
        console.log("Coordinates:", { x: event.clientX, y: event.clientY });
    }    

    return (
        <div className="wrapper">
            <div className="proudctDetailPopup">
                <div className="proudctDetailPopupWrap">
                    <div className="left">
                        <div className="imageWrap">
                            <img src={props.img} alt={props.title} />
                        </div>
                        {/* <div className="thumbnailSwiper">
                            <div className="arrowLeft arrow">
                                <FaLongArrowAltLeft color="#fff" fontSize={14} />
                            </div>
                            <div className="thumbnailWrap">
                                {props.thumbnails.map((thumbnail, index) => (
                                    <div className="thumbnailImageWrap" key={index} onClick={(event) => handleThumbnailClick(event, thumbnail)}>
                                        <img key={index} src={thumbnail} alt={props.title} />
                                    </div>
                                ))}
                            </div>
                            <div className="arrowRight arrow" onClick={(event) => handleThumbnailClick(event, props.thumbnails[0])}>
                                <FaLongArrowAltRight color="#fff" fontSize={14} />
                            </div>
                        </div> */}
                        <Swiper
                            modules={[Autoplay]}
                            autoplay={{
                                delay: 2000,
                                disableOnInteraction: true,
                            }}
                            loop={true}
                            spaceBetween={50}
                            slidesPerView={2}
                            onSlideChange={() => console.log('slide change')}
                            onSwiper={(swiper) => console.log(swiper)}
                            >
                            {props.thumbnails.map((thumbnail, index) => (
                                <SwiperSlide key={index}>
                                    <img key={index} src={thumbnail} alt={props.title} />
                                </SwiperSlide>
                            ))} 
                        </Swiper>
                    </div>
                    <div className="right">
                        <div className="cloeBtnWrap" onClick={handleClose}>
                            <span>
                                <FaLongArrowAltLeft color="#5b21b6" fontSize={28} />
                            </span>
                            <span>Back To All Products</span>
                        </div>
                        <div>
                            <h3 className="pt-3 title">{props.title}</h3>
                            <p className="desc py-3">{props.description}</p>
                            <div className="price pb-3">${props.price}</div>
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
