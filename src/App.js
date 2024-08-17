import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Layout } from "./components/UI/Layout";
import { HomePage } from "./components/Pages/HomePage";
import { AboutPage } from "./components/Pages/AboutPage";
import { ContactPage } from "./components/Pages/ContactPage";
import { ProjectsPage } from "./components/Pages/ProjectsPage";

function App() {
    return (
        <Router>
            <Layout>
                <Routes>
                    <Route path="/" element={<HomePage />}/>
                    <Route path="/about" element={<AboutPage />}/>
                    <Route path="/projects" element={<ProjectsPage />}/>
                    <Route path="/contact" element={<ContactPage />}/>
                </Routes>
            </Layout>
        </Router>
    );
}

export default App;
