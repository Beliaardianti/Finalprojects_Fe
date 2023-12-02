import React from "react";

import { Menu, MenuItem } from "react-pro-sidebar";

import { createColumnHelper } from "@tanstack/react-table";

import { Button, Img, Input, Line, List, ReactTable, Text } from "components";
import Header from "components/Header";
import Sidebar1 from "components/Sidebar1";

import { CloseSVG } from "../../assets/images";

const Category = () => {
  const table2Data = React.useRef([
    // {
    //   products: "Maggi",
    //   ordervalue: "₹4306",
    //   quantity: "43 Packets",
    //   orderid: "7535",
    //   expecteddeliverOne: "11/12/22",
    //   status: "Delayed",
    // },


  ]);
  const table2Columns = React.useMemo(() => {
    const table2ColumnHelper = createColumnHelper();
    return [
      table2ColumnHelper.accessor("products", {
        cell: (info) => (
          <Text
            className="pb-[23px] pt-8 text-blue_gray-700 text-sm"
            size="txtInterMedium14"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text
            className="min-w-[201px] text-blue_gray-500_01 text-sm"
            size="txtInterMedium14Bluegray50001"
          >
            Products
          </Text>
        ),
      }),

      table2ColumnHelper.accessor("quantity", {
        cell: (info) => (
          <Text
            className="pb-6 pt-[30px] text-blue_gray-700 text-sm"
            size="txtInterMedium14"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text
            className="min-w-[180px] pl-0.5 text-blue_gray-500_01 text-sm"
            size="txtInterMedium14Bluegray50001"
          >
            Quantity
          </Text>
        ),
      }),
      table2ColumnHelper.accessor("orderid", {
        cell: (info) => (
          <Text
            className="pb-6 pt-[30px] text-blue_gray-700 text-sm"
            size="txtInterMedium14"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text
            className="min-w-[163px] text-blue_gray-500_01 text-sm"
            size="txtInterMedium14Bluegray50001"
          >
            Order ID
          </Text>
        ),
      }),

      table2ColumnHelper.accessor("status", {
        cell: (info) => (
          <Text
            className="pb-[22px] pt-8 text-orange-600 text-sm"
            size="txtInterMedium14Orange600"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text
            className="min-w-[62px] text-blue_gray-500_01 text-sm"
            size="txtInterMedium14Bluegray50001"
          >
            Status
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
      icon: (
        <Img
          className="h-6 w-6"
          src="images/img_thumbsup_blue_600.svg"
          alt="thumbsup"
        />
      ),
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
            <div className="flex flex-col gap-[23px] items-center justify-start w-[95%] md:w-full">
              <div className="bg-white-A700 flex flex-col items-center justify-start p-[15px] rounded-lg w-full">
                <div className="flex flex-col gap-6 items-start justify-start mt-[7px] w-full">
                  <Text
                    className="text-blue_gray-800 text-xl"
                    size="txtInterMedium20"
                  >
                    Overall Orders
                  </Text>
                  <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between pb-2 w-full">
                    <div className="flex flex-col gap-3 items-start justify-start w-[108px]">
                      <Text
                        className="text-base text-pink-600 w-auto"
                        size="txtInterSemiBold16Blue600"
                      >
                        Total Orders
                      </Text>

                      
                    </div>
                    <List
                      className="md:flex-1 sm:flex-col flex-row gap-[55px] grid sm:grid-cols-[repeat(0,_1fr_1px)_1fr] grid-cols-[repeat(1,_1fr_1px)_1fr] w-[48%] md:w-full"
                      orientation="horizontal"
                    >
                      <div className="flex flex-col gap-3 items-start justify-start sm:ml-[0] w-[188px]">
                        
                        <div className="flex flex-col gap-3 items-start justify-start w-auto">


                        </div>
                      </div>
                      <Line className="self-center h-[99px] bg-blue_gray-50 w-px" />

                    </List>

                  </div>
                </div>
              </div>
              <div className="bg-white-A700 flex flex-col items-center justify-start py-[19px] rounded-lg w-full">
                <div className="flex flex-col items-center justify-start mb-2 w-full">
                  <div className="flex flex-col items-center justify-start pb-[41px] w-[97%] md:w-full">
                    <div className="flex md:flex-col flex-row md:gap-5 items-end justify-start w-full">
                      <Text
                        className="mb-0.5 md:mt-0 mt-3 text-blue_gray-800 text-xl"
                        size="txtInterMedium20"
                      >
                        Orders
                      </Text>
                      <Button
                        className="cursor-pointer font-medium min-w-[116px] md:ml-[0] ml-[632px] text-center text-sm bg-pink-600 text-white-A700"
                        shape="round"
                        variant="fill"
                        onClick={() => {
                          // Navigate to the addSupplier page
                          window.location.href = "AddProduct";
                        }}
                      >
                        Tambahkan Order
                      </Button>               

                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start px-4 w-full">
                    <div className="overflow-auto w-[95%]">
                      <ReactTable
                        columns={table2Columns}
                        data={table2Data.current}
                        rowClass={"border-b border-blue_gray-100_01"}
                        headerClass="border-b border-blue_gray-100_01"
                      />
                    </div>
                    <div className="h-[17px] w-[96%]"></div>
                    <div className="h-[18px] mt-[78px] w-[99%]"></div>
                    <div className="h-[18px] mt-[77px] w-[99%]"></div>
                    <div className="h-[17px] mt-[77px] w-[96%]"></div>
                    <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start mt-[77px] w-full">
                      
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

export default Category;
