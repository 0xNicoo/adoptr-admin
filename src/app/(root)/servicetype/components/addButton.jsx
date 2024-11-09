"use client"
import React from "react"
import { Button } from '@nextui-org/react'
import { Inter } from 'next/font/google'

const inter = Inter(
    { subsets: ['latin'] },
    { weights: ['400, 500, 600, 700'] }
);

const AddButton = ({ onClick, component }) => {
    return (
        <Button
            onClick={onClick}
            className={`${inter.className} bg-green-700 text-sm text-white`}
            aria-label='Botón de agregar'
        >
            Agregar {component}
        </Button>
    )
}

export default AddButton;