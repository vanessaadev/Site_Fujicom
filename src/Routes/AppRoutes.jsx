import { Routes, Route } from "react-router-dom";
import { HomePage } from "../Pages/HomePage/HomePage"
import { About } from "../Pages/About/About"
import { ViewProducts } from "../Pages/ViewProducts/ViewProducts"
import { Contact } from "../Pages/Contact/Contact";

export function AppRoutes() {
    return(
        <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/viewproducts" element={<ViewProducts/>} />
            <Route path="/Contact" element={<Contact/>}/>
        </Routes>
    )
}