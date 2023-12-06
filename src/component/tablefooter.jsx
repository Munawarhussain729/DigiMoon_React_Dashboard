import React from 'react'
import PreviousPage from '../assets/svg/ic_previospage.svg'
import NextPage from '../assets/svg/ic_nextpage.svg'
import Line from '../assets/svg/ic_line.svg'

const TableFooter = () => {
    return (
        <>
            <div className='flex items-center justify-between mb-10'>
                <div className='flex items-center mt-3 gap-3'>
                    <p className='text-[#333] text-xs font-normal leading-normal'>Listed Items</p>
                    <div className='inline-flex justify-center items-center gap-1.5 bg-[#4442EB14] shadow-[0px_2px_10px_0px_rgba(159,159,159,0.05),0px_4px_8px_0px_rgba(208,208,208,0.10)_inset] px-[9px] py-2 rounded-[5px]'>
                        <span className='text-[#403DE7] text-xs font-medium leading-normal'>10</span>
                    </div>
                    <p className='text-[#333] text-xs font-normal leading-normal'><span>13</span> of <span>456</span> items</p>
                </div>
                <ul className='flex items-center  mt-3 gap-1'>
                    <li className='w-[52px] h-[29px] shrink-0 rounded border border-solid border-[#4643EC] flex justify-center items-center gap-[2.8px]'>
                        <img src={PreviousPage} />
                        <p className='text-[#5350F8] text-xs font-normal leading-normal'>Pre</p>
                    </li>
                    <li className='bg-[#EFEFFD] w-[29px] h-[29px] flex flex-col justify-center items-center shrink-0 p-2.5 rounded-sm'>
                        <p className='text-[#888FA6] text-xs font-medium leading-normal'>1</p>
                    </li>
                    <li className='bg-[#4D4AFB] w-[29px] h-[29px] flex flex-col justify-center items-center shrink-0 p-2.5 rounded-sm'>
                        <p className='text-[#FFFFFF] text-xs font-medium leading-normal'>2</p>
                    </li>
                    <li className='bg-[#EFEFFD] w-[29px] h-[29px] flex flex-col justify-center items-center shrink-0 p-2.5 rounded-sm'>
                        <p className='text-[#888FA6] text-xs font-medium leading-normal'>3</p>
                    </li>
                    <li className='bg-[#EFEFFD] w-[29px] h-[29px] flex flex-col justify-center items-center shrink-0 p-2.5 rounded-sm'>
                        <p className='text-[#888FA6] text-xs font-medium leading-normal'>4</p>
                    </li>
                    <li className='bg-[#EFEFFD] w-[29px] h-[29px] flex flex-col justify-center items-center shrink-0 p-2.5 rounded-sm'>
                        <p className='text-[#888FA6] text-xs font-medium leading-normal'>...</p>
                    </li>
                    <li className='bg-[#EFEFFD] w-[29px] h-[29px] flex flex-col justify-center items-center shrink-0 p-2.5 rounded-sm'>
                        <p className='text-[#888FA6] text-xs font-medium leading-normal'>10</p>
                    </li>
                    <li className='w-[52px] h-[29px] shrink-0 rounded border border-solid border-[#4643EC] flex justify-center items-center gap-[2.8px]'>
                        <p className='text-[#5350F8] text-xs font-normal leading-normal'>Nex</p>
                        <img src={NextPage} className='mt-[2px]' />
                    </li>
                    <li className='mx-3'>
                        <img src={Line} className='mt-[2px]' />
                    </li>
                    <li className='w-[29px] h-[29px] shrink-0 rounded border border-solid border-[#4643EC] flex justify-center items-center gap-[2.8px]'>
                        <p className='bg-white text-[#888FA6] text-xs font-medium leading-normal'>0</p>
                    </li>
                    <li className='bg-[#4D4AFB] w-[46px] h-[29px] flex justify-start items-center shrink-0 p-2.5 rounded-sm'>
                        <p className='text-[#FFFFFF] text-xs font-medium leading-normal'>Go</p>
                    </li>
                </ul>
            </div>
        </ >
  )
}

export default TableFooter