// the main components
import Home from "./Components/home.jsx"
import MySkills from "./Components/mySkills.jsx";
import MySelf from "./Components/mySelf.jsx";
import Contact from "./Components/contact.jsx";
import Navbar from "./navbar.jsx";

// swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules"

import flatIcon from "/Images/flaticon.svg"
import fontAwesome from "/Images/fontAwesome.svg"
import formSubmit from "/Images/form submit.svg"
import framerMotion from "/Images/framer-motion.svg"
import swiper from "/Images/swiper.svg"
import unDraw from "/Images/unDraw.svg"

let Main = () => {


    let screenWidth = window.innerWidth;

    return (
        <section className="Main">

            <Navbar />
            <Home /> {/* 1 */}
            <MySkills /> {/* 2 */}
            <MySelf /> {/* 3 */}
            <Contact /> {/* 4 */}

            <div className="swiper"> {/* 5 */}

                <Swiper className="mySwiper"
                    pagination={{
                        dynamicBullets: true,
                        clickable: true
                    }}
                    modules={[Pagination]}
                    slidesPerView={screenWidth > 850 ? 3 : 2}
                    spaceBetween={10}

                >
                    <SwiperSlide className="slide" > <img src={flatIcon} alt="flaticon" /> </SwiperSlide>
                    <SwiperSlide className="slide" > <img src={fontAwesome} alt="fontAwesome" /> </SwiperSlide>
                    <SwiperSlide className="slide" > <img src={formSubmit} alt="form submit" /> </SwiperSlide>
                    <SwiperSlide className="slide" > <img src={framerMotion} alt="framer-motion" /> </SwiperSlide>
                    <SwiperSlide className="slide" > <img src={swiper} alt="swiper" /> </SwiperSlide>
                    <SwiperSlide className="slide" > <img src={unDraw} alt="unDraw" /> </SwiperSlide>

                </Swiper>

            </div>

        </section>
    )
}

export default Main;