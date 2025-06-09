import { Box, Typography, Container } from "@mui/material";

export default function Contact() {
    return (
        <Box sx={{ padding: "60px 0" }} id="contact">
            <Container>
                <Box
                    sx={{
                        marginBottom: "24px",
                    }}
                >
                    <Typography
                        variant="h2"
                        sx={{
                            fontWeight: "700",
                            fontSize: {
                                xs: "34px",
                                sm: "34px",
                                md: "34px",
                                lg: "50px",
                            },
                            marginBottom: "24px",
                            textAlign: { xs: "center", md: "left" },
                        }}
                    >
                        CONTACT
                    </Typography>
                </Box>
                <Box
                    sx={{
                        display: "flex",
                        gap: "24px",
                        flexDirection: {
                            xs: "column",
                            md: "column",
                            lg: "row",
                        },
                    }}
                >
                    <Box sx={{ width: { lg: "33.333%" } }}>
                        <Typography
                            sx={{ fontWeight: "400", fontSize: "18px" }}
                        >
                            Email
                        </Typography>
                        <Typography
                            sx={{
                                fontWeight: "400",
                                fontSize: {
                                    xs: "24px",
                                    md: "24px",
                                    lg: "32px",
                                },
                            }}
                        >
                            soenaylin.g@gmail.com
                        </Typography>
                    </Box>
                    <Box sx={{ width: { lg: "33.333%" } }}>
                        <Typography
                            sx={{ fontWeight: "400", fontSize: "18px" }}
                        >
                            Phone
                        </Typography>
                        <Typography
                            sx={{
                                fontWeight: "400",
                                fontSize: {
                                    xs: "24px",
                                    md: "24px",
                                    lg: "32px",
                                },
                            }}
                        >
                            +959 767 390 916
                        </Typography>
                    </Box>
                    <Box sx={{ width: { lg: "33.333%" } }}>
                        <Typography
                            sx={{ fontWeight: "400", fontSize: "18px" }}
                        >
                            Address
                        </Typography>
                        <Typography
                            sx={{
                                fontWeight: "400",
                                fontSize: {
                                    xs: "24px",
                                    md: "24px",
                                    lg: "32px",
                                },
                            }}
                        >
                            Zingama Rd, 5th Ward, Thaketa, Yangon
                        </Typography>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
}
