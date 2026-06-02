import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import banner01 from "../images/banner01.png"
import banner02 from "../images/banner02.png"
import banner03 from "../images/banner03.png"
import banner04 from "../images/banner04.png"
import banner05 from "../images/banner05.png"
import banner06 from "../images/banner06.png"

function SwiperBanner() {
    return (
        <div className="swiper-container">
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={30}
                slidesPerView={1}
                navigation
                pagination={{ type: "fraction"}}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                loop  // 슬라이드 반복
                className="w-full"
                renderFraction={{function (currentClass, totalClass) {
                    return `<span class="${currentClass}"></span> | <span class="${totalClass}"</span>`;
                }
            }}>
            <div className='swiper-wrapper'>
                <SwiperSlide><img src={banner01} object-fit="cover" className='swiper-banner-img'/></SwiperSlide>
                <SwiperSlide><img src={banner02} object-fit="cover" className='swiper-banner-img'/></SwiperSlide>
                <SwiperSlide><img src={banner03} object-fit="cover" className='swiper-banner-img'/></SwiperSlide>
                <SwiperSlide><img src={banner04} object-fit="cover" className='swiper-banner-img'/></SwiperSlide>
                <SwiperSlide><img src={banner05} object-fit="cover" className='swiper-banner-img'/></SwiperSlide>
                <SwiperSlide><img src={banner06} object-fit="cover" className='swiper-banner-img'/></SwiperSlide>
            </div>
            </Swiper>
        </div>
    )
}
export default SwiperBanner;