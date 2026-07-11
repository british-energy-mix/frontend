import { Card, CardContent, SxProps, Theme, Typography } from "@mui/material";
import { Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";

interface props {
    title: string,
    data: {
        name: string,
        value: number,
        fill: string
    }[],
    sx?: SxProps<Theme>,
    className?: string
}

export default function EnergyMixCard({ title, data, sx, className }: props) {
    console.log("debug: data: ", data)
    return (
        <Card sx={{
            ...sx,
            alignContent: "center",
        }} className={className}>
            <CardContent >
                <Typography variant="h6"
                    className="text-center">
                    {title}
                </Typography>
                <ResponsiveContainer width="100%" height={350}>
                    <PieChart>
                        <Pie
                            data={data}
                            dataKey="value"
                            nameKey="name"
                            outerRadius={100}
                            label
                        />
                        <Tooltip />
                        <Legend />
                    </PieChart>
                </ResponsiveContainer>
            </CardContent>
        </Card >
    );
}