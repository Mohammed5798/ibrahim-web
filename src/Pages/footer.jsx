import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { SiAdobe } from "react-icons/si"

import logo from "/Images/logo B W.svg"

let Footer = () => {

    return (
        <div className="Footer">

            <img src={logo} alt="logo" />
            <p>
                This portfolio was created at  August 15th 2022.
                After one year from now this portfolio will be updated.
            </p>

            <div className="links">
                <a href="https://github.com/IB1899" target="blank">           <AiFillGithub className="icon" />     </a>
                <a href="https://www.instagram.com/ib1899_af/" target="blank"> <AiFillInstagram className="icon" />  </a>
                <a href="https://account.adobe.com/?lang=en" target="blank" > <SiAdobe className="icon" /> </a>
            </div>

            <h2>All rights are received for <span className="name"> <span>I</span>brahim <span>A</span>li </span>  2023.</h2>

        </div>
    )
}
export default Footer;