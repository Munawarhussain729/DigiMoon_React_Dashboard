import React from 'react'
import styled from 'styled-components';
import NotiImg from '../assets/images/notficationimg.png';
import DeleteIcon from '../assets/svg/ic_delete.svg';

const TableStyledComponent = styled.div`
    table {
        thead > tr {
            > th:first-child {
                padding-left: 33px; 
            }
            > th:last-child {
                padding-right: 20px;
            }
        }

        tbody tr {
            height: 57px;
            border-bottom: 0.578px solid rgba(214,221,239,0.40);
            td:first-child {
                padding-left: 33px; 
            }
            td:last-child {
                padding-right: 20px;
            }
        }
    }
`;

const Notification = () => {
    return (
        <>
            <TableStyledComponent>
                <table className='w-full'>
                    <thead className='h-[40px] bg-[#F8F8F8]'>
                        <tr>
                            <th>
                                <p className='rounded-tl text-[#333] text-start text-xs font-semibold leading-normal'>All Notifications</p>
                            </th>
                            <th className='py-4 flex justify-end items-center gap-5'>
                                <p className='inline-block cursor-pointer rounded-tr text-[#4441EB] text-xs font-bold leading-normal'>Mark as read</p>
                                <img src={DeleteIcon} className='cursor-pointer' />
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <div className='flex items-center gap-[14px]'>
                                    <input type="checkbox" />
                                    <div className='w-[39px] h-[39px] rounded-full'>
                                        <img src={NotiImg} />
                                    </div>
                                    <div className='flex flex-col gap-y-[3px]'>
                                        <p className='text-[#101010] text-xs font-medium leading-normal'>Order ID 2332 has been created</p>
                                        <p className='text-[#888FA6] text-[10px] font-normal leading-normal'>A new order ID 3234 is created by customer ID 2312</p>
                                    </div>
                                </div>
                            </td>
                            <td className='text-end'>
                                <p className='text-[#828282] text-xs font-normal leading-normal'>2 mins ago</p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className='flex items-center gap-[14px]'>
                                    <input type="checkbox" />
                                    <div className='w-[39px] h-[39px] rounded-full'>
                                        <img src={NotiImg} />
                                    </div>
                                    <div className='flex flex-col gap-y-[3px]'>
                                        <p className='text-[#101010] text-xs font-medium leading-normal'>Order ID 2332 has been created</p>
                                        <p className='text-[#888FA6] text-[10px] font-normal leading-normal'>A new order ID 3234 is created by customer ID 2312</p>
                                    </div>
                                </div>
                            </td>
                            <td className='text-end'>
                                <p className='text-[#828282] text-xs font-normal leading-normal'>2 mins ago</p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className='flex items-center gap-[14px]'>
                                    <input type="checkbox" />
                                    <div className='w-[39px] h-[39px] rounded-full'>
                                        <img src={NotiImg} />
                                    </div>
                                    <div className='flex flex-col gap-y-[3px]'>
                                        <p className='text-[#101010] text-xs font-medium leading-normal'>Order ID 2332 has been created</p>
                                        <p className='text-[#888FA6] text-[10px] font-normal leading-normal'>A new order ID 3234 is created by customer ID 2312</p>
                                    </div>
                                </div>
                            </td>
                            <td className='text-end'>
                                <p className='text-[#828282] text-xs font-normal leading-normal'>2 mins ago</p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className='flex items-center gap-[14px]'>
                                    <input type="checkbox" />
                                    <div className='w-[39px] h-[39px] rounded-full'>
                                        <img src={NotiImg} />
                                    </div>
                                    <div className='flex flex-col gap-y-[3px]'>
                                        <p className='text-[#101010] text-xs font-medium leading-normal'>Order ID 2332 has been created</p>
                                        <p className='text-[#888FA6] text-[10px] font-normal leading-normal'>A new order ID 3234 is created by customer ID 2312</p>
                                    </div>
                                </div>
                            </td>
                            <td className='text-end'>
                                <p className='text-[#828282] text-xs font-normal leading-normal'>2 mins ago</p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className='flex items-center gap-[14px]'>
                                    <input type="checkbox" />
                                    <div className='w-[39px] h-[39px] rounded-full'>
                                        <img src={NotiImg} />
                                    </div>
                                    <div className='flex flex-col gap-y-[3px]'>
                                        <p className='text-[#101010] text-xs font-medium leading-normal'>Order ID 2332 has been created</p>
                                        <p className='text-[#888FA6] text-[10px] font-normal leading-normal'>A new order ID 3234 is created by customer ID 2312</p>
                                    </div>
                                </div>
                            </td>
                            <td className='text-end'>
                                <p className='text-[#828282] text-xs font-normal leading-normal'>2 mins ago</p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className='flex items-center gap-[14px]'>
                                    <input type="checkbox" />
                                    <div className='w-[39px] h-[39px] rounded-full'>
                                        <img src={NotiImg} />
                                    </div>
                                    <div className='flex flex-col gap-y-[3px]'>
                                        <p className='text-[#101010] text-xs font-medium leading-normal'>Order ID 2332 has been created</p>
                                        <p className='text-[#888FA6] text-[10px] font-normal leading-normal'>A new order ID 3234 is created by customer ID 2312</p>
                                    </div>
                                </div>
                            </td>
                            <td className='text-end'>
                                <p className='text-[#828282] text-xs font-normal leading-normal'>2 mins ago</p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className='flex items-center gap-[14px]'>
                                    <input type="checkbox" />
                                    <div className='w-[39px] h-[39px] rounded-full'>
                                        <img src={NotiImg} />
                                    </div>
                                    <div className='flex flex-col gap-y-[3px]'>
                                        <p className='text-[#101010] text-xs font-medium leading-normal'>Order ID 2332 has been created</p>
                                        <p className='text-[#888FA6] text-[10px] font-normal leading-normal'>A new order ID 3234 is created by customer ID 2312</p>
                                    </div>
                                </div>
                            </td>
                            <td className='text-end'>
                                <p className='text-[#828282] text-xs font-normal leading-normal'>2 mins ago</p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className='flex items-center gap-[14px]'>
                                    <input type="checkbox" />
                                    <div className='w-[39px] h-[39px] rounded-full'>
                                        <img src={NotiImg} />
                                    </div>
                                    <div className='flex flex-col gap-y-[3px]'>
                                        <p className='text-[#101010] text-xs font-medium leading-normal'>Order ID 2332 has been created</p>
                                        <p className='text-[#888FA6] text-[10px] font-normal leading-normal'>A new order ID 3234 is created by customer ID 2312</p>
                                    </div>
                                </div>
                            </td>
                            <td className='text-end'>
                                <p className='text-[#828282] text-xs font-normal leading-normal'>2 mins ago</p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className='flex items-center gap-[14px]'>
                                    <input type="checkbox" />
                                    <div className='w-[39px] h-[39px] rounded-full'>
                                        <img src={NotiImg} />
                                    </div>
                                    <div className='flex flex-col gap-y-[3px]'>
                                        <p className='text-[#101010] text-xs font-medium leading-normal'>Order ID 2332 has been created</p>
                                        <p className='text-[#888FA6] text-[10px] font-normal leading-normal'>A new order ID 3234 is created by customer ID 2312</p>
                                    </div>
                                </div>
                            </td>
                            <td className='text-end'>
                                <p className='text-[#828282] text-xs font-normal leading-normal'>2 mins ago</p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className='flex items-center gap-[14px]'>
                                    <input type="checkbox" />
                                    <div className='w-[39px] h-[39px] rounded-full'>
                                        <img src={NotiImg} />
                                    </div>
                                    <div className='flex flex-col gap-y-[3px]'>
                                        <p className='text-[#101010] text-xs font-medium leading-normal'>Order ID 2332 has been created</p>
                                        <p className='text-[#888FA6] text-[10px] font-normal leading-normal'>A new order ID 3234 is created by customer ID 2312</p>
                                    </div>
                                </div>
                            </td>
                            <td className='text-end'>
                                <p className='text-[#828282] text-xs font-normal leading-normal'>2 mins ago</p>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </TableStyledComponent>
        </>
    )
}

export default Notification;