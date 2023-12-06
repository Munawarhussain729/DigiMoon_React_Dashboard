import React from 'react'

const Filter = ({filterFields}) => {
    return (
        <>
            <div>
                <ul className='flex items-center gap-2'>
                    <li>
                        <h3 className='text-[#828282] text-xs font-normal leading-normal capitalize'>Applied Filters</h3>
                    </li>
                    {filterFields?.map((item, index)=>{
                        console.log("Type of ", typeof(item.value));
                        if(item.value === null || typeof(item.value) !== "string"){
                            return
                        }
                        return(
                            <li className='px-4 py-2 rounded-md bg-[#4442EB14] cursor-pointer'>
                                <p className='text-[#403DE7] text-xs font-normal leading-normal'>{item.name}: <span className='text-[#403DE7] text-xs font-bold leading-normal'>{item.value}</span></p>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </>
    )
}

export default Filter