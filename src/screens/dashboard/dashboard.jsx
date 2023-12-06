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

const Dashboard = () => {
  const [pageNo, setPageNo] = useState(1)
  const [NotifcationPageNo, setNotifcationPageNo] = useState(1)

  return (
    <>
      <div className="flex items-start">
        <NavigationMenu />
        <div className="pl-[15px] pt-[25px] pr-[18px] w-full ml-[182px]">
          <Navbar />
          <div className="mt-7">
            <SearchField />
          </div>
          <div className="w-full mt-4 flex justify-between items-center">
            <div>
              <h3 className="text-[#333] text-xs font-semibold leading-normal">
                Showing 90 Results
              </h3>
              <p className="text-[#828282] text-[10px] font-normal leading-normal">
                Based your preferences
              </p>
            </div>
            <Filter />
          </div>
          <div className="mt-3">
            <Table pageNo={pageNo}/>
            <TableFooter pageNo={pageNo} setPageNo={setPageNo} />
          </div>
          <div className="mt-3">
            <Notification />
            <TableFooter pageNo={NotifcationPageNo} setPageNo={setNotifcationPageNo} />
          </div>
          <div className="fixed bottom-0 right-0 ">
            <FirstPopUp />
            <ThirdPopUp />
          </div>
          <div className="absolute top-16 right-36">
            <FourthPopUp />
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
