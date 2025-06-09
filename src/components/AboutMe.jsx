import { Box, Container, Typography } from "@mui/material";
import IllustrationPhoto from "../assets/img/illustration_photo.jpg";

export default function AboutMe() {
    return (
        <Box sx={{ padding: "60px 0", paddingX: { md: "60px" } }} id="about">
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
                        About Me
                    </Typography>
                    <Typography
                        sx={{
                            fontSize: {
                                xs: "21px",
                                sm: "21px",
                                md: "21px",
                                lg: "30px",
                            },
                            lineHeight: {
                                xs: "30px",
                                sm: "30px",
                                md: "30px",
                                lg: "43px",
                            },
                            textAlign: {
                                xs: "center",
                                sm: "center",
                                md: "left",
                            },
                            maxWidth: { xs: "100%", sm: "100%" },
                        }}
                    >
                        I am currentley a junior web developer specilize in
                        ReactJs and NextJs.Strongly interested in Web
                        Development and App Development. I like to learn new
                        technologies and exploring others programming fields. I
                        also like to collaborate with others teams and sharing
                        opinions each other to improve or skills and expend our
                        tech field.
                    </Typography>
                </Box>
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        flexDirection: { xs: "column-reverse", md: "row" },
                    }}
                >
                    <Box>
                        <Typography
                            sx={{
                                fontSize: {
                                    xs: "21px",
                                    sm: "21px",
                                    md: "21px",
                                    lg: "30px",
                                },
                                fontWeight: "700",
                                marginBottom: "8px",
                            }}
                        >
                            LOCATION
                        </Typography>
                        <Typography
                            sx={{
                                fontSize: {
                                    xs: "21px",
                                    sm: "21px",
                                    md: "21px",
                                    lg: "30px",
                                },
                                fontWeight: "700",
                                marginBottom: "22px",
                            }}
                        >
                            Yangon, Myanmar
                        </Typography>
                        <Box>
                            <Typography
                                sx={{
                                    fontSize: {
                                        xs: "21px",
                                        sm: "21px",
                                        md: "21px",
                                        lg: "30px",
                                    },
                                    fontWeight: "700",
                                    marginBottom: "14px",
                                }}
                            >
                                EDUCATION
                            </Typography>
                            <Typography
                                sx={{
                                    fontSize: {
                                        xs: "21px",
                                        sm: "21px",
                                        md: "21px",
                                    },
                                    fontWeight: "700",
                                }}
                            >
                                Professional UI/UX Design Course
                            </Typography>
                            <Typography
                                sx={{
                                    fontSize: "21px",
                                    fontWeight: "400",
                                    marginBottom: "16px",
                                }}
                            >
                                Fairway Technology
                            </Typography>
                            <Typography
                                sx={{
                                    fontSize: {
                                        xs: "21px",
                                        sm: "21px",
                                        md: "21px",
                                    },
                                    fontWeight: "700",
                                }}
                            >
                                Professional Web Developer Course
                            </Typography>
                            <Typography
                                sx={{
                                    fontSize: "21px",
                                    fontWeight: "400",
                                    marginBottom: "16px",
                                }}
                            >
                                Fairway Technology
                            </Typography>
                            <Typography
                                sx={{
                                    fontSize: {
                                        xs: "21px",
                                        sm: "21px",
                                        md: "21px",
                                    },
                                    fontWeight: "700",
                                }}
                            >
                                Rockstar Developer Course
                            </Typography>
                            <Typography
                                sx={{
                                    fontSize: "21px",
                                    fontWeight: "400",
                                    marginBottom: "16px",
                                }}
                            >
                                Fairway Technology
                            </Typography>
                            <Typography
                                sx={{
                                    fontSize: {
                                        xs: "21px",
                                        sm: "21px",
                                        md: "21px",
                                    },
                                    fontWeight: "700",
                                }}
                            >
                                History 2nd Year
                            </Typography>
                            <Typography
                                sx={{
                                    fontSize: {
                                        xs: "21px",
                                        sm: "21px",
                                        md: "21px",
                                    },
                                    fontWeight: "400",
                                }}
                            >
                                East Yangon University
                            </Typography>
                            <Typography
                                sx={{ fontSize: "21px", fontWeight: "400" }}
                            >
                                2019 - Pause
                            </Typography>
                        </Box>
                    </Box>
                    <Box
                        sx={{
                            width: { xs: "65%", md: "50%" },
                            margin: { xs: "0 auto", md: "0" },
                        }}
                    >
                        <img
                            src={IllustrationPhoto}
                            alt=""
                            style={{ width: "100%" }}
                        />
                    </Box>
                </Box>
            </Container>
        </Box>
    );
}
