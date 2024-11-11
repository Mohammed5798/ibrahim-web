import { useEffect } from "react"
import BgLight from "../../public/Images/oops.jpg"
import { Link } from "react-router-dom"

export default function Error() {

    return (
        <div className="Oops">
            <img
                className="oopsBackground"
                src={BgLight}
                alt="background light"

                style={{ objectFit: "cover", position: "absolute", width: '100%', height: "100vh", zIndex: -10 }}
            />

            <h2> Sorry something went wrong </h2>

            <Link to={"/"} > Back To Home Page</Link>
        </div>
    )

}