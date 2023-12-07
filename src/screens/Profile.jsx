import React, { useState } from 'react';
import styled from 'styled-components';
import BgImage from '../assets/images/BG.png';
import NavigationMenu from '../component/navigationMenu/navigationMenu';
import PersonProfile from '../assets/images/personProfile.png'
import ProfileCrown from '../assets/svg/ic_crown.svg'
import FacebookIcon from '../assets/images/facebook.png'
import InstagramIcon from '../assets/images/instagram.png'
import TwitterIcon from '../assets/images/twitter.png'
import CameraiIcon from '../assets/svg/ic_camera.svg'
import ProfileTabs from '../component/profileTabs';
import StepFirst from '../component/stepFirst';

const ProfileComponentStyled = styled.div`
    .profilebg {
        background-image: url('${BgImage}');
        background-repeat: no-repeat;
        width: 100%;
        height: 174px;
    }
`;

const Profile = () => {
    
    return (
        <>
            <ProfileComponentStyled>
                <div className='flex items-start'>
                    <NavigationMenu />
                    <div className='pl-[15px] pt-[25px] pr-[18px] w-full ml-[182px]'>
                        <div className='profilebg'>
                            <div className='w-[95%] mx-auto pt-28 flex justify-between gap-5'>
                                <div className='w-[262px] h-[371px] bg-white rounded shadow-[0px_4px_8px_0px_rgba(0,0,0,0.05)]'>
                                    <div className='flex flex-col gap-1 pt-[30px]'>
                                        <div className='w-[152px] h-[152px] rounded-full relative mx-auto'>
                                            <img src={PersonProfile} />
                                            <div className='absolute top-[70%] cursor-pointer right-0 w-[30px] h-[30px] rounded-full bg-[#4D4AFB] border-2 border-white flex justify-center items-center'>
                                                <img src={CameraiIcon} className='' />
                                            </div>
                                        </div>
                                        <h2 className='text-[#4F4F4F] mt-[25px] text-center text-2xl font-semibold leading-normal'>Dark Oduin</h2>
                                        <p className='text-[#828282] text-center text-sm font-light leading-5'>johndoe@gmail.com</p>
                                        <div className='flex items-center justify-center'>
                                            <img src={ProfileCrown} />
                                            <p className='text-[#828282] text-center text-sm font-light leading-5'>Owner</p>
                                        </div>
                                        <ul className='flex items-center justify-center gap-6 mt-4'>
                                            <li className='cursor-pointer'>
                                                <img src={FacebookIcon} />
                                            </li>
                                            <li className='cursor-pointer'>
                                                <img src={InstagramIcon} />
                                            </li>
                                            <li className='cursor-pointer'>
                                                <img src={TwitterIcon} />
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className='w-[881px] h-[371px] bg-white rounded shadow-[0px_4px_8px_0px_rgba(0,0,0,0.05)]'>
                                    <ProfileTabs />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </ProfileComponentStyled>
        </>
    );
};

export default Profile;