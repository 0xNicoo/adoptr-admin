"use client"
import React, { useState } from 'react';
import { Input } from '@nextui-org/react';

const DescriptionInput = ({onChange}) => {
    return (
        <Input
          label="Descripcion"
          id="description"
          className='text-black'
          onChange={onChange} 
        />
    )
}

export default DescriptionInput;