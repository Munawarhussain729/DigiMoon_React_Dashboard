import React from 'react'

const StepFirst = () => {
    return (
        <>
            <div class="w-[1210px] h-[156px] mt-6 rounded-[5px] bg-[#8a89fe] mx-auto flex">
                <div class="w-[544px] mx-auto flex justify-between pt-[22px] pb-[32px]">
                    <div class="flex items-center flex-col">
                        <div
                            class="w-[63px] h-[63px] rounded-full bg-[#9592fb] text-2xl leading-9 text-white text-center font-medium flex justify-center items-center">1</div>
                        <div
                            class="text-[18px] leading-7 font-medium  text-white pt-3">Step
                            1 (Upload Files)</div>
                    </div>
                    <div class="flex items-center flex-col opacity-70">
                        <div class="w-[63px] h-[63px] rounded-full bg-[#9592fb] text-2xl leading-9 text-white text-center font-medium flex justify-center items-center">2</div>
                        <div class="text-[18px] leading-7 font-medium  text-white pt-3">Step 2 (Mapping)</div>
                    </div>
                </div>
            </div>
            <div class="sec2 w-[1210px] mx-auto bg-[#FAFAFA] pb-9">
                <div class="relative flex justify-center pt-9">
                    <img src="images/Vector.png" alt="abc" />
                    <svg class="relative" width="70" height="47" viewBox="0 0 70 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M66.396 25.0276C64.3896 23.0187 61.6688 21.7606 58.7889 21.4796C58.6492 21.4659 58.5082 21.4576 58.3676 21.4485C58.3041 21.4444 58.2411 21.4377 58.1775 21.4347C57.9719 21.4246 57.7656 21.4195 57.5585 21.4195H57.4654C56.4315 9.84882 46.7515 0.75 34.9999 0.75C24.8732 0.75 15.9864 7.64485 13.2768 17.364C12.6759 17.4137 12.078 17.5005 11.4879 17.6244C8.73141 18.1986 6.1749 19.5499 4.20465 21.5227C1.58457 24.1458 0.102266 27.6045 0.00533203 31.2986C-0.00177734 31.5567 -0.00177734 31.8147 0.00533203 32.0729C0.102266 35.767 1.58457 39.2258 4.20465 41.8489C6.17504 43.8215 8.73141 45.1729 11.4879 45.7472C12.4748 45.9545 13.4839 46.0586 14.4922 46.0586H35H51.4062H57.5586C57.9686 46.0586 58.3808 46.0385 58.7891 45.9984C61.6688 45.7172 64.3896 44.4591 66.3961 42.4504C68.7202 40.1235 70 37.0298 70 33.7391C70 30.4484 68.72 27.3547 66.396 25.0276ZM57.5586 41.9521H51.4062H35H14.4922C8.89602 41.9521 4.10156 37.3286 4.10156 31.6858C4.10156 26.043 8.89602 21.4195 14.4922 21.4195C17.2311 21.4195 19.806 22.4875 21.7428 24.4264C22.5436 25.2283 23.8421 25.2283 24.643 24.4264C25.4439 23.6246 25.4439 22.3246 24.643 21.5227C22.6512 19.5286 20.1768 18.1935 17.484 17.6248C19.9668 10.1094 27.0128 4.85652 35 4.85652C44.7311 4.85652 52.7264 12.4918 53.4089 22.1344C51.7169 22.7396 50.1661 23.7181 48.8578 25.0279C48.0569 25.8298 48.0569 27.1298 48.8578 27.9316C49.6586 28.7335 50.9571 28.7335 51.758 27.9316C52.9121 26.7763 54.3495 26.0083 55.9132 25.6911C55.9177 25.6901 55.9221 25.689 55.9266 25.6881C56.4581 25.5812 57.0041 25.526 57.5585 25.526C58.4562 25.526 59.354 25.6762 60.2056 25.9525C63.5101 27.0449 65.8984 30.1215 65.8984 33.7391C65.8984 37.3566 63.5102 40.4331 60.2057 41.5256C59.3541 41.8019 58.4562 41.9521 57.5586 41.9521Z" fill="#4D4AFB" />
                    </svg>
                    <svg class="absolute top-14" width="22" height="26" viewBox="0 0 22 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20.6531 9.23308L12.4504 1.02031C11.6607 0.230211 10.3392 0.230211 9.54948 1.02031L1.34677 9.23308C0.545869 10.0349 0.545869 11.3349 1.34677 12.1368C2.14753 12.9387 3.44608 12.9387 4.24698 12.1368L8.94915 7.42894V23.0046C8.94915 24.1385 9.86735 25.0578 10.9999 25.0578C12.1325 25.0578 13.0507 24.1385 13.0507 23.0046V7.42894L17.753 12.1368C18.1535 12.5377 18.6783 12.7383 19.2031 12.7383C19.7278 12.7383 20.2528 12.5379 20.6531 12.1368C21.454 11.3348 21.454 10.0349 20.6531 9.23308Z" fill="#4D4AFB" />
                    </svg>
                </div>
                <div class="text-2xl leading-9 text-[#333333] font-semibold text-center pt-4">
                    <p>Drag and drop your file here</p>
                </div>
                <div class="text-[16px] leading-6 text-[#828282] font-normal text-center pt-1">
                    <p>Files supported: csv, excel</p>
                </div>
                <div class="text-[16px] leading-6 text-[#4F4F4F] font-normal pt-2 text-center">
                    <span>Or</span>
                </div>
                <div class="flex justify-center pt-[10px]">
                    <button class="w-[116px] h-[34px] rounded-[38px] border border-[#4643EC] text-[12px] leading-[18px] font-normal text-[#5350F8] text-center">Browse Files</button>
                </div>
            </div>
        </>
    )
}

export default StepFirst