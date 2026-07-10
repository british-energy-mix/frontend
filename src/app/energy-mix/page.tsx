"use client"

import { useGetEnergyMix } from '@/api/energy-mix-controller/energy-mix-controller';
import React from 'react'

export default function Test() {

    const {
        data,
        isLoading
    } = useGetEnergyMix();
    return (
        <div>{isLoading ? "Test" : JSON.stringify(data)}</div>
    )
}
