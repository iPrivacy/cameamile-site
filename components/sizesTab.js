import { Fragment, React, useState } from 'react'
import { Tab } from '@headlessui/react'  

const sizes = [
    {size: 'XS'},
    {size: 'S'},
    {size: 'M'},
    {size: 'L'},
    {size: 'XL'},
]

function Sizestab() {
    return (
        <div className=" z-10  w-72 border-2 border-r-0 border-dark">
            <Tab.Group defaultIndex={0}>
                <Tab.List className=" flex w-full text-xs ">
                    {sizes.map((selectedSize) => (
                        <Tab className=" w-1/5 flex flex-row justify-center border-r-2 border-black" as="div">
                        {({selected}) => (
                            <button className={selected ? ' w-full py-2 bg-black text-xs font-semibold text-white ':' text-black text-xs font-semibold'}>
                                {selectedSize.size}
                            </button>
                        )}
                    </Tab>
                    ))}
                </Tab.List>
            </Tab.Group>
        </div>
    )
}

export default Sizestab
