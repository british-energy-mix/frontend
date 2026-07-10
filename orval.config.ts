import dotenv from "dotenv";
import { defineConfig } from "orval";

dotenv.config({
    path: ".env.local",
});

export default defineConfig({
    backendApi: {
        input: `${process.env.ENERGY_MIX_API_URL}/v3/api-docs`,
        output: {
            mode: "tags-split",
            target: "src/api/generated.ts",
            client: "react-query",
            httpClient: "fetch",
            baseUrl: process.env.ENERGY_MIX_API_URL
        },
    },
});