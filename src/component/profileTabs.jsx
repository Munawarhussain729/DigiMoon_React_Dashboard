import React, { useState } from 'react';
import Warning from '../assets/svg/ic_warning.svg'

const ProfileTabs = () => {
    const [openTab, setOpenTab] = useState(1);
    const [userInfo, setUserInfo] = useState(JSON.parse(localStorage.getItem('userInfo')) || null)
    console.log("User info ", JSON.parse(localStorage.getItem('userInfo')));
    
    const handleTabClick = (tabNumber) => {
        setOpenTab(tabNumber);
    };

    return (
        <>
            <div className="w-full">
                <ul className="h-[50px] px-3 flex item-center gap-12 rounded-t" role="tablist">
                    <li className={`h-full px-3 py-[15px] cursor-pointer text-[#101010] text-xs font-medium leading-normal ${openTab === 1 ? 'border-b-[3px] border-[#4D4AFB]' : 'border-none'
                        }`}
                        onClick={() => handleTabClick(1)}
                        role="tab"
                    >
                        Profile
                    </li>
                    <li className={`h-full px-3 py-[15px] cursor-pointer text-[#101010] text-xs font-medium leading-normal ${openTab === 2 ? 'border-b-[3px] border-[#4D4AFB]' : 'border-none'
                        }`}
                        onClick={() => handleTabClick(2)}
                        role="tab"
                    >
                        Security
                    </li>
                    <li className={`h-full px-3 py-[15px] cursor-pointer text-[#101010] text-xs font-medium leading-normal ${openTab === 3 ? 'border-b-[3px] border-[#4D4AFB]' : 'border-none'
                        }`}
                        onClick={() => handleTabClick(3)}
                        role="tab"
                    >
                        Weekly Digests
                    </li>
                    <li className={`h-full px-3 py-[15px] cursor-pointer text-[#101010] text-xs font-medium leading-normal ${openTab === 4 ? 'border-b-[3px] border-[#4D4AFB]' : 'border-none'
                        }`}
                        onClick={() => handleTabClick(4)}
                        role="tab"
                    >
                        Transfer Ownership
                    </li>
                </ul>
                <div className="px-4 py-3 h-64">
                    <div className="tab-content tab-space">
                        <div className={openTab === 1 ? 'block' : 'hidden'} id="link1">
                            <h1 className='text-[#888FA6] text-xs font-normal leading-normal'>Manage your profile information</h1>
                            <form className='flex flex-row flex-wrap '>
                                <div className='w-2/4 pr-5 flex flex-col mt-4'>
                                    <label className='text-[#222] mb-1 text-[10px] font-medium leading-normal' htmlFor="fullName">Full Name</label>
                                    <input type="text" name="fullName" id="fullName" value={userInfo?.firstName + " " + userInfo?.lastName } placeholder='John Smith' className='h-[36px] px-4 text-[#464646] text-xs font-normal leading-normal rounded border opacity-[0.78] shadow-[0px_2px_7px_0px_rgba(82,82,82,0.06)] border-solid border-[rgba(209,209,209,0.50)]' />
                                </div>
                                <div className='w-2/4 pr-5 flex flex-col mt-4'>
                                    <label className='text-[#222] mb-1 text-[10px] font-medium leading-normal' htmlFor="username">Username</label>
                                    <input type="text" name="username" id="username" value={userInfo?.username} placeholder='Smith’s Company' className='h-[36px] text-[#464646] text-xs font-normal leading-normal px-4 rounded border opacity-[0.78] shadow-[0px_2px_7px_0px_rgba(82,82,82,0.06)] border-solid border-[rgba(209,209,209,0.50)]' />
                                </div>
                                <div className='w-2/4 pr-5 flex flex-col mt-4'>
                                    <label className='text-[#222] mb-1 text-[10px] font-medium leading-normal' htmlFor="timezone">Timezone</label>
                                    <select className='h-[36px] text-[#464646] text-xs font-normal leading-normal px-3 rounded border opacity-[0.78] shadow-[0px_2px_7px_0px_rgba(82,82,82,0.06)] border-solid border-[rgba(209,209,209,0.50)]' name="timezone" id="timezone">
                                        <option value="timezone">( GMT +0.4 ) Dubai</option>
                                    </select>
                                </div>
                                <div className='w-2/4 pr-5 flex flex-col mt-4 relative'>
                                    <label className='text-[#222] mb-1 text-[10px] font-medium leading-normal' htmlFor="fullName">Email</label>
                                    <input type="email" name="email" id="email" value={userInfo?.email} placeholder='smith34@gmail.com' className='h-[36px] text-[#464646] text-xs font-normal leading-normal px-4 rounded border opacity-[0.78] shadow-[0px_2px_7px_0px_rgba(82,82,82,0.06)] border-solid border-[rgba(209,209,209,0.50)] relative' />
                                    <p className='absolute top-7 right-7 cursor-pointer text-[#845E9A] text-[10px] font-normal leading-normal'>Change Email</p>
                                </div>
                            </form>
                        </div>
                        <div className={openTab === 2 ? 'block' : 'hidden'} id="link2">
                            <h1 className='text-[#888FA6] text-xs font-normal leading-normal'>Secure your user account by making sure you have a strong password and two-factor authentication enabled</h1>
                            <form className='flex flex-row flex-wrap '>
                                <div className='w-2/4 pr-5 flex flex-col mt-4'>
                                    <label className='text-[#222] mb-1 text-[10px] font-medium leading-normal' htmlFor="password">Password</label>
                                    <input type="password" name="password" id="password" placeholder='************' className='h-[36px] px-4 text-[#464646] text-xs font-normal leading-normal rounded border opacity-[0.78] shadow-[0px_2px_7px_0px_rgba(82,82,82,0.06)] border-solid border-[rgba(209,209,209,0.50)]' />
                                </div>
                                <div className='w-2/4 pr-5 flex flex-col mt-4'>
                                    <label className='text-[#222] mb-1 text-[10px] font-medium leading-normal' htmlFor="newpassword">New Password</label>
                                    <input type="password" name="newpassword" id="newpassword" placeholder='************' className='h-[36px] text-[#464646] text-xs font-normal leading-normal px-4 rounded border opacity-[0.78] shadow-[0px_2px_7px_0px_rgba(82,82,82,0.06)] border-solid border-[rgba(209,209,209,0.50)]' />
                                </div>
                                <div className='w-2/4 pr-5 flex flex-col mt-4'>
                                    <label className='text-[#222] mb-1 text-[10px] font-medium leading-normal' htmlFor="timezone">Two-Factor Authentication</label>
                                    <div className='h-[36px] flex items-center justify-between'>
                                        <p className='text-[#4FC47F] text-xs font-semibold leading-normal'>Enabled with app authentication</p>
                                        <p className='cursor-pointer text-[#845E9A] text-[10px] font-normal leading-normal'>Manage</p>
                                    </div>
                                </div>
                                <div className='w-2/4 pr-5 flex flex-col mt-4 relative'>
                                    <label className='text-[#222] mb-1 text-[10px] font-medium leading-normal' htmlFor="connectedapp">Connected Apps</label>
                                    <input type="text" name="connectedapp" id="connectedapp" placeholder='smith34@gmail.com' className='h-[36px] text-[#464646] text-xs font-normal leading-normal px-4 rounded border opacity-[0.78] shadow-[0px_2px_7px_0px_rgba(82,82,82,0.06)] border-solid border-[rgba(209,209,209,0.50)] relative' />
                                    <p className='absolute top-7 right-7 cursor-pointer text-[#845E9A] text-[10px] font-normal leading-normal'>Disconnect</p>
                                </div>
                            </form>
                        </div>
                        <div className={openTab === 3 ? 'block' : 'hidden'} id="link3">
                            <h1 className='text-[#888FA6] text-xs font-normal leading-normal'>Get an email every Monday morning with weekly statistics of your servers</h1>
                            <div className='w-1/2 flex justify-between items-center mt-4'>
                                <h4 className='text-[#222] text-xs font-medium leading-normal'>Server</h4>
                                <div className='flex justify-between items-center gap-1'>
                                    <input type="checkbox" />
                                    <p className='text-[#464646] text-xs font-normal leading-normal'>My First Server</p>
                                </div>
                            </div>
                        </div>
                        <div className={openTab === 4 ? 'block' : 'hidden'} id="link4">
                            <div className='flex items-center gap-1'>
                                <img src={Warning} />
                                <p className='text-[#FC4869] text-xs font-medium leading-normal '>Your must <span className='font-semibold underline cursor-pointer hover:no-underline'>invite a user</span> to this account before transferring</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex justify-end px-4 py-3'>
                    <button className='rounded px-[18.37px] py-[8.69px] bg-[#FFB352] text-[white] text-center text-xs font-semibold leading-normal'>Save Changes</button>
                </div>
            </div>
        </>
    );
};

export default ProfileTabs;
