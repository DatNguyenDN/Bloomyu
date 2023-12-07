import React from "react";
import companies1 from "../../assets/companies1.png";
import companies2 from "../../assets/companies2.png";
import companies3 from "../../assets/companies3.png";
import companies4 from "../../assets/companies4.png";
import companies5 from "../../assets/companies5.png";
import companies6 from "../../assets/companies6.png";
import companies1_small from "../../assets/companies1_small.png";
import companies2_small from "../../assets/companies_small2.png";
import companies3_small from "../../assets/companies_small3.png";
import companies4_small from "../../assets/companies_small_4.png";



const Company = () => {
  const containerStyle = {
    backgroundImage: `url(${companies1})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  const containerStyle2 = {
    backgroundImage: `url(${companies2})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  const containerStyle3 = {
    backgroundImage: `url(${companies3})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  const containerStyle4 = {
    backgroundImage: `url(${companies4})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  const containerStyle5 = {
    backgroundImage: `url(${companies5})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  const containerStyle6 = {
    backgroundImage: `url(${companies6})`,
    backgroundSize: "full",
    backgroundPosition: "center",
  };


  return (
    <main className="font-Inter px-[5%]">
      <h1 className="font-semibold text-[35px] text-center mb-10  tracking-tight hover:tracking-wide">Companies</h1>
      <div id="companies__banner" 
      className="grid grid-cols-3 gap-10 place-content-center place-items-center  max-xl:grid-cols-2 max-sm:grid-cols-1    ">

        <div id="companies__item"
          className="w-[390px] h-[276px] p-[2%]  flex-1 space-y-5 rounded-[31px] border-2 border-solid border-[#ACACAC] bg-blue-500  transition ease-linear delay-150  hover:scale-110 overflow-hidden  cursor-pointer "
          style={containerStyle}
        >
          <img className="mt-12 w-[115px] h-[115px]" src={companies1_small} alt="small_banner" />
          <div className="flex justify-between w-full align-bottom text-sm font-semibold items-start ">
            <h1 className=" ">
              BUYMED Company <hr /> 222 likes
            </h1>
            <button className="w-[92px] h-[36px] flex-shrink-0 text-black bg-[#FFB800] rounded-[10px] hover:border-solid hover:border-4 border-sky-500   transition duration-300">Hiring</button>
          </div>
        </div>

        <div id="companies__item"
          className="w-[390px] h-[276px] p-[2%]  flex-1 space-y-5 rounded-[31px] border-2 border-solid border-[#ACACAC] transition ease-linear delay-150  hover:scale-110 overflow-hidden  cursor-pointer"
          style={containerStyle2}
        >
          <img className="mt-12 w-[115px] h-[115px]" src={companies2_small} alt="small_banner" />
          <div className="flex justify-between w-full align-bottom text-sm font-semibold items-start ">
            <h1 className=" ">
              BUYMED Company <hr /> 222 likes
            </h1>
            <button className="w-[92px] h-[36px] flex-shrink-0 text-black bg-[#FFB800] rounded-[10px] hover:border-solid hover:border-4 border-sky-500   transition duration-300">Hiring</button>
          </div>
        </div>

        <div id="companies__item"
          className="w-[390px] h-[276px] p-[2%]  flex-1 space-y-5 rounded-[31px] border-2 border-solid border-[#ACACAC] transition ease-linear delay-150  hover:scale-110 overflow-hidden  cursor-pointer"
          style={containerStyle3}
        >
          <img className="mt-12 w-[115px] h-[115px]" src={companies3_small} alt="small_banner" />
          <div className="flex justify-between w-full align-bottom text-sm font-semibold items-start ">
            <h1 className=" ">
              BUYMED Company <hr /> 222 likes
            </h1>
            <button className="w-[92px] h-[36px] flex-shrink-0 text-black bg-[#FFB800] rounded-[10px] hover:border-solid hover:border-4 border-sky-500   transition duration-300">Hiring</button>
          </div>
        </div>

        <div id="companies__item"
          className="w-[390px] h-[276px] p-[2%]  flex-1 space-y-5 rounded-[31px] border-2 border-solid border-[#ACACAC] transition ease-linear delay-150  hover:scale-110 overflow-hidden  cursor-pointer"
          style={containerStyle4}
        >
          <img className="mt-12 w-[115px] h-[115px]" src={companies2_small} alt="small_banner" />
          <div className="flex justify-between w-full align-bottom text-sm font-semibold items-start ">
            <h1 className=" ">
              BUYMED Company <hr /> 222 likes
            </h1>
            <button className="w-[92px] h-[36px] flex-shrink-0 text-black bg-[#FFB800] rounded-[10px] hover:border-solid hover:border-4 border-sky-500   transition duration-300">Hiring</button>
          </div>
        </div>

        <div id="companies__item"
          className="w-[390px] h-[276px] p-[2%]  flex-1 space-y-5 rounded-[31px] border-2 border-solid border-[#ACACAC] transition ease-linear delay-150  hover:scale-110 overflow-hidden  cursor-pointer"
          style={containerStyle5}
        >
          <img className="mt-12 w-[115px] h-[115px]" src={companies4_small} alt="small_banner" />
          <div className="flex justify-between w-full align-bottom text-sm font-semibold items-start ">
            <h1 className=" ">
              BUYMED Company <hr /> 222 likes
            </h1>
            <button className="w-[92px] h-[36px] flex-shrink-0 text-black bg-[#FFB800] rounded-[10px] hover:border-solid hover:border-4 border-sky-500   transition duration-300">Hiring</button>
          </div>
        </div>

        <div id="companies__item"
          className="w-[390px] h-[276px] p-[2%]  flex-1 space-y-5 rounded-[31px] border-2 border-solid border-[#ACACAC] transition ease-linear delay-150  hover:scale-110 overflow-hidden  cursor-pointer"
          style={containerStyle6}
        >
          <img className="mt-12 w-[115px] h-[115px]" src={companies3_small} alt="small_banner" />
          <div className="flex justify-between w-full align-bottom text-sm font-semibold items-start ">
            <h1 className="text-white    ">
              BUYMED Company <hr /> 222 likes
            </h1>
            <button className="w-[92px] h-[36px] flex-shrink-0 text-black bg-[#FFB800] rounded-[10px] hover:border-solid hover:border-4 border-sky-500   transition duration-300">Hiring</button>
          </div>
        </div>

        
       
      </div>
    </main>
  );
};

export default Company;
