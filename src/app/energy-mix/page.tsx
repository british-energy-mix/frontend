"use client"

import { useGetEnergyMix } from '@/api/energy-mix-controller/energy-mix-controller';
import EnergyMixCard from '@/components/EnergyMixCard';
import { Alert, AlertColor, AlertProps, AlertPropsColorOverrides, Box } from '@mui/material';
import { OverridableStringUnion } from '@mui/types';
import { useEffect } from 'react';

const COLORS: { [name: string]: string } = {
    hydro: "#2196F3",
    wind: "#90CAF9",
    solar: "#FFC107",
    biomass: "#4CAF50",
    nuclear: "#9C27B0",
    gas: "#FF9800",
    coal: "#424242",
    imports: "#795548",
    other: "#B0BEC5",
};

export default function EnergyMix() {

    const {
        data,
        isLoading,
        isError,
    } = useGetEnergyMix();

    useEffect(() => { console.log("DEBUG: reloaded: data: ", data, " isError: ", isError) }, [data])
    useEffect(() => { console.log("DEBUG: Got an error") }, [isError])

    const displayAlert = (message: string, severity: OverridableStringUnion<AlertColor, AlertPropsColorOverrides> | undefined) => <Alert
        sx={{
            alignSelf: "center"
        }}
        severity={severity}>
        {message}
    </Alert>

    return (
        <Box
            className='flex justify-center w-full min-h-120 text-center'
            sx={{
                flexDirection: {
                    xs: "column",
                    lg: "row"
                },
                gap: {
                    xs: 1,
                    lg: 0
                },
            }}
        >
            {isLoading ? displayAlert("Ładowanie", "info")
                :
                isError || data?.data?.mixes?.length == 0 ?
                    displayAlert("Nie udało się pobrać danych z serwera", "error")
                    :

                    data?.data.mixes?.map(mix => <EnergyMixCard
                        className='d-flex flex-1'
                        key={mix.date} title={mix.date ?? ""}
                        data={mix.generationMix?.map(el => {
                            return {
                                name: el.name ?? "other",
                                value: Number(el.share?.toFixed(2) ?? 0),
                                fill: COLORS[el.name ?? "other"]
                            }
                        }) ?? []} />)

            }
        </Box>
    )
}
