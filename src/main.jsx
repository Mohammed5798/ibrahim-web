import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import "./style/style.css"

import App from "./App";
import { Outlet, RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";

let Main = lazy(() => import("./Pages/main"))
let FrontEnd = lazy(() => import("./Pages/front-end"))
let GraphicDesign = lazy(() => import("./Pages/graphic-design"))

import Error from "./Pages/graphic-design"
import Loading from "./Pages/loading"

let Router = createBrowserRouter(
    createRoutesFromElements(

        <Route path="/" element={<App />} >

            <Route path="" element={<Suspense fallback={<Loading />} > <Outlet /> </Suspense>} errorElement={<Error />} >
                <Route index element={<Main />} />
            </Route>


            <Route path="front-end" element={<Suspense fallback={<Loading />} > <Outlet /> </Suspense>} errorElement={<Error />} >
                <Route index element={<FrontEnd />} />
            </Route>

            <Route path="graphic-design" element={<Suspense fallback={<Loading />} > <Outlet /> </Suspense>} errorElement={<Error />} >
                <Route index element={<GraphicDesign />} />
            </Route>


            <Route path="*" element={<Main />} errorElement={<Error />} />
        </Route>
    )
)

let root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
    <React.StrictMode>
        <RouterProvider router={Router} />
    </React.StrictMode>
);