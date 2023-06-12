import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import BannerCard from "./BannerCard";
import "swiper/css";
const BannerSlider = () => {
  const bannerData = [
    { name: "resturant", src: "/assets/resturant.jpg" },
    { name: "clothes", src: "/assets/clothes.jpg" },
    { name: "food", src: "/assets/food.webp" },
    { name: "electronics", src: "/assets/electronics.jpg" },
  ];

  return (
    <>
      {/* <BannerCard list={bannerData} /> */}
      <div className="bg-gray-900 p-7">
        <Swiper
          spaceBetween={50}
          slidesPerView={3}
          // onSlideChange={() => console.log("slide change")}
          // onSwiper={(swiper) => console.log(swiper)}
          className="content"
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
        >
          {bannerData.map((item, index) => {
            return (
              <SwiperSlide key={index}>
                <BannerCard list={item} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </>
  );
};

export default BannerSlider;
