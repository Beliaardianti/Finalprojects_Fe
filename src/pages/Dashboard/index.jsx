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
              >
                <div className="flex flex-1 md:flex-col flex-row gap-[22px] items-center justify-between my-0 w-full">
                  <div className="bg-white-A700 flex md:flex-1 flex-col items-center justify-start p-4 rounded-lg w-[63%] md:w-full">
                    <div className="flex flex-col gap-6 items-start justify-start mb-[9px] mt-1.5 w-full">
                      <Text
                        className="text-blue_gray-800 text-xl"
                        size="txtInterMedium20"
                      >
                        Sales Overview
                      </Text>
                      <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between w-full">
                        <div className="flex flex-col gap-3 items-center justify-start w-[116px]">
                          <Img
                            className="h-[30px] rounded w-[30px]"
                            src="images/img_sales.svg"
                            alt="sales"
                          />
                          <div className="flex flex-col items-start justify-start w-full">
                            <div className="flex flex-row gap-8 items-center justify-start w-auto">
                              <Text
                                className="text-base text-blue_gray-600 w-auto"
                                size="txtInterSemiBold16"
                              >
                                ₹ 832
                              </Text>
                              <Text
                                className="text-blue_gray-500_01 text-sm w-auto"
                                size="txtInterMedium14Bluegray50001"
                              >
                                Sales
                              </Text>
                            </div>
                          </div>
                        </div>
                        <Line className="bg-blue_gray-50 h-[66px] sm:h-px sm:w-full w-px" />
                        <div className="flex flex-col gap-3 items-center justify-start w-[163px]">
                          <Button
                            className="flex h-[30px] items-center justify-center w-[30px]"
                            shape="round"
                            color="deep_purple_50"
                            size="xs"
                            variant="fill"
                          >
                            <Img src="images/img_vector.svg" alt="vector" />
                          </Button>
                          <div className="flex flex-col items-start justify-start w-full">
                            <div className="flex flex-row gap-8 items-center justify-start w-auto">
                              <Text
                                className="text-base text-blue_gray-600 w-auto"
                                size="txtInterSemiBold16"
                              >
                                ₹ 18,300
                              </Text>
                              <Text
                                className="text-blue_gray-500_01 text-sm w-auto"
                                size="txtInterMedium14Bluegray50001"
                              >
                                Revenue
                              </Text>
                            </div>
                          </div>
                        </div>
                        <Line className="bg-blue_gray-50 h-[66px] sm:h-px sm:w-full w-px" />
                        <div className="flex flex-col gap-3 items-center justify-start w-[117px]">
                          <Button
                            className="flex h-[30px] items-center justify-center w-[30px]"
                            shape="round"
                            color="orange_50"
                            size="xs"
                            variant="fill"
                          >
                            <Img
                              className="h-[25px]"
                              src="images/img_vector_deep_orange_300.svg"
                              alt="vector_One"
                            />
                          </Button>
                          <div className="flex flex-col items-start justify-start w-full">
                            <div className="flex flex-row gap-8 items-center justify-start w-auto">
                              <Text
                                className="text-base text-blue_gray-600 w-auto"
                                size="txtInterSemiBold16"
                              >
                                ₹ 868
                              </Text>
                              <Text
                                className="text-blue_gray-500_01 text-sm w-auto"
                                size="txtInterMedium14Bluegray50001"
                              >
                                Profit
                              </Text>
                            </div>
                          </div>
                        </div>
                        <Line className="bg-blue_gray-50 h-[66px] sm:h-px sm:w-full w-px" />
                        <div className="flex flex-col gap-3 items-center justify-start w-[131px]">
                          <Img
                            className="h-[30px] rounded w-[30px]"
                            src="images/img_cost.svg"
                            alt="cost"
                          />
                          <div className="flex flex-col items-start justify-start w-auto">
                            <div className="flex flex-row gap-8 items-center justify-start w-auto">
                              <Text
                                className="text-base text-blue_gray-600 w-auto"
                                size="txtInterSemiBold16"
                              >
                                ₹ 17,432
                              </Text>
                              <Text
                                className="text-blue_gray-500_01 text-sm w-auto"
                                size="txtInterMedium14Bluegray50001"
                              >
                                Cost
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white-A700 flex md:flex-1 flex-col items-start justify-end pt-4 px-4 rounded-lg w-[36%] md:w-full">
                    <div className="flex flex-col gap-4 justify-start mt-2 w-[93%] md:w-full">
                      <Text
                        className="text-blue_gray-800 text-xl"
                        size="txtInterMedium20"
                      >
                        Inventory Summary
                      </Text>
                      <div className="flex flex-row items-start justify-start ml-3 md:ml-[0] w-[97%] md:w-full">
                        <div className="flex flex-col gap-2 items-center justify-start w-auto">
                          <Img
                            className="h-[30px] rounded w-[30px]"
                            src="images/img_thumbsup.svg"
                            alt="thumbsup"
                          />
                          <div className="flex flex-col gap-0.5 items-center justify-start w-auto">
                            <Text
                              className="text-base text-blue_gray-600 w-auto"
                              size="txtInterSemiBold16"
                            >
                              868
                            </Text>
                            <Text
                              className="text-gray-800 text-sm w-auto"
                              size="txtInterMedium14Gray800"
                            >
                              Quantity in Hand
                            </Text>
                          </div>
                        </div>
                        <Line className="bg-blue_gray-50 h-[91px] ml-[39px] mt-1.5 w-px" />
                        <div className="flex flex-col gap-2 items-center justify-start ml-[63px] w-auto">
                          <Img
                            className="h-[30px] rounded w-[30px]"
                            src="images/img_ontheway.svg"
                            alt="ontheway"
                          />
                          <div className="flex flex-col gap-0.5 items-center justify-start w-auto">
                            <Text
                              className="text-base text-blue_gray-600 w-auto"
                              size="txtInterSemiBold16"
                            >
                              200
                            </Text>
                            <Text
                              className="text-gray-800 text-sm w-auto"
                              size="txtInterMedium14Gray800"
                            >
                              To be received
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-1 md:flex-col flex-row gap-[22px] items-center justify-between my-0 w-full">
                  <div className="bg-white-A700 flex md:flex-1 flex-col items-center justify-start p-4 rounded-lg w-[63%] md:w-full">
                    <div className="flex flex-col gap-6 items-start justify-start mb-[9px] mt-1.5 w-full">
                      <Text
                        className="text-blue_gray-800 text-xl"
                        size="txtInterMedium20"
                      >
                        Purchase Overview
                      </Text>
                      <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between w-full">
                        <div className="flex flex-col gap-3 items-center justify-start w-[116px]">
                          <Button
                            className="flex h-[30px] items-center justify-center w-[30px]"
                            shape="round"
                            color="blue_50"
                            size="xs"
                            variant="fill"
                          >
                            <Img src="images/img_bag.svg" alt="bag" />
                          </Button>
                          <div className="flex flex-col items-start justify-start w-auto">
                            <div className="flex flex-row gap-8 items-center justify-start w-full">
                              <Text
                                className="text-base text-blue_gray-600"
                                size="txtInterSemiBold16"
                              >
                                82
                              </Text>
                              <Text
                                className="text-blue_gray-500_01 text-sm w-auto"
                                size="txtInterMedium14Bluegray50001"
                              >
                                Purchase
                              </Text>
                            </div>
                          </div>
                        </div>
                        <Line className="bg-blue_gray-50 h-[66px] sm:h-px sm:w-full w-px" />
                        <div className="flex flex-col gap-3 items-center justify-start w-auto">
                          <Img
                            className="h-[30px] rounded w-[30px]"
                            src="images/img_cost.svg"
                            alt="cost"
                          />
                          <div className="flex flex-col items-start justify-start w-[129px]">
                            <div className="flex flex-row gap-8 items-center justify-start w-full">
                              <Text
                                className="text-base text-blue_gray-600 w-auto"
                                size="txtInterSemiBold16"
                              >
                                ₹ 13,573
                              </Text>
                              <Text
                                className="text-blue_gray-500_01 text-sm w-auto"
                                size="txtInterMedium14Bluegray50001"
                              >
                                Cost
                              </Text>
                            </div>
                          </div>
                        </div>
                        <Line className="bg-blue_gray-50 h-[66px] sm:h-px sm:w-full w-px" />
                        <div className="flex flex-col gap-3 items-center justify-start w-auto">
                          <Img
                            className="h-[30px] rounded w-[30px]"
                            src="images/img_cancel.svg"
                            alt="cancel"
                          />
                          <div className="flex flex-col items-start justify-start w-auto">
                            <div className="flex flex-row gap-8 items-center justify-start w-auto">
                              <Text
                                className="text-base text-blue_gray-600 w-auto"
                                size="txtInterSemiBold16"
                              >
                                5
                              </Text>
                              <Text
                                className="text-blue_gray-500_01 text-sm w-auto"
                                size="txtInterMedium14Bluegray50001"
                              >
                                Cancel
                              </Text>
                            </div>
                          </div>
                        </div>
                        <Line className="bg-blue_gray-50 h-[66px] sm:h-px sm:w-full w-px" />
                        <div className="flex flex-col gap-3 items-center justify-start w-[131px]">
                          <Button
                            className="flex h-[30px] items-center justify-center w-[30px]"
                            shape="round"
                            color="orange_50"
                            size="xs"
                            variant="fill"
                          >
                            <Img
                              className="h-[25px]"
                              src="images/img_vector_deep_orange_300.svg"
                              alt="vector"
                            />
                          </Button>
                          <div className="flex flex-col items-start justify-start w-full">
                            <div className="flex flex-row gap-8 items-center justify-between w-full">
                              <Text
                                className="text-base text-blue_gray-600 w-auto"
                                size="txtInterSemiBold16"
                              >
                                ₹17,432
                              </Text>
                              <Text
                                className="text-blue_gray-500_01 text-sm w-auto"
                                size="txtInterMedium14Bluegray50001"
                              >
                                Return
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white-A700 flex md:flex-1 flex-col items-center justify-end pt-4 px-4 rounded-lg w-[36%] md:w-full">
                    <div className="flex flex-col gap-4 items-start justify-start mt-2 w-full">
                      <Text
                        className="text-blue_gray-800 text-xl"
                        size="txtInterMedium20"
                      >
                        Product Summary
                      </Text>
                      <div className="flex flex-row items-start justify-between w-full">
                        <div className="flex flex-col gap-2 items-center justify-start w-auto">
                          <Button
                            className="flex h-[30px] items-center justify-center w-[30px]"
                            shape="round"
                            color="light_blue_50"
                            size="xs"
                            variant="fill"
                          >
                            <Img
                              className="h-[21px]"
                              src="images/img_search_light_blue_400.svg"
                              alt="search"
                            />
                          </Button>
                          <div className="flex flex-col gap-0.5 items-center justify-start w-auto">
                            <Text
                              className="text-base text-blue_gray-600 w-auto"
                              size="txtInterSemiBold16"
                            >
                              31
                            </Text>
                            <Text
                              className="text-gray-800 text-sm w-auto"
                              size="txtInterMedium14Gray800"
                            >
                              Number of Suppliers
                            </Text>
                          </div>
                        </div>
                        <Line className="bg-blue_gray-50 h-[91px] mt-1.5 w-px" />
                        <div className="flex flex-col gap-2 items-center justify-start w-auto">
                          <Img
                            className="h-[30px] rounded w-[30px]"
                            src="images/img_categories.svg"
                            alt="categories"
                          />
                          <div className="flex flex-col gap-0.5 items-center justify-start w-auto">
                            <Text
                              className="text-base text-blue_gray-600 w-auto"
                              size="txtInterSemiBold16"
                            >
                              21
                            </Text>
                            <Text
                              className="text-gray-800 text-sm w-auto"
                              size="txtInterMedium14Gray800"
                            >
                              Number of Categories
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </List>
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
                <div className="bg-white-A700 flex md:flex-1 flex-col items-center justify-end p-1.5 rounded-[10px] w-[36%] md:w-full">
                  <div className="flex flex-col gap-5 items-start justify-start mb-2 mt-[18px] w-[98%] md:w-full">
                    <Text
                      className="text-blue_gray-800 text-xl"
                      size="txtInterMedium20"
                    >
                      Order Summary
                    </Text>
                    <div className="flex flex-row gap-1.5 items-center justify-between w-full">
                      <div className="flex flex-col gap-8 items-end justify-start w-[9%]">
                        <div className="flex flex-col gap-[26px] items-start justify-start w-auto">
                          <Text
                            className="text-blue_gray-400 text-xs w-auto"
                            size="txtInterRegular12Bluegray400"
                          >
                            4000
                          </Text>
                          <Text
                            className="text-blue_gray-400 text-xs w-auto"
                            size="txtInterRegular12Bluegray400"
                          >
                            3000
                          </Text>
                          <Text
                            className="text-blue_gray-400 text-xs w-auto"
                            size="txtInterRegular12Bluegray400"
                          >
                            2000
                          </Text>
                          <Text
                            className="text-blue_gray-400 text-xs w-auto"
                            size="txtInterRegular12Bluegray400"
                          >
                            1000
                          </Text>
                        </div>
                        <Text
                          className="text-blue_gray-400 text-xs"
                          size="txtInterRegular12Bluegray400"
                        >
                          0
                        </Text>
                      </div>
                      <div className="flex flex-col items-start justify-start w-[90%]">
                        <Img
                          className="h-[226px] md:h-auto object-cover"
                          src="images/img_data.png"
                          alt="data"
                        />
                        <div className="flex flex-row gap-4 items-start justify-between md:ml-[0] ml-[3px] mt-1.5 w-[322px]">
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
                        </div>
                        <div className="flex flex-row items-center justify-start md:ml-[0] ml-[71px] mt-2.5 w-[49%] md:w-full">
                          <div className="bg-deep_orange-300 h-[15px] rounded-[7px] w-[15px]"></div>
                          <Text
                            className="ml-1 text-blue_gray-500_01 text-xs"
                            size="txtInterRegular12"
                          >
                            Ordered
                          </Text>
                          <div className="bg-blue-100 h-[15px] ml-[19px] rounded-[7px] w-[15px]"></div>
                          <Text
                            className="ml-1 text-blue_gray-500_01 text-xs"
                            size="txtInterRegular12"
                          >
                            Delivered
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
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
                      <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start ml-4 md:ml-[0] mt-[23px] w-[87%] md:w-full">
                        <Text
                          className="text-gray-700 text-sm"
                          size="txtInterMedium14Gray700"
                        >
                          Surf Excel
                        </Text>
                        <Text
                          className="md:ml-[0] ml-[100px] text-gray-700 text-sm"
                          size="txtInterMedium14Gray700"
                        >
                          30
                        </Text>
                        <Text
                          className="md:ml-[0] ml-[159px] text-gray-700 text-sm"
                          size="txtInterMedium14Gray700"
                        >
                          12
                        </Text>
                        <Text
                          className="md:ml-[0] ml-[199px] text-gray-700 text-sm"
                          size="txtInterMedium14Gray700"
                        >
                          ₹ 100
                        </Text>
                      </div>
                      <Line className="bg-blue_gray-50 h-px mt-[23px] w-full" />
                      <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start ml-4 md:ml-[0] mt-[23px] w-[87%] md:w-full">
                        <Text
                          className="text-gray-700 text-sm"
                          size="txtInterMedium14Gray700"
                        >
                          Rin
                        </Text>
                        <Text
                          className="md:ml-[0] ml-[147px] text-gray-700 text-sm"
                          size="txtInterMedium14Gray700"
                        >
                          21
                        </Text>
                        <Text
                          className="md:ml-[0] ml-[163px] text-gray-700 text-sm"
                          size="txtInterMedium14Gray700"
                        >
                          15
                        </Text>
                        <Text
                          className="md:ml-[0] ml-[199px] text-gray-700 text-sm"
                          size="txtInterMedium14Gray700"
                        >
                          ₹ 207
                        </Text>
                      </div>
                      <Line className="bg-blue_gray-50 h-px mt-[23px] w-full" />
                      <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start ml-4 md:ml-[0] mt-[23px] w-[87%] md:w-full">
                        <Text
                          className="text-gray-700 text-sm"
                          size="txtInterMedium14Gray700"
                        >
                          Parle G
                        </Text>
                        <Text
                          className="md:ml-[0] ml-[119px] text-gray-700 text-sm"
                          size="txtInterMedium14Gray700"
                        >
                          19
                        </Text>
                        <Text
                          className="md:ml-[0] ml-[162px] text-gray-700 text-sm"
                          size="txtInterMedium14Gray700"
                        >
                          17
                        </Text>
                        <Text
                          className="md:ml-[0] ml-[200px] text-gray-700 text-sm"
                          size="txtInterMedium14Gray700"
                        >
                          ₹ 105
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="bg-cover bg-no-repeat flex md:flex-1 flex-col h-[309px] items-center justify-end p-1 w-[36%] md:w-full"
                  style={{ backgroundImage: "url('images/img_group22.svg')" }}
                >
                  <div className="flex flex-col gap-3.5 items-center justify-start mt-[19px] w-[95%] md:w-full">
                    <div className="flex flex-row items-start justify-between w-[99%] md:w-full">
                      <Text
                        className="text-blue_gray-800 text-xl"
                        size="txtInterMedium20"
                      >
                        Low Quantity Stock
                      </Text>
                      <a
                        href="javascript:"
                        className="mt-[3px] text-blue-900 text-sm"
                      >
                        <Text size="txtInterRegular14Blue900">See All</Text>
                      </a>
                    </div>
                    <List
                      className="flex flex-col gap-4 items-center w-full"
                      orientation="vertical"
                    >
                      <div className="flex flex-row gap-[26px] items-center justify-start w-auto">
                        <Img
                          className="h-[70px] md:h-auto object-cover rounded w-[60px]"
                          src="images/img_rectangle71.png"
                          alt="rectangleSeventyOne"
                        />
                        <div className="flex flex-col gap-1 items-start justify-start w-auto">
                          <Text
                            className="text-base text-blue_gray-800 w-auto"
                            size="txtInterSemiBold16Bluegray800"
                          >
                            Tata Salt
                          </Text>
                          <Text
                            className="text-blue_gray-500_01 text-sm w-auto"
                            size="txtInterRegular14"
                          >
                            Remaining Quantity : 10 Packet
                          </Text>
                        </div>
                        <div className="flex flex-col items-start justify-start w-auto">
                          <Button
                            className="cursor-pointer font-medium min-w-[38px] rounded-[11px] text-center text-xs"
                            color="red_50"
                            size="xs"
                            variant="fill"
                          >
                            Low
                          </Button>
                        </div>
                      </div>
                      <div className="flex flex-row gap-[25px] items-center justify-start w-auto">
                        <Img
                          className="h-[70px] md:h-auto object-cover rounded w-[60px]"
                          src="images/img_rectangle72.png"
                          alt="rectangleSeventyTwo"
                        />
                        <div className="flex flex-col gap-1 items-start justify-start w-auto">
                          <Text
                            className="text-base text-blue_gray-800 w-auto"
                            size="txtInterSemiBold16Bluegray800"
                          >
                            Lays
                          </Text>
                          <Text
                            className="text-blue_gray-500_01 text-sm w-auto"
                            size="txtInterRegular14"
                          >
                            Remaining Quantity : 15 Packet
                          </Text>
                        </div>
                        <div className="flex flex-col items-start justify-start w-auto">
                          <Button
                            className="cursor-pointer font-medium min-w-[38px] rounded-[11px] text-center text-xs"
                            color="red_50"
                            size="xs"
                            variant="fill"
                          >
                            Low
                          </Button>
                        </div>
                      </div>
                      <div className="flex flex-row gap-[25px] items-center justify-start w-auto">
                        <Img
                          className="h-[70px] md:h-auto object-cover rounded w-[60px]"
                          src="images/img_rectangle72.png"
                          alt="rectangleSeventyEight"
                        />
                        <div className="flex flex-col gap-1 items-start justify-start w-auto">
                          <Text
                            className="text-base text-blue_gray-800 w-auto"
                            size="txtInterSemiBold16Bluegray800"
                          >
                            Lays
                          </Text>
                          <Text
                            className="text-blue_gray-500_01 text-sm w-auto"
                            size="txtInterRegular14"
                          >
                            Remaining Quantity : 15 Packet
                          </Text>
                        </div>
                        <div className="flex flex-col items-start justify-start w-auto">
                          <Button
                            className="cursor-pointer font-medium min-w-[38px] rounded-[11px] text-center text-xs"
                            color="red_50"
                            size="xs"
                            variant="fill"
                          >
                            Low
                          </Button>
                        </div>
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

export default DashboardPage;
