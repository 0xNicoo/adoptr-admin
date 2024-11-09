"use client";
import { useState } from 'react';
import { Button } from '@nextui-org/react';
import { CIcon } from '@coreui/icons-react';
import { cilImagePlus } from '@coreui/icons';

const ImageInput = ({ onImageSelect }) => {
    const [imageName, setImageName] = useState('');
    const [image, setImage] = useState('');
    const [fileImage, setFileImage] = useState(null);
   
    const imageHandler = (e) => {
        const file = e.target.files[0];
        if (file) {
            setFileImage(file);
            onImageSelect(file); 
            
            const reader = new FileReader();
            reader.onloadend = () => {
                setImage(reader.result); 
            };
            reader.readAsDataURL(file); 
            setImageName(file.name);
        }
    };

    return (
        <>
            <div className='flex items-center xs:justify-center md:justify-start'>
                {image ? (  
                    <div className="xs:w-[250px] xs:h-[250px] sm:w-[200px] sm:h-[200px] overflow-hidden mb-4 flex items-center">
                        <img
                        alt="Imagen seleccionada"
                        src={image}
                        className="w-full h-full object-cover rounded-lg"
                        />
                    </div>
                    ): (
                        <div className="flex xs:mb-0 md:mb-4 justify-center items-center sm:w-[200px] sm:h-[200px] bg-gray-100 rounded-xl">
                            <CIcon icon={cilImagePlus} className='sm:w-[100px] sm:h-[100px] flex items-center justify-center text text-gray-500'/>
                        </div>
                    ) 
                } 
            </div>
            <div className='flex flex-col items-center'>
                <input
                    type='file'
                    id="custom-input"
                    accept='image/*'
                    className='hidden'
                    onChange={imageHandler}
                />
                <Button className='bg-gray-300 text-gray-700 mt-2'>
                    <label htmlFor="custom-input" className='cursor-pointer'>
                        Elegir imagen
                    </label>
                </Button>
                <label className="text-sm text-slate-500 mt-2">
                    {imageName ? imageName : "Ningún archivo seleccionado"}
                </label>
            </div>
        </>
    );
};

export default ImageInput;