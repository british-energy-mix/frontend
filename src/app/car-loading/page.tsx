"use client"

import { useGetOptimalWindow } from "@/api/energy-mix-controller/energy-mix-controller";
import EnergyUsageWindowView from "@/components/EnergyUsageWindowView";
import { Alert, AlertColor, AlertPropsColorOverrides, Box, Card, CardContent, Grid, Slider, Stack, Typography } from "@mui/material";
import { OverridableStringUnion } from "@mui/types";
import { useEffect, useState } from "react";



export default function CarLoading() {

    const [sliderWindowLength, setSliderWindowLength] = useState(3);
    const [windowLength, setWindowLength] = useState(3);

    const {
        data,
        isLoading,
        isError
    } = useGetOptimalWindow({ window: windowLength })

    useEffect(() => {

    }, [isError])

    const displayAlert = (message: string, severity: OverridableStringUnion<AlertColor, AlertPropsColorOverrides> | undefined) => <Alert
        sx={{
            alignSelf: "center"
        }}
        severity={severity}>
        {message}
    </Alert>

    return <Box
        className='flex flex-col justify-center items-center w-full min-h-120 text-center'
        sx={{
            gap: {
                xs: 1,
                lg: 0
            },
        }}
    >
        <Card className="max-w-150">
            <CardContent>
                <Typography variant="h5" gutterBottom>
                    Dobranie najczystszego okna czasowego
                </Typography>

                <Grid
                    container
                    spacing={2}
                    sx={{
                        alignItems: "center",
                        mt: 4,
                        mb: 2
                    }}
                >

                    <Grid size={3}>
                        <Typography sx={{
                            color: "text.primary",
                        }}>
                            Liczba godzin ładowania
                        </Typography>
                    </Grid>

                    <Grid size={7}>
                        <Slider
                            min={1}
                            max={6}
                            value={sliderWindowLength}
                            onChange={(_, newValue) => setSliderWindowLength(newValue as number)}
                            onChangeCommitted={(_, newValue) => setWindowLength(newValue)}
                            valueLabelDisplay="on"
                        />
                    </Grid>

                </Grid>

                {
                    isError ? displayAlert("Nie udało się pobrać danych z serwera", "error")
                        :
                        <>
                            <EnergyUsageWindowView isLoading={isLoading} data={data?.data} />
                        </>
                }


            </CardContent>
        </Card>
    </Box>
}