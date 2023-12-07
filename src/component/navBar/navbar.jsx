import React from 'react'
import ic_notification from '../../assets/svg/ic_notification.svg'
import Profile from '../../assets/images/profile.png'
import ic_dropdown from '../../assets/svg/ic_profiledropdown.svg'

const Navbar = ({showNotification, setShowNotification}) => {
    return (
        <>
            <div className='flex justify-between items-start'>
                <div>
                    <p className='text-[#4F4F4F] text-xs font-normal leading-normal'>Wednesday, February 8</p>
                    <h3 className='text-[#333] text-base font-medium leading-normal'>Good Morning,<span className='font-bold'> Marcus</span></h3>
                </div>
                <div className='flex'>
                    <div onClick={()=>{setShowNotification(!showNotification)}} className='w-[34px] h-[34px] inline-flex relative cursor-pointer'>
                        <img src={ic_notification} alt="notification" />
                        <div className='absolute -right-[6px] w-[15px] h-[15px] rounded-full bg-[#FFA83A] flex items-center justify-center'><span className='text-white text-[9.154px] leading-normal font-semibold'>2</span></div>
                    </div>
                    <div className='ml-4'>
                        <img src={Profile} className='w-[34px] h-[34px] rounded-full' />
                    </div>
                    <div className='ml-3'>
                        <div className='flex items-center gap-[6px]'>
                            <h3 className='text-[#333] text-xs font-semibold leading-normal'>Odin Dark</h3>
                            <img src={ic_dropdown}  className='block cursor-pointer'/>
                        </div>
                        <p className='text-[#4F4F4F] text-[10px] font-normal leading-[normal]'>User</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar