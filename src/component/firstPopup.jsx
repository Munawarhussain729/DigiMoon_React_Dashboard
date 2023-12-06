import React from 'react'
import TopCircle from '../assets/svg/ic_circle.svg'

const FirstPopUp = () => {
    return (
        <>
            <div className='hidden w-[472px] h-[652px] bg-[white] shrink-0 shadow-[-3px_0px_44px_0px_rgba(0,0,0,0.13)] rounded-[5px_0px_0px_0px] p-6'>
                <img src={TopCircle} alt="" />
                <div>
                    <h3 className='text-[#101010] text-xl font-medium leading-normal mt-2'>General Information</h3>
                    <div className='h-px mt-2 bg-[#E7E6E9]'></div>
                    <ul>
                        <li className='flex justify-between items-center mt-3'>
                            <p className='w-3/6 text-left text-[#828282] text-xs font-medium leading-normal'>First Name</p>
                            <p className='w-2/6 text-left text-[#464646] text-xs font-medium leading-normal'>Smith__|</p>
                        </li>
                        <li className='flex justify-between items-center mt-2'>
                            <p className='w-3/6 text-left text-[#828282] text-xs font-medium leading-normal'>Last Name</p>
                            <p className='w-2/6 text-left text-[#464646] text-xs font-medium leading-normal'>John</p>
                        </li>
                        <li className='flex justify-between items-center mt-2'>
                            <p className='w-3/6 text-left text-[#828282] text-xs font-medium leading-normal'>Name In The System</p>
                            <p className='w-2/6 text-left text-[#464646] text-xs font-medium leading-normal'>Smith Function</p>
                        </li>
                        <li className='flex justify-between items-center mt-2'>
                            <p className='w-3/6 text-left text-[#828282] text-xs font-medium leading-normal'>Employee ID</p>
                            <p className='w-2/6 text-left text-[#464646] text-xs font-medium leading-normal'>2382AS</p>
                        </li>
                    </ul>
                </div>
                <div className='mt-6'>
                    <h3 className='text-[#101010] text-xl font-medium leading-normal mt-2'>Contact Information</h3>
                    <div className='h-px mt-2 bg-[#E7E6E9]'></div>
                    <ul>
                        <li className='flex justify-between items-center mt-3'>
                            <p className='w-3/6 text-left text-[#828282] text-xs font-medium leading-normal'>Phone</p>
                            <div className='w-2/6'>
                                <button className='w-[52px] h-[18px] rounded-md bg-[#4441EB3B] text-[#4441EB] text-xs font-semibold leading-normal'>Add</button>
                            </div>
                        </li>
                        <li className='flex justify-between items-center mt-2'>
                            <p className='w-3/6 text-left text-[#828282] text-xs font-medium leading-normal'>Mobile Phone</p>
                            <div className='w-2/6'>
                                <button className='w-[52px] h-[18px] rounded-md bg-[#4441EB3B] text-[#4441EB] text-xs font-semibold leading-normal'>Add</button>
                            </div>
                        </li>
                        <li className='flex justify-between items-center mt-2'>
                            <p className='w-3/6 text-left text-[#828282] text-xs font-medium leading-normal'>Email</p>
                            <div className='w-2/6'>
                                <button className='w-[52px] h-[18px] rounded-md bg-[#4441EB3B] text-[#4441EB] text-xs font-semibold leading-normal'>Add</button>
                            </div>
                        </li>
                        <li className='flex justify-between items-center mt-2'>
                            <p className='w-3/6 text-left text-[#828282] text-xs font-medium leading-normal'>Address</p>
                            <div className='w-2/6'>
                                <button className='w-[52px] h-[18px] rounded-md bg-[#4441EB3B] text-[#4441EB] text-xs font-semibold leading-normal'>Add</button>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className='mt-[30px]'>
                    <h3 className='text-[#101010] text-xl font-medium leading-normal mt-2'>System Access</h3>
                    <div className='h-px mt-2 bg-[#E7E6E9]'></div>
                    <ul>
                        <li className='flex justify-between items-center mt-3'>
                            <p className='w-3/6 text-left text-[#828282] text-xs font-medium leading-normal'>Username in Syrve Office</p>
                            <div className='w-2/6'>
                                <button className='w-[52px] h-[18px] rounded-md bg-[#4441EB3B] text-[#4441EB] text-xs font-semibold leading-normal'>Add</button>
                            </div>
                        </li>
                        <li className='flex justify-between items-center mt-2'>
                            <p className='w-3/6 text-left text-[#828282] text-xs font-medium leading-normal'>Password</p>
                            <p className='w-2/6 text-[#464646] text-xs font-medium leading-normal'>Generate new</p>
                        </li>
                    </ul>
                </div>
                <div className='flex items-center justify-between gap-3 mt-20'>
                    <button className='w-[85px] h-[38px] border rounded-[3px] border-solid border-[#FFB352] text-[#F1A546] text-center text-xs font-semibold leading-normal'>Close</button>
                    <button className='w-[328px] h-[38px] border rounded-[3px] border-solid bg-[#FFB352] text-white text-center text-xs font-semibold leading-normal'>Suspend</button>
                </div>
            </div>
        </>
    )
}

export default FirstPopUp