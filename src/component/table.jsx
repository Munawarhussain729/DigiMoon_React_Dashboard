import React, { useEffect, useState } from 'react'
import SortArrowDown from '../assets/svg/ic_tablearrowdown.svg';
import SortArrowUp from '../assets/svg/ic_tablearrowup.svg';
import HoverSortArrowDown from '../assets/svg/ic_h_tablearrowDown.svg';
import ActiveSortArrowUp from '../assets/svg/ic_s_tablearrowup.svg';
import axios from 'axios';

const Table = ({pageNo,tableFields, setTableFields, CustomerData, setCustomerData}) => {
  

    function formatDateString(inputDateString) {
        const date = new Date(inputDateString);
        const options = { year: 'numeric', month: 'short', day: 'numeric' };
        const formattedDate = date.toLocaleString('en-US', options);
        return formattedDate
    }

    useEffect(()=>{
        console.log("Page No Changed");
        fetchCustomerForParams()
    },[pageNo])

    const fetchCustomerForParams = async ({ fetchOrder = '', columnName = '' } = {} )=>{
        let params ={}
        if(fetchOrder && !!columnName){
            params['pageSize'] = 10
            params['pageNumber']=pageNo
            params['sortByColumn']=columnName
            params['sortByPreference']=fetchOrder
        }
        else{
            params['pageSize'] = 10
            params['pageNumber']=pageNo
        }
        const token = localStorage.getItem("userToken")
        const response = await axios.post('http://localhost:8080/customer/get-customers', params, {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json', // Set the appropriate content type if needed
            },
        });
        console.log("Customer Response is ", response.data.data?.items);
        setCustomerData(response.data.data?.items)

    }

    return (
        <>
            <table className='w-[1210px] p-5'>
                <thead className='bg-[#F8F8F8] h-[40px] '>
                    <tr>
                        {tableFields?.map((tableHead, index) => {
                            return (
                                <th key={tableHead?._id} className='w-[40px] rounded-tl-md'>
                                    <div className='flex items-center text-center gap-[2px] ps-8'>
                                        <div className='flex flex-col gap-y-[3px]'>
                                            <img className='cursor-pointer' src={ActiveSortArrowUp} onClick={() => fetchCustomerForParams({ fetchOrder: 'asc', columnName: tableHead?.name })} alt="Sort Arrow Up" />
                                            <img className='cursor-pointer' src={HoverSortArrowDown} onClick={() => fetchCustomerForParams({ fetchOrder: 'desc', columnName: tableHead?.name })} alt="Sort Arrow Down" />
                                        </div>
                                        <h4 className='text-[#333] text-xs font-semibold leading-normal capitalize'>{tableHead?.name}</h4>
                                    </div>
                                </th>
                            );
                        })}
                    </tr>
                </thead>
                <tbody>
                    {CustomerData?.map((customerRow, index) => {
                        return (
                            <tr key={index} className='border-b border-[#EFF3FE] py-3'>
                                {tableFields?.map((tableField, index)=>{
                                    if(tableField.name === "status"){
                                        if(customerRow[tableField.name] === "active")
                                        {
                                            return(
                                                <td className='w-[40px]'>
                                                    <div className='bg-[#2EB67D3B] rounded-[5px] h-[18px] w-[52px] flex justify-center items-center'>
                                                        <p className='text-[#2EB67D] text-xs font-semibold leading-normal'>Active</p>
                                                    </div>
                                                </td>
                                            )
                                        }
                                        return(
                                            <td className='w-[40px]'>
                                                <div className='bg-[#b6492e3b] rounded-[5px] h-[18px] w-[52px] flex justify-center items-center'>
                                                    <p className='text-[#b6372e] text-xs font-semibold leading-normal'>UnActive</p>
                                                </div>
                                            </td>
                                        )
                                    }
                                    if(tableField.type === "date"){
                                        return(
                                            <td className='w-[40px] ps-8'>
                                                <p className='text-[#4F4F4F] text-xs font-normal leading-normal py-3'>{formatDateString(customerRow[tableField.name])}</p>
                                            </td>
                                        )
                                    }
                                    if(tableField.type === "Array"){
                                        return(
                                            <td className='w-[40px]'>
                                                <p className='text-[#FFA83A] text-[10px] font-normal leading-[15px] py-3'>View Detail</p>
                                            </td>
                                        )
                                    }
                                    return(
                                        <td className='w-[40px] ps-8'>
                                            <p className='text-[#4F4F4F] text-xs font-normal leading-normal py-3'>{customerRow[tableField.name]}</p>
                                        </td>
                                    )
                                })}
                              
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </>
    )
}

export default Table