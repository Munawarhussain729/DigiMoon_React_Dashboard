import React from 'react'

const Filter = () => {
    return (
        <>
            <div>
                <ul className='flex items-center gap-2'>
                    <li>
                        <h3 className='text-[#828282] text-xs font-normal leading-normal capitalize'>Applied Filters</h3>
                    </li>
                    <li className='px-4 py-2 rounded-md bg-[#4442EB14] cursor-pointer'>
                        <p className='text-[#403DE7] text-xs font-normal leading-normal'>Status: <span className='text-[#403DE7] text-xs font-bold leading-normal'>Actives</span></p>
                    </li>
                    <li className='px-4 py-2 rounded-md bg-[#4442EB14] cursor-pointer'>
                        <p className='text-[#403DE7] text-xs font-normal leading-normal'>Priority: <span className='text-[#403DE7] text-xs font-bold leading-normal'>Actives</span></p>
                    </li>
                    <li className='px-4 py-2 rounded-md bg-[#4442EB14] cursor-pointer'>
                        <p className='text-[#403DE7] text-xs font-normal leading-normal'>Date: <span className='text-[#403DE7] text-xs font-bold leading-normal'>Actives</span></p>
                    </li>
                    <li className='px-4 py-2 rounded-md bg-[#4442EB14] cursor-pointer'>
                        <p className='text-[#403DE7] text-xs font-normal leading-normal'>Date Listed: <span className='text-[#403DE7] text-xs font-bold leading-normal'>Actives</span></p>
                    </li>
                    <li className='px-4 py-2 rounded-md bg-[#4442EB14] cursor-pointer'>
                        <p className='text-[#403DE7] text-xs font-normal leading-normal'>+2 more</p>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Filter