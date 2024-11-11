import { BsFillTelephoneFill, BsFillEnvelopeFill } from "react-icons/bs"
import { MdLocationPin } from "react-icons/md"

import useOnScreen from "../../Hooks/useOnScreen.js";
import { motion } from "framer-motion";

import triangleV from "/Images/triangle V.svg"
import triangleB from "/Images/triangle B.svg"

import contact1 from "/Images/contact img.svg"
import contact2 from "/Images/contact blue.svg"
import contact3 from "/Images/contact Red.svg"

let Contact = () => {

    // motion 
    let { element: element1, show: show1 } = useOnScreen()
    let { element: element2, show: show2 } = useOnScreen();
    let { element: element3 } = useOnScreen();

    return (
        <div className="Contact" id="Contact">

            <header>
                <img src={triangleV} alt="triangle" className="imgW" />
                <img src={triangleB} alt="triangle" className="imgB" />

                <motion.h1 ref={element1} initial={{ opacity: 0, y: 200 }}
                    animate={{ opacity: show1 ? 1 : 0, y: show1 ? 0 : 200 }} transition={{ duration: 2, delay: .3 }}
                > Contact me
                </motion.h1>

                <motion.h3 ref={element2} initial={{ y: 300 }} animate={{ y: show2 ? 0 : 300 }} transition={{ duration: 2, delay: .3 }}
                > keep in touch with me and my partners
                </motion.h3>

                <motion.div className="circle" ref={element3} initial={{ y: -100, opacity: 0 }} animate={{ opacity: show1 ? 1 : 0, y: show1 ? 0 : -100 }}
                    transition={{ duration: 2, delay: .3 }}
                ></motion.div>
            </header>

            <div className="container">
                <div className="left">

                    <div className="email">
                        <i> <BsFillEnvelopeFill className="icon" /> </i>

                        <div className="text">
                            <h2>Email</h2>
                            <h3>lya838021@gmail.com</h3>
                        </div>
                    </div>
                    <div className="email">
                        <i> <BsFillTelephoneFill className="icon" /> </i>

                        <div className="text">
                            <h2>Phone</h2>
                            <h3>+9637811734581</h3>
                        </div>
                    </div>
                    <div className="email" id="last">
                        <i> <MdLocationPin className="icon" /> </i>

                        <div className="text">
                            <h2>Address</h2>
                            <h3>Middle east , Iraq</h3>
                        </div>
                    </div>

                </div>

                <div className="center">

                    <form action="https://formsubmit.co/lya838021@gmail.com" method="POST">
                        <label htmlFor="name">Name</label>
                        <input type="name" name="name" required />

                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" required />

                        <label htmlFor="message">Message</label>
                        <textarea name="message" cols="30" rows="9" required />

                        <input type="hidden" name="_subject" value="Email from my personal web" />

                        <button type="submit">Submit</button>
                    </form>

                </div>

                <div className="right">
                    <img src={contact1} alt="Ai1" className="img1" />
                    <img src={contact2} alt="Ai2" className="img2" />
                    <img src={contact3} alt="Ai3" className="img3" />
                </div>
            </div>

        </div>
    )
}

export default Contact;