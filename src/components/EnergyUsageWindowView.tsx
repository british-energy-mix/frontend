"use client"

import { EnergyUsageWindowModel } from "@/api/generated.schemas"
import { Grid, Stack, Typography } from "@mui/material"
import Time from "./Time";

interface props {
    isLoading: boolean,
    data: EnergyUsageWindowModel | undefined
}

export default function EnergyUsageWindowView({ isLoading, data }: props) {


    return <Grid
        container
        spacing={2}
        sx={{
            alignItems: "center"
        }}
    >

        <Time title="Od" isLoading={isLoading} datetime={data?.from ?? ""} />
        <Time title="Do" isLoading={isLoading} datetime={data?.to ?? ""} />
        < Grid size={8} >
            <Typography variant="h5" sx={(theme) => ({
                color: isLoading ?
                    theme.palette.text.disabled
                    : theme.palette.text.primary,
            })}>
                Udział czystych źródeł energii
            </Typography>
        </Grid >
        < Grid size={4}
            sx={{
                textAlign: "left"
            }}>
            <Typography variant="h5" sx={(theme) => ({
                color: isLoading ?
                    theme.palette.text.disabled
                    : theme.palette.text.primary,
                fontWeight: theme.typography.fontWeightBold
            })}>
                {`${data?.cleanShare?.toFixed(2) ?? "-"} %`}
            </Typography>
        </Grid >
    </Grid >
}