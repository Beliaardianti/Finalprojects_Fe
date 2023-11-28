import React from "react";

import { Menu, MenuItem } from "react-pro-sidebar";

import { Button, Img, Input, List, Text } from "components";
import Header from "components/Header";
import Sidebar1 from "components/Sidebar1";

import { CloseSVG } from "../../assets/images";

const ManagestorePage = () => {
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
    {
      icon: (
        <Img
          className="h-6 mb-[3px] w-6"
          src="images/img_user_blue_600.svg"
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
      <div className="bg-blue_gray-50 flex flex-col font-inter items-center justify-start mx-auto w-full">
        <div className="flex md:flex-col flex-row md:gap-5 items-start justify-evenly w-full">
          <Sidebar1 className="!sticky !w-[280px] bg-white-A700 border-blue_gray-50 border-r border-solid flex h-screen md:hidden justify-start overflow-auto md:px-5 rounded-br-lg rounded-tr-lg top-[0]" />
          <div className="flex flex-1 flex-col gap-[22px] items-center justify-start md:px-5 w-full">
            <div className="bg-white-A700 border border-gray-200 border-solid flex flex-col items-center justify-start py-7 w-full">
              <Header className="flex sm:flex-col flex-row md:gap-10 items-center justify-between sm:px-5 px-8 w-full" />
            </div>
            <div className="bg-white-A700 flex flex-col items-center justify-start p-4 rounded-lg w-[95%] md:w-full">
              <div className="flex flex-col gap-[25px] justify-start mb-[75px] mt-[3px] w-full">
                <div className="flex flex-row md:gap-10 items-center justify-between w-full">
                  <Text
                    className="text-blue_gray-800 text-xl"
                    size="txtInterMedium20"
                  >
                    Manage Store
                  </Text>
                  <Button
                    className="cursor-pointer font-medium min-w-[99px] text-center text-sm"
                    shape="round"
                    color="blue_700"
                    variant="fill"
                  >
                    Add Store
                  </Button>
                </div>
                <List
                  className="flex flex-col gap-10 md:ml-[0] ml-[26px] w-[89%]"
                  orientation="vertical"
                >
                  <div className="bg-white-A700 border border-blue_gray-50 border-solid flex md:flex-col flex-row md:gap-5 items-center justify-start pr-4 rounded-md w-full">
                    <div className="bg-blue_gray-50 flex flex-col items-start justify-center p-[55px] md:px-10 sm:px-5 rounded-bl-md rounded-tl-md">
                      <Text
                        className="mb-[11px] mt-2 text-base text-blue_gray-700"
                        size="txtInterSemiBold16Bluegray700"
                      >
                        Singanallur Branch
                      </Text>
                    </div>
                    <div className="flex flex-col gap-2 items-start justify-start ml-5 md:ml-[0] w-auto">
                      <Text
                        className="text-base text-blue_gray-600 w-auto"
                        size="txtInterMedium16Bluegray600"
                      >
                        Lisy Store
                      </Text>
                      <Text
                        className="leading-[20.00px] text-blue_gray-400 text-sm"
                        size="txtInterRegular14Bluegray400"
                      >
                        <>
                          1A/Krihnarajapuram, 3 rd street sulur
                          <br />
                          Coimbatore - 6313403
                          <br />
                          044- 653578
                        </>
                      </Text>
                    </div>
                    <Button
                      className="cursor-pointer font-medium min-w-[90px] md:ml-[0] ml-[280px] text-center text-sm"
                      shape="round"
                      color="blue_50_01"
                      variant="outline"
                    >
                      Edit
                    </Button>
                  </div>
                  <div className="bg-white-A700 border border-blue_gray-50 border-solid flex md:flex-col flex-row md:gap-5 items-center justify-start pr-4 rounded-md w-full">
                    <div className="bg-blue_gray-50 flex flex-col items-start justify-start p-[62px] md:px-10 sm:px-5 rounded-bl-md rounded-tl-md">
                      <Text
                        className="mb-[5px] md:ml-[0] ml-[26px] text-base text-blue_gray-700"
                        size="txtInterSemiBold16Bluegray700"
                      >
                        Slur Branch
                      </Text>
                    </div>
                    <div className="flex flex-col gap-2 items-start justify-start ml-5 md:ml-[0] w-auto">
                      <Text
                        className="text-base text-blue_gray-600 w-auto"
                        size="txtInterMedium16Bluegray600"
                      >
                        Lisy Store
                      </Text>
                      <Text
                        className="leading-[20.00px] text-blue_gray-400 text-sm"
                        size="txtInterRegular14Bluegray400"
                      >
                        <>
                          54 Ramani colony, 3 rd street sulur
                          <br />
                          Coimbatore - 63133452
                          <br />
                          044- 653763
                        </>
                      </Text>
                    </div>
                    <Button
                      className="cursor-pointer font-medium min-w-[90px] md:ml-[0] ml-[292px] text-center text-sm"
                      shape="round"
                      color="blue_50_01"
                      variant="outline"
                    >
                      Edit
                    </Button>
                  </div>
                  <div className="bg-white-A700 border border-blue_gray-50 border-solid flex md:flex-col flex-row md:gap-5 items-center justify-start pr-4 rounded-md w-full">
                    <div className="bg-blue_gray-50 flex flex-col items-start justify-center p-11 md:px-10 sm:px-5 rounded-bl-md rounded-tl-md">
                      <Text
                        className="mb-[22px] mt-[19px] text-base text-blue_gray-700"
                        size="txtInterSemiBold16Bluegray700"
                      >
                        Gaandipuram Branch
                      </Text>
                    </div>
                    <div className="flex flex-col gap-[9px] items-start justify-start ml-5 md:ml-[0] w-auto">
                      <Text
                        className="text-base text-blue_gray-600 w-auto"
                        size="txtInterMedium16Bluegray600"
                      >
                        Lisy Store
                      </Text>
                      <Text
                        className="leading-[20.00px] text-blue_gray-400 text-sm"
                        size="txtInterRegular14Bluegray400"
                      >
                        <>
                          32/ Venkatasamy layout, 3 rd street sulur
                          <br />
                          Coimbatore - 6313403
                          <br />
                          044- 653578
                        </>
                      </Text>
                    </div>
                    <Button
                      className="cursor-pointer font-medium min-w-[90px] md:ml-[0] ml-[251px] text-center text-sm"
                      shape="round"
                      color="blue_50_01"
                      variant="outline"
                    >
                      Edit
                    </Button>
                  </div>
                </List>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ManagestorePage;
