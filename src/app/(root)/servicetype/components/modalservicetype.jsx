"use client"
import React, { useState } from 'react';
import { Modal, ModalContent, ModalHeader, ModalBody } from '@nextui-org/react';
import { useRouter } from 'next/navigation';
import { createServiceTypesAction } from '@/actions/service';
import NameInput from './nameInput';
import DescriptionInput from './descriptionInput';
import ImageInput from './imageInput';
import ButtonsAction from './buttonsAction';

const ModalServiceTypeAdd = ({ isOpen, onClose }) => {
    const router = useRouter();
    const [error, setError] = useState(null);
    const [errors, setErrors] = useState({}); 
    const [adding, setAdding] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    const addServiceType = async (event) => {
        event.preventDefault();

        let newErrors = {};
        const fields = {
            name,
            description
        };

        Object.entries(fields).forEach(([key, value]) => {
            if (!value) {
                newErrors[key] = '* Este campo es obligatorio';
            }
        });

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return; 
        } else {
            setErrors({}); 
            setAdding(true);
        }

        const formData = new FormData();
        formData.append('name', name);
        formData.append('description', description);

        if (selectedImage) {
            formData.append('image', selectedImage);
        }

        try {
            await createServiceTypesAction(formData);
            onClose();
            router.refresh();
            setErrors({});
        } catch (error) {
            console.error('Error al crear tipo de servicio:', error);
            setError(`Error: ${error.message}`);
        } finally {
            setAdding(false);
        }
    };

    return (
        <Modal 
            isOpen={isOpen} 
            onClose={onClose}
            placement="center"
            backdrop="blur"
            size="2xl"
        >
            <ModalContent>
                {(onClose) => (
                    <>
                        <ModalHeader className="flex flex-col gap-1">
                            Agregar tipo de servicio
                        </ModalHeader>
                        <ModalBody>
                            <div className='bg-white p-6'>
                                <form onSubmit={addServiceType}>
                                    <div className='flex flex-col md:flex-row gap-6'>
                                        <div className='w-full md:w-1/3'>
                                            <ImageInput onImageSelect={(file) => setSelectedImage(file)} />
                                        </div>
                                        <div className='w-full md:w-2/3 flex flex-col gap-4'>
                                            <div className='flex flex-col gap-4'>
                                                <div className='flex flex-col'>
                                                    <NameInput onChange={(e) => { setName(e.target.value) }} />
                                                    {errors.name && <p className="text-red-500 text-sm mt-2">{errors.name}</p>}
                                                </div>
                                                <div className='flex flex-col'>
                                                    <DescriptionInput onChange={(e) => { setDescription(e.target.value) }} />
                                                    {errors.description && <p className="text-red-500 text-sm mt-2">{errors.description}</p>}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                                <ButtonsAction
                                    isLoading={adding}
                                    onClose={onClose}
                                    onSubmit={addServiceType}
                                    submitLabel="Agregar"
                                    className='flex justify-end gap-2 mt-4'
                                />
                            </div>
                        </ModalBody>
                    </>
                )}
            </ModalContent>
        </Modal>
    );
};

export default ModalServiceTypeAdd;
