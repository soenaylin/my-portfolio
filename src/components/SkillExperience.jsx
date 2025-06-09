import { Box, Container, Typography, Card, CardContent } from "@mui/material";

export default function SkillExperience() {
    return (
        <Box sx={{ padding: "60px 0" }} id="skill">
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
                        SKILL & EXPERIENCE
                    </Typography>
                </Box>
            </Container>
            <Box
                sx={{
                    backgroundColor: "#898989",
                    // height: "182px",
                    padding: "24px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "30px",
                    flexWrap: "wrap",
                }}
            >
                <Card
                    sx={{
                        width: "270px",
                        height: "150px",
                        backgroundColor: "inherit",
                        boxShadow: "none",
                    }}
                >
                    <CardContent
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                        }}
                    >
                        <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                            <Typography
                                sx={{
                                    fontWeight: "700",
                                    fontSize: "60px",
                                    lineHeight: "72px",
                                    color: "#A41F13",
                                }}
                            >
                                85
                            </Typography>
                            <Typography
                                sx={{
                                    fontWeight: "400",
                                    fontSize: "20px",
                                    lineHeight: "46px",
                                    color: "#A41F13",
                                }}
                            >
                                %
                            </Typography>
                        </Box>
                        <Typography
                            sx={{
                                fontWeight: "500",
                                fontSize: "16px",
                                color: "#fff",
                            }}
                        >
                            HTML
                        </Typography>
                    </CardContent>
                </Card>
                <Card
                    sx={{
                        width: "270px",
                        height: "150px",
                        backgroundColor: "inherit",
                        boxShadow: "none",
                    }}
                >
                    <CardContent
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                        }}
                    >
                        <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                            <Typography
                                sx={{
                                    fontWeight: "700",
                                    fontSize: "60px",
                                    lineHeight: "72px",
                                    color: "#A41F13",
                                }}
                            >
                                85
                            </Typography>
                            <Typography
                                sx={{
                                    fontWeight: "400",
                                    fontSize: "20px",
                                    lineHeight: "46px",
                                    color: "#A41F13",
                                }}
                            >
                                %
                            </Typography>
                        </Box>
                        <Typography
                            sx={{
                                fontWeight: "500",
                                fontSize: "16px",
                                color: "#fff",
                            }}
                        >
                            CSS
                        </Typography>
                    </CardContent>
                </Card>
                <Card
                    sx={{
                        width: "270px",
                        height: "150px",
                        backgroundColor: "inherit",
                        boxShadow: "none",
                    }}
                >
                    <CardContent
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                        }}
                    >
                        <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                            <Typography
                                sx={{
                                    fontWeight: "700",
                                    fontSize: "60px",
                                    lineHeight: "72px",
                                    color: "#A41F13",
                                }}
                            >
                                80
                            </Typography>
                            <Typography
                                sx={{
                                    fontWeight: "400",
                                    fontSize: "20px",
                                    lineHeight: "46px",
                                    color: "#A41F13",
                                }}
                            >
                                %
                            </Typography>
                        </Box>
                        <Typography
                            sx={{
                                fontWeight: "500",
                                fontSize: "16px",
                                color: "#fff",
                            }}
                        >
                            JAVASCRIPT
                        </Typography>
                    </CardContent>
                </Card>
                <Card
                    sx={{
                        width: "270px",
                        height: "150px",
                        backgroundColor: "inherit",
                        boxShadow: "none",
                    }}
                >
                    <CardContent
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                        }}
                    >
                        <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                            <Typography
                                sx={{
                                    fontWeight: "700",
                                    fontSize: "60px",
                                    lineHeight: "72px",
                                    color: "#A41F13",
                                }}
                            >
                                85
                            </Typography>
                            <Typography
                                sx={{
                                    fontWeight: "400",
                                    fontSize: "20px",
                                    lineHeight: "46px",
                                    color: "#A41F13",
                                }}
                            >
                                %
                            </Typography>
                        </Box>
                        <Typography
                            sx={{
                                fontWeight: "500",
                                fontSize: "16px",
                                color: "#fff",
                            }}
                        >
                            REACT
                        </Typography>
                    </CardContent>
                </Card>
                <Card
                    sx={{
                        width: "270px",
                        height: "150px",
                        backgroundColor: "inherit",
                        boxShadow: "none",
                    }}
                >
                    <CardContent
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                        }}
                    >
                        <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                            <Typography
                                sx={{
                                    fontWeight: "700",
                                    fontSize: "60px",
                                    lineHeight: "72px",
                                    color: "#A41F13",
                                }}
                            >
                                80
                            </Typography>
                            <Typography
                                sx={{
                                    fontWeight: "400",
                                    fontSize: "20px",
                                    lineHeight: "46px",
                                    color: "#A41F13",
                                }}
                            >
                                %
                            </Typography>
                        </Box>
                        <Typography
                            sx={{
                                fontWeight: "500",
                                fontSize: "16px",
                                color: "#fff",
                            }}
                        >
                            NEXT
                        </Typography>
                    </CardContent>
                </Card>
            </Box>
        </Box>
    );
}
