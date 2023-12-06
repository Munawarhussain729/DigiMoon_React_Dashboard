import React from 'react'
import StepFirst from '../component/stepFirst'
import NavigationMenu from '../component/navigationMenu/navigationMenu'
import StepSecond from '../component/stepSecond'

const FileUpload = () => {
    return (
        <>
            <div className='flex items-start'>
                <NavigationMenu />
                <div className='pl-[15px] pt-[25px] pr-[18px] w-full ml-[182px]'>
                    {/* <StepFirst /> */}
                    <StepSecond />
                </div>
            </div>
        </>
    )
}

export default FileUpload