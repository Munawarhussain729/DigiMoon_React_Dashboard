import React, { useState } from 'react'
import StepFirst from '../component/stepFirst'
import NavigationMenu from '../component/navigationMenu/navigationMenu'
import StepSecond from '../component/stepSecond'

const FileUpload = () => {
    const [setupStep, setSetupStep] = useState(0)
    return (
        <>
            <div className='flex items-start'>
                <NavigationMenu />
                <div className='pl-[15px] pt-[25px] pr-[18px] w-full ml-[182px]'>
                    <div className={`${setupStep !== 0 && 'hidden'}`}>
                        <StepFirst setSetupStep={setSetupStep} />
                    </div>
                    <div className={`${setupStep !== 1 && 'hidden'}`}>
                        <StepSecond setSetupStep={setSetupStep}/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FileUpload