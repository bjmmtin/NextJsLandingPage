import Container from "../container";
import MenuItem from "./menuItem";
import Trustpilot from "../trustPilot";
import Compare from "./compare";


const Navbar = () => {
  return (
    <div className="flex justify-between items-center text-white font-semibold  text-lg lg:pr-64 lg:pl-60 lg:py-2 bg-[#52105b]">
      <div className="flex justify-center">

        {/* ////////////////         services                   ///////////////////// */}

        <div className="flex cursor-pointer justify-center group mr-3 lg:py-3 px-5 group rounded-full hover:bg-white hover:text-[#52105b] ">
          <div className="flex">
            <svg width={17} height={17} viewBox="0 0 18 18" className="svg mr-2 mt-2">
              <g fill="none" fill-rule="evenodd" className="stroke-white group-hover:stroke-[#52105b]" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                <path d="M1 3a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V3ZM11 3a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2V3ZM1 13a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-2ZM11 13a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-2Z">
                </path>
              </g>
            </svg>
            services
          </div>
          <div className="absolute shadow-lg overflow-hidden hidden group-hover:block left-0 top-[128px] w-[100%] pt-[12px]">
            <div className="bg-white ">
              <div className="2xl:mx-60  relative animate-menuDown">
                <ul className="pt-4 pr-4 pb-6 w-[24%] border-r border-[#e4e4e4]">
                  <li className="text-sm text-[#8e8e8c] px-4 py-3">SERVICES</li>
                  <MenuItem itemName="conveyancing" >
                    <div className="left-[calc(25%-2rem)] pl-[2rem] w-[75%] h-[100%] top-0 absolute flex float-right">
                      <div className="flex">
                        <ul className="w-[31%] px-4 py-4 mb-4 ">
                          <li className="text-sm text-[#8e8e8c] px-4 py-3">COMPARE NOW</li>
                          <li className="">
                            <a className="text-[#52105b] hover:bg-[#f4ecf5] rounded-full flex justify-between px-4 py-2 mb-1  w-[100%]" href="/">
                              conveyancing
                            </a>
                          </li>
                          <li className="">
                            <a className="text-[#52105b] hover:bg-[#f4ecf5] rounded-full flex justify-between px-4 py-2 mb-1  w-[100%]" href="/">
                              remortgage conveyancers
                            </a>
                          </li>
                        </ul>
                        <ul className="w-[31%] py-4 px-4 mb-4 ">
                          <li className="text-sm text-[#8e8e8c] px-4 py-3">LOCAL CONVEYANCERS</li>
                          <li className="">
                            <a className="text-[#52105b] hover:bg-[#f4ecf5] rounded-full flex justify-between px-4 py-2 mb-1  w-[100%]" href="/">
                              london conveyancers
                            </a>
                          </li>
                          <li className="">
                            <a className="text-[#52105b] hover:bg-[#f4ecf5] rounded-full flex justify-between px-4 py-2 mb-1  w-[100%]" href="/">
                              manchester conveyancers
                            </a>
                          </li>
                          <li className="">
                            <a className="text-[#52105b] hover:bg-[#f4ecf5] rounded-full flex justify-between px-4 py-2 mb-1  w-[100%]" href="/">
                              leichester conveyancers
                            </a>
                          </li>
                        </ul>
                        <Compare str1="Compare local conveyancers" str2="Speak to accredited conveyancers & save today!" />
                      </div>

                    </div>
                  </MenuItem>
                  <MenuItem itemName="surveying" >
                    <div className="left-[calc(25%-2rem)] pl-[2rem] w-[75%] h-[100%] top-0 absolute flex  float-right">
                      <ul className="w-[31%] px-4 py-4 mb-4 ">
                        <li className="text-sm text-[#8e8e8c] px-4 py-3">COMPARE NOW</li>
                        <li className="">
                          <a className="text-[#52105b] hover:bg-[#f4ecf5] rounded-full flex justify-between px-4 py-2 mb-1  w-[100%]" href="/">
                            surveying
                          </a>
                        </li>
                        <li className="">
                          <a className="text-[#52105b] hover:bg-[#f4ecf5] rounded-full flex justify-between px-4 py-2 mb-1  w-[100%]" href="/">
                            snagging survey
                          </a>
                        </li>
                      </ul>
                      <ul className="w-[31%] py-4 px-4 mb-4 ">
                        <li className="text-sm text-[#8e8e8c] px-4 py-3">LOCAL CONVEYANCERS</li>
                        <li className="">
                          <a className="text-[#52105b] hover:bg-[#f4ecf5] rounded-full flex justify-between px-4 py-2 mb-1  w-[100%]" href="/">
                            london surveyors
                          </a>
                        </li>
                        <li className="">
                          <a className="text-[#52105b] hover:bg-[#f4ecf5] rounded-full flex justify-between px-4 py-2 mb-1  w-[100%]" href="/">
                            manchester surveyors
                          </a>
                        </li>
                        <li className="">
                          <a className="text-[#52105b] hover:bg-[#f4ecf5] rounded-full flex justify-between px-4 py-2 mb-1  w-[100%]" href="/">
                            leichester surveyors
                          </a>
                        </li>
                      </ul>
                      <Compare str1="Compare local surveyors" str2="Speak to regulated surveyors & save today!" />
                    </div>
                  </MenuItem>
                  <MenuItem itemName="house removals" >

                  </MenuItem>
                  <MenuItem itemName="international removals" >

                  </MenuItem>
                  <MenuItem itemName="buying a house" >

                  </MenuItem>
                  <MenuItem itemName="selling a house" >

                  </MenuItem>
                  <MenuItem itemName="storage" >

                  </MenuItem>
                  <MenuItem itemName="clearance" >

                  </MenuItem>
                </ul>
              </div>
            </div>
          </div>
        </div>


        {/* /////////////           advice            ///////////////////// */}

        <div className="flex cursor-pointer justify-center mr-3 lg:py-3 px-5 rounded-full group hover:bg-white hover:text-[#52105b]">
          <div className="flex">
            <svg width={17} height={17} viewBox="0 0 20 20" className="svg mr-2 mt-2">
              <path fill="none" fill-rule="evenodd" className="stroke-white group-hover:stroke-[#52105b]" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7.663 15h4.673M10 1v1m6.364 1.636-.707.707M19 10h-1M2 10H1m3.343-5.657-.707-.707m2.828 9.9a5 5 0 1 1 7.072 0l-.548.547A3.374 3.374 0 0 0 12 16.469V17a2 2 0 1 1-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547Z">
              </path>
            </svg>
            advice
          </div>
          <div className="absolute shadow-lg  overflow-hidden hidden  group-hover:block left-0 top-[128px] w-[100%] pt-[12px]">
            <div className="bg-white">
              <div className="2xl:mx-60 relative animate-menuDown">
                <ul className="pt-4 pr-4 pb-6 border-r w-[24%] border-[#e4e4e4]">
                  <li className="text-sm text-[#8e8e8c] px-4 py-3">ADVICE</li>
                  <MenuItem itemName="conveyancing">
                    <div className="left-[calc(25%-2rem)] pl-[2rem] w-[75%] h-[100%] top-0 absolute hidden group-hover:flex float-right">
                      <ul className="w-[62%] h-[100%] py-4 px-4 mb-4 ">
                        <li className="text-sm text-[#8e8e8c] px-4 py-3">ATICLES</li>
                        <li className="">
                          <a className="text-[#52105b] hover:bg-[#f4ecf5] rounded-full flex justify-between px-4 py-2 mb-1  w-[100%]" href="/">
                            how much are conveycing fees?
                          </a>
                        </li>
                        <li className="">
                          <a className="text-[#52105b] hover:bg-[#f4ecf5] rounded-full flex justify-between px-4 py-2 mb-1  w-[100%]" href="/">
                            best conveycing solicitors?
                          </a>
                        </li>
                        <li className="">
                          <a className="text-[#52105b] hover:bg-[#f4ecf5] rounded-full flex justify-between px-4 py-2 mb-1  w-[100%]" href="/">
                            how much does it cout to buy the freehold?
                          </a>
                        </li>
                      </ul>
                      <Compare str1="Compare local conveyancers" str2="Speak to accredited conveyancers & save today!" />
                    </div>
                  </MenuItem>
                  <MenuItem itemName="surveying">

                  </MenuItem>
                  <MenuItem itemName="house removals">

                  </MenuItem>
                  <MenuItem itemName="international removals">

                  </MenuItem>
                  <MenuItem itemName="buying a house">

                  </MenuItem>
                  <MenuItem itemName="selling a house">

                  </MenuItem>
                  <MenuItem itemName="storage">

                  </MenuItem>
                  <MenuItem itemName="clearance">

                  </MenuItem>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="flex cursor-pointer justify-center lg:py-3 px-5 rounded-full group hover:bg-white hover:text-[#52105b]">
          <div className="flex">
            <svg viewBox="0 0 20 20" width={17} height={17} className="svg mr-2 mt-2"><g fill="none" fill-rule="evenodd" className="stroke-white group-hover:stroke-[#52105b]" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M8.325 2.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 0 0-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 0 0-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 0 0-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065Z"></path><path d="M13 10a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"></path></g></svg>
            how it works
          </div>
          <div className="absolute  shadow-lg overflow-hidden hidden  group-hover:block left-0 top-[128px] w-[100%] pt-[12px]">
            <div className="bg-white ">
              <div className="2xl:mx-60 relative animate-menuDown">
                <ul className="pt-4 pr-4 pb-6 w-[24%] border-r border-[#e4e4e4]">
                  <li className="text-sm text-[#8e8e8c] px-4 py-3">HOW IT WORKS</li>
                  <MenuItem itemName="how it works">

                  </MenuItem>
                  <MenuItem itemName="why us should trust us">

                  </MenuItem>
                  <MenuItem itemName="how we collect feedback">

                  </MenuItem>

                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex cursor-pointer justify-center lg:py-3 lg:px-4 rounded-full group hover:bg-white hover:text-[#52105b]">
        <svg xmlns="http://www.w3.org/2000/svg" width={17} height={17} className="mr-2 mt-2" viewBox="0 0 22 20">
          <path fill="none" fill-rule="evenodd" className="stroke-white group-hover:stroke-[#52105b]" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.799 1.691c.314-.921 1.682-.921 1.996 0l1.593 4.674c.14.412.544.69.998.69h5.157c1.016 0 1.439 1.24.616 1.81l-4.171 2.888a.974.974 0 0 0-.381 1.118l1.593 4.674c.314.921-.792 1.688-1.615 1.118l-4.171-2.888a1.091 1.091 0 0 0-1.234 0L6.01 18.663c-.823.57-1.93-.197-1.615-1.118l1.593-4.674a.974.974 0 0 0-.38-1.118L1.434 8.865c-.823-.57-.4-1.81.616-1.81h5.157c.454 0 .857-.278.998-.69L9.799 1.69Z"></path>
        </svg>
        view matches
      </div>
    </div>
  );
};

export default Navbar;
