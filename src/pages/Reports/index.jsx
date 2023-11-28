import React from "react";

import { Menu, MenuItem } from "react-pro-sidebar";

import { Button, Img, Input, Line, List, Text } from "components";
import Sidebar1 from "components/Sidebar1";

import { CloseSVG } from "../../assets/images";

const ReportsPage = () => {
  const sideBarMenu = [
    {
      icon: (
        <Img
          className="h-6 w-6"
          src="images/img_home_blue_gray_600.svg"
          alt="home"
        />
      ),
      label: "Dashobard",
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
          src="images/img_frame7_blue_a200.svg"
          alt="frameSeven"
        />
      ),
      label: "Reports",
      href: "/reports",
      active: window.location.pathname === "/reports",
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
    {
      icon: (
        <Img
          className="h-6 mb-[3px] w-6"
          src="images/img_user.svg"
          alt="user"
        />
      ),
      label: "Manage Store",
      href: "/managestore",
      active: window.location.pathname === "/managestore",
    },
  ];
  const [searchbarvalue, setSearchbarvalue] = React.useState("");

  return (
    <>
      <div className="bg-blue_gray-50 flex flex-col font-inter items-center justify-start mx-auto pb-[23px] w-full">
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
                <div className="flex flex-row gap-[21px] items-start justify-start w-auto">
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
              </div>
            </div>
            <div className="flex flex-col gap-[22px] items-center justify-start w-[95%] md:w-full">
              <div className="flex md:flex-col flex-row gap-[22px] items-center justify-between w-full">
                <div className="bg-white-A700 flex md:flex-1 flex-col items-center justify-start rounded-lg w-[51%] md:w-full">
                  <div className="flex flex-col justify-start my-[21px] w-full">
                    <div className="flex flex-col gap-6 items-start justify-start ml-3 md:ml-[0] w-[83%] md:w-full">
                      <Text
                        className="text-blue_gray-800 text-xl"
                        size="txtInterMedium20"
                      >
                        Overview
                      </Text>
                      <div className="flex flex-row gap-[129px] items-end justify-between md:ml-[0] ml-[5px] w-auto sm:w-full">
                        <div className="flex flex-col gap-3 items-center justify-center w-auto">
                          <Text
                            className="text-base text-blue_gray-600 w-auto"
                            size="txtInterMedium16Bluegray600"
                          >
                            ₹21,190
                          </Text>
                          <Text
                            className="text-gray-700_01 text-sm w-auto"
                            size="txtInterRegular14Gray70001"
                          >
                            Total Profit
                          </Text>
                        </div>
                        <div className="flex flex-col gap-3 items-center justify-center w-auto">
                          <Text
                            className="text-base text-blue_gray-600 w-auto"
                            size="txtInterMedium16Bluegray600"
                          >
                            ₹18,300
                          </Text>
                          <Text
                            className="text-deep_orange-300 text-sm w-auto"
                            size="txtInterRegular14Deeporange300"
                          >
                            Revenue
                          </Text>
                        </div>
                        <div className="flex flex-col gap-3 items-center justify-center w-auto">
                          <Text
                            className="text-base text-blue_gray-600 w-auto"
                            size="txtInterMedium16Bluegray600"
                          >
                            ₹17,432
                          </Text>
                          <Text
                            className="text-deep_purple-400 text-sm w-auto"
                            size="txtInterRegular14Deeppurple400"
                          >
                            Sales
                          </Text>
                        </div>
                      </div>
                    </div>
                    <Line className="bg-blue_gray-50 h-px mt-4 w-full" />
                    <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start ml-6 md:ml-[0] mt-[21px] w-[91%] md:w-full">
                      <div className="flex flex-col gap-3 items-start justify-start w-auto">
                        <Text
                          className="text-base text-blue_gray-600 w-auto"
                          size="txtInterMedium16Bluegray600"
                        >
                          ₹1,17,432
                        </Text>
                        <Text
                          className="text-blue_gray-500_01 text-sm w-auto"
                          size="txtInterRegular14"
                        >
                          Net purchase value
                        </Text>
                      </div>
                      <div className="flex flex-col gap-3 items-start justify-start sm:ml-[0] ml-[22px] w-auto">
                        <Text
                          className="text-base text-blue_gray-600 w-auto"
                          size="txtInterMedium16Bluegray600"
                        >
                          ₹80,432
                        </Text>
                        <Text
                          className="text-blue_gray-500_01 text-sm w-auto"
                          size="txtInterRegular14"
                        >
                          Net sales value
                        </Text>
                      </div>
                      <div className="flex flex-col gap-3 items-start justify-start sm:ml-[0] ml-[42px] w-auto">
                        <Text
                          className="text-base text-blue_gray-600 w-auto"
                          size="txtInterMedium16Bluegray600"
                        >
                          ₹30,432
                        </Text>
                        <Text
                          className="text-blue_gray-500_01 text-sm w-auto"
                          size="txtInterRegular14"
                        >
                          MoM Profit
                        </Text>
                      </div>
                      <div className="flex flex-col gap-3 items-start justify-start sm:ml-[0] ml-[61px] w-auto">
                        <Text
                          className="text-base text-blue_gray-600 w-auto"
                          size="txtInterMedium16Bluegray600"
                        >
                          ₹1,10,432
                        </Text>
                        <Text
                          className="text-blue_gray-500_01 text-sm w-auto"
                          size="txtInterRegular14"
                        >
                          YoY Profit
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white-A700 flex md:flex-1 flex-col items-center justify-end py-[23px] rounded-lg w-[48%] md:w-full">
                  <div className="flex flex-col gap-3.5 items-center justify-start w-full">
                    <div className="flex flex-col gap-6 items-start justify-start w-[95%] md:w-full">
                      <div className="flex flex-row items-start justify-between w-full">
                        <Text
                          className="text-blue_gray-800 text-xl"
                          size="txtInterMedium20"
                        >
                          Best selling category
                        </Text>
                        <a
                          href="javascript:"
                          className="mt-0.5 text-blue-900 text-sm"
                        >
                          <Text size="txtInterRegular14Blue900">See All</Text>
                        </a>
                      </div>
                      <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start w-[95%] md:w-full">
                        <Text
                          className="text-blue_gray-500_01 text-sm"
                          size="txtInterMedium14Bluegray50001"
                        >
                          Category
                        </Text>
                        <Text
                          className="sm:ml-[0] ml-[135px] text-blue_gray-500_01 text-sm"
                          size="txtInterMedium14Bluegray50001"
                        >
                          Turn Over
                        </Text>
                        <Text
                          className="sm:ml-[0] ml-[122px] text-blue_gray-500_01 text-sm"
                          size="txtInterMedium14Bluegray50001"
                        >
                          Increase By
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col gap-[11px] items-start justify-start w-full">
                      <Line className="bg-blue_gray-50 h-px w-full" />
                      <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start md:ml-[0] ml-[17px] w-[81%] md:w-full">
                        <Text
                          className="text-blue_gray-700 text-sm"
                          size="txtInterRegular14Bluegray700"
                        >
                          Vegetable
                        </Text>
                        <Text
                          className="sm:ml-[0] ml-[134px] text-blue_gray-700 text-sm"
                          size="txtInterRegular14Bluegray700"
                        >
                          ₹26,000
                        </Text>
                        <Text
                          className="sm:ml-[0] ml-[130px] text-green-A700 text-sm"
                          size="txtInterRegular14GreenA700"
                        >
                          3.2%
                        </Text>
                      </div>
                      <Line className="bg-blue_gray-50 h-px w-full" />
                      <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start md:ml-[0] ml-[17px] w-[79%] md:w-full">
                        <Text
                          className="text-blue_gray-700 text-sm"
                          size="txtInterRegular14Bluegray700"
                        >
                          Instant Food
                        </Text>
                        <Text
                          className="sm:ml-[0] ml-[118px] text-blue_gray-700 text-sm"
                          size="txtInterRegular14Bluegray700"
                        >
                          ₹22,000
                        </Text>
                        <Text
                          className="sm:ml-[0] ml-[130px] text-green-A700 text-sm"
                          size="txtInterRegular14GreenA700"
                        >
                          2%
                        </Text>
                      </div>
                      <Line className="bg-blue_gray-50 h-px w-full" />
                      <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start md:ml-[0] ml-[17px] w-[81%] md:w-full">
                        <Text
                          className="text-blue_gray-700 text-sm"
                          size="txtInterRegular14Bluegray700"
                        >
                          Households
                        </Text>
                        <Text
                          className="sm:ml-[0] ml-[122px] text-blue_gray-700 text-sm"
                          size="txtInterRegular14Bluegray700"
                        >
                          ₹22,000
                        </Text>
                        <Text
                          className="sm:ml-[0] ml-[130px] text-green-A700 text-sm"
                          size="txtInterRegular14GreenA700"
                        >
                          1.5%
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white-A700 flex flex-col items-center justify-start p-3 rounded-lg w-full">
                <div className="flex flex-col items-center justify-start my-[3px] w-full">
                  <div className="flex flex-row md:gap-10 items-start justify-between w-full">
                    <Text
                      className="text-blue_gray-800 text-xl"
                      size="txtInterMedium20"
                    >
                      Profit & Revenue
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
                  <div className="flex flex-col items-center justify-start mt-[25px] w-[99%] md:w-full">
                    <div className="flex flex-col gap-2 items-end justify-start w-full">
                      <div className="flex md:flex-col flex-row gap-[23px] items-start justify-between w-full">
                        <div className="flex flex-col gap-[55px] items-center justify-start md:mt-0 mt-[11px]">
                          <Text
                            className="text-blue_gray-400 text-sm"
                            size="txtInterRegular14Bluegray400"
                          >
                            80,000
                          </Text>
                          <Text
                            className="text-blue_gray-400 text-sm"
                            size="txtInterRegular14Bluegray400"
                          >
                            60,000
                          </Text>
                          <Text
                            className="text-blue_gray-400 text-sm"
                            size="txtInterRegular14Bluegray400"
                          >
                            40,000
                          </Text>
                          <Text
                            className="text-blue_gray-400 text-sm"
                            size="txtInterRegular14Bluegray400"
                          >
                            20.000
                          </Text>
                        </div>
                        <div className="md:h-56 h-[235px] mb-2 relative w-[94%] md:w-full">
                          <div className="absolute bottom-[0] h-[216px] inset-x-[0] mx-auto w-full">
                            <div className="h-[216px] m-auto w-full">
                              <Img
                                className="absolute bottom-[13%] h-[108px] inset-x-[0] mx-auto"
                                src="images/img_shape.svg"
                                alt="shape"
                              />
                              <Img
                                className="absolute h-[216px] inset-[0] justify-center m-auto"
                                src="images/img_group2.svg"
                                alt="groupTwo"
                              />
                            </div>
                            <Img
                              className="absolute bottom-[0] h-40 inset-x-[0] mx-auto"
                              src="images/img_group3.svg"
                              alt="groupThree"
                            />
                          </div>
                          <div className="absolute flex flex-col gap-2.5 h-max inset-y-[0] items-center justify-start left-[34%] my-auto w-[19%]">
                            <div
                              className="bg-cover bg-no-repeat flex flex-col h-[98px] items-start justify-start p-[7px] w-full"
                              style={{
                                backgroundImage:
                                  "url('images/img_tooltip.svg')",
                              }}
                            >
                              <div className="flex flex-col items-start justify-start mb-[22px] mt-1.5 w-auto">
                                <Text
                                  className="text-[10px] text-blue_gray-200 text-center w-auto"
                                  size="txtInterRegular10"
                                >
                                  This Month
                                </Text>
                                <Text
                                  className="text-base text-center text-indigo-900 w-auto"
                                  size="txtInterSemiBold16Indigo900"
                                >
                                  220,342,123
                                </Text>
                                <Text
                                  className="text-[10px] text-blue_gray-200 text-center w-auto"
                                  size="txtInterRegular10"
                                >
                                  Nov
                                </Text>
                              </div>
                            </div>
                            <div className="md:h-[116px] h-[126px] relative w-[12%]">
                              <Line className="absolute bg-indigo-A100_01 bottom-[0] h-[116px] left-[0] w-px" />
                              <div className="absolute bg-blue-700 border-4 border-solid border-white-A700 h-5 inset-x-[0] mx-auto rounded-[10px] shadow-bs1 top-[0] w-[21px]"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex md:flex-col flex-row md:gap-5 items-start justify-end w-[93%] md:w-full">
                        <Text
                          className="md:mt-0 mt-[3px] text-blue_gray-400 text-center text-sm"
                          size="txtInterRegular14Bluegray400"
                        >
                          Sep
                        </Text>
                        <Text
                          className="mb-[3px] md:ml-[0] ml-[108px] text-blue_gray-400 text-center text-sm"
                          size="txtInterRegular14Bluegray400"
                        >
                          Oct
                        </Text>
                        <Text
                          className="mb-[3px] md:ml-[0] ml-[134px] text-blue_gray-400 text-center text-sm"
                          size="txtInterRegular14Bluegray400"
                        >
                          Nov
                        </Text>
                        <Text
                          className="mb-[3px] md:ml-[0] ml-[132px] text-blue_gray-400 text-center text-sm"
                          size="txtInterRegular14Bluegray400"
                        >
                          Dec
                        </Text>
                        <Text
                          className="mb-[3px] md:ml-[0] ml-[132px] text-blue_gray-400 text-center text-sm"
                          size="txtInterRegular14Bluegray400"
                        >
                          Jan{" "}
                        </Text>
                        <Text
                          className="mb-[3px] md:ml-[0] ml-[136px] text-blue_gray-400 text-center text-sm"
                          size="txtInterRegular14Bluegray400"
                        >
                          Feb
                        </Text>
                        <Text
                          className="mb-[3px] md:ml-[0] ml-[145px] text-blue_gray-400 text-right text-sm"
                          size="txtInterRegular14Bluegray400"
                        >
                          Mar
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row items-start justify-center mt-[7px] w-[15%] md:w-full">
                    <div className="bg-blue-A200 h-4 rounded-[50%] w-4"></div>
                    <Text
                      className="ml-2 text-blue_gray-600 text-center text-xs"
                      size="txtInterRegular12Bluegray600"
                    >
                      Revenue
                    </Text>
                    <div className="bg-deep_orange-300_47 h-4 ml-[22px] rounded-[50%] w-4"></div>
                    <Text
                      className="ml-2 text-blue_gray-600 text-center text-xs"
                      size="txtInterRegular12Bluegray600"
                    >
                      Profit
                    </Text>
                  </div>
                </div>
              </div>
              <div className="bg-white-A700 flex flex-col items-center justify-end py-[13px] rounded-lg w-full">
                <div className="flex flex-col gap-[15px] items-center justify-start mt-2.5 w-full">
                  <div className="flex flex-col gap-6 items-center justify-start w-[98%] md:w-full">
                    <div className="flex flex-row md:gap-10 items-start justify-between w-full">
                      <Text
                        className="text-blue_gray-800 text-xl"
                        size="txtInterMedium20"
                      >
                        Best selling product
                      </Text>
                      <a
                        href="javascript:"
                        className="mt-0.5 text-blue-900 text-sm"
                      >
                        <Text size="txtInterRegular14Blue900">See All</Text>
                      </a>
                    </div>
                    <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-[97%] md:w-full">
                      <Text
                        className="mb-0.5 text-blue_gray-500_01 text-sm"
                        size="txtInterMedium14Bluegray50001"
                      >
                        Product
                      </Text>
                      <Text
                        className="mb-0.5 md:ml-[0] ml-[99px] text-blue_gray-500_01 text-sm"
                        size="txtInterMedium14Bluegray50001"
                      >
                        Product ID
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[101px] md:mt-0 mt-0.5 text-blue_gray-500_01 text-sm"
                        size="txtInterMedium14Bluegray50001"
                      >
                        Category
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[131px] md:mt-0 mt-0.5 text-blue_gray-500_01 text-sm"
                        size="txtInterMedium14Bluegray50001"
                      >
                        Remaining Quantity
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[126px] text-blue_gray-500_01 text-sm"
                        size="txtInterMedium14Bluegray50001"
                      >
                        Turn Over
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[109px] md:mt-0 mt-0.5 text-blue_gray-500_01 text-sm"
                        size="txtInterMedium14Bluegray50001"
                      >
                        Increase By
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-end pt-[15px] px-[15px] w-full">
                    <List
                      className="flex flex-col gap-[14.5px] w-[93%]"
                      orientation="vertical"
                    >
                      <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start w-full">
                        <Text
                          className="mb-0.5 text-blue_gray-700 text-sm"
                          size="txtInterMedium14"
                        >
                          Tomato
                        </Text>
                        <Text
                          className="mb-0.5 sm:ml-[0] ml-[101px] text-blue_gray-700 text-sm"
                          size="txtInterMedium14"
                        >
                          23567
                        </Text>
                        <Text
                          className="ml-32 sm:ml-[0] sm:mt-0 mt-0.5 text-blue_gray-700 text-sm"
                          size="txtInterMedium14"
                        >
                          Vegetable
                        </Text>
                        <Text
                          className="sm:ml-[0] ml-[126px] sm:mt-0 mt-0.5 text-blue_gray-700 text-sm"
                          size="txtInterMedium14"
                        >
                          225 kg
                        </Text>
                        <Text
                          className="sm:ml-[0] ml-[211px] sm:mt-0 mt-0.5 text-blue_gray-700 text-sm"
                          size="txtInterMedium14"
                        >
                          ₹17,000
                        </Text>
                        <Text
                          className="sm:ml-[0] ml-[123px] text-green-A700 text-sm"
                          size="txtInterMedium14GreenA700"
                        >
                          2.3%
                        </Text>
                      </div>
                      <Line className="self-center h-px bg-blue_gray-50 w-full" />
                      <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start w-full">
                        <Text
                          className="mb-0.5 text-blue_gray-700 text-sm"
                          size="txtInterMedium14"
                        >
                          Onion
                        </Text>
                        <Text
                          className="mb-0.5 ml-28 sm:ml-[0] text-blue_gray-700 text-sm"
                          size="txtInterMedium14"
                        >
                          25831
                        </Text>
                        <Text
                          className="sm:ml-[0] ml-[131px] sm:mt-0 mt-0.5 text-blue_gray-700 text-sm"
                          size="txtInterMedium14"
                        >
                          Vegetable
                        </Text>
                        <Text
                          className="sm:ml-[0] ml-[126px] sm:mt-0 mt-0.5 text-blue_gray-700 text-sm"
                          size="txtInterMedium14"
                        >
                          200 kg
                        </Text>
                        <Text
                          className="sm:ml-[0] ml-[210px] sm:mt-0 mt-0.5 text-blue_gray-700 text-sm"
                          size="txtInterMedium14"
                        >
                          ₹12,000
                        </Text>
                        <Text
                          className="mb-0.5 sm:ml-[0] ml-[121px] text-green-A700 text-sm"
                          size="txtInterMedium14GreenA700"
                        >
                          1.3%
                        </Text>
                      </div>
                      <Line className="self-center h-px bg-blue_gray-50 w-full" />
                      <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start w-full">
                        <Text
                          className="text-blue_gray-700 text-sm"
                          size="txtInterMedium14"
                        >
                          Maggi
                        </Text>
                        <Text
                          className="mb-0.5 sm:ml-[0] ml-[110px] text-blue_gray-700 text-sm"
                          size="txtInterMedium14"
                        >
                          56841
                        </Text>
                        <Text
                          className="sm:ml-[0] ml-[130px] text-blue_gray-700 text-sm"
                          size="txtInterMedium14"
                        >
                          Instant Food
                        </Text>
                        <Text
                          className="sm:ml-[0] ml-[110px] text-blue_gray-700 text-sm"
                          size="txtInterMedium14"
                        >
                          200 Packet
                        </Text>
                        <Text
                          className="sm:ml-[0] ml-[180px] sm:mt-0 mt-0.5 text-blue_gray-700 text-sm"
                          size="txtInterMedium14"
                        >
                          ₹10,000
                        </Text>
                        <Text
                          className="sm:ml-[0] ml-[121px] text-green-A700 text-sm"
                          size="txtInterMedium14GreenA700"
                        >
                          1.3%
                        </Text>
                      </div>
                      <Line className="self-center h-px bg-blue_gray-50 w-full" />
                      <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-[99%] md:w-full">
                        <Text
                          className="mb-[5px] text-blue_gray-700 text-sm"
                          size="txtInterMedium14"
                        >
                          Surf Execl
                        </Text>
                        <Text
                          className="md:ml-[0] ml-[84px] md:mt-0 my-0.5 text-blue_gray-700 text-sm"
                          size="txtInterMedium14"
                        >
                          23567
                        </Text>
                        <Text
                          className="ml-32 md:ml-[0] md:mt-0 mt-1 text-blue_gray-700 text-sm"
                          size="txtInterMedium14"
                        >
                          Household
                        </Text>
                        <Text
                          className="md:ml-[0] ml-[122px] md:mt-0 mt-1 text-blue_gray-700 text-sm"
                          size="txtInterMedium14"
                        >
                          125 Packet
                        </Text>
                        <Text
                          className="md:ml-[0] ml-[183px] md:mt-0 mt-[5px] text-blue_gray-700 text-sm"
                          size="txtInterMedium14"
                        >
                          ₹9,000
                        </Text>
                        <Text
                          className="h-[17px] md:ml-[0] ml-[127px] md:mt-0 mt-1 text-green-A700 text-sm"
                          size="txtInterMedium14GreenA700"
                        >
                          1%
                        </Text>
                      </div>
                    </List>
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

export default ReportsPage;
