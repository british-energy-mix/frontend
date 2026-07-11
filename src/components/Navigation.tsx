"use client";

import Link from "next/link";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import ModeSwitch from "@/components/ModeSwitch";

export default function Navigation() {
    return (
        <AppBar position="static" sx={{
            zIndex: 1
        }}>
            <Toolbar>
                <Typography variant="h5" sx={{ flexGrow: 1 }}>
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