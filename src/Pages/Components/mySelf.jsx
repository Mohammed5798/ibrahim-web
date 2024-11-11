import useOnScreen from "../../Hooks/useOnScreen.js";
import { motion } from "framer-motion";

import triangle from "/Images/tryangle.svg"
import triangleD from "/Images/BlackMode/tryangle.png"

import pawn from "/Images/pawn W.svg"
import pawnB from "/Images/BlackMode/pawn B.png"
import pawnV from "/Images/pawn V.svg"

import one from "/Images/one.svg"
import two from "/Images/two.svg"
import three from "/Images/three.svg"


let MySelf = () => {

    // motion
    let { element: element1, show: show1 } = useOnScreen()
    let { element: element2, show: show2 } = useOnScreen();
    let { element: element3 } = useOnScreen();
    let { element: element4 } = useOnScreen();
    let { element: element5 } = useOnScreen();
    let { element: element6, show: show6 } = useOnScreen();
    let { element: element7 } = useOnScreen();
    let { element: element8, show: show8 } = useOnScreen();
    let { element: element9 } = useOnScreen();
    //1
    let { element: element10 } = useOnScreen();
    let { element: element11 } = useOnScreen();
    let { element: element12 } = useOnScreen();
    let { element: element13 } = useOnScreen();
    //2
    let { element: element14 } = useOnScreen();
    let { element: element15 } = useOnScreen();
    let { element: element16 } = useOnScreen();
    let { element: element17 } = useOnScreen();
    //3
    let { element: element18 } = useOnScreen();
    let { element: element19 } = useOnScreen();
    let { element: element20 } = useOnScreen();
    let { element: element21 } = useOnScreen();


    return (
        <div className="MySelf">

            <header>
                <img src={triangle} alt="triangle" className="imgW" />
                <img src={triangleD} alt="triangle" className="imgB" />

                <motion.h1 ref={element1} initial={{ opacity: 0, y: 200 }}
                    animate={{ opacity: show1 ? 1 : 0, y: show1 ? 0 : 200 }} transition={{ duration: 2, delay: .3 }}
                > my self
                </motion.h1>

                <motion.h3 ref={element2} initial={{ y: 300 }} animate={{ y: show2 ? 0 : 300 }} transition={{ duration: 2, delay: .3 }}
                > To the inner voices in my head that will never allow me to stop
                </motion.h3>

                <motion.div className="circle" ref={element3} initial={{ y: -100, opacity: 0 }} animate={{ opacity: show1 ? 1 : 0, y: show1 ? 0 : -100 }}
                    transition={{ duration: 2, delay: .3 }}
                ></motion.div>
            </header>

            {/* 1 */}
            <div className="one">

                <motion.div className="left" ref={element4} initial={{ x: -500, opacity: 0 }}
                    animate={{ x: show1 ? 0 : -500, opacity: show1 ? 1 : 0 }} transition={{ duration: 2, delay: 3 }}
                >

                    <h1> Who am I </h1>

                    <p>
                        I`m Ibrahim Ali 19 years old , born in one of the most unliveable nations in the planet <b>Iraq</b>.
                        Despite that I`am a reader, runner, hiker, thinker and most importantly a researcher.
                        I believe that we should not let the obstacles stop us from being.
                    </p>

                    <a href="#Contact"> Contact me </a>
                </motion.div>

                <div className="chess">
                    <motion.img src={pawn} alt="pawn" ref={element10} initial={{ opacity: 0 }}
                        animate={{ opacity: show1 ? 1 : 0 }} transition={{ duration: 1, delay: 6.9 }}
                        drag dragConstraints={{ left: 2, right: 2, top: 2, bottom: 2 }}
                    />
                    <motion.img src={pawn} alt="pawn" ref={element11} initial={{ opacity: 0 }}
                        animate={{ opacity: show1 ? 1 : 0 }} transition={{ duration: 1, delay: 6.1 }}
                        drag dragConstraints={{ left: 2, right: 2, top: 2, bottom: 2 }}
                    />
                    <motion.img src={pawn} alt="pawn" ref={element12} initial={{ opacity: 0 }}
                        animate={{ opacity: show1 ? 1 : 0 }} transition={{ duration: 1, delay: 5.3 }}
                        drag dragConstraints={{ left: 2, right: 2, top: 2, bottom: 2 }}
                    />
                    <motion.img src={pawn} alt="pawn" ref={element13} initial={{ opacity: 0 }}
                        animate={{ opacity: show1 ? 1 : 0 }} transition={{ duration: 1, delay: 4.5 }}
                        drag dragConstraints={{ left: 2, right: 2, top: 2, bottom: 2 }}
                    />

                    {/* Dark */}
                    <motion.img src={pawnB} alt="pawn" ref={element10} initial={{ opacity: 0 }}
                        animate={{ opacity: show1 ? 1 : 0 }} transition={{ duration: 1, delay: 6.9 }}
                        drag dragConstraints={{ left: 2, right: 2, top: 2, bottom: 2 }}
                    />
                    <motion.img src={pawnB} alt="pawn" ref={element11} initial={{ opacity: 0 }}
                        animate={{ opacity: show1 ? 1 : 0 }} transition={{ duration: 1, delay: 6.1 }}
                        drag dragConstraints={{ left: 2, right: 2, top: 2, bottom: 2 }}
                    />
                    <motion.img src={pawnB} alt="pawn" ref={element12} initial={{ opacity: 0 }}
                        animate={{ opacity: show1 ? 1 : 0 }} transition={{ duration: 1, delay: 5.3 }}
                        drag dragConstraints={{ left: 2, right: 2, top: 2, bottom: 2 }}
                    />
                    <motion.img src={pawnB} alt="pawn" ref={element13} initial={{ opacity: 0 }}
                        animate={{ opacity: show1 ? 1 : 0 }} transition={{ duration: 1, delay: 4.5 }}
                        drag dragConstraints={{ left: 2, right: 2, top: 2, bottom: 2 }}
                    />
                </div>

                <div className="right">
                    <motion.img src={one} alt="Ai" ref={element5} initial={{ y: 400, opacity: 0 }}
                        animate={{ y: show1 ? 0 : 400, opacity: show1 ? 1 : 0 }} transition={{ duration: 2, delay: 2 }}
                    />
                </div>

            </div>

            {/* 2 */}
            <div className="two">

                <div className="left">
                    <motion.img src={two} alt="Ai" ref={element6} initial={{ x: -50, opacity: 0 }}
                        animate={{ x: show6 ? 0 : -50, opacity: show6 ? 1 : 0 }} transition={{ duration: 2, delay: 1 }}
                    />
                </div>

                <div className="chess">
                    <motion.img src={pawnV} alt="pawn" ref={element14} initial={{ opacity: 0 }}
                        animate={{ opacity: show6 ? 1 : 0 }} transition={{ duration: 1, delay: 5.9 }}
                        drag dragConstraints={{ left: 2, right: 2, top: 2, bottom: 2 }}
                    />
                    <motion.img src={pawnV} alt="pawn" ref={element15} initial={{ opacity: 0 }}
                        animate={{ opacity: show6 ? 1 : 0 }} transition={{ duration: 1, delay: 5.1 }}
                        drag dragConstraints={{ left: 2, right: 2, top: 2, bottom: 2 }}
                    />
                    <motion.img src={pawnV} alt="pawn" ref={element16} initial={{ opacity: 0 }}
                        animate={{ opacity: show6 ? 1 : 0 }} transition={{ duration: 1, delay: 4.3 }}
                        drag dragConstraints={{ left: 2, right: 2, top: 2, bottom: 2 }}
                    />
                    <motion.img src={pawnV} alt="pawn" ref={element17} initial={{ opacity: 0 }}
                        animate={{ opacity: show6 ? 1 : 0 }} transition={{ duration: 1, delay: 3.5 }}
                        drag dragConstraints={{ left: 2, right: 2, top: 2, bottom: 2 }}
                    />
                </div>

                <motion.div className="right" ref={element7} initial={{ y: -280, opacity: 0 }}
                    animate={{ y: show6 ? 0 : -280, opacity: show6 ? 1 : 0 }} transition={{ duration: 2, delay: 2 }}
                >

                    <h1> What am I good at </h1>

                    <p>
                        Time-management, Collaboration,  Creativity, Adaptivity, Problem-Solving , and I speak
                        three languages (Trilingual) English , Arabic and Chinese. well , There are great
                        things you can achieve when you learn how to manage your life. <span>J</span>im <span>R</span>ohn
                    </p>

                    <a href="#"> Home </a>
                </motion.div>

            </div>

            {/* 3 */}
            <div className="three">

                <motion.div className="left" ref={element8} initial={{ x: -50, opacity: 0 }}
                    animate={{ x: show8 ? 0 : -50, opacity: show8 ? 1 : 0 }} transition={{ duration: 1.4, delay: 1 }}
                >

                    <h1> What am I doing </h1>

                    <p>
                        When I began learning in this field, I started to learn the basics of the web. After ten
                        months of learning & practising I finished the Front-end. After that, I spent 3 months learning  graphic
                        designing & UI/UX, and now at a completion of more than 2 years in total I am a Fullstack Developer. Along the way I have made
                        few intense projects that helped me master & deeply understand my skills.
                    </p>

                    <a href="#Contact"> Contact me </a>
                </motion.div>

                <div className="chess">
                    <motion.img src={pawnV} alt="pawn" ref={element18} initial={{ opacity: 0 }}
                        animate={{ opacity: show8 ? 1 : 0 }} transition={{ duration: 1, delay: 4.6 }}
                        drag dragConstraints={{ left: 2, right: 2, top: 2, bottom: 2 }}
                    />
                    <motion.img src={pawnV} alt="pawn" ref={element19} initial={{ opacity: 0 }}
                        animate={{ opacity: show8 ? 1 : 0 }} transition={{ duration: 1, delay: 3.8 }}
                        drag dragConstraints={{ left: 2, right: 2, top: 2, bottom: 2 }}
                    />
                    <motion.img src={pawnV} alt="pawn" ref={element20} initial={{ opacity: 0 }}
                        animate={{ opacity: show8 ? 1 : 0 }} transition={{ duration: 1, delay: 3 }}
                        drag dragConstraints={{ left: 2, right: 2, top: 2, bottom: 2 }}
                    />
                    <motion.img src={pawnV} alt="pawn" ref={element21} initial={{ opacity: 0 }}
                        animate={{ opacity: show8 ? 1 : 0 }} transition={{ duration: 1, delay: 5.4 }}
                        drag dragConstraints={{ left: 2, right: 2, top: 2, bottom: 2 }}
                    />
                </div>

                <div className="right">

                    <motion.img src={three} alt="Ai" ref={element9} initial={{ y: 300, opacity: 0 }}
                        animate={{ y: show8 ? 150 : 300, opacity: show8 ? 1 : 0 }} transition={{ duration: 2, delay: 1.4 }}
                    />
                </div>
            </div>

        </div>
    )
}

export default MySelf;