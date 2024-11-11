// fontawesome
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { SiAdobe } from "react-icons/si"

// motion
import { motion } from "framer-motion";

import night from "/Images/night.svg"
import queen from "/Images/queen.svg"
import nightD from "/Images/BlackMode/night B.png"
import queenD from "/Images/BlackMode/queen B.png"

import ibrahim1 from "/Images/Ibrahim.png"
import ibrahim2 from "/Images/Ibrahim blue.png"
import ibrahim3 from "/Images/Ibrahim Red.png"
import resume from "/pdf/resume.pdf"

import { saveAs } from 'file-saver';
import { lazy } from "react";


let Home = () => {

    const handleDownload = async () => {
        try {
            // Fetch the PDF file content using an asynchronous function
            const response = await fetch(resume);
            const pdfContent = await response.blob();

            // Use file-saver to trigger the download
            saveAs(pdfContent, 'resume.pdf');
        } catch (error) {
            console.error('Error fetching or saving the PDF file:', error);
        }
    };

    return (
        <div className="Home">

            <div className="left">

                <h3>Hello There!</h3>
                <h1><span>This is</span> <span>I</span>brahim <span>A</span>li </h1>
                <p> I`m a self-taught Fullstack developer & Graphic designer. </p>

                <button onClick={handleDownload} > Get CV </button>

                <div className="images">
                    <motion.img src={night} alt="night" className="night" drag dragConstraints={{ left: 2, right: 2, top: 2, bottom: 2 }} />
                    <motion.img src={queen} alt="queen" className="queen" drag dragConstraints={{ left: 2, right: 2, top: 2, bottom: 2 }} />

                    <motion.img src={nightD} alt="night" className="night" drag dragConstraints={{ left: 2, right: 2, top: 2, bottom: 2 }} />
                    <motion.img src={queenD} alt="queen" className="queen" drag dragConstraints={{ left: 2, right: 2, top: 2, bottom: 2 }} />
                </div>
            </div>

            <div className="right">

                <motion.img src={ibrahim1} alt="main picture" initial={{ y: 400, opacity: 0, scale: .5 }}
                    animate={{ y: 0, opacity: 1, scale: 1 }} transition={{ duration: 2, delay: .2 }} className="main1" />

                <motion.img src={ibrahim2} alt="main picture" initial={{ y: 400, opacity: 0, scale: .5 }}
                    animate={{ y: 0, opacity: 1, scale: 1 }} transition={{ duration: 2, delay: .2 }} className="main2" />

                <motion.img src={ibrahim3} alt="main picture" initial={{ y: 400, opacity: 0, scale: .5 }}
                    animate={{ y: 0, opacity: 1, scale: 1 }} transition={{ duration: 2, delay: .2 }} className="main3" />

                <div className="links">
                    <a href="https://github.com/IB1899" target="blank">           <AiFillGithub className="icon" />     </a>
                    <a href="https://www.instagram.com/ib1899_af/" target="blank"> <AiFillInstagram className="icon" />  </a>
                    <a href="https://account.adobe.com/?lang=en" target="blank" > <SiAdobe className="icon" /> </a>

                    <h3> Scroll down </h3>
                </div>
            </div>

        </div>
    )
}
export default Home;