import React, { useEffect, useState } from "react";
import { createSearchParams, Link, useNavigate } from "react-router-dom";
import { Menu, MenuItem } from "react-pro-sidebar";

import { createColumnHelper } from "@tanstack/react-table";

import { Button, Img, Input, Line, ReactTable, Text } from "components";
import Header from "components/Header";
import Sidebar1 from "components/Sidebar1";

import { CloseSVG } from "../../assets/images";
import { deleteCustomer, fetchCustomers, searchCustomerNameQuery } from "api/repository/CustomerRepository";

const CustomerPage = () => {
  const table1Data = React.useRef([
    {
      suppliername: "Richard Martin",
      product: "Kit Kat",
      contactnumber: "7687764556",
      emailFourteen: "richard@gmail.com",
      type: "Taking Return",
      ontheway: "13",
    },

    //  Fungsi buton next
    // const handleClick = () => {
    //   // Beralih ke halaman selanjutnya
    //   window.location.href = "../Orders";
    // };
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
            Custumer Name
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
            No Handphone
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
            Address
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

  const [customerData, setCustomerData] = useState([])
  const [loaderCustomerData, setLoaderCustomerData] = useState(false)

  const handleFetchCustomer = async () => {
    setLoaderCustomerData(true)
    try {
      const res = await fetchCustomers()
      console.log(res)
      setCustomerData(res)
      setLoaderCustomerData(false)

    } catch (error) {
      setLoaderCustomerData(false)
      console.log(error)
    }
  }

  const handleSearchCustomer = async (query) => {
    console.log(query)
    if(query){

      setLoaderCustomerData(true)
      try {
        const res = await searchCustomerNameQuery({
          query:query,
        })
        console.log(res)
        setCustomerData(res)
        setLoaderCustomerData(false)
      } catch (error) {
        alert(error.message)
        setLoaderCustomerData(false)
        console.log(error.message)
      }
    }
    else{
      handleFetchCustomer()
    }
  }

  const navigate = useNavigate();
  const handleUpdateCustomer = async (id) => {
    navigate('/update-customer', { state: { id: id, } });
  }

  const handleDeleteCustomer = async (id) => {
    setLoaderCustomerData(true)
    try {
      const res = await deleteCustomer(id)
      // console.log(res)
      setLoaderCustomerData(false)
      alert("Hapus customer berhasil")
      handleFetchCustomer()


    } catch (error) {
      setLoaderCustomerData(false)
      console.log(error)
    }
  }

  useEffect(() => {
    handleFetchCustomer()
  }, [])

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
                      Customer
                    </Text>
                    <Button
                      className="cursor-pointer font-medium min-w-[116px] sm:ml-[0] ml-[614px] text-center text-sm bg-pink-600 text-white-A700 mr-2"
                      shape="round"
                      variant="fill"
                      onClick={() => {
                        // Navigate to the addSupplier page
                        window.location.href = "AddCustumer";
                      }}
                    >
                      Add Customer
                    </Button>
                    <Input
                      name="searchbar"
                      placeholder="Search Customer Name"
                      // value={searchbarvalue}
                      onChange={(e) => handleSearchCustomer(e)}
                      className="!placeholder:text-blue_gray-400 !text-blue_gray-400 font-inter p-0 text-base text-left w-full"
                      wrapClassName="flex rounded sm:w-full"
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
                            visibility: searchbarvalue?.length <= 0 ? "hidden" : "visible",
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
                  </div>
                </div>
                <div className="flex flex-col gap-[26px] items-center justify-start px-4 w-full">
                  <div className="overflow-auto w-[99%]">
                    {/* <ReactTable
                      columns={table1Columns}
                      data={table1Data.current}
                      rowClass={"border-b border-blue_gray-50"}
                      headerClass="border-b border-blue_gray-50"
                    /> */}

                    <div class="relative overflow-x-auto">
                      <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                          <tr>

                            <th scope="col" class="px-6 py-3">
                              Name
                            </th>
                            <th scope="col" class="px-6 py-3">
                              Email
                            </th>
                            <th scope="col" class="px-6 py-3">
                              No Handphone
                            </th>
                            <th scope="col" class="px-6 py-3">
                              Aksi
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {
                            loaderCustomerData ? <span>Loading ...</span> :
                              customerData?.map((data) => (
                                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={data.id}>
                                  <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    {data.customer_name}
                                  </th>
                                  <td class="px-6 py-4">
                                    {data.email}
                                  </td>
                                  <td class="px-6 py-4">
                                    {data.no_handphone}
                                  </td>

                                  <td class="px-6 py-4">
                                    <Button
                                      className="cursor-pointer font-medium min-w-[116px] ml-auto text-center text-sm bg-pink-600 text-white-A700 mr-2"
                                      shape="round"
                                      variant="fill"
                                      onClick={() => {
                                        handleUpdateCustomer(data.id)
                                      }}
                                    >Update
                                    </Button>
                                    <Button
                                      className="cursor-pointer font-medium min-w-[116px] ml-auto text-center text-sm bg-pink-600 text-white-A700"
                                      shape="round"
                                      variant="fill"
                                      onClick={() => {
                                        handleDeleteCustomer(data.id)
                                      }}
                                    >Hapus
                                    </Button>
                                  </td>
                                </tr>
                              ))

                          }


                        </tbody>
                      </table>
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

export default CustomerPage;
