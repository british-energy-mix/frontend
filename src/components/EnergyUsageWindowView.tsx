"use client"

import { EnergyUsageWindowModel } from "@/api/generated.schemas"
import { Grid, Skeleton, Stack, Typography } from "@mui/material"
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

        <Time title="Od" isLoading={isLoading} datetime={data?.from} />
        <Time title="Do" isLoading={isLoading} datetime={data?.to} />
        < Grid size={8} >
            <Typography variant="h5" sx={(theme) => ({
                color: "text.primary"
            })}>
                Udział czystych źródeł energii:
            </Typography>
        </Grid >
        < Grid size={4}
            sx={{
                textAlign: "left"
            }}>
            {
                isLoading || data === undefined ?
                    <Skeleton variant="text" sx={{
                        width: 130,
                        color: "text.primary"
                    }} />
                    :
                    <Typography variant="h5" sx={{
                        color: "text.primary",
                        fontWeight: "fontWeightBold"
                    }}>
                        {`${data?.cleanShare?.toFixed(2) ?? "-"} %`}
                    </Typography>
            }
        </Grid >
    </Grid >
}