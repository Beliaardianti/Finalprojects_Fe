import React, { useEffect, useState } from "react";

import { Menu, MenuItem } from "react-pro-sidebar";

import { createColumnHelper } from "@tanstack/react-table";
import { createSearchParams, Link, useNavigate } from "react-router-dom";
import { Button, Img, Input, Line, ReactTable, Text } from "components";
import Header from "components/Header";
import Sidebar1 from "components/Sidebar1";

import { CloseSVG } from "../../assets/images";
import { deleteSupplier, fetchSupplier, searchSupplierNameQuery } from "api/repository/SupplierRepository";

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
  
   // Fungsi untuk menambahkan data
   const addSupplier = (newSupplier) => {
    table1Data.current = [...table1Data.current, newSupplier];
    // Lakukan proses penyimpanan data ke database 
  };

  // Fungsi untuk mengedit data
  const editSupplier = (index, updatedSupplier) => {
    const updatedData = [...table1Data.current];
    updatedData[index] = updatedSupplier;
    table1Data.current = updatedData;
    // Lakukan proses penyimpanan data ke database 
  };

  // Fungsi untuk menghapus data
  const deleteSupplier = (index) => {
    const updatedData = [...table1Data.current];
    updatedData.splice(index, 1);
    table1Data.current = updatedData;
    // Lakukan proses penyimpanan data ke database atau penyimpanan permanen lainnya di sini (jika diperlukan)
  };

  const handleAddSupplier = () => {
    // Implementasi logika untuk menampilkan form tambah supplier
    // Gunakan addSupplier untuk menambahkan data ke tabel
  };

  const handleEditSupplier = (index) => {
    // Implementasi logika untuk menampilkan form edit supplier berdasarkan index tertentu
    // Gunakan editSupplier untuk memperbarui data di tabel
  };

  const handleDeleteSupplier = (index) => {
    // Implementasi logika untuk menghapus supplier berdasarkan index tertentu
    // Gunakan deleteSupplier untuk menghapus data dari tabel
  };

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
            Supplier Name
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

  const [supplierData, setSupplierData] = useState([])
  const [loaderSupplierData, setLoaderSupplierData] = useState(false)

  const navigate = useNavigate();
  const handleUpdateSupplier = async (id) => {
    navigate('/update-supplier', { state: { id: id, } });
  }
  const [loader, setLoader] = useState(false);

  

  const handleFetchSupplier = async () => {
    setLoaderSupplierData(true)
    try {
      const res = await fetchSupplier()
      console.log(res)
      setSupplierData(res)
      setLoaderSupplierData(false)

    } catch (error) {
      setLoaderSupplierData(false)
      console.log(error)
    }
  }
  const handleSearchSupplier = async (query) => {
    console.log(query)
    if(query){

      setLoader(true)
      try {
        const res = await searchSupplierNameQuery({
          query:query,
        })
        console.log(res)
        setSupplierData(res)
        setLoader(false)
      } catch (error) {
        alert(error.message)
        setLoader(false)
        console.log(error.message)
      }
    }
    else{
      handleFetchSupplier()
    }
  }

  const handleDeleteSupplier = async (id) => {
    setLoaderSupplierData(true)
    try {
      const res = await deleteSupplier(id)
      // console.log(res)
      setLoaderSupplierData(false)
      alert("Hapus supplier berhasil")
      handleFetchSupplier()


    } catch (error) {
      setLoaderSupplierData(false)
      console.log(error)
    }
  }

  useEffect(() => {
    handleFetchSupplier()
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
                <div className="flex flex-col items-cesunter justify-start pb-[38px] w-[98%] md:w-full">
                  <div className="flex sm:flex-col flex-row sm:gap-5 items-end justify-start w-full">

                    <Text
                      className="mb-0.5 sm:mt-0 mt-3 text-gray-800 text-xl"
                      size="txtInterMedium20Gray800"
                    >
                      Suppliers
                    </Text>
                    <Button
                      className="cursor-pointer font-medium min-w-[116px] sm:ml-[0] ml-[614px] text-center text-sm bg-pink-600 text-white-A700 mr-2"
                      shape="round"
                      variant="fill"
<<<<<<< HEAD
                      onClick={() => {
                        // Navigate to the addSupplier page
                        window.location.href = "AddSupplier";
                      }}
=======
                      onClick={handleAddSupplier}
>>>>>>> 316f00de95e8c183e6cee54034992038b678023d
                    >
                      Add Suppliers
                    </Button>
                    <Input
                      name="searchbar"
                      placeholder="Search Supplier Name"
                      onChange={(e) => handleSearchSupplier(e)}
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
                    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                      <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                          <th scope="col" class="px-6 py-3">
                            Supplier Name
                          </th>
                          <th scope="col" class="px-6 py-3">
                            Email
                          </th>
                          <th scope="col" class="px-6 py-3">
                            No Handphone
                          </th>
                          <th scope="col" class="px-6 py-3">
                            Address
                          </th>
                          <th scope="col" class="px-6 py-3">
                            Aksi
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {
                          loaderSupplierData ? <span>Loading ...</span> :
                            supplierData?.map((data) => (
                              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={data.id}>
                                <td class="px-6 py-4">
                                  {data.supplier_name}
                                </td>
                                <td class="px-6 py-4">
                                  {data.email}
                                </td>
                                <td class="px-6 py-4">
                                  {data.no_handphone}
                                </td>
                                <td class="px-6 py-4">
                                  {data.address}
                                </td>
                                <td class="px-6 py-4">
                                  <Button
                                    className="cursor-pointer font-medium min-w-[116px] ml-auto text-center text-sm bg-pink-600 text-white-A700 mr-2"
                                    shape="round"
                                    variant="fill"
                                    onClick={() => {
                                      handleUpdateSupplier(data.id)
                                    }}
                                  >Update
                                  </Button>
                                  <Button
                                    className="cursor-pointer font-medium min-w-[116px] ml-auto text-center text-sm bg-pink-600 text-white-A700"
                                    shape="round"
                                    variant="fill"
                                    onClick={() => {
                                      handleDeleteSupplier(data.id)
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
                  <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start w-full"></div>
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
