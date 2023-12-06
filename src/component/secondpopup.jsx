import React from 'react'
import styled from "styled-components";
import expadndown from '../assets/svg/ic_expanddown.svg'

const StyledPopUpComponent = styled.div`
input[type="checkbox"]::{
    display: block;
    width: 11px;
    height: 11px;
    border: 1px solid #808080;
    content: "";
    background: red;
}
`;

const SecondPopup = () => {
    return (
        <>
            <StyledPopUpComponent>
                <div className='hidden w-80 h-[318px] bg-white shrink-0 shadow-[0px_3px_10px_0px_rgba(0,0,0,0.08)] p-4 rounded-sm border-[0.8px] border-solid border-[rgba(214,221,239,0.40)]'>
                    <div className='flex justify-between items-center'>
                        <h2 className='text-[#4441EB] text-xs not-italic font-semibold leading-normal uppercase'>Columns Fields</h2>
                        <img src={expadndown} />
                    </div>
                    <div className='h-px bg-[#E6E6E6] mt-[10px]'></div>
                    <div className='mt-[10px] h-[243px] overflow-x-hidden overflow-auto'>
                        <h3 className='text-[#333] text-xs font-medium leading-normal capitalize'>Entries</h3>
                        <ul className='flex flex-row flex-wrap'>
                            <li className='w-1/2 flex items-center gap-[6px] mt-[5px]'>
                                <input type="checkbox" />
                                <p className='text-[#4F4F4F] text-[10px] not-italic font-normal leading-normal capitalize'>Rating</p>
                            </li>
                            <li className='w-1/2 flex items-center gap-[6px] mt-[5px]'>
                                <input type="checkbox" />
                                <p className='text-[#4F4F4F] text-[10px] not-italic font-normal leading-normal capitalize'>Rating</p>
                            </li>
                            <li className='w-1/2 flex items-center gap-[6px] mt-[5px]'>
                                <input type="checkbox" />
                                <p className='text-[#4F4F4F] text-[10px] not-italic font-normal leading-normal capitalize'>Rating</p>
                            </li>
                            <li className='w-1/2 flex items-center gap-[6px] mt-[5px]'>
                                <input type="checkbox" />
                                <p className='text-[#4F4F4F] text-[10px] not-italic font-normal leading-normal capitalize'>Rating</p>
                            </li>
                            <li className='w-1/2 flex items-center gap-[6px] mt-[5px]'>
                                <input type="checkbox" />
                                <p className='text-[#4F4F4F] text-[10px] not-italic font-normal leading-normal capitalize'>Rating</p>
                            </li>
                            <li className='w-1/2 flex items-center gap-[6px] mt-[5px]'>
                                <input type="checkbox" />
                                <p className='text-[#4F4F4F] text-[10px] not-italic font-normal leading-normal capitalize'>Rating</p>
                            </li>
                            <li className='w-1/2 flex items-center gap-[6px] mt-[5px]'>
                                <input type="checkbox" />
                                <p className='text-[#4F4F4F] text-[10px] not-italic font-normal leading-normal capitalize'>Rating</p>
                            </li>
                            <li className='w-1/2 flex items-center gap-[6px] mt-[5px]'>
                                <input type="checkbox" />
                                <p className='text-[#4F4F4F] text-[10px] not-italic font-normal leading-normal capitalize'>Rating</p>
                            </li>
                            <li className='w-1/2 flex items-center gap-[6px] mt-[5px]'>
                                <input type="checkbox" />
                                <p className='text-[#4F4F4F] text-[10px] not-italic font-normal leading-normal capitalize'>Rating</p>
                            </li>
                            <li className='w-1/2 flex items-center gap-[6px] mt-[5px]'>
                                <input type="checkbox" />
                                <p className='text-[#4F4F4F] text-[10px] not-italic font-normal leading-normal capitalize'>Rating</p>
                            </li>
                            <li className='w-1/2 flex items-center gap-[6px] mt-[5px]'>
                                <input type="checkbox" />
                                <p className='text-[#4F4F4F] text-[10px] not-italic font-normal leading-normal capitalize'>Rating</p>
                            </li>
                            <li className='w-1/2 flex items-center gap-[6px] mt-[5px]'>
                                <input type="checkbox" />
                                <p className='text-[#4F4F4F] text-[10px] not-italic font-normal leading-normal capitalize'>Rating</p>
                            </li>
                            <li className='w-1/2 flex items-center gap-[6px] mt-[5px]'>
                                <input type="checkbox" />
                                <p className='text-[#4F4F4F] text-[10px] not-italic font-normal leading-normal capitalize'>Rating</p>
                            </li>
                            <li className='w-1/2 flex items-center gap-[6px] mt-[5px]'>
                                <input type="checkbox" />
                                <p className='text-[#4F4F4F] text-[10px] not-italic font-normal leading-normal capitalize'>Rating</p>
                            </li>
                            <li className='w-1/2 flex items-center gap-[6px] mt-[5px]'>
                                <input type="checkbox" />
                                <p className='text-[#4F4F4F] text-[10px] not-italic font-normal leading-normal capitalize'>Rating</p>
                            </li>
                            <li className='w-1/2 flex items-center gap-[6px] mt-[5px]'>
                                <input type="checkbox" />
                                <p className='text-[#4F4F4F] text-[10px] not-italic font-normal leading-normal capitalize'>Rating</p>
                            </li>
                            <li className='w-1/2 flex items-center gap-[6px] mt-[5px]'>
                                <input type="checkbox" />
                                <p className='text-[#4F4F4F] text-[10px] not-italic font-normal leading-normal capitalize'>Rating</p>
                            </li>
                            <li className='w-1/2 flex items-center gap-[6px] mt-[5px]'>
                                <input type="checkbox" />
                                <p className='text-[#4F4F4F] text-[10px] not-italic font-normal leading-normal capitalize'>Rating</p>
                            </li>
                            <li className='w-1/2 flex items-center gap-[6px] mt-[5px]'>
                                <input type="checkbox" />
                                <p className='text-[#4F4F4F] text-[10px] not-italic font-normal leading-normal capitalize'>Rating</p>
                            </li>
                            <li className='w-1/2 flex items-center gap-[6px] mt-[5px]'>
                                <input type="checkbox" />
                                <p className='text-[#4F4F4F] text-[10px] not-italic font-normal leading-normal capitalize'>Rating</p>
                            </li>
                            <li className='w-1/2 flex items-center gap-[6px] mt-[5px]'>
                                <input type="checkbox" />
                                <p className='text-[#4F4F4F] text-[10px] not-italic font-normal leading-normal capitalize'>Rating</p>
                            </li>
                            <li className='w-1/2 flex items-center gap-[6px] mt-[5px]'>
                                <input type="checkbox" />
                                <p className='text-[#4F4F4F] text-[10px] not-italic font-normal leading-normal capitalize'>Rating</p>
                            </li>
                            <li className='w-1/2 flex items-center gap-[6px] mt-[5px]'>
                                <input type="checkbox" />
                                <p className='text-[#4F4F4F] text-[10px] not-italic font-normal leading-normal capitalize'>Rating</p>
                            </li>
                            <li className='w-1/2 flex items-center gap-[6px] mt-[5px]'>
                                <input type="checkbox" />
                                <p className='text-[#4F4F4F] text-[10px] not-italic font-normal leading-normal capitalize'>Rating</p>
                            </li>
                            <li className='w-1/2 flex items-center gap-[6px] mt-[5px]'>
                                <input type="checkbox" />
                                <p className='text-[#4F4F4F] text-[10px] not-italic font-normal leading-normal capitalize'>Rating</p>
                            </li>
                            <li className='w-1/2 flex items-center gap-[6px] mt-[5px]'>
                                <input type="checkbox" />
                                <p className='text-[#4F4F4F] text-[10px] not-italic font-normal leading-normal capitalize'>Rating</p>
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </StyledPopUpComponent>
        </>
    )
}

export default SecondPopup