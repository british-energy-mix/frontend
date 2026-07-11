import { Box, Card, CardContent, Skeleton, SxProps, Theme, Typography } from "@mui/material";
import { Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";

interface props {
    title?: string,
    data?: {
        name: string,
        value: number,
        fill: string
    }[],
    sx?: SxProps<Theme>,
    className?: string
}

export default function EnergyMixCard({ title, data, sx, className }: props) {
    const isReady = title != undefined && data != undefined;

    return (
        <Card sx={{
            ...sx,
            alignContent: "center",
        }} className={className}>
            <CardContent className="flex flex-col items-center">
                {
                    !isReady ?
                        <Skeleton variant="text" sx={(theme) => ({
                            width: 250,
                            fontSize: theme.typography.h6
                        })} />
                        :
                        <Typography variant="h6"
                            className="text-center">
                            {title}
                        </Typography>
                }

                {
                    !isReady ?
                        <Box
                            sx={{
                                height: 350,
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                alignItems: "center",
                            }}
                        >
                            <Skeleton variant="circular" sx={{
                                height: "100%",
                                aspectRatio: 1
                            }} />
                        </Box>

                        :
                        <ResponsiveContainer width="100%" height={350}>

                            <PieChart width={100} height={100}>
                                <Pie
                                    data={data}
                                    dataKey="value"
                                    nameKey="name"
                                    // outerRadius={100}
                                    innerRadius={50}
                                    label
                                />
                                <Tooltip />
                                <Legend />
                            </PieChart>
                        </ResponsiveContainer>
                }
            </CardContent>
        </Card >
    );
}