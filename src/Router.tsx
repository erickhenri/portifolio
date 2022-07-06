import { BrowserRouter, Route, Routes } from "react-router-dom";
import { About } from "./components/Infos/About";
import { Contact } from "./components/Infos/Contact";
import { Repositories } from "./components/Infos/Repositories";
import { Home } from "./pages/Home";
import { Repository } from "./pages/Repository";
import { Tech } from "./pages/Tech";

export function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}>
                    <Route path="" element={<About />}/>
                    <Route path="about" element={<About />}/>
                    <Route path="repositories" element={<Repositories />}/>
                    <Route path="contact" element={<Contact />}/>
                </Route>
                <Route path="/about/tech/:slug" element={<Tech />}/>
                <Route path="/repositories/:slug" element={<Repository />}/>
            </Routes>
        </BrowserRouter>
    )
}