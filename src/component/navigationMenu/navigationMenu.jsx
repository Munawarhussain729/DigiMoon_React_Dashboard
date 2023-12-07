import Logo from '../../assets/images/logo.png';
import ic_user from '../../assets/svg/ic_user.svg';
import ic_computer from '../../assets/svg/ic_computer.svg';
import ic_customer from '../../assets/svg/ic_customer.svg';
import ic_home from '../../assets/svg/ic_home.svg';
import ic_todo from '../../assets/svg/ic_todo.svg';
import ic_transaction from '../../assets/svg/ic_transaction.svg';
import ic_logout from '../../assets/svg/ic_logout.svg';
import ic_dropdown from '../../assets/svg/ic_dropdownarrow.svg';
import ic_leftarrow from '../../assets/svg/ic_lessthenarrow.svg';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';

const StyledComponent = styled.div`
  .sidebarFixed a:hover img,
  .sidebarFixed a:focus img {
    filter: invert(25%) sepia(100%) saturate(1762%) hue-rotate(227deg)
      brightness(94%) contrast(96%);
  }
`;

const NavigationMenu = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem('userToken');
    localStorage.removeItem('userInfo');
    navigate('/');
    if (window.history && window.history.pushState) {
      window.history.pushState('', null, './');
      window.onpopstate = function () {
        window.history.pushState('', null, './');
      };
    }
  };
  return (
    <>
      <StyledComponent>
        <div className="fixed pl-[11px] w-[182px] pr-[17px] min-h-screen bg-white h-full">
          <div className="relative flex">
            <img
              src={Logo}
              alt="Logo"
              width={148}
              height={40}
              className="mx-auto mt-5"
            />
            <div className="w-[29px] h-[29px] absolute bg-white cursor-pointer -right-7 top-6 rounded-full flex items-center justify-center z-10">
              <img src={ic_leftarrow} />
            </div>
          </div>
          <div className="mt-5 sidebarFixed">
            <Link
              to="/dashboard"
              role="button"
              tabIndex={0}
              className="group max-w-[154px] h-[34px] mb-[6px] flex items-center justify-start mx-auto gap-2 px-2.5 py-[5px] rounded-md hover:bg-[#F0F0FF] focus:bg-[#F0F0FF] cursor-pointer"
            >
              <img
                src={ic_customer}
                alt="customer"
                className="group-hover:abc px-1 w-[22px]"
              />
              <p className="font-medium group-hover:text-[#4441eb] group-focus:text-[#4441eb] text-[#4F4F4F] text-xs leading-normal">
                Customer
              </p>
            </Link>
            <Link
              to="/dashboard"
              role="button"
              tabIndex={0}
              className="group max-w-[154px] h-[34px] mb-[6px] flex items-center justify-start mx-auto gap-2 px-2.5 py-[5px] rounded-md hover:bg-[#F0F0FF] focus:bg-[#F0F0FF] cursor-pointer"
            >
              <img
                src={ic_home}
                alt="home"
                className="group-hover:abc px-1 w-[22px]"
              />
              <p className="font-medium group-hover:text-[#4441eb] group-focus:text-[#4441eb] text-[#4F4F4F] text-xs leading-normal">
                Properties
              </p>
            </Link>
            <Link
              to="/dashboard"
              role="button"
              tabIndex={0}
              className="group max-w-[154px] h-[34px] mb-[6px] flex items-center justify-start mx-auto gap-2 px-2.5 py-[5px] rounded-md hover:bg-[#F0F0FF] focus:bg-[#F0F0FF] cursor-pointer"
            >
              <img
                src={ic_transaction}
                alt="transaction"
                className="group-hover:abc px-1 w-[22px]"
              />
              <p className="font-medium group-hover:text-[#4441eb] group-focus:text-[#4441eb] text-[#4F4F4F] text-xs leading-normal">
                Transactions
              </p>
              <img src={ic_dropdown} className="ml-4" />
            </Link>
            <Link
              to="/dashboard"
              role="button"
              tabIndex={0}
              className="group max-w-[154px] h-[34px] mb-[6px] flex items-center justify-start mx-auto gap-2 px-2.5 py-[5px] rounded-md hover:bg-[#F0F0FF] focus:bg-[#F0F0FF] cursor-pointer"
            >
              <img
                src={ic_todo}
                alt="todo"
                className="group-hover:abc px-1 w-[22px]"
              />
              <p className="font-medium group-hover:text-[#4441eb] group-focus:text-[#4441eb] text-[#4F4F4F] text-xs leading-normal">
                Task History
              </p>
            </Link>
            <Link
              to="/profile"
              role="button"
              tabIndex={0}
              className="group max-w-[154px] h-[34px] mb-[6px] flex items-center justify-start mx-auto gap-2 px-2.5 py-[5px] rounded-md hover:bg-[#F0F0FF] focus:bg-[#F0F0FF] cursor-pointer"
            >
              <img
                src={ic_user}
                alt="user"
                className="group-hover:abc px-1 w-[22px]"
              />
              <p className="font-medium group-hover:text-[#4441eb] group-focus:text-[#4441eb] text-[#4F4F4F] text-xs leading-normal">
                User
              </p>
            </Link>
            <Link
              to="/dashboard"
              role="button"
              tabIndex={0}
              className="group max-w-[154px] h-[34px] mb-[6px] flex items-center justify-start mx-auto gap-2 px-2.5 py-[5px] rounded-md hover:bg-[#F0F0FF] focus:bg-[#F0F0FF] cursor-pointer"
            >
              <img
                src={ic_computer}
                alt="computer"
                className="group-hover:abc px-1 w-[22px]"
              />
              <p className="font-medium group-hover:text-[#4441eb] group-focus:text-[#4441eb] text-[#4F4F4F] text-xs leading-normal">
                Setup
              </p>
            </Link>
          </div>
          <div className="absolute bottom-2 w-full">
            <button
              to="/"
              className="group max-w-[154px] h-[34px] mb-[6px] flex items-center justify-start gap-2 px-2.5 py-[5px] rounded-md hover:bg-[#F0F0FF] focus:bg-[#F0F0FF] cursor-pointer"
              onClick={handleLogout}
            >
              <img
                src={ic_logout}
                alt="computer"
                className="group-hover:abc px-1 w-[22px]"
              />
              <p className="font-medium group-hover:text-[#4441eb] group-focus:text-[#4441eb] text-[#4F4F4F] text-xs leading-normal">
                Logout
              </p>
            </button>
          </div>
        </div>
      </StyledComponent>
    </>
  );
};

export default NavigationMenu;
