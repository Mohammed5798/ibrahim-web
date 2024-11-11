// fontawesome
import { SiNextdotjs, SiExpress, SiGnubash, SiThealgorithms } from "react-icons/si"
import { BiLogoTypescript, BiLogoNodejs, BiLogoMongodb } from "react-icons/bi"
import { FcLinux } from "react-icons/fc"
import { DiLinux } from "react-icons/di"
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai"

// motion
import { motion } from "framer-motion";

// intersectionObserver
import useOnScreen from "../Hooks/useOnScreen";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

// swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Pagination } from "swiper/modules";


let FrontEnd = () => {

    let body = document.body;
    let navigate = useNavigate();

    // the navbar , open close
    let [clicked, setClicked] = useState(false);

    // motion
    let { element: element1, show: show1 } = useOnScreen();
    let { element: element2, show: show2 } = useOnScreen();
    let { element: element3, show: show3 } = useOnScreen();

    // for Switching the images
    let [img1, setImg1] = useState(false);
    let [img2, setImg2] = useState(false);
    let [img3, setImg3] = useState(false);
    let [img4, setImg4] = useState(false);
    let [img5, setImg5] = useState(false);
    let [img6, setImg6] = useState(false);
    let [img7, setImg7] = useState(false);
    let [img8, setImg8] = useState(false);
    let [img9, setImg9] = useState(false);
    let [img10, setImg10] = useState(false);
    let [img11, setImg11] = useState(false);
    let [img12, setImg12] = useState(false);

    //! Open close the navbar at phone size
    let [isNavBar, setIsNavBar] = useState(false);
    return (
        <div className="FrontEnd">

            {/* The navbar  */}
            <div className={clicked ? "Navbar clicked" : "Navbar"} id={isNavBar ? "open" : "close"} >

                <img src="./Images/logo B W.svg" alt="logo" className="logo" />

                <i className="phone" onClick={() => { setIsNavBar(!isNavBar); setClicked(false) }}> <AiOutlineMenu /> </i>

                <motion.ul className="navigation"
                    animate={{ x: clicked ? 300 : 0, display: clicked ? "none" : "flex" }}
                >
                    <li onClick={() => setIsNavBar(false)} > <a onClick={() => navigate("/")} > Home </a> </li>
                    <li onClick={() => setIsNavBar(false)} > <a onClick={() => navigate("/front-end")}> Fullstack </a> </li>
                    <li onClick={() => setIsNavBar(false)} > <a onClick={() => navigate("/graphic-design")} > Graphic Design </a> </li>
                </motion.ul>

                <motion.img src="./Images/sun.svg" alt="sun" className="sun"
                    whileHover={{ rotate: 360, }} animate={{ display: clicked ? "none" : "flex" }}
                    onClick={() => { setClicked(true) }}
                />

                {/*  not appear until click  */}
                <motion.ul className="modes"
                    initial={{ x: "-400px", display: "none" }}
                    animate={{ x: clicked ? 0 : -400, display: clicked ? "flex" : "none" }}
                >
                    <li onClick={() => { body.className = "RedMode"; setClicked(false); setIsNavBar(false) }} > <span className="red">   Red    </span> mode  </li>
                    <li onClick={() => { body.className = "BlueMode"; setClicked(false); setIsNavBar(false) }} > <span className="blue">  Blue   </span> mode  </li>
                    <li onClick={() => { body.className = ""; setClicked(false); setIsNavBar(false) }} > <span className="violet">Violet </span> mode  </li>
                    <li onClick={() => { body.className = "DarkMode"; setClicked(false); setIsNavBar(false) }} > <span className="dark">  Dark   </span> mode  </li>
                </motion.ul>

                <AiOutlineClose className="x" onClick={() => setClicked(false)} />


            </div>

            {/* -1- */}
            <div className="one">

                <motion.div className="left" initial={{ x: 500, opacity: 0 }} animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: .3 }}
                >
                    <h1>Fullstack</h1>
                    <h2>Development</h2>

                    <p>
                        With a passion for crafting seamless user experiences, I bring expertise in both front-end and back-end technologies.
                        From responsive UI designs to robust server-side implementations, I thrive on creating innovative solutions that elevate digital experiences.
                    </p>

                    <a href="#Two"> Explore </a>
                </motion.div>

                <motion.div className="right" initial={{ x: -500, opacity: 0 }} animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1.3, delay: 1 }}
                > <img src="./Images/front-end home.svg" alt="" />
                </motion.div>

            </div>

            {/* -2- */}
            <div className="two" id="Two">

                <header>
                    <img src="./Images/tryangle.svg" alt="triangle" className="imgW" />
                    <img src="./Images/BlackMode/tryangle.png" alt="triangle" className="imgB" />

                    <motion.h1 ref={element1} initial={{ opacity: 0, y: 200 }}
                        animate={{ opacity: show1 ? 1 : 0, y: show1 ? 0 : 200 }} transition={{ duration: 2, delay: .3 }}
                    > Main techs
                    </motion.h1>

                    <motion.h3 ref={element2} initial={{ y: 300 }} animate={{ y: show2 ? 0 : 300 }} transition={{ duration: 2, delay: .3 }}
                    > Practising is equal if not more important then learning
                    </motion.h3>

                    <motion.div className="circle" initial={{ y: -100, opacity: 0 }} animate={{ opacity: show1 ? 1 : 0, y: show1 ? 0 : -100 }}
                        transition={{ duration: 2, delay: .3 }}
                    ></motion.div>
                </header>

                <Swiper className="mySwiper" modules={[Navigation]} navigation={true}  >

                    <SwiperSlide className="slide"> {/* 1 */}
                        <motion.img src="./Images/front-end two.svg" alt="front-end two"
                            initial={{ opacity: 0 }} animate={{ opacity: show2 ? 1 : 0 }} transition={{ duration: 1.4, delay: 1.8 }}
                        />

                        <div className="left">

                            {/* on Click switch color */}
                            <motion.img src="./Images/html.svg" alt="html"
                                animate={{ display: img1 ? "none" : "block" }} transition={{ duration: 1 }}
                            />
                            <motion.img src="./Images/html W.svg" alt="html" initial={{ display: "none" }}
                                animate={{ display: img1 ? "block" : "none" }} transition={{ duration: 1 }}
                            />

                            <h1>Hypertext markup languages </h1>

                            <p> I craft digital elegance with HTML, where each tag is a brushstroke.
                                My code weaves simplicity and sophistication, shaping seamless web experiences effortlessly.
                            </p>

                            <div className="chart">
                                <h4>90%</h4>
                                <div className="first"> <div className="second"></div> </div>
                            </div>

                            <button onClick={() => setImg1(!img1)}> <a href="https://ib1899.github.io/Education/" target="blank"> View Project  </a></button>

                        </div>

                        <div className="right">

                            {/* on Click switch color */}
                            <motion.img src="./Images/sass.svg" alt="sass"
                                animate={{ display: img3 ? "none" : "block" }} transition={{ duration: 1 }}
                            />
                            <motion.img src="./Images/sass W.svg" alt="sass" initial={{ display: "none" }}
                                animate={{ display: img3 ? "block" : "none" }} transition={{ duration: 1 }}
                            />

                            <h1>Syntactically css</h1>

                            <p>In the world of styles, I am an SCSS virtuoso.
                                Precision meets creativity in my code, sculpting chic and responsive designs with an effortless touch of elegance.
                            </p>

                            <div className="chart">
                                <h4>99%</h4>
                                <div className="first"> <div className="second"></div> </div>
                            </div>

                            <button onClick={() => setImg3(!img3)}> <a href="https://ib1899.github.io/Traveling/" target="blank"> View Project  </a></button>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className="slide"> {/* 2 */}
                        <img src="./Images/front-end two2.svg" alt="front-end two" />

                        <div className="left">

                            {/* on Click switch color */}
                            <motion.i style={{ color: "darkblue" }}
                                animate={{ display: img3 ? "none" : "block" }} transition={{ duration: 1 }}
                            >
                                <BiLogoTypescript />
                            </motion.i>
                            <motion.i src="./Images/sass W.svg" alt="sass" initial={{ display: "none" }}
                                animate={{ display: img3 ? "block" : "none" }} transition={{ duration: 1 }}
                            >
                                <BiLogoTypescript />
                            </motion.i>

                            <h1>TypeScript</h1>

                            <p>Infusing intelligence into code, Typescript is my tool of choice.
                                With static typing and enhanced readability, enabling seamless collaboration and maintaining code elegance over time,
                                I ensure robust applications stand the test of complexity.
                            </p>

                            <div className="chart">
                                <h4>99%</h4>
                                <div className="first"> <div className="second"></div> </div>
                            </div>

                            <button onClick={() => setImg3(!img3)} > TypeScript </button>

                        </div>
                        <div className="right">

                            {/* on Click switch color */}
                            <motion.img src="./Images/js.svg" alt="js"
                                animate={{ display: img4 ? "none" : "block" }} transition={{ duration: 1 }}
                            />
                            <motion.img src="./Images/js W.svg" alt="js" initial={{ display: "none" }}
                                animate={{ display: img4 ? "block" : "none" }} transition={{ duration: 1 }}
                            />

                            <h1>Java Script </h1>

                            <p> Transforming ideas into interactive reality, I wield JavaScript as my magical tool.
                                Its importance lies in the alchemy of turning concepts into dynamic, responsive, and user-friendly web experiences.
                            </p>

                            <div className="chart">
                                <h4>90%</h4>
                                <div className="first"> <div className="second"></div> </div>
                            </div>

                            <button onClick={() => setImg4(!img4)} > JS </button>


                        </div>


                    </SwiperSlide>

                    <SwiperSlide className="slide"> {/* 3 */}
                        <img src="./Images/front-end two3.svg" alt="front-end two" />

                        <div className="left">

                            {/* on Click switch color */}
                            <motion.img src="./Images/github.svg" alt="github"
                                animate={{ display: img5 ? "none" : "block" }} transition={{ duration: 1 }}
                            />
                            <motion.img src="./Images/github W.svg" alt="github" initial={{ display: "none" }}
                                animate={{ display: img5 ? "block" : "none" }} transition={{ duration: 1 }}
                            />

                            <h1>GitHub</h1>

                            <p>Illuminating the collaborative journey with GitHub brilliance, I demonstrate a profound understanding of version control.
                                Its importance in maintaining code quality and facilitating teamwork resonates in my well-organized and documented repositories.
                            </p>

                            <div className="chart">
                                <h4>87%</h4>
                                <div className="first"> <div className="second"></div> </div>
                            </div>

                            <button onClick={() => setImg5(!img5)} >GitHub</button>

                        </div>
                        <div className="right">

                            {/* on Click switch color */}
                            <motion.i
                                animate={{ display: img6 ? "none" : "block" }} transition={{ duration: 1 }}
                            >
                                <FcLinux />
                            </motion.i>
                            <motion.i initial={{ display: "none" }}
                                animate={{ display: img6 ? "block" : "none" }} transition={{ duration: 1 }}
                            >
                                <DiLinux />
                            </motion.i>

                            <h1>Linux</h1>

                            <p>Architecting digital pathways, I prioritize connectivity for optimal system performance.
                                My proficiency in Linux underlines the importance of a stable foundation, ensuring the seamless flow of data in full-stack development..
                            </p>

                            <div className="chart">
                                <h4>85%</h4>
                                <div className="first"> <div className="second"></div> </div>
                            </div>

                            <button onClick={() => setImg6(!img6)} > Linux </button>


                        </div>


                    </SwiperSlide>

                    <SwiperSlide className="slide"> {/* 4 */}
                        <img src="./Images/front-end two3.svg" alt="front-end two" />

                        <div className="left">

                            {/* on Click switch color */}
                            <motion.i style={{ color: "black" }}
                                animate={{ display: img7 ? "none" : "block" }} transition={{ duration: 1 }}
                            >
                                <SiNextdotjs />
                            </motion.i>

                            <motion.i initial={{ display: "none" }}
                                animate={{ display: img7 ? "block" : "none" }} transition={{ duration: 1 }}
                            >
                                <SiNextdotjs />
                            </motion.i>

                            <h1>Next.js</h1>

                            <p>I elevate web experiences with Next.js proficiency. Its importance is evident in creating SSR,
                                SEO efficient projects. Dive into my Messages fullstack app, a showcase of Next.js capabilities in real-time messaging solutions.
                            </p>

                            <div className="chart">
                                <h4>90%</h4>
                                <div className="first"> <div className="second"></div> </div>
                            </div>

                            <button onClick={() => setImg7(!img7)} >Visit Messages X</button>

                        </div>
                        <div className="right">

                            {/* on Click switch color */}
                            <motion.img src="./Images/react.svg" alt="react"
                                animate={{ display: img8 ? "none" : "block" }} transition={{ duration: 1 }}
                            />
                            <motion.img src="./Images/react W.svg" alt="react" initial={{ display: "none" }}
                                animate={{ display: img8 ? "block" : "none" }} transition={{ duration: 1 }}
                            />

                            <h1>React.js</h1>

                            <p>Discover the power of React.js as I craft dynamic, responsive interfaces. Its importance lies in elevating user experiences.
                                Explore my expertise through a Social Media fullstack app, built seamlessly with the MERN Stack.
                            </p>

                            <div className="chart">
                                <h4>85%</h4>
                                <div className="first"> <div className="second"></div> </div>
                            </div>

                            <button onClick={() => setImg8(!img8)} > Visit Social Media </button>


                        </div>


                    </SwiperSlide>

                    <SwiperSlide className="slide"> {/* 5 */}
                        <img src="./Images/front-end two3.svg" alt="front-end two" />

                        <div className="left">

                            {/* on Click switch color */}
                            <motion.i style={{ color: "green" }}
                                animate={{ display: img9 ? "none" : "block" }} transition={{ duration: 1 }}
                            >
                                <BiLogoNodejs />
                            </motion.i>

                            <motion.i initial={{ display: "none" }}
                                animate={{ display: img9 ? "block" : "none" }} transition={{ duration: 1 }}
                            >
                                <BiLogoNodejs />
                            </motion.i>

                            <h1>Node.js</h1>

                            <p>I navigate the server-side with Node.js expertise, seamlessly handling data and enabling real-time updates.
                                Notably, I've built a Social Media fullstack app with the MERN Stack, showcasing Node.js for scalability and responsiveness.
                            </p>

                            <div className="chart">
                                <h4>90%</h4>
                                <div className="first"> <div className="second"></div> </div>
                            </div>

                            <button onClick={() => setImg9(!img9)} >Visit Social Media</button>

                        </div>
                        <div className="right">

                            {/* on Click switch color */}
                            <motion.i style={{ color: "blue" }}
                                animate={{ display: img10 ? "none" : "block" }} transition={{ duration: 1 }}
                            >
                                <SiThealgorithms />
                            </motion.i>

                            <motion.i initial={{ display: "none" }}
                                animate={{ display: img10 ? "block" : "none" }} transition={{ duration: 1 }}
                            >
                                <SiThealgorithms />
                            </motion.i>

                            <h1 style={{ fontSize: 26 }} >Data Structure & Algorithms</h1>

                            <p>I ensure fast, proficient, and smart solutions
                                by mastering many Data structures & understanding complex algorithms, I demonstrate a deep understanding, ensuring optimal applications for intricate coding challenges.
                            </p>

                            <div className="chart">
                                <h4>85%</h4>
                                <div className="first"> <div className="second"></div> </div>
                            </div>

                            <button onClick={() => setImg10(!img10)} > Data Structure & Algorithms </button>


                        </div>


                    </SwiperSlide>

                    <SwiperSlide className="slide"> {/* 6 */}
                        <img src="./Images/front-end two3.svg" alt="front-end two" />

                        <div className="left">

                            {/* on Click switch color */}
                            <motion.i style={{ color: "limegreen" }}
                                animate={{ display: img11 ? "none" : "block" }} transition={{ duration: 1 }}
                            >
                                <BiLogoMongodb />
                            </motion.i>

                            <motion.i initial={{ display: "none" }}
                                animate={{ display: img11 ? "block" : "none" }} transition={{ duration: 1 }}
                            >
                                <BiLogoMongodb />
                            </motion.i>

                            <h1>MongoDB</h1>

                            <p>
                                Mastering MongoDB, a non-relational and swift database, I bring efficiency to data management.
                                My deep understanding ensures seamless utilization of MongoDB's flexibility for optimal and scalable solutions.
                            </p>

                            <div className="chart">
                                <h4>90%</h4>
                                <div className="first"> <div className="second"></div> </div>
                            </div>

                            <button onClick={() => setImg11(!img11)} >MongoDB</button>

                        </div>
                        <div className="right">

                            {/* on Click switch color */}
                            <motion.i style={{ color: "black" }}
                                animate={{ display: img12 ? "none" : "block" }} transition={{ duration: 1 }}
                            >
                                <SiGnubash />
                            </motion.i>

                            <motion.i initial={{ display: "none" }}
                                animate={{ display: img12 ? "block" : "none" }} transition={{ duration: 1 }}
                            >
                                <SiGnubash />
                            </motion.i>

                            <h1>Bash & CLI</h1>

                            <p>As a FullStack developer, my command over Bash & CLI is paramount. From automation to
                                server management, my deep understanding ensures streamlined, efficient, and error-free operations throughout the development cycle.
                            </p>

                            <div className="chart">
                                <h4>85%</h4>
                                <div className="first"> <div className="second"></div> </div>
                            </div>

                            <button onClick={() => setImg12(!img12)} > Bash </button>


                        </div>


                    </SwiperSlide>

                </Swiper>

            </div>

            {/* -3- */}
            <div className="three" id="three">

                <div className="top">
                    <motion.h1 ref={element3} initial={{ opacity: 0, y: 400 }} animate={{ opacity: show3 ? 1 : 0, y: show3 ? 0 : 400 }}
                        transition={{ duration: 2, delay: 1 }}
                    >finally it`s there</motion.h1>

                    <motion.p initial={{ opacity: 0, y: -400 }} animate={{ opacity: show3 ? 1 : 0, y: show3 ? 0 : -400 }}
                        transition={{ duration: 2, delay: 1.8 }}
                    >
                        This personal portfolio took a <span>18</span> hours of planning,
                        <span>35</span> hours of innovative designing, and lastly the hardest <span>80</span> hours of coding.
                        It`s been a challenging idea I hope you liked it.
                    </motion.p>

                    <motion.div className="buttons" initial={{ opacity: 0, y: 400 }} animate={{ opacity: show3 ? 1 : 0, y: show3 ? 0 : 400 }}
                        transition={{ duration: 2, delay: 2.6 }}
                    >
                        <a onClick={() => navigate("/#Contact")} >Reach out</a>
                        <a onClick={() => navigate("/")} >Start</a>
                    </motion.div>
                </div>

                <div className="bottom">

                    <motion.img src="./Images/flower B.svg" alt="flower" className="img1"
                        initial={{ opacity: 0 }} animate={{ opacity: show3 ? 1 : 0 }} transition={{ duration: 1.8, delay: 4.2 }}
                    />
                    <motion.img src="./Images/BlackMode/flower.png" alt="flower" className="img3"
                        initial={{ opacity: 0 }} animate={{ opacity: show3 ? 1 : 0 }} transition={{ duration: 1.8, delay: 4.2 }}
                    />
                    <img src="./Images/front-end three.svg" alt="Ai" className="img2" />
                    <img src="./Images/front-end three blue.svg" alt="Ai" className="img4" />
                    <img src="./Images/front-end three Red.svg" alt="Ai" className="img5" />
                </div>
            </div>

            {/* -4- */}
            <div className="four">

                <Swiper className="mySwiper"
                    pagination={{
                        dynamicBullets: true,
                        clickable: true
                    }}
                    modules={[Pagination]}
                    slidesPerView={4}
                    spaceBetween={10}

                >
                    <SwiperSlide className="slide"> {/* 1 */}
                        <div className="box">
                            <img src="./Images/html V.svg" alt="html" />
                            <h3> HTML </h3>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="slide"> {/* 2 */}
                        <div className="box">
                            <img src="./Images/css V.svg" alt="css" />
                            <h3> CSS </h3>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="slide"> {/* 3 */}
                        <div className="box">
                            <img src="./Images/sass V.svg" alt="sass" />
                            <h3> SCSS </h3>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="slide"> {/* 4 */}
                        <div className="box">
                            <img src="./Images/npm V.svg" alt="npm" />
                            <h3> NPM </h3>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="slide"> {/* 5 */}
                        <div className="box">
                            <img src="./Images/js V.svg" alt="js" />
                            <h3> JS </h3>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="slide"> {/* 6 */}
                        <div className="box">
                            <img src="./Images/Ts V.svg" alt="ts" />
                            <h3> TS </h3>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="slide"> {/* 7 */}
                        <div className="box">
                            <img src="./Images/github V.svg" alt="github" />
                            <h3> GitHub </h3>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="slide"> {/* 8 */}
                        <div className="box">
                            <img src="./Images/react V.svg" alt="react" />
                            <h3> REACT </h3>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="slide"> {/* 9 */}
                        <div className="box">
                            <img src="./Images/vue V.svg" alt="vue" />
                            <h3> VUE </h3>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="slide"> {/* 10 */}
                        <div className="box">
                            <img src="./Images/git V.svg" alt="git" />
                            <h3> GIT </h3>
                        </div>
                    </SwiperSlide>


                </Swiper>

            </div>

        </div>
    )
}

export default FrontEnd;