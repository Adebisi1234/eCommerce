import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import { Pagination, Navigation } from "swiper";
import { useParams } from "react-router-dom";
import { useTasks } from "../context/Store";

const Showcase = () => {
  const { name } = useParams();

  // init Swiper:

  const clock = useTasks().clocks.find((clock) => clock.name === name);
  return (
    <>
      <Swiper
        navigation={true}
        pagination={true}
        modules={[Navigation, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            src={clock?.imgUrl}
            className="w-full object-cover h-full mx-auto"
            alt="product image"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={clock?.imgUrl}
            className="w-full object-cover h-full mx-auto"
            alt="product image"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={clock?.imgUrl}
            className="w-full object-cover h-full mx-auto"
            alt="product image"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Showcase;
