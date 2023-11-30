import React from "react";

import { Menu, MenuItem } from "react-pro-sidebar";

import { Button, Img, Input, Line, List, Text } from "components";
import Sidebar1 from "components/Sidebar1";

import { CloseSVG } from "../../assets/images";

const DashboardPage = () => {
  const sideBarMenu = [
    {
      icon: <Img className="h-6 w-6" src="images/img_home.svg" alt="home" />,
      label: "Dashobard",
      active: window.location.pathname === "/Dashboard",
    },
    {
      icon: (
        <Img
          className="h-6 mb-[3px] w-6"
          src="images/img_cursor.svg"
          alt="cursor"
        />
      ),
      label: "Inventory",
      href: "/inventory",
      active: window.location.pathname === "/inventory",
    },
    {
      icon: (
        <Img
          className="h-6 mb-[3px] w-6"
          src="images/img_frame7.svg"
          alt="frameSeven"
        />
      ),
      label: "Transaksi",
      href: "/transaksi",
      active: window.location.pathname === "/transaksi",
    },
    {
      icon: (
        <Img
          className="h-6 mb-[3px] w-6"
          src="images/img_frame8.svg"
          alt="frameEight"
        />
      ),
      label: "Suppliers",
      href: "/suppliers",
      active: window.location.pathname === "/suppliers",
    },
    {
      icon: <Img className="h-6 w-6" src="images/img_reply.svg" alt="reply" />,
      label: "Orders",
      href: "/orders",
      active: window.location.pathname === "/orders",
    },
  ];
  const [searchbarvalue, setSearchbarvalue] = React.useState("");

  return (
    <>
      <div className="bg-white flex flex-col font-inter items-center justify-start mx-auto pb-[29px] w-full">
        <div className="flex md:flex-col flex-row md:gap-5 items-start justify-evenly w-full">
          <Sidebar1 className="!sticky !w-[280px] flex h-screen md:hidden justify-start overflow-auto md:px-5 top-[0]" />
          <div className="flex flex-1 flex-col gap-[22px] items-center justify-start md:px-5 w-full">
            <div className="bg-white-A700 border border-gray-200 border-solid flex flex-col items-center justify-start py-7 w-full">
              <div className="flex sm:flex-col flex-row md:gap-10 items-center justify-between max-w-[1160px] sm:px-5 px-8 w-full">
                <Input
                  name="searchbar"
                  placeholder="Search product, supplier, order"
                  value={searchbarvalue}
                  onChange={(e) => setSearchbarvalue(e)}
                  className="!placeholder:text-blue_gray-400 !text-blue_gray-400 p-0 text-base text-left w-full"
                  wrapClassName="flex sm:flex-1 rounded sm:w-full"
                  prefix={
                    <Img
                      className="cursor-pointer h-6 mr-2 my-auto"
                      src="images/img_search.svg"
                      alt="search"
                    />
                  }
                  suffix={
                    <CloseSVG
                      fillColor="#858d9d"
                      className="cursor-pointer h-6 my-auto"
                      onClick={() => setSearchbarvalue("")}
                      style={{
                        visibility:
                          searchbarvalue?.length <= 0 ? "hidden" : "visible",
                      }}
                      height={24}
                      width={24}
                      viewBox="0 0 24 24"
                    />
                  }
                  color="blue_gray_50"
                  size="sm"
                  variant="outline"
                ></Input>
                <div className="h-10 relative w-[10%] sm:w-full">
                  <div className="flex flex-row gap-[21px] h-full items-center justify-between m-auto w-auto">
                    <div className="flex flex-col items-start justify-start p-2 w-10">
                      <Img
                        className="h-6 w-6"
                        src="images/img_notification.svg"
                        alt="notification"
                      />
                    </div>
                    <div className="flex flex-col h-10 items-center justify-start w-10">
                      <Img
                        className="h-10 md:h-auto rounded-[50%] w-10"
                        src="images/img_andreyzvyagint.png"
                        alt="andreyzvyagint"
                      />
                    </div>
                  </div>
                  <div className="absolute flex flex-row gap-[22px] h-full inset-[0] items-center justify-between m-auto w-auto">
                    <div className="flex flex-col items-start justify-start p-2 w-10">
                      <Img
                        className="h-6 w-6"
                        src="images/img_notification.svg"
                        alt="notification_One"
                      />
                    </div>
                    <div className="flex flex-col h-10 items-center justify-start w-10">
                      <Img
                        className="h-10 md:h-auto rounded-[50%] w-10"
                        src="images/img_andreyzvyagint.png"
                        alt="andreyzvyagint_One"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-[22px] items-center justify-start w-[95%] md:w-full">
              <List
                className="flex flex-col gap-[22px] items-center w-full"
                orientation="vertical"
              ></List>
              <div className="flex md:flex-col flex-row gap-[21px] items-center justify-between w-full">
                <div className="bg-white-A700 flex md:flex-1 flex-col items-center justify-start p-4 rounded-[10px] w-[63%] md:w-full">
                  <div className="flex flex-col items-center justify-start my-0.5 w-full">
                    <div className="flex flex-row sm:gap-10 items-start justify-between w-full">
                      <Text
                        className="mt-0.5 text-blue_gray-800 text-xl"
                        size="txtInterMedium20"
                      >
                        Sales & Purchase
                      </Text>
                      <Button
                        className="border border-blue_gray-100_01 border-solid cursor-pointer flex items-center justify-center min-w-[109px]"
                        leftIcon={
                          <div className="h-5 mr-2 w-5 bg-blue_gray-600">
                            <Img
                              className="h-5"
                              src="images/img_calendar.svg"
                              alt="calendar"
                            />
                          </div>
                        }
                        shape="round"
                        color="white_A700"
                        size="sm"
                        variant="fill"
                      >
                        <div className="!text-blue_gray-600 font-medium text-left text-sm">
                          Weekly
                        </div>
                      </Button>
                    </div>
                    <div className="flex sm:flex-col flex-row gap-2.5 items-center justify-start mt-6 w-[91%] md:w-full">
                      <div className="flex flex-col gap-[22px] items-end justify-start w-auto">
                        <Text
                          className="text-blue_gray-500_01 text-xs w-auto"
                          size="txtInterRegular12"
                        >
                          60,000
                        </Text>
                        <Text
                          className="text-blue_gray-500_01 text-xs w-auto"
                          size="txtInterRegular12"
                        >
                          50,000
                        </Text>
                        <Text
                          className="text-blue_gray-500_01 text-xs w-auto"
                          size="txtInterRegular12"
                        >
                          40,000
                        </Text>
                        <Text
                          className="text-blue_gray-500_01 text-xs w-auto"
                          size="txtInterRegular12"
                        >
                          30,000
                        </Text>
                        <Text
                          className="text-blue_gray-500_01 text-xs w-auto"
                          size="txtInterRegular12"
                        >
                          20,000
                        </Text>
                        <Text
                          className="text-blue_gray-500_01 text-xs w-auto"
                          size="txtInterRegular12"
                        >
                          10,000
                        </Text>
                      </div>
                      <div className="h-[205px] relative w-[92%] sm:w-full">
                        <Img
                          className="absolute h-[205px] inset-[0] m-auto w-[542px]"
                          src="images/img_lines.svg"
                          alt="lines"
                        />
                        <Img
                          className="absolute h-[198px] inset-y-[0] my-auto right-[4%] w-[473px]"
                          src="images/img_graph.svg"
                          alt="graph"
                        />
                      </div>
                    </div>
                    <div className="flex sm:flex-col flex-row gap-7 items-start justify-start w-[478px] sm:w-full">
                      <Text
                        className="text-blue_gray-400 text-xs w-auto"
                        size="txtInterRegular12Bluegray400"
                      >
                        Jan
                      </Text>
                      <Text
                        className="text-blue_gray-400 text-xs w-auto"
                        size="txtInterRegular12Bluegray400"
                      >
                        Feb
                      </Text>
                      <Text
                        className="text-blue_gray-400 text-xs w-auto"
                        size="txtInterRegular12Bluegray400"
                      >
                        Mar
                      </Text>
                      <Text
                        className="text-blue_gray-400 text-xs w-auto"
                        size="txtInterRegular12Bluegray400"
                      >
                        Apr
                      </Text>
                      <Text
                        className="text-blue_gray-400 text-xs w-auto"
                        size="txtInterRegular12Bluegray400"
                      >
                        May
                      </Text>
                      <Text
                        className="text-blue_gray-400 text-xs w-auto"
                        size="txtInterRegular12Bluegray400"
                      >
                        Jun
                      </Text>
                      <Text
                        className="text-blue_gray-400 text-xs"
                        size="txtInterRegular12Bluegray400"
                      >
                        Jul
                      </Text>
                      <Text
                        className="text-blue_gray-400 text-xs w-auto"
                        size="txtInterRegular12Bluegray400"
                      >
                        Aug
                      </Text>
                      <Text
                        className="text-blue_gray-400 text-xs w-auto"
                        size="txtInterRegular12Bluegray400"
                      >
                        May
                      </Text>
                      <Text
                        className="text-blue_gray-400 text-xs w-auto"
                        size="txtInterRegular12Bluegray400"
                      >
                        Jun
                      </Text>
                    </div>
                    <div className="flex flex-row items-start justify-start mt-[13px] w-[24%] md:w-full">
                      <div className="bg-gradient  h-[15px] rotate-[-180deg] rounded-[7px] w-[15px]"></div>
                      <Text
                        className="ml-2 text-blue_gray-500_01 text-xs"
                        size="txtInterRegular12"
                      >
                        Purchase
                      </Text>
                      <div className="bg-gradient1  h-[15px] ml-[23px] rotate-[180deg] rounded-[7px] w-[15px]"></div>
                      <Text
                        className="ml-[7px] text-blue_gray-500_01 text-xs"
                        size="txtInterRegular12"
                      >
                        Sales
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="bg-white-A700 flex md:flex-1 flex-col items-center justify-end p-1.5 rounded-[10px] w-[36%] md:w-full"></div>
              </div>
              <div className="flex md:flex-col flex-row gap-[21px] items-center justify-between w-full">
                <div className="bg-white-A700 flex md:flex-1 flex-col items-center justify-end py-[23px] rounded-[10px] w-[63%] md:w-full">
                  <div className="flex flex-col gap-5 items-center justify-start w-full">
                    <div className="flex flex-row sm:gap-10 items-center justify-between w-[95%] md:w-full">
                      <Text
                        className="text-blue_gray-800 text-xl"
                        size="txtInterMedium20"
                      >
                        Top Selling Stock
                      </Text>
                      <a href="javascript:" className="text-blue-900 text-sm">
                        <Text size="txtInterRegular14Blue900">See All</Text>
                      </a>
                    </div>
                    <div className="flex flex-col items-start justify-start w-full">
                      <Line className="bg-blue_gray-50 h-px w-full" />
                      <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start ml-4 md:ml-[0] mt-3 w-[87%] md:w-full">
                        <Text
                          className="text-blue_gray-600 text-sm"
                          size="txtInterMedium14Bluegray600"
                        >
                          Name
                        </Text>
                        <Text
                          className="ml-32 sm:ml-[0] text-blue_gray-600 text-sm"
                          size="txtInterMedium14Bluegray600"
                        >
                          Sold Quantity
                        </Text>
                        <Text
                          className="sm:ml-[0] ml-[87px] text-blue_gray-600 text-sm"
                          size="txtInterMedium14Bluegray600"
                        >
                          Remaining Quantity
                        </Text>
                        <Text
                          className="sm:ml-[0] ml-[84px] text-blue_gray-600 text-sm"
                          size="txtInterMedium14Bluegray600"
                        >
                          Price
                        </Text>
                      </div>
                      <Line className="bg-blue_gray-50 h-px mt-[11px] w-full" />

                      <Line className="bg-blue_gray-50 h-px mt-[23px] w-full" />

                      <Line className="bg-blue_gray-50 h-px mt-[23px] w-full" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardPage;
