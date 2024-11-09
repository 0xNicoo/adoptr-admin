"use client"
import React, { useState } from 'react';
import { Input } from '@nextui-org/react';

const NameInput = ({onChange}) => {
    return (
        <Input
          label="Nombre"
          id="name"
          className='text-black'
          onChange={onChange} 
        />
    )
}

export default NameInput;