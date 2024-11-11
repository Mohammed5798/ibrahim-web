//fontAwesome
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai"

//motion
import { motion } from "framer-motion";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

import logo1 from "/Images/logo.svg"
import logo2 from "/Images/BlackMode/logo.png"
import logo3 from "/Images/logo Blue.png"
import logo4 from "/Images/logo Red.png"
import sun from "/Images/sun.svg"
import sunB from "/Images/BlackMode/sun.png"

let Navbar = () => {

    //! open & close modes
    let [clicked, setClicked] = useState(false);

    //! Open close the navbar at phone size
    let [isNavBar, setIsNavBar] = useState(false);

    let body = document.body;
    let navigate = useNavigate();

    let [open, setOpen] = useState(false);

    return (
        <div className={clicked ? "Navbar clicked" : "Navbar"} id={isNavBar ? "open" : "close"} >

            <img src={logo1} alt="logo" className="logo" />
            <img src={logo2} alt="logo" className="logo2" />
            <img src={logo3} alt="logo" className="logo3" />
            <img src={logo4} alt="logo" className="logo4" />

            <motion.ul className="navigation"
                animate={{ x: clicked ? 200 : 0, display: clicked ? "none" : "flex" }}
            >
                <li onClick={() => setIsNavBar(false)} > <a onClick={() => navigate("/")} > Home </a> </li>
                <li onClick={() => setIsNavBar(false)} > <a onClick={() => navigate("/front-end")}> Fullstack </a> </li>
                <li onClick={() => setIsNavBar(false)} > <a onClick={() => navigate("/graphic-design")} > Graphic Design </a> </li>
            </motion.ul>

            <i className="phone" onClick={() => { setIsNavBar(!isNavBar); setClicked(false) }}> <AiOutlineMenu /> </i>

            <motion.img src={sun} alt="sun" className="sun"
                whileHover={{ rotate: 360, }}
                onClick={() => { setClicked(true) }}
            />
            <motion.img src={sunB} alt="sun1" className="sun2"
                whileHover={{ rotate: 360, }}
                onClick={() => { setClicked(true) }}
            />

            {/* 550 - 850 measurements */}
            <i onClick={() => { setOpen(!open) }}> <AiOutlineMenu className="bars" /> </i>
            <motion.h1 animate={{ display: open ? "block" : "none" }} > Please check this web site on your laptop </motion.h1>

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
    )
}
export default Navbar;