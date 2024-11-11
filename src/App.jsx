
import { Outlet } from "react-router-dom"
import Footer from "./Pages/footer"

//! This is the main layout
function App() {

    return (
        <>
            {/* As children */}
            <Outlet />
            
            <Footer />
        </>
    )
}

export default App
