import Header from "./components/Header";
import AppDrawer from "./components/AppDrawer";
import Welcome from "./components/Welcome";
import AboutMe from "./components/AboutMe";
import SkillExperience from "./components/SkillExperience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { Box } from "@mui/material";

export default function App() {
    return (
        <Box sx={{ "::selection": { backgroundColor: "transparent !important" } }}>
            <Header />
            <AppDrawer />

            <Welcome />
            <AboutMe />
            <SkillExperience />
            <Contact />
            <Footer />
        </Box>
    );
}
