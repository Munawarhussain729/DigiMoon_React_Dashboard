import React from 'react'
import styled from "styled-components";
import ic_filter from '../../assets/svg/ic_filter.svg'
import ic_search from '../../assets/svg/ic_search.svg'
import ic_expandup from '../../assets/svg/ic_expandup.svg'
import SecondPopup from '../secondpopup';

const StyledComponent = styled.div`
.searchField::placeholder{
    color: #828282;
}
input[type="search"]::-webkit-search-decoration,
input[type="search"]::-webkit-search-cancel-button,
input[type="search"]::-webkit-search-results-button,
input[type="search"]::-webkit-search-results-decoration {
  -webkit-appearance:none;
}
`;

const SearchField = () => {
    return (
        <>
            <StyledComponent>
                <div className='flex gap-3'>
                <div className='w-10/12 h-11 py-3 ps-4 pl-48 pr-2 rounded-lg bg-[#FEFEFE] shadow-md flex justify-between items-center'>
                    <input type="search" placeholder='Search from listing' className='searchField w-9/12 h-full focus:outline-none text-xs font-normal leading-normal' />
                    <div className='flex justify-center gap-2 items-center'>
                        <div className='w-[89px] h-[27.5px] rounded-[5px] bg-[#F3F3FF] flex justify-center items-center gap-[3.8px] cursor-pointer'>
                            <img src={ic_filter} />
                            <p className='text-[#5350F8] text-xs font-normal leading-normal'>Filter</p>
                        </div>
                        <div className='w-[89px] h-[27.5px] rounded-[5px] bg-[#5350F8] flex justify-center items-center gap-[3.8px] cursor-pointer'>
                            <img src={ic_search} />
                            <p className='text-white text-xs font-normal leading-normal'>Find</p>
                        </div>
                    </div>
                </div>
                <div className='w-2/12 h-11 rounded-lg bg-[#FEFEFE] shadow-md flex justify-around gap-1 items-center relative'>
                    <p className='text-[#5350F8] text-xs font-medium leading-normal'>Update table entries</p>
                    <img src={ic_expandup} />
                    <div className='absolute top-[44.5px] right-0'>
                        <SecondPopup />
                    </div>
                </div>
                </div>
            </StyledComponent>




            {/* <div>
                <div className="relative w-[1216px] h-[45px]">
                    <div className="fixed w-[1216px] h-[45px] top-0 left-0">
                        <div className="absolute w-[1043px] h-[45px] top-0 left-0">
                            <div className="w-[1041px] relative h-[45px] rounded-[8px]">
                                <div className="absolute w-[1041px] h-[45px] top-0 left-0 bg-[#fefefe] rounded-[8px] shadow-[0px_3px_7px_#51515114] opacity-[0.78]" />
                                <div className="absolute w-[89px] h-[28px] top-[9px] left-[944px] bg-[#5350f8] rounded-[5px]" />
                                <div className="absolute top-[15px] left-[16px] [font-family:'Poppins-Regular',Helvetica] font-normal text-[#828282] text-[12px] tracking-[0] leading-[normal]">
                                    Search from listing
                                </div>
                                <div className="absolute w-[38px] h-[18px] top-[15px] left-[972px]">
                                    <div className="relative w-[40px] h-[18px]">
                                        <img className="absolute w-[10px] h-[9px] top-[3px] left-0" alt="Search" src="search.svg" />
                                        <div className="absolute top-0 left-[13px] [font-family:'Poppins-Regular',Helvetica] font-normal text-white text-[12px] tracking-[0] leading-[normal]">
                                            Find
                                        </div>
                                    </div>
                                </div>
                                <div className="absolute w-[89px] h-[28px] top-[9px] left-[847px] bg-[#f3f3ff] rounded-[5px]">
                                    <div className="absolute w-[31px] h-[18px] top-[6px] left-[38px]">
                                        <div className="absolute top-0 left-0 [font-family:'Poppins-Regular',Helvetica] font-normal text-[#5350f8] text-[12px] tracking-[0] leading-[normal]">
                                            Filter
                                        </div>
                                    </div>
                                    <img
                                        className="absolute w-[12px] h-[10px] top-[9px] left-[22px]"
                                        alt="Group"
                                        src="group-1000003284.png"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="absolute w-[165px] h-[45px] top-0 left-[1053px]">
                            <div className="w-[163px] relative h-[45px] rounded-[8px]">
                                <div className="absolute w-[163px] h-[45px] top-0 left-0 bg-[#fefefe] rounded-[8px] shadow-[0px_3px_7px_#51515114] opacity-[0.78]" />
                                <div className="absolute top-[13px] left-[15px] [font-family:'Poppins-Medium',Helvetica] font-medium text-[#5350f8] text-[12px] tracking-[0] leading-[normal]">
                                    Update table entries
                                </div>
                                <img className="absolute w-[8px] h-[4px] top-[21px] left-[143px]" alt="Expand more" src="expand-more.svg" />
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
        </>
    )
}

export default SearchField