import useOnScreen from "../Hooks/useOnScreen.js";

import Navbar from "./navbar.jsx";
import { useEffect, useState } from "react";

import { motion } from "framer-motion";
import { AiOutlineClose } from "react-icons/ai"

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

let GraphicDesign = () => {

    // the bubbles
    let [isTrue, setIsTrue] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setIsTrue(!isTrue)
        }, 5000)
    }, []);

    // on click open the slider
    let [photoshop, setPhotoshop] = useState(false);
    let [illustrator, setIllustrator] = useState(false);
    let [xd, setXd] = useState(false);
    let [figma, setFigma] = useState(false);
    let [edrawmax, setEdrawmax] = useState(false);
    let [edrawmind, setEdrawmind] = useState(false);

    // IntersectionObserver
    let { element: element1, show: show1 } = useOnScreen();
    let { element: element2, show: show2 } = useOnScreen();

    return (
        <div className="GraphicDesign">

            <Navbar />

            {/* -1- */}
            <div className="one">

                <div className="left">

                    <motion.h1 initial={{ y: -300, opacity: 0, rotateX: 360 }} animate={{ y: 0, opacity: 1, rotateX: 0 }}
                        transition={{ duration: 1.7, delay: 1 }}
                    >Graphic Designing</motion.h1>

                    <motion.p initial={{ x: -400, opacity: 0 }} animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1.7, delay: 2 }}
                    >
                        I have not been in this field for too long , but I obtained a lot of experience
                        by working with my partner who spent very long working in it.
                        All I can say about designing is that it`s very rewarding, and you can`t escape the need for it.
                    </motion.p>

                    <motion.a href="#Two" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 3 }}
                    > Explore </motion.a>

                </div>

                <div className="right">

                    <motion.img src="./Images/Ibrahim Ai.svg" alt="me" className="img"
                        initial={{ opacity: 0, scale: 0.4 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 2, delay: 3.5 }}
                    />

                    <div className="links">
                        <motion.a href="https://dribbble.com/Ailli" target="blank"
                            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 5 }}
                        > <img src="./Images/dribbble V.svg" alt="dribbble" />
                        </motion.a>

                        <motion.a href="https://www.instagram.com/ib1899_af/" target="blank"
                            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 6 }}
                        > <img src="./Images/instagram.svg" alt="instagram" />
                        </motion.a>

                        <motion.a href="https://account.adobe.com/?lang=en" target="blank"
                            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 7 }}
                        > <img src="./Images/adobe V.svg" alt="adobe" />
                        </motion.a>

                        <motion.a href="https://pixabay.com/users/ib1899-af-28168231/" target="blank"
                            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 8 }}
                        > <img src="./Images/pixabay.svg" alt="pixabay" />
                        </motion.a>
                    </div>

                </div>

            </div>

            {/* -2- */}
            <div className="two" id="Two">

                <div className="top">

                    <motion.h1 ref={element1} initial={{ y: 400, opacity: 0 }} animate={{ y: show1 ? 0 : 400, opacity: show1 ? 1 : 0 }}
                        transition={{ duration: 2, delay: 1 }}
                    > Some Of My Work </motion.h1>

                    <motion.p initial={{ y: 400, opacity: 0 }} animate={{ y: show1 ? 0 : 400, opacity: show1 ? 1 : 0 }}
                        transition={{ duration: 2, delay: 1.6 }}
                    >
                        "designing is the intermediary between information and understanding"
                        Hans Hoffmann.
                    </motion.p>

                    <motion.a href="#bottom" initial={{ y: 400, opacity: 0 }} animate={{ y: show1 ? 0 : 400, opacity: show1 ? 1 : 0 }}
                        transition={{ duration: 1.5, delay: 1.9 }}
                    > Discover </motion.a>

                    <div className="shapes">
                        <motion.a animate={{ backgroundColor: isTrue ? "black" : "white" }} transition={{ duration: 1, delay: .8 }} >
                            <img src="./Images/schedule.svg" alt="schedule" />
                        </motion.a>
                        <motion.a animate={{ backgroundColor: isTrue ? "black" : "white" }} transition={{ duration: 1, delay: 1.6 }} >
                            <img src="./Images/light-bulb.svg" alt="light-bulb" />
                        </motion.a>
                        <motion.a animate={{ backgroundColor: isTrue ? "black" : "white" }} transition={{ duration: 1, delay: 2.4 }} >
                            <img src="./Images/handshake.svg" alt="handshake" />
                        </motion.a>
                        <motion.a animate={{ backgroundColor: isTrue ? "black" : "white" }} transition={{ duration: 1, delay: 3.2 }} >
                            <img src="./Images/license.svg" alt="license" />
                        </motion.a>
                        <motion.a animate={{ backgroundColor: isTrue ? "black" : "white" }} transition={{ duration: 1, delay: 4 }} >
                            <img src="./Images/paint.svg" alt="paint" />
                        </motion.a>
                        <motion.a animate={{ backgroundColor: isTrue ? "black" : "white" }} transition={{ duration: 1, delay: 4.8 }} >
                            <img src="./Images/pen.svg" alt="pen" />
                        </motion.a>
                    </div>

                </div>

                <motion.div className="bottom" id="bottom"
                    animate={{ display: photoshop || illustrator || edrawmax || edrawmind ? "none" : "grid" }}
                >

                    <motion.div className="box" ref={element2} initial={{ opacity: 0 }} animate={{ opacity: show2 ? 1 : 0 }}
                        transition={{ duration: 1, delay: 1 }}

                    > {/* 1 */}

                        <img src="./Images/photoshop.svg" alt="photoshop" />

                        <h3>Photo Shop</h3>

                        <p>It`s the main app for me to edit pictures</p>

                        <div className="chart">
                            <h4>80%</h4>
                            <div className="first"> <div className="second"></div> </div>
                        </div>

                        <button onClick={() => setPhotoshop(true)} > Watch </button>
                    </motion.div>

                    <motion.div className="box" initial={{ opacity: 0 }} animate={{ opacity: show2 ? 1 : 0 }}
                        transition={{ duration: 1, delay: 2 }}
                    > {/* 2 */}

                        <img src="./Images/illustrator.svg" alt="illustrator" />

                        <h3>illustrate</h3>

                        <p>This is the best app for me to crate illustartions</p>

                        <div className="chart">
                            <h4>85%</h4>
                            <div className="first"> <div className="second"></div> </div>
                        </div>

                        <button onClick={() => setIllustrator(true)} > Watch </button>
                    </motion.div>

                    <motion.div className="box" initial={{ opacity: 0 }} animate={{ opacity: show2 ? 1 : 0 }}
                        transition={{ duration: 1, delay: 3 }}
                    > {/* 3 */}

                        <img src="./Images/xd.svg" alt="xd" />

                        <h3>XD</h3>

                        <p>UI / UX , Xd and Figma are the best for job</p>

                        <div className="chart">
                            <h4>88%</h4>
                            <div className="first"> <div className="second"></div> </div>
                        </div>

                        <button onClick={() => setXd(true)} > Watch </button>
                    </motion.div>

                    <motion.div className="box" initial={{ opacity: 0 }} animate={{ opacity: show2 ? 1 : 0 }}
                        transition={{ duration: 1, delay: 4 }}
                    > {/* 4 */}

                        <img src="./Images/figma.svg" alt="figma" />

                        <h3>Figma</h3>

                        <p>It`s the main app for me to edit pictures</p>

                        <div className="chart">
                            <h4>90%</h4>
                            <div className="first"> <div className="second"></div> </div>
                        </div>

                        <button onClick={() => setFigma(true)} > Watch </button>
                    </motion.div>

                    <motion.div className="box" initial={{ opacity: 0 }} animate={{ opacity: show2 ? 1 : 0 }}
                        transition={{ duration: 1, delay: 5 }}
                    > {/* 5 */}

                        <img src="./Images/edraw.svg" alt="edraw" />

                        <h3>EdrawMax</h3>

                        <p>The infographic with it`s master</p>

                        <div className="chart">
                            <h4>90%</h4>
                            <div className="first"> <div className="second"></div> </div>
                        </div>

                        <button onClick={() => setEdrawmax(true)} > Watch </button>
                    </motion.div>
                    <motion.div className="box" initial={{ opacity: 0 }} animate={{ opacity: show2 ? 1 : 0 }}
                        transition={{ duration: 1, delay: 6 }}
                    > {/* 6 */}

                        <img src="./Images/edraw mind.svg" alt="edraw mind" />

                        <h3>EdrawMind</h3>

                        <p>I think it`s` the best app for planning </p>

                        <div className="chart">
                            <h4>100%</h4>
                            <div className="first"> <div className="second"></div> </div>
                        </div>

                        <button onClick={() => setEdrawmind(true)} > Watch </button>
                    </motion.div>

                </motion.div>

                <motion.div className="all"  // PhotoShop
                    animate={{ display: photoshop ? "grid" : "none" }}
                >
                    <Swiper className="mySwiper" slidesPerView={1} modules={[Navigation]} navigation={true}  >

                        <SwiperSlide className="slide">

                            <i className="i" onClick={() => setPhotoshop(false)} > <AiOutlineClose /> </i>
                            <img src="./Images/design/p1.jpg" alt="p" />

                        </SwiperSlide>
                        <SwiperSlide className="slide">

                            <i className="i" onClick={() => setPhotoshop(false)} > <AiOutlineClose /> </i>
                            <img src="./Images/design/p2.jpg" alt="p" />

                        </SwiperSlide>
                        <SwiperSlide className="slide">

                            <i className="i" onClick={() => setPhotoshop(false)} > <AiOutlineClose /> </i>
                            <img src="./Images/design/p3.jpg" alt="p" />

                        </SwiperSlide>

                    </Swiper>

                </motion.div>

                <motion.div className="all" // illustrator 
                    animate={{ display: illustrator ? "grid" : "none" }}
                >
                    <Swiper className="mySwiper" modules={[Navigation]} navigation={true}  >

                        <SwiperSlide className="slide">

                            <i className="i" onClick={() => setIllustrator(false)} > <AiOutlineClose /> </i>
                            <img src="./Images/design/i1.jpg" alt="i" />

                        </SwiperSlide>
                        <SwiperSlide className="slide">

                            <i className="i" onClick={() => setIllustrator(false)} > <AiOutlineClose /> </i>
                            <img src="./Images/design/i2.png" alt="i" />

                        </SwiperSlide>
                        <SwiperSlide className="slide">

                            <i className="i" onClick={() => setIllustrator(false)} > <AiOutlineClose /> </i>
                            <img src="./Images/design/i3.png" alt="i" />

                        </SwiperSlide>


                    </Swiper>
                </motion.div>

                <motion.div className="all" // EdrawMax 
                    animate={{ display: edrawmax ? "grid" : "none" }}
                >
                    <Swiper className="mySwiper" modules={[Navigation]} navigation={true}  >

                        <SwiperSlide className="slide">

                            <i className="i" onClick={() => setEdrawmax(false)} > <AiOutlineClose /> </i>
                            <img src="./Images/design/in1.png" alt="i" />

                        </SwiperSlide>
                        <SwiperSlide className="slide">

                            <i className="i" onClick={() => setEdrawmax(false)} > <AiOutlineClose /> </i>
                            <img src="./Images/design/in7.png" alt="i" />

                        </SwiperSlide>
                        <SwiperSlide className="slide">

                            <i className="i" onClick={() => setEdrawmax(false)} > <AiOutlineClose /> </i>
                            <img src="./Images/design/in6.png" alt="i" />

                        </SwiperSlide>

                    </Swiper>
                </motion.div>

                <motion.div className="all" // EdrawMInd 
                    animate={{ display: edrawmind ? "grid" : "none" }}
                >
                    <Swiper className="mySwiper" modules={[Navigation]} navigation={true}  >

                        <SwiperSlide className="slide">

                            <i className="i" onClick={() => setEdrawmind(false)} > <AiOutlineClose /> </i>
                            <img src="./Images/design/m1.png" alt="m" />

                        </SwiperSlide>
                        <SwiperSlide className="slide">

                            <i className="i" onClick={() => setEdrawmind(false)} > <AiOutlineClose /> </i>
                            <img src="./Images/design/m2.png" alt="m" />

                        </SwiperSlide>

                    </Swiper>
                </motion.div>

            </div>

        </div>
    )
}
export default GraphicDesign;