import React from "react";

import { Menu, MenuItem } from "react-pro-sidebar";

import { createColumnHelper } from "@tanstack/react-table";

import { Button, Img, Input, Line, ReactTable, Text } from "components";
import Header from "components/Header";
import Sidebar1 from "components/Sidebar1";

import { CloseSVG } from "../../assets/images";

const SuppliersPage = () => {
  const table1Data = React.useRef([
    {
      suppliername: "Richard Martin",
      product: "Kit Kat",
      contactnumber: "7687764556",
      emailFourteen: "richard@gmail.com",
      type: "Taking Return",
      ontheway: "13",
    },




  ]);
  const table1Columns = React.useMemo(() => {
    const table1ColumnHelper = createColumnHelper();
    return [
      table1ColumnHelper.accessor("suppliername", {
        cell: (info) => (
          <Text
            className="pt-[30px] text-blue_gray-700 text-sm"
            size="txtInterMedium14"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text
            className="min-w-[197px] text-blue_gray-500_01 text-sm"
            size="txtInterMedium14Bluegray50001"
          >
           Nama
          </Text>
        ),
      }),
      table1ColumnHelper.accessor("product", {
        cell: (info) => (
          <Text
            className="pt-[30px] text-blue_gray-700 text-sm"
            size="txtInterMedium14"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text
            className="min-w-[173px] text-blue_gray-500_01 text-sm"
            size="txtInterMedium14Bluegray50001"
          >
            Email
          </Text>
        ),
      }),
      table1ColumnHelper.accessor("contactnumber", {
        cell: (info) => (
          <Text
            className="pt-[30px] text-blue_gray-700 text-sm"
            size="txtInterMedium14"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text
            className="min-w-[188px] text-blue_gray-500_01 text-sm"
            size="txtInterMedium14Bluegray50001"
          >
            Contact Number
          </Text>
        ),
      }),
      table1ColumnHelper.accessor("emailFourteen", {
        cell: (info) => (
          <Text
            className="pt-[31px] text-blue_gray-700 text-sm"
            size="txtInterMedium14"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text
            className="min-w-[197px] text-blue_gray-500_01 text-sm"
            size="txtInterMedium14Bluegray50001"
          >
            Alamat
          </Text>
        ),
      }),


    ];
  }, []);

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
          src="images/img_frame8_blue_600.svg"
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
      <div className="bg-blue_gray-50 flex flex-col font-inter items-center justify-start mx-auto w-full">
        <div className="flex md:flex-col flex-row md:gap-5 items-start justify-evenly w-full">
          <Sidebar1 className="!sticky !w-[280px] bg-white-A700 border-blue_gray-50 border-r border-solid flex h-screen md:hidden justify-start overflow-auto md:px-5 rounded-br-lg rounded-tr-lg top-[0]" />
          <div className="flex flex-1 flex-col gap-[22px] items-center justify-start md:px-5 w-full">
            <div className="bg-white-A700 border border-gray-200 border-solid flex flex-col items-center justify-start py-7 w-full">
              <Header className="flex sm:flex-col flex-row md:gap-10 items-center justify-between sm:px-5 px-8 w-full" />
            </div>
            <div className="bg-white-A700 flex flex-col items-center justify-end py-3 rounded-lg w-[95%] md:w-full">
              <div className="flex flex-col items-center justify-start mt-1 w-full">
                <div className="flex flex-col items-center justify-start pb-[38px] w-[98%] md:w-full">
                  <div className="flex sm:flex-col flex-row sm:gap-5 items-end justify-start w-full">
                    <Text
                      className="mb-0.5 sm:mt-0 mt-3 text-gray-800 text-xl"
                      size="txtInterMedium20Gray800"
                    >
                      Suppliers
                    </Text>
                    <Button
                      className="cursor-pointer font-medium min-w-[116px] sm:ml-[0] ml-[614px] text-center text-sm bg-pink-600 text-white-A700"
                      shape="round"
                      variant="fill"
                    >
                      Add Suppliers
                    </Button>
                    <Button
                      className="cursor-pointer flex items-center justify-center min-w-[102px] ml-3 sm:ml-[0]"
                      leftIcon={
                        <Img
                          className="h-5 mr-2"
                          src="images/img_filters_lines.svg"
                          alt="Filters lines"
                        />
                      }
                      shape="round"
                    >
                      <div className="!text-blue_gray-600 font-medium text-left text-sm">
                        Filters
                      </div>
                    </Button>
                   
                  </div>
                </div>
                <div className="flex flex-col gap-[26px] items-center justify-start px-4 w-full">
                  <div className="overflow-auto w-[99%]">
                    <ReactTable
                      columns={table1Columns}
                      data={table1Data.current}
                      rowClass={"border-b border-blue_gray-50"}
                      headerClass="border-b border-blue_gray-50"
                    />
                  </div>
                  <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start w-full">
                    <Button
                      className="border border-blue_gray-100_01 border-solid cursor-pointer font-medium min-w-[92px] text-center text-sm"
                      shape="round"
                      color="white_A700"
                      variant="fill"
                    >
                      Previous
                    </Button>
                    <Text
                      className="sm:ml-[0] ml-[396px] sm:mt-0 mt-[11px] text-blue_gray-700 text-sm"
                      size="txtInterRegular14Bluegray700"
                    >
  
                    </Text>
                    <Button
                      className="border border-blue_gray-100_01 border-solid cursor-pointer font-medium min-w-[66px] sm:ml-[0] ml-[428px] text-center text-sm"
                      shape="round"
                      color="white_A700"
                      variant="fill"
                    >
                      Next
                    </Button>
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

export default SuppliersPage;
