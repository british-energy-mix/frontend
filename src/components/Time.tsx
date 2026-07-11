import { EnergyUsageWindowModel } from "@/api/generated.schemas"
import { Grid, Stack, Typography } from "@mui/material"
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

interface props {
    isLoading: boolean,
    datetime: string
    title: string
}

export default function Time({ isLoading, datetime, title }: props) {

    return <>{/* Label */}
        < Grid size={3} >
            <Typography sx={(theme) => ({
                color: isLoading ?
                    theme.palette.text.disabled
                    : theme.palette.text.primary,
            })}>
                {title}
            </Typography>
        </Grid >

        {
            isLoading ?
                <Grid size={9}>
                    <Typography sx={(theme) => ({
                        color: isLoading ?
                            theme.palette.text.disabled
                            : theme.palette.text.primary,
                    })}>
                        Ładowanie danych
                    </Typography>
                </Grid>
                :
                <>
                    {/* Date */}
                    < Grid size={5}>
                        <Stack
                            direction="row"
                            spacing={1}
                            sx={{
                                alignItems: "center"
                            }}
                        >
                            <CalendarTodayIcon fontSize="small" color={isLoading ? "disabled" : "action"} />

                            <Typography sx={(theme) => ({
                                color: isLoading ?
                                    theme.palette.text.disabled
                                    : theme.palette.text.secondary,
                            })}>

                                {new Intl.DateTimeFormat("pl", {
                                    dateStyle: "medium"
                                }).format(new Date(datetime))}
                            </Typography>
                        </Stack>
                    </Grid>

                    {/* Time */}
                    <Grid size={4}>
                        <Stack
                            direction="row"
                            spacing={1}
                            sx={{
                                alignItems: "center"
                            }}
                        >
                            <AccessTimeIcon fontSize="small" color={isLoading ? "disabled" : "action"} />

                            <Typography sx={(theme) => ({
                                color: isLoading ?
                                    theme.palette.text.disabled
                                    : theme.palette.text.secondary,
                            })}>
                                {
                                    new Intl.DateTimeFormat("pl", {
                                        timeStyle: "short"
                                    }).format(new Date(datetime))}
                            </Typography>
                        </Stack>
                    </Grid>
                </>
        }
    </>
}