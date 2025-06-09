import { useRef, useEffect } from "react";
import "../css/style.css";
import { useApp } from "../AppProvider";

export default function HamburgerMenuButton() {
    const { openHamburgerToggle, setOpenHamburgerToggle } = useApp();
    const line1Ref = useRef();
    const line2Ref = useRef();
    const line3Ref = useRef();
    const hamburgerMenuRef = useRef();

    const handleClick = () => {
        const hamburgerLine1Tag = line1Ref.current;
        const hamburgerLine2Tag = line2Ref.current;
        const hamburgerLine3Tag = line3Ref.current;

        function hamburgerToggle() {
            if (openHamburgerToggle) {
                setOpenHamburgerToggle(false);
                hamburgerLine2Tag.classList.remove("hideLine2");
                hamburgerLine1Tag.classList.remove("rotatePlus45Deg");
                hamburgerLine3Tag.classList.remove("rotateMinus45Deg");
            } else {
                setOpenHamburgerToggle(true);
                hamburgerLine2Tag.classList.add("hideLine2");
                hamburgerLine1Tag.classList.add("rotatePlus45Deg");
                hamburgerLine3Tag.classList.add("rotateMinus45Deg");
            }
        }

        hamburgerToggle();
    };

    useEffect(() => {
        const hamburgerLine1Tag = line1Ref.current;
        const hamburgerLine2Tag = line2Ref.current;
        const hamburgerLine3Tag = line3Ref.current;

        if (openHamburgerToggle) {
            hamburgerLine2Tag.classList.add("hideLine2");
            hamburgerLine1Tag.classList.add("rotatePlus45Deg");
            hamburgerLine3Tag.classList.add("rotateMinus45Deg");
        } else {
            hamburgerLine2Tag.classList.remove("hideLine2");
            hamburgerLine1Tag.classList.remove("rotatePlus45Deg");
            hamburgerLine3Tag.classList.remove("rotateMinus45Deg");
        }
    }, [openHamburgerToggle]);

    return (
        <div
            role="button"
            tabIndex={0}
            onClick={handleClick}
            onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                    handleClick();
                }
            }}
            style={{
                cursor: "pointer",
            }}
            className="hamburgerMenuContainer"
            ref={hamburgerMenuRef}
        >
            <div
                ref={line1Ref}
                style={{
                    width: "30px",
                    height: "2px",
                    margin: "5px 0",
                    borderRadius: "3px",
                    backgroundColor: "var(--brand-color)",
                    transition: "all 0.5s ease",
                }}
                className="hamburger line1"
            ></div>
            <div
                ref={line2Ref}
                style={{
                    width: "30px",
                    height: "2px",
                    margin: "5px 0",
                    borderRadius: "3px",
                    backgroundColor: "var(--brand-color)",
                    transition: "all 0.5s ease",
                }}
                className="hamburger line2"
            ></div>
            <div
                ref={line3Ref}
                style={{
                    width: "30px",
                    height: "2px",
                    margin: "5px 0",
                    borderRadius: "3px",
                    backgroundColor: "var(--brand-color)",
                    transition: "all 0.5s ease",
                }}
                className="hamburger line3"
            ></div>
        </div>
    );
}
