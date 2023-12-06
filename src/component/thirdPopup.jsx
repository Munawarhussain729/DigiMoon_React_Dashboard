import React from 'react';
import CloseBtn from '../assets/svg/ic_close.svg';
import ReviewStar from '../assets/svg/ic_start.svg';
import DatePicker from './DatePicker';

const ThirdPopUp = () => {
  return (
    <>
      <div className="hidden bg-white shrink-0 shadow-[0px_3px_10px_0px_rgba(0,0,0,0.08)] rounded-sm border-[0.8px] border-solid border-[rgba(214,221,239,0.40)]">
        <div className="w-[400px] overflow-x-hidden overflow-y-auto h-[550px] p-4">
          <div className="flex justify-between">
            <h3 className="flex w-[42px] h-[17.972px] flex-col justify-center shrink-0 text-[#4441EB] text-xs not-italic font-normal leading-[normal] uppercase">
              Filters
            </h3>
            <button>
              <img src={CloseBtn} />
            </button>
          </div>
          <div className="h-px bg-[#E6E6E6] mt-3"></div>
          <div>
            <div className="mt-4">
              <h3 className="text-[#4F4F4F] text-xs font-medium leading-normal capitalize">
                Status
              </h3>
            </div>
            <ul className="flex items-center gap-4 mt-[7px]">
              <li>
                <button className="h-[19.969px] bg-[#4442EB] rounded px-3 text-white text-[10px] font-normal leading-normal">
                  Active
                </button>
              </li>
              <li>
                <button className="h-[19.969px] bg-[#4442EB14] rounded px-3 text-[#403DE7] text-[10px] font-normal leading-normal">
                  Unactive
                </button>
              </li>
              <li>
                <button className="h-[19.969px] bg-[#4442EB14] rounded px-3 text-[#403DE7] text-[10px] font-normal leading-normal">
                  Pending
                </button>
              </li>
              <li>
                <button className="h-[19.969px] bg-[#4442EB14] rounded px-3 text-[#403DE7] text-[10px] font-normal leading-normal">
                  Completed
                </button>
              </li>
            </ul>
          </div>
          <div>
            <div className="mt-4">
              <h3 className="text-[#4F4F4F] text-xs font-medium leading-normal capitalize">
                Priority
              </h3>
            </div>
            <ul className="flex items-center gap-4 mt-[7px]">
              <li>
                <button className="h-[19.969px] bg-[#4442EB] rounded px-3 text-white text-[10px] font-normal leading-normal">
                  High
                </button>
              </li>
              <li>
                <button className="h-[19.969px] bg-[#4442EB14] rounded px-3 text-[#403DE7] text-[10px] font-normal leading-normal">
                  Low
                </button>
              </li>
              <li>
                <button className="h-[19.969px] bg-[#4442EB14] rounded px-3 text-[#403DE7] text-[10px] font-normal leading-normal">
                  Mid
                </button>
              </li>
            </ul>
          </div>
          <div>
            <div className="mt-3">
              <h3 className="text-[#4F4F4F] text-xs font-medium leading-normal capitalize">
                Price range
              </h3>
            </div>
            <ul className="mt-2 flex items-center gap-[10px]">
              <li className="w-28 h-[19.969px] shrink-0 rounded-l flex items-center justify-center bg-[#EFEFFC]">
                <div className="w-2/5 px-2">
                  <p className="text-center text-[#4643EC] text-[10px] font-normal leading-normal">
                    Min
                  </p>
                </div>
                <div className="w-full bg-white">
                  <input
                    type="number"
                    className="h-full w-full shadow-[0px_2px_6px_0px_rgba(166,166,166,0.08)] rounded border border-solid border-[rgba(214,221,239,0.40)]"
                  />
                </div>
              </li>
              <li>
                <p className="text-[#828282] text-[10px] font-normal leading-normal">
                  to
                </p>
              </li>
              <li className="w-28 h-[19.969px] shrink-0 rounded-l flex items-center justify-center bg-[#EFEFFC]">
                <div className="w-2/5 px-2">
                  <p className="text-center text-[#4643EC] text-[10px] font-normal leading-normal">
                    Max
                  </p>
                </div>
                <div className="w-full bg-white">
                  <input
                    type="number"
                    className="h-full w-full shadow-[0px_2px_6px_0px_rgba(166,166,166,0.08)] rounded border border-solid border-[rgba(214,221,239,0.40)]"
                  />
                </div>
              </li>
            </ul>
          </div>
          <div>
            <div className="mt-4">
              <h3 className="text-[#4F4F4F] text-xs font-medium leading-normal capitalize">
                Rating
              </h3>
            </div>
            <ul className="flex items-center gap-[5px] mt-[6px]">
              <li className="mt-[2px]">
                <input type="checkbox" className="" />
              </li>
              <li>
                <ul className="flex items-center gap-[2px]">
                  <li>
                    <img src={ReviewStar} />
                  </li>
                  <li>
                    <img src={ReviewStar} />
                  </li>
                  <li>
                    <img src={ReviewStar} />
                  </li>
                  <li>
                    <img src={ReviewStar} />
                  </li>
                  <li>
                    <img src={ReviewStar} />
                  </li>
                </ul>
              </li>
            </ul>
            <ul className="flex items-center gap-[5px] mt-[6px]">
              <li className="mt-[2px]">
                <input type="checkbox" className="" />
              </li>
              <li>
                <ul className="flex items-center gap-[2px]">
                  <li>
                    <img src={ReviewStar} />
                  </li>
                  <li>
                    <img src={ReviewStar} />
                  </li>
                  <li>
                    <img src={ReviewStar} />
                  </li>
                  <li>
                    <img src={ReviewStar} />
                  </li>
                </ul>
              </li>
            </ul>
            <ul className="flex items-center gap-[5px] mt-[6px]">
              <li className="mt-[2px]">
                <input type="checkbox" className="" />
              </li>
              <li>
                <ul className="flex items-center gap-[2px]">
                  <li>
                    <img src={ReviewStar} />
                  </li>
                  <li>
                    <img src={ReviewStar} />
                  </li>
                  <li>
                    <img src={ReviewStar} />
                  </li>
                </ul>
              </li>
            </ul>
            <ul className="flex items-center gap-[5px] mt-[6px]">
              <li className="mt-[2px]">
                <input type="checkbox" className="" />
              </li>
              <li>
                <ul className="flex items-center gap-[2px]">
                  <li>
                    <img src={ReviewStar} />
                  </li>
                  <li>
                    <img src={ReviewStar} />
                  </li>
                </ul>
              </li>
            </ul>
            <ul className="flex items-center gap-[5px] mt-[6px]">
              <li className="mt-[2px]">
                <input type="checkbox" className="" />
              </li>
              <li>
                <ul className="flex items-center gap-[2px]">
                  <li>
                    <img src={ReviewStar} />
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <DatePicker />
        </div>
        <button className="h-[50px] bg-[#EFEFFD] text-[#4441EB] w-full text-xs font-normal leading-normal uppercase">
          Apply Filter
        </button>
      </div>
    </>
  );
};

export default ThirdPopUp;
