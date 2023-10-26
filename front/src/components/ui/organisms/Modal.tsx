import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import AddButton from '../atoms/AddButton'
import ConfirmButton from '../atoms/ConfirmButton'
import InputDemandName from '../atoms/InputStartDate'
import InputDemandSku from '../atoms/InputDemandSku'
import { useMutation } from '@tanstack/react-query'
import { createDemand } from '@/api/demands'
import { createStock } from '@/api/stocks'
import InputStockStartDate from '../atoms/InputStartDate'
import InputDate from '../atoms/InputStartDate'
import InputEndDate from '../atoms/InputEndDate'
import InputStartDate from '../atoms/InputStartDate'

export default function Modal() {
    const [open, setOpen] = useState(false);
    const [values, setValues] = useState({
        description: "",
        SKU: "",
        status: "OPEN"
    });
    const { status, error, mutate } = useMutation({
        mutationFn: createStock
    });

    const handleSubmit = () => {
        try {
            mutate(values);
        } catch (err: any) {
            console.error(err);
        };
    };

    const cancelButtonRef = useRef(null);
    return <>
        <AddButton setOpen={setOpen} />
        <Transition.Root show={open} as={Fragment}>
            <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={setOpen}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                </Transition.Child>
                <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            enterTo="opacity-100 translate-y-0 sm:scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        >
                            <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                                <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                                    <div className="sm:flex sm:items-start">
                                        <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left w-full">
                                            <Dialog.Title as="h3" className="text-base font-semibold leading-6 text-gray-900 text-center">
                                                Criar um estoque
                                            </Dialog.Title>
                                            <div className="mt-2">
                                                <InputStartDate values={values} setValues={setValues} />
                                                <InputEndDate values={values} setValues={setValues} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6 justify-center">
                                    <ConfirmButton setOpen={setOpen} handleSubmit={handleSubmit} />
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    </>
}
