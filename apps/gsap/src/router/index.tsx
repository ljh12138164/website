import { createBrowserRouter } from "react-router-dom";
import GSAP from "../pages/gsap";

export const router = createBrowserRouter([
    {
        path: '/gsap',
        element: <GSAP />
    }
])