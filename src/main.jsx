import React from "react";
import ReactDOM from "react-dom/client";
import AppProvider from "./AppProvider";

// import "@fontsource/poppins/100.css";
// import "@fontsource/poppins/200.css";
// import "@fontsource/poppins/300.css";
// import "@fontsource/poppins/400.css";
// import "@fontsource/poppins/500.css";
// import "@fontsource/poppins/600.css";
// import "@fontsource/poppins/700.css";
// import "@fontsource/poppins/800.css";
// import "@fontsource/poppins/900.css";

import "@fontsource/jost/100.css";
import "@fontsource/jost/200.css";
import "@fontsource/jost/300.css";
import "@fontsource/jost/400.css";
import "@fontsource/jost/500.css";
import "@fontsource/jost/600.css";
import "@fontsource/jost/700.css";
import "@fontsource/jost/800.css";
import "@fontsource/jost/900.css";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <AppProvider />
    </React.StrictMode>
);
