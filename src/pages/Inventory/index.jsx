import React from "react";

import { Menu, MenuItem } from "react-pro-sidebar";

import { createColumnHelper } from "@tanstack/react-table";

import { Button, Img, Input, Line, List, ReactTable, Text } from "components";
import Sidebar1 from "components/Sidebar1";

import { CloseSVG } from "../../assets/images";

const InventoryPage = () => {
  const tableData = React.useRef([
    // {
    //   productsOne: "Maggi",
    //   buyingprice: "₹430",
    //   quantity: "43 Packets",
    //   thresholdvalue: "12 Packets",
    //   expirydate: "11/12/22",
    //   availability: "In- stock",
    // },
  ]);

  const handleEdit = (id) => {
    console.log(`Edit data with ID: ${id}`);
    // Implement your edit logic here
  };

  const handleDelete = (id) => {
    console.log(`Delete data with ID: ${id}`);
    // Implement your delete logic here
  };

  const handleUpdate = (id) => {
    console.log(`Update data with ID: ${id}`);
    // Implement your update logic here
  };

  const tableColumns = React.useMemo(() => {
    const tableColumnHelper = createColumnHelper();
    return [
      tableColumnHelper.accessor("productsOne", {
        cell: (info) => (
          <Text
            className="pb-[22px] pt-8 text-blue_gray-700 text-sm"
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
            Id
          </Text>
        ),
      }),
      tableColumnHelper.accessor("expirydate", {
        cell: (info) => (
          <Text
            className="pb-[23px] pt-[31px] text-blue_gray-700 text-sm"
            size="txtInterMedium14"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text
            className="min-w-[176px] text-blue_gray-500_01 text-sm"
            size="txtInterMedium14Bluegray50001"
          >
            Category
          </Text>
        ),
      }),
      tableColumnHelper.accessor("quantity", {
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

      tableColumnHelper.accessor("expirydate", {
        cell: (info) => (
          <Text
            className="pb-[23px] pt-[31px] text-blue_gray-700 text-sm"
            size="txtInterMedium14"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text
            className="min-w-[176px] text-blue_gray-500_01 text-sm"
            size="txtInterMedium14Bluegray50001"
          >
            Expiry Date
          </Text>
        ),
      }),

      tableColumnHelper.accessor("expirydate", {
        cell: (info) => (
          <Text
            className="pb-[23px] pt-[31px] text-blue_gray-700 text-sm"
            size="txtInterMedium14"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text
            className="min-w-[176px] text-blue_gray-500_01 text-sm"
            size="txtInterMedium14Bluegray50001"
          >
            Edit Data
          </Text>
        ),
      }),

      tableColumnHelper.accessor("expirydate", {
        cell: (info) => (
          <Text
            className="pb-[23px] pt-[31px] text-blue_gray-700 text-sm"
            size="txtInterMedium14"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text
            className="min-w-[176px] text-blue_gray-500_01 text-sm"
            size="txtInterMedium14Bluegray50001"
          >
            Hapus Data
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
          src="images/img_settings.svg"
          alt="settings"
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
      <div className="bg-blue_gray-50 flex flex-col font-inter items-center justify-start mx-auto w-full">
        <div className="flex md:flex-col flex-row md:gap-5 items-start justify-evenly w-full">
          <Sidebar1 className="!sticky !w-[280px] bg-white-A700 border-blue_gray-50 border-r border-solid flex h-screen md:hidden justify-start overflow-auto md:px-5 rounded-br-lg rounded-tr-lg top-[0]" />
          <div className="flex flex-1 flex-col gap-[22px] items-center justify-start md:px-5 w-full">
            <div className="bg-white-A700 border border-gray-200 border-solid flex flex-col items-center justify-start py-7 w-full">
              <header className="flex sm:flex-col flex-row md:gap-10 items-center justify-between sm:px-5 px-8 w-full">
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
                <div className="flex flex-row gap-[22px] items-start justify-start w-auto">
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
              </header>
            </div>
            <div className="flex flex-col gap-[22px] items-center justify-start w-[95%] md:w-full">
              <div className="bg-white-A700 flex flex-col items-center justify-start p-[15px] rounded-lg w-full">
                <div className="flex flex-col gap-[22px] items-start justify-start mt-[9px] w-full">
                  <Text
                    className="text-blue_gray-800 text-xl"
                    size="txtInterMedium20"
                  >
                    Overall Inventory
                  </Text>
                  <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between pb-2 w-full">
                    <div className="flex flex-col gap-3 items-start justify-start w-[108px]"></div>
                    <List
                      className="md:flex-1 sm:flex-col flex-row gap-[55px] grid sm:grid-cols-[repeat(0,_1fr_1px)_1fr] grid-cols-[repeat(1,_1fr_1px)_1fr] w-[48%] md:w-full"
                      orientation="horizontal"
                    >
                      <div className="flex flex-col gap-3 items-start justify-start sm:ml-[0] w-[188px]">
                        <Text
                          className="text-base text-yellow-800 w-auto"
                          size="txtInterSemiBold16Yellow800"
                        >
                          Total Products
                        </Text>
                        <div className="flex flex-col gap-3 items-start justify-start w-auto">
                          <div className="flex flex-row gap-[91px] items-start justify-start w-auto"></div>
                          <div className="flex flex-row gap-[47px] items-start justify-start w-auto"></div>
                        </div>
                      </div>
                      <Line className="self-center h-[99px] bg-blue_gray-50 w-px" />
                      <div className="flex flex-col gap-3 items-start justify-start sm:ml-[0] w-[205px]">
                        <div className="flex flex-col gap-3 items-start justify-start w-auto">
                          <div className="flex flex-row gap-[139px] items-start justify-between w-auto"></div>
                          <div className="flex flex-row items-center justify-between w-full"></div>
                        </div>
                      </div>
                    </List>
                    <div className="flex flex-col gap-3 items-start justify-start w-[235px]">
                      <div className="flex flex-row gap-[95px] items-start justify-start w-auto"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white-A700 flex flex-col items-center justify-end py-3 rounded-lg w-full">
                <div className="flex flex-col items-center justify-start mt-[7px] w-full">
                  <div className="flex flex-col items-center justify-start pb-[41px] w-[98%] md:w-full">
                    <div className="flex sm:flex-col flex-row sm:gap-5 items-end justify-start w-full">
                      <Text
                        className="mb-[5px] sm:mt-0 mt-[20px] text-blue_gray-800 text-xxl"
                        size="txtInterMedium20"
                      >
                        Products
                      </Text>
                      <Button
                        className="cursor-pointer font-medium min-w-[116px] sm:ml-[0] ml-[618px] text-center text-sm bg-pink-600 text-white-A700"
                        shape="round"
                        variant="fill"
                        onClick={() => {
                          // Navigate to the addSupplier page
                          window.location.href = "AddProduct";
                        }}
                      >
                        Add Product
                      </Button>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start px-4 w-full">
                    <div className="overflow-auto w-[98%]">
                      <ReactTable
                        columns={tableColumns}
                        data={tableData.current}
                        rowClass={"border-b border-blue_gray-100_01"}
                        headerClass="border-b border-blue_gray-100_01"
                      />
                    </div>
                    <div className="h-[17px] w-[99%]"></div>
                    <div className="h-[17px] mt-[78px] w-[99%]"></div>
                    <div className="h-[17px] mt-[126px] w-[99%]"></div>
                    <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start mt-[78px] w-[98%] md:w-full"></div>
                    <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start mt-[23px] w-full"></div>
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

export default InventoryPage;
