import {
    Box,
    AppBar,
    Toolbar,
    Typography,
    IconButton,
    Container,
    Link,
} from "@mui/material";
import blackLogo from "../assets/img/soe-nay-lin-high-resolution-logo-black-transparent.png";
import whiteLogo from "../assets/img/soe-nay-lin-high-resolution-logo-white-transparent.png";
import HamburgerMenuButton from "./HamburgerMenuButton";

import { useApp } from "../AppProvider";

const text = [
    "About",
    "Skill & Experience",
    "Portfolio",
    "Services",
    "Blog",
    "Contact",
];

export default function Header() {
    const { showDrawer, setShowDrawer } = useApp();

    return (
        <AppBar
            position="sticky"
            sx={{ backgroundColor: "#fff", height: "64px" }}
            style={{ boxShadow: "none" }}
        >
            <Container>
                <Toolbar
                    sx={{ display: "flex", justifyContent: "space-between" }}
                >
                    <Box
                        sx={{
                            width: "125px",
                            verticalAlign: "center",
                            textAlign: "center",
                        }}
                    >
                        <IconButton>
                            <Link href="#welcome">
                                <img
                                    src={blackLogo}
                                    alt=""
                                    style={{ width: "100%" }}
                                />
                            </Link>
                        </IconButton>
                    </Box>
                    <Box
                        sx={{
                            display: { xs: "none", sm: "none", md: "flex" },
                            alignItems: "center",
                            gap: 2.5,
                            fontSize: "16px",
                        }}
                    >
                        <Typography
                            sx={{
                                fontWeight: "100 !important",
                                cursor: "pointer",
                                transition: "all 0.3s ease-in-out",
                            }}
                        >
                            <Link
                                href="#about"
                                sx={{
                                    textDecoration: "none",
                                    color: "#000",
                                    fontWeight: "100 !important",
                                    fontSize: "16px",
                                    "&:hover": {
                                        color: "#A41F13",
                                    },
                                    transition: "all 0.3s ease-in-out",
                                }}
                            >
                                About
                            </Link>
                        </Typography>
                        <Typography
                            sx={{
                                fontWeight: "100 !important",
                                cursor: "pointer",
                                transition: "all 0.3s ease-in-out",
                            }}
                        >
                            <Link
                                href="#skill"
                                sx={{
                                    textDecoration: "none",
                                    color: "#000",
                                    fontWeight: "100 !important",
                                    fontSize: "16px",
                                    "&:hover": {
                                        color: "#A41F13",
                                    },
                                    transition: "all 0.3s ease-in-out",
                                }}
                            >
                                Skill & Experience
                            </Link>
                        </Typography>
                        <Typography
                            sx={{
                                fontWeight: "100 !important",
                                cursor: "pointer",
                                transition: "all 0.3s ease-in-out",
                            }}
                        >
                            <Link
                                href="#portfolio"
                                sx={{
                                    textDecoration: "none",
                                    color: "#000",
                                    fontWeight: "100 !important",
                                    fontSize: "16px",
                                    "&:hover": {
                                        color: "#A41F13",
                                    },
                                    transition: "all 0.3s ease-in-out",
                                }}
                            >
                                Portfolio
                            </Link>
                        </Typography>
                        <Typography
                            sx={{
                                fontWeight: "100 !important",
                                cursor: "pointer",
                                transition: "all 0.3s ease-in-out",
                            }}
                        >
                            <Link
                                href="#services"
                                sx={{
                                    textDecoration: "none",
                                    color: "#000",
                                    fontWeight: "100 !important",
                                    fontSize: "16px",
                                    "&:hover": {
                                        color: "#A41F13",
                                    },
                                    transition: "all 0.3s ease-in-out",
                                }}
                            >
                                Services
                            </Link>
                        </Typography>
                        <Typography
                            sx={{
                                fontWeight: "100 !important",
                                cursor: "pointer",
                                transition: "all 0.3s ease-in-out",
                            }}
                        >
                            <Link
                                href="#blog"
                                sx={{
                                    textDecoration: "none",
                                    color: "#000",
                                    fontWeight: "100 !important",
                                    fontSize: "16px",
                                    "&:hover": {
                                        color: "#A41F13",
                                    },
                                    transition: "all 0.3s ease-in-out",
                                }}
                            >
                                Blog
                            </Link>
                        </Typography>
                        <Typography
                            sx={{
                                fontWeight: "100 !important",
                                cursor: "pointer",
                                transition: "all 0.3s ease-in-out",
                            }}
                        >
                            <Link
                                href="#contact"
                                sx={{
                                    textDecoration: "none",
                                    color: "#000",
                                    fontWeight: "100 !important",
                                    fontSize: "16px",
                                    "&:hover": {
                                        color: "#A41F13",
                                    },
                                    transition: "all 0.3s ease-in-out",
                                }}
                            >
                                Contact
                            </Link>
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            display: { xs: "block", sm: "block", md: "none" },
                        }}
                    >
                        <HamburgerMenuButton />
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
