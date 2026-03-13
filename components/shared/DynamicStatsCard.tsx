import {ReactNode, useEffect, useState} from 'react';
import {Stat} from "./StatisticsCard";

const DynamicStatsCard = ({useDynamicStats}:{useDynamicStats: (statsQuery: any) => any}) => {
    const [statsQuery, setStatsQuery] = useState({month: new Date().getMonth() + 1, year: new Date().getFullYear()})
    const {data, isLoading, error, refetch} = useDynamicStats(statsQuery)

    return (
      <div className="bg-white rounded shadow-md flex flex-col space-y-3 p-4 items-start w-full">
        <span className="text-sm font-medium text-gray-400 flex items-center">
          {" "}
          <span>Transaction Statistics </span>
          <span className="font-bold text-base text-gray-600 px-3">
            {" "}
            {
              <StatsDropdown
                setStatsQuery={setStatsQuery}
                statsQuery={statsQuery}
              >
                {''}
              </StatsDropdown>
            }
          </span>
        </span>
        <div className="flex justify-around items-center w-full">
          <Stat
            label={"completed"}
            color={"bg-green-600"}
            count={data?.data.success}
          />
          <Stat
            label={"failed"}
            color={"bg-red-600"}
            count={data?.data.failed}
          />
          <Stat
            label={"Insufficient Funds"}
            color={"bg-sky-600"}
            count={data?.data.insufficientFunds}
          />
          <Stat
            label={"unsuccessful"}
            color={"bg-yellow-500"}
            count={data?.data.unsuccessful}
          />
        </div>
        <div className="flex justify-around w-full">
          <div className="flex flex-col items-center">
            <span className="text-sm font-medium text-gray-500"> Total</span>
            <span className="text-2xl font-bold text-gray-800">
              {" "}
              {data?.data.total}
            </span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-sm font-medium text-gray-500">
              {" "}
              Success Rate
            </span>
            <span className="text-2xl font-bold text-gray-800">
              {" "}
              {data?.data.successRate}%
            </span>
          </div>
        </div>
      </div>
    );
};

export default DynamicStatsCard;

import {MdArrowDropDown} from "react-icons/md";

const StatsDropdown = ({setStatsQuery, statsQuery, children}: {setStatsQuery: any, statsQuery: any, children: ReactNode}) => {

    const handleChange = (e: { target: { name: any; value: any; }; }) => {
        const {name, value} = e.target
        setStatsQuery({...statsQuery, [name]: value, period: 'None'})
    }

    return (
        <span className="flex items-center space-x-5 font-medium text-sm text-[#D84F00]">
               <span className="flex items-center">
                   <select name="month" className="appearance-none focus:outline-none" onChange={handleChange}
                           value={statsQuery.month}>
                       <option key={-1} value={""} className="text-slate-300"> Month </option>
                       {["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
                           .map((option, index) => <option key={index} value={index + 1}>{option}</option>)}
                   </select>
                   <span> <MdArrowDropDown/> </span>
               </span>

                <span className="flex items-center">
                   <select name="year" className="appearance-none focus:outline-none" onChange={handleChange}
                           value={statsQuery.year}>
                       <option key={-1} value={""} className="text-slate-300"> Year </option>
                       {[0, 1, 2, 3, 4, 5].map(n => new Date().getFullYear() - n)
                           .map((option, index) => <option key={index} value={option}>{option}</option>)}
                   </select>
                   <span> <MdArrowDropDown/> </span>
               </span>
            {children}
            </span>
    )
};