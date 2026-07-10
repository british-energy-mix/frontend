"use client";

import Link from "next/link";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import ModeSwitch from "./ModeSwitch";

export default function Navigation() {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" sx={{ flexGrow: 1 }}>
                    British Energy Mix
                </Typography>

                <Button color="inherit" component={Link} href="/energy-mix">
                    Energy Mix
                </Button>

                <Button color="inherit" component={Link} href="/car-loading">
                    Car loading
                </Button>

                <ModeSwitch />
            </Toolbar>
        </AppBar>
    );
}