"use client";

import { createTheme } from "@mui/material/styles";
import { Roboto } from "next/font/google";

const roboto = Roboto({
    weight: ['300', '400', '500', '700'],
    subsets: ['latin'],
    display: 'swap',
});

const theme = createTheme({
    colorSchemes: { light: true, dark: true },
    cssVariables: {
        colorSchemeSelector: 'class',
    },
    typography: {
        fontFamily: roboto.style.fontFamily,
    },
    palette: {
        mode: "light",

        primary: {
            main: "#3fdc2d",
        },

        secondary: {
            main: "#918edf",
        },

        background: {
            default: "#F5F5F5",
            paper: "#FFFFFF",
        },
    },
});

export default theme;