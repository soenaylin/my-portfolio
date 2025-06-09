import { createContext, useContext, useState } from "react";
import { CssBaseline } from "@mui/material";
import App from "./App";

const AppContext = createContext();

export function useApp() {
    return useContext(AppContext);
}

export default function AppProvider() {
    const [openHamburgerToggle, setOpenHamburgerToggle] = useState(false);
    const [showDrawer, setShowDrawer] = useState(false);
    const [showBlackLogo, setShowBlackLogo] = useState(true);
    const [showWhiteLogo, setShowWhiteLogo] = useState(false);

    return (
        <AppContext.Provider
            value={{
                openHamburgerToggle,
                setOpenHamburgerToggle,
                showDrawer,
                setShowDrawer,
                showBlackLogo,
                setShowBlackLogo,
                showWhiteLogo,
                setShowWhiteLogo,
            }}
        >
            <App />
            <CssBaseline />
        </AppContext.Provider>
    );
}
