import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { DateRangePicker } from 'react-date-range';
import { useState } from 'react';
import { addDays } from 'date-fns';
import '../assets/DatePicker.css';

const DatePicker = () => {
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: 'selection',
    },
  ]);
  return (
    <>
      <div className="w-full">
        <div className="mt-4 mb-[11px]">
          <h3 className="text-[#4F4F4F] text-xs font-medium leading-normal capitalize">
            Date Range
          </h3>
        </div>
        <DateRangePicker
          onChange={(item) => setState([item.selection])}
          months={2}
          ranges={state}
          direction="horizontal"
          rangeColors={['#4643EC']}
        />
      </div>
    </>
  );
};

export default DatePicker;
