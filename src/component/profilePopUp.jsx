import React from 'react'

const ProfilePopUp = () => {
  return (
    <>
      <div className='hidden absolute top-16 right-4 w-[163px] h-[185px] bg-white shrink-0 shadow-[0px_3px_10px_0px_rgba(0,0,0,0.08)] px-[7px] pt-[10px] rounded-sm border-[0.8px] border-solid border-[rgba(214,221,239,0.40)]'>
        <button className='bg-[#2EB67D3B] px-[6.4px] py-[1.89px] rounded-sm text-[#2EB67D] text-[10px] font-medium leading-normal'>Owner</button>
        <div className='bg-[#F0F0FF] p-2.5 rounded-sm text-[#5350F8] text-[10px] font-normal mt-[8px] leading-normal'>
          odindark@gmail.com
        </div>
        <ul>
          <li className='h-[35px] w-full border-b flex items-center cursor-pointer'>
              <p className='text-[#4F4F4F] text-[10px] font-normal leading-normal'>Profile</p>
          </li>
          <li className='h-[35px] w-full border-b flex items-center cursor-pointer'>
              <p className='text-[#4F4F4F] text-[10px] font-normal leading-normal'>Setting</p>
          </li>
          <li className='h-[35px] w-full flex items-center cursor-pointer'>
              <p className='text-[#4643EC] text-[10px] font-normal leading-normal'>Logout</p>
          </li>
        </ul>
      </div>
    </>
  )
}

export default ProfilePopUp