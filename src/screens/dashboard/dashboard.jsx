import { useEffect, useState } from 'react';
import NavigationMenu from '../../component/navigationMenu/navigationMenu';
import Navbar from '../../component/navBar/navbar';
import SearchField from '../../component/searchField/searchField';
import Filter from '../../component/filter';
import Table from '../../component/table';
import TableFooter from '../../component/tablefooter';
import FirstPopUp from '../../component/firstPopup';
// import SecondPopup from '../../component/secondpopup';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import ThirdPopUp from '../../component/thirdPopup';
import FourthPopUp from '../../component/fourthPopUp';
import Notification from '../../component/Notification';
import ProfilePopUp from '../../component/profilePopUp';
import axios from 'axios';

const Dashboard = () => {
  const [pageNo, setPageNo] = useState(1)
  const [NotifcationPageNo, setNotifcationPageNo] = useState(1)
  const [filter, setFilter] = useState(false)
  const [tableFields, setTableFields] = useState()
  const [filterFields, setFilterFields] = useState(null)
  const [CustomerData, setCustomerData] = useState()
  const [searchField, setSearchField] = useState('')
  const [searchColumn, setSearchColumn] = useState([])
  const [showNotification, setShowNotification] = useState(false)
  const [showAllNotification, setShowAllNotification] = useState(false)

  const handleSearchColumnSelection = (columnName) => {
    setSearchColumn((prevSearchColumn) => {
      if (prevSearchColumn.includes(columnName)) {
        // Remove columnName if it exists
        return prevSearchColumn.filter((column) => column !== columnName);
      } else {
        // Add columnName if it doesn't exist
        return [...prevSearchColumn, columnName];
      }
    });
  };

  const fetchTableHeader = async () => {
    const token = localStorage.getItem("userToken")
    const response = await axios.get('http://localhost:8080/customer/get-customer-fields', {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    })
    setTableFields(response?.data?.data)
    console.log("Response is ", response.data.data);
  }
  const fetchTableCustomer = async () => {
    const token = localStorage.getItem("userToken")
    const response = await axios.post('http://localhost:8080/customer/get-customers', {
      "pageSize": 10,
      "pageNumber": pageNo,
    }, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json', // Set the appropriate content type if needed
      },
    });
    console.log("Customer Response is ", response.data.data?.items);
    setCustomerData(response.data.data?.items)
  }

  const fetchCustomerForParams = async () => {
    let params = {}
    params['pageSize'] = 10
    params['pageNumber'] = pageNo
    params['filterParameters'] = []

    filterFields.forEach((item) => {
      if (item.value !== null) {
        params['filterParameters'].push({ columnName: [item.name], value: item.value });
      }
    });

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
  const fetchCustomerForSearch = async () => {
    let params = {}
    params['pageSize'] = 10
    params['pageNumber'] = pageNo
    params['searchParameters'] = {
      value:searchField,
      columns:searchColumn
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

  useEffect(() => {
    fetchTableHeader()
    fetchTableCustomer()
  }, [])

  useEffect(() => {
    setFilterFields(tableFields?.map(item => ({
      name: item.name,
      value: null
    })))
  }, [tableFields])

  return (
    <>
      <div className="flex items-start">
        <NavigationMenu />
        <div className="pl-[15px] pt-[25px] pr-[18px] w-full ml-[182px]">
          <Navbar showNotification={showNotification} setShowNotification={setShowNotification} showAllNotification={showAllNotification} setShowAllNotification={setShowAllNotification} />
          <div className="mt-7">
            <SearchField setFilter={setFilter} filter={filter} searchField={searchField} setSearchField={setSearchField} fetchCustomerForSearch={fetchCustomerForSearch}/>
          </div>
          {
            searchField && (
              <div className='mt-5'>
                <ul className='flex items-center gap-2'>
                  <li>
                    <h3 className='text-[#828282] text-xs font-normal leading-normal capitalize'>Select Column</h3>
                  </li>
                  {tableFields?.map((item, index) => {
                    return (
                      <li onClick={()=>{handleSearchColumnSelection(item.name)}} className={`px-4 py-2 rounded-md ${searchColumn?.includes(item.name)?'bg-[#15138314]':'bg-[#4442EB14]'} cursor-pointer`}>
                        <p className={`${searchColumn?.includes(item?.name)?'text-black':'text-[#403DE7]'} text-xs font-normal leading-normal`}>{item.name}: </p>
                      </li>
                    )
                  })}
                </ul>
              </div>
            )
          }
          <div className="w-full mt-4 flex justify-between items-center">
            <div>
              <h3 className="text-[#333] text-xs font-semibold leading-normal">
                Showing 90 Results
              </h3>
              <p className="text-[#828282] text-[10px] font-normal leading-normal">
                Based your preferences
              </p>
            </div>
            <Filter filterFields={filterFields} />
          </div>
          <div className={`mt-3 ${showAllNotification && 'hidden'}`}>
            <Table pageNo={pageNo} tableFields={tableFields} setTableFields={setTableFields} CustomerData={CustomerData} setCustomerData={setCustomerData} />
            <TableFooter pageNo={pageNo} setPageNo={setPageNo} />
          </div>
          <div className={`mt-3 ${!showAllNotification && 'hidden'}`}>
            <Notification />
            <TableFooter pageNo={NotifcationPageNo} setPageNo={setNotifcationPageNo} />
          </div>
          <div className="fixed bottom-0 right-0 ">
            <FirstPopUp />
            <ThirdPopUp filter={filter} setFilter={setFilter} tableFields={tableFields} filterFields={filterFields} setFilterFields={setFilterFields} fetchCustomerForParams={fetchCustomerForParams} />
          </div>
          <div className="absolute top-16 right-36">
            <FourthPopUp showNotification={showNotification} setShowNotification={setShowNotification} setShowAllNotification={setShowAllNotification}/>
          </div>
          <div>
            <ProfilePopUp />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
