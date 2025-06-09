import { Box, Container, Typography } from "@mui/material";
import whiteLogo from "../assets/img/soe-nay-lin-high-resolution-logo-white-transparent.png";

export default function Footer() {
    return (
        <Box
            sx={{
                paddingBottom: "60px",
                backgroundColor: "#1A1A1A",
                height: "400px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: "24px",
            }}
            id="footer"
        >
            <Box sx={{ textAlign: "center", width: "150px" }}>
                <img src={whiteLogo} alt="" style={{ width: "100%" }} />
            </Box>
            <Box sx={{ display: "flex", gap: "32px", marginBottom: "18px" }}>
                <Typography
                    sx={{
                        color: "#fff",
                        "&:hover": {
                            color: "#A41F13",
                        },
                        cursor: "pointer",
                        transition: "all 0.3s ease-in-out",
                    }}
                >
                    FACEBOOK
                </Typography>
                <Typography
                    sx={{
                        color: "#fff",
                        "&:hover": {
                            color: "#A41F13",
                        },
                        cursor: "pointer",
                        transition: "all 0.3s ease-in-out",
                    }}
                >
                    INSTAGRAM
                </Typography>
                <Typography
                    sx={{
                        color: "#fff",
                        "&:hover": {
                            color: "#A41F13",
                        },
                        cursor: "pointer",
                        transition: "all 0.3s ease-in-out",
                    }}
                >
                    LINKEDIN
                </Typography>
            </Box>
            <Box>
                <Typography sx={{ color: "#fff" }}>
                    Copyright © 2025 Soe Nay Lin. All rights reserved.
                </Typography>
            </Box>
        </Box>
    );
}
