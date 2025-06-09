import {
    Box,
    Drawer,
    List,
    Divider,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Avatar,
    Typography,
    IconButton,
    Link,
} from "@mui/material";

import {
    Person as ProfileIcon,
    PersonAdd as RegisterIcon,
    Login as LoginIcon,
    Logout as LogoutIcon,
} from "@mui/icons-material";

import { useApp } from "../AppProvider";

import whiteLogo from "../assets/img/soe-nay-lin-high-resolution-logo-white-transparent.png";

export default function AppDrawer() {
    const { openHamburgerToggle, setOpenHamburgerToggle } = useApp();

    const toggleDrawer = (newOpen) => () => {
        setOpenHamburgerToggle(newOpen);
    };

    const DrawerList = (
        <Box
            sx={{
                width: 300,
                backgroundColor: "#000",
                color: "#fff",
                height: "100%",
            }}
            role="presentation"
            onClick={toggleDrawer(false)}
        >
            <Box
                sx={{
                    width: "125px",
                    verticalAlign: "center",
                    textAlign: "center",
                    cursor: "pointer",
                    marginLeft: "50px",
                    marginTop: "10px",
                    fontSize: "10px",
                }}
            >
                <IconButton>
                    <Link href="#welcome">
                        <img
                            src={whiteLogo}
                            alt=""
                            style={{
                                width: "100%",
                            }}
                        />
                    </Link>
                </IconButton>
            </Box>

            <Box sx={{ marginTop: "270px" }}>
                <List>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <Link
                                href="#about"
                                sx={{ textDecoration: "none", color: "#fff" }}
                            >
                                <ListItemText
                                    primary="About"
                                    sx={{
                                        paddingLeft: "77px",
                                        "&:hover": {
                                            color: "#A41F13",
                                        },
                                        transition: "all 0.3s ease-in-out",
                                    }}
                                />
                            </Link>
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <Link
                                href="#skill"
                                sx={{ textDecoration: "none", color: "#fff" }}
                            >
                                <ListItemText
                                    primary="Skill & Experience"
                                    sx={{
                                        paddingLeft: "77px",
                                        "&:hover": {
                                            color: "#A41F13",
                                        },
                                        transition: "all 0.3s ease-in-out",
                                    }}
                                />
                            </Link>
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <Link
                                href="#portfolio"
                                sx={{ textDecoration: "none", color: "#fff" }}
                            >
                                <ListItemText
                                    primary="Portfolio"
                                    sx={{
                                        paddingLeft: "77px",
                                        "&:hover": {
                                            color: "#A41F13",
                                        },
                                        transition: "all 0.3s ease-in-out",
                                    }}
                                />
                            </Link>
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton sx={{ fontSize: "10px" }}>
                            <Link
                                href="#services"
                                sx={{ textDecoration: "none", color: "#fff" }}
                            >
                                <ListItemText
                                    primary="Services"
                                    sx={{
                                        paddingLeft: "77px",
                                        "&:hover": {
                                            color: "#A41F13",
                                        },
                                        transition: "all 0.3s ease-in-out",
                                    }}
                                />
                            </Link>
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <Link
                                href="#blog"
                                sx={{ textDecoration: "none", color: "#fff" }}
                            >
                                <ListItemText
                                    primary="Blog"
                                    sx={{
                                        paddingLeft: "77px",
                                        "&:hover": {
                                            color: "#A41F13",
                                        },
                                        transition: "all 0.3s ease-in-out",
                                    }}
                                />
                            </Link>
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <Link
                                href="#contact"
                                sx={{ textDecoration: "none", color: "#fff" }}
                            >
                                <ListItemText
                                    primary="Contact"
                                    sx={{
                                        paddingLeft: "77px",
                                        "&:hover": {
                                            color: "#A41F13",
                                        },
                                        transition: "all 0.3s ease-in-out",
                                    }}
                                />
                            </Link>
                        </ListItemButton>
                    </ListItem>
                </List>
            </Box>
        </Box>
    );

    return (
        <div>
            <Drawer open={openHamburgerToggle} onClose={toggleDrawer(false)}>
                {DrawerList}
            </Drawer>
        </div>
    );
}
