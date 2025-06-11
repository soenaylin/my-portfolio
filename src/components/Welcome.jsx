import "../css/style.css";
import { Box, Container, Typography } from "@mui/material";
import blackLogo from "../assets/img/soe-nay-lin-high-resolution-logo-black-transparent.png";
import welcomeBackground from "../assets/img/welcome-bg-3.jpeg";
import myPhoto from "../assets/img/my-photo(1).png";
import DownloadCvButton from "./DownloadCvButton";

export default function Welcome() {
	return (
		<Box id="welcome">
			<Box className="welcome">
				<Box
					className="welcome-section"
					style={{
						backgroundImage: `url(${welcomeBackground})`,
						backgroundSize: "cover",
						backgroundPosition: "center",
						backgroundRepeat: "no-repeat",
					}}>
					<Box className="welcome-text">
						<Box sx={{ marginBottom: "16px" }}>
							<Typography
								variant="p"
								className="ui-ux-text">
								Junior Web Developer
							</Typography>
						</Box>
						<Box sx={{ marginBottom: "8px" }}>
							<Typography variant="h1">
								Hi, I'm Soe Nay Lin
							</Typography>
						</Box>
						<Box sx={{ marginBottom: "50px", width: "65%" }}>
							<Typography
								variant="p"
								className="my-bio"
								style={{
									marginBottom: "5rem",
									fontSize: "21px",
								}}>
								Hi, I’m Soe Nay Lin. I am a Junior Web Developer
								specialized in React and Next.
							</Typography>
						</Box>
						{/* <DownloadCvButton /> */}
						<a
							href="/SoeNayLin's_CV_V1.1.0.pdf"
							download
							className="download-button">
							Download CV
						</a>
					</Box>
					<Box
						className="welcome-img"
						style={{
							display: "flex",
							flexDirection: "column",
							alignItems: "center",
							justifyContent: "center",
							paddingRight: "6rem",
							paddingTop: "13rem",
						}}>
						<img
							src={myPhoto}
							alt="my photo"
						/>
					</Box>
				</Box>
				{/* <div className="welcome-section-floating-social-links">
                    <div className="social-icons">
                        <p>Facebook</p>
                        <p>Instagram.......</p>
                        <p>Twitter</p>
                        <p>LinkedIn</p>
                    </div>
                </div> */}
			</Box>
		</Box>
	);
}
