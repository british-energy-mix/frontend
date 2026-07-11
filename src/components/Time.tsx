import { EnergyUsageWindowModel } from "@/api/generated.schemas"
import { Grid, Skeleton, Stack, Typography } from "@mui/material"
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

interface props {
    isLoading: boolean,
    datetime?: string
    title: string
}

export default function Time({ isLoading, datetime, title }: props) {

    const isReady = !isLoading && datetime !== undefined;

    return <>{/* Label */}
        < Grid size={3} >
            <Typography sx={{
                color: "text.secondary"
            }}>
                {title}
            </Typography>
        </Grid >


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

                {
                    !isReady ?
                        <Skeleton variant="text" sx={{
                            width: 100
                        }} />
                        :
                        <Typography sx={{
                            color: "text.secondary",
                        }}>

                            {new Intl.DateTimeFormat("pl", {
                                dateStyle: "medium"
                            }).format(new Date(datetime))}
                        </Typography>
                }
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

                {
                    !isReady ?
                        <Skeleton variant="text" sx={{
                            width: 100
                        }} />
                        :
                        <Typography sx={{
                            color: "text.secondary",
                        }}>
                            {
                                new Intl.DateTimeFormat("pl", {
                                    timeStyle: "short"
                                }).format(new Date(datetime))}
                        </Typography>
                }


            </Stack>
        </Grid>
    </>
}