import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import useOnScreen from "../../Hooks/useOnScreen.js";

import triangle from "/Images/tryangle.svg"
import triangleD from "/Images/BlackMode/tryangle.png"

import accounting from "/Images/accounting.svg"
import collaboration from "/Images/collaboration.svg"
import creativity from "/Images/creativity.svg"
import problemSolving from "/Images/problem-solving.svg"
import languages from "/Images/languages.svg"
import signature from "/Images/signature.svg"


let MySkills = () => {

    // motion
    let { element: element1, show: show1 } = useOnScreen();
    let { element: element2, show: show2 } = useOnScreen();
    let { element: element11, show: show11 } = useOnScreen();

    // screen width
    let width = window.innerWidth;

    let navigate = useNavigate();


    return (
        <div className="MySkills" id="MySkills">

            <header>
                <img src={triangle} alt="triangle" className="imgW" />
                <img src={triangleD} alt="tryingly" className="imgB" />

                <motion.h1 ref={element1} initial={{ opacity: 0, y: 200 }}
                    animate={{ opacity: show1 ? 1 : 0, y: show1 ? 0 : 200 }} transition={{ duration: 2, delay: .3 }}
                > my skills
                </motion.h1>

                <motion.h3 ref={element2} initial={{ y: 300 }} animate={{ y: show2 ? 0 : 300 }} transition={{ duration: 2, delay: .3 }}
                > The ideas that kept me awake all night
                </motion.h3>

                <motion.div className="circle" initial={{ y: -100, opacity: 0 }} animate={{ opacity: show1 ? 1 : 0, y: show1 ? 0 : -100 }}
                    transition={{ duration: 2, delay: .3 }}
                ></motion.div>
            </header>

            <div className="container">

                <div className="left">
                    <motion.a onClick={() => navigate("/graphic-design")} initial={{ opacity: 0 }}
                        animate={{ opacity: show1 ? 1 : 0 }} transition={{ duration: 2, delay: 7 }}
                    > Graphic design
                    </motion.a>

                    <motion.p ref={element11} initial={{ x: width > 850 ? 200 : -200, y: 200, opacity: 0 }} transition={{ duration: 2.5 }}
                        animate={{ x: show11 ? 0 : width > 850 ? 200 : -200, opacity: show11 ? 1 : 0, y: show11 ? 0 : 200 }}
                    >
                        As a Graphic designer I work with Photo shop as my main photo editor , illustrator my graphic creator
                        , XD & Figma for UI/UX designing and lastly EdrawMax & EdrawMind to the plans & the infographic.
                    </motion.p>
                </div>

                <ul className="center">

                    <motion.li initial={{ opacity: 0 }} animate={{ opacity: show1 ? 1 : 0 }}
                        transition={{ duration: 2, delay: 3 }}
                    >
                        <h2> <img src={accounting} alt="Management" /> </h2>
                        <h3> Management </h3>
                    </motion.li>

                    <motion.li initial={{ opacity: 0 }} animate={{ opacity: show1 ? 1 : 0 }}
                        transition={{ duration: 2, delay: 4 }}
                    >
                        <h2> <img src={collaboration} alt="Collaboration" /> </h2>
                        <h3> Collaboration </h3>
                    </motion.li>

                    <motion.li initial={{ opacity: 0 }} animate={{ opacity: show1 ? 1 : 0 }}
                        transition={{ duration: 2, delay: 5 }}
                    >
                        <h2> <img src={creativity} alt="Creativity" /> </h2>
                        <h3> Creativity </h3>
                    </motion.li>

                    <motion.li initial={{ opacity: 0 }} animate={{ opacity: show1 ? 1 : 0 }}
                        transition={{ duration: 2, delay: 6 }}
                    >
                        <h2> <img src={problemSolving} alt="Problem Solving" /> </h2>
                        <h3> Problem Solving </h3>
                    </motion.li>

                    <motion.li initial={{ opacity: 0 }} animate={{ opacity: show1 ? 1 : 0 }}
                        transition={{ duration: 2, delay: 7 }}
                    >
                        <h2> <img src={languages} alt="Trilingual" /> </h2>
                        <h3> Trilingual </h3>
                    </motion.li>

                </ul>

                <div className="right">
                    <motion.p initial={{ x: -300, opacity: 0, }} transition={{ duration: 2.5, delay: 2 }}
                        animate={{ x: show1 ? 0 : -300, opacity: show1 ? 1 : 0 }}
                    >
                        As a Fullstack developer I work with so many technologies such as React.js,
                        Next.js for SSR, Linux and networking, Node.js, Express.js and other Languages including HTML
                        ,SCSS & JavaScript & TypeScript and many more.
                    </motion.p>

                    <motion.a initial={{ opacity: 0 }} transition={{ duration: 2, delay: 1.5 }}
                        animate={{ opacity: show11 ? 1 : 0 }}
                        onClick={() => navigate("/front-end")} > Web development
                    </motion.a>
                </div>

            </div>

            <div className="bottom">
                <motion.h2 initial={{ x: -950, y: 60 }} transition={{ duration: 2, delay: 3 }}
                    animate={{ x: show11 ? 0 : -950 }}
                >
                    The best skill of all is trying your best to be a better human each <span> single day. </span>
                </motion.h2>

                <motion.img src={signature} alt="signature" initial={{ opacity: 0, y: 30 }}
                    transition={{ duration: 2, delay: 3 }} animate={{ opacity: show11 ? 1 : 0 }} />
            </div>

        </div>
    )
}

export default MySkills;