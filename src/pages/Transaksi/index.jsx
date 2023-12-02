import React, {useState,useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { Menu, MenuItem } from "react-pro-sidebar";

import { Button, Img, Input, Line, List, Text } from "components";
import Sidebar1 from "components/Sidebar1";

import { CloseSVG } from "../../assets/images";
import { fetchTransactions,deleteTransaction } from "api/repository/TransactionRepository";

const TransaksiPage = () => {
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

  const [transactionData, setTransactionData] = useState([])
  const [loaderTransactionData, setLoaderTransactionData] = useState(false)

  const navigate = useNavigate();

  const handleFetchTransaction = async () => {
    setLoaderTransactionData(true)
    try {
      const res = await fetchTransactions()
      // console.log(res)
      setTransactionData(res)
      setLoaderTransactionData(false)

    } catch (error) {
      setLoaderTransactionData(false)
      console.log(error)
    }
  }
  const handleDeleteTransaction = async (id) => {
    setLoaderTransactionData(true)
    try {
      const res = await deleteTransaction(id)
      setLoaderTransactionData(false)
      alert("Hapus transaksi berhasil")
      handleFetchTransaction()


    } catch (error) {
      setLoaderTransactionData(false)
      console.log(error)
    }
  }
  

  useEffect(() => {
    handleFetchTransaction()
  }, [])

  return (
    <>
      <div className="bg-blue_gray-50 flex flex-col font-inter items-center justify-start mx-auto pb-[23px] w-full">
        <div className="flex md:flex-col flex-row md:gap-5 items-start justify-evenly w-full">
          <Sidebar1 className="!sticky !w-[280px] flex h-screen md:hidden justify-start overflow-auto md:px-5 top-[0]" />
          <div className="flex flex-1 flex-col gap-[22px] items-center justify-start md:px-5 w-full">
            <div className="bg-white-A700 border border-gray-200 border-solid flex flex-col items-center justify-start py-7 w-full">
              <div className="flex sm:flex-col flex-row md:gap-10 items-center justify-between max-w-[1160px] sm:px-5 px-8 w-full">
                {/* <Input
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
                ></Input> */}
                <div className="flex flex-row gap-[21px] items-start justify-start w-auto">
                  {/* <div className="flex flex-col items-start justify-start p-2 w-10">
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
                  </div> */}
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-[22px] items-center justify-start w-[95%] md:w-full">
             
              <div className="bg-white-A700 flex flex-col items-center justify-end py-[13px] rounded-lg w-full">
                <div className="flex flex-col gap-[15px] items-center justify-start mt-2.5 w-full">
                  <div className="flex flex-col gap-6 items-center justify-start w-[98%] md:w-full">
                    <div className="flex flex-row md:gap-10 items-start justify-between w-full">
                      <Text
                        className="text-blue_gray-800 text-xl"
                        size="txtInterMedium20"
                      >
                        List Transaksi
                      </Text>
                      <Button
                      className="cursor-pointer font-medium min-w-[116px] sm:ml-[0] ml-[614px] text-center text-sm bg-pink-600 text-white-A700"
                      shape="round"
                      variant="fill"
                      onClick={() => {
                        // Navigate to the addSupplier page
                        window.location.href = "AddTransaction";
                      }}
                    >
                      Add Transaction
                    </Button>
                    </div>
                    <div class="relative overflow-x-auto w-[98%]">
                      <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                          <tr>
                            <th scope="col" class="px-6 py-3">
                              Product Name
                            </th>
                            <th scope="col" class="px-6 py-3">
                              Supplier Name
                            </th>
                            <th scope="col" class="px-6 py-3">
                              Customer Name
                            </th>
                            <th scope="col" class="px-6 py-3">
                              QTY
                            </th>
                            <th scope="col" class="px-6 py-3">
                              Aksi
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {
                            loaderTransactionData ? <span>Loading ...</span> :
                              transactionData?.map((data) => (
                                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={data.id}>
                                  <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    {data.Inventory?.product_name ?? "-"}
                                  </th>
                                  <td class="px-6 py-4">
                                    {data.Supplier?.supplier_name ?? "-"}
                                  </td>
                                  <td class="px-6 py-4">
                                    {data.Customer?.customer_name ?? "-"}
                                  </td>
                                  <td class="px-6 py-4">
                                    {data.qty}
                                  </td>

                                  <td class="px-6 py-4">
                                    {/* <Button
                                      className="cursor-pointer font-medium min-w-[116px] ml-auto text-center text-sm bg-pink-600 text-white-A700 mr-3"
                                      shape="round"
                                      variant="fill"
                                      onClick={() => {
                           
                                        handleUpdateAdmin(data.id)
                                      }}
                                    >Update
                                    </Button> */}
                                  
                                    <Button
                                      className="cursor-pointer font-medium min-w-[116px] ml-auto text-center text-sm bg-pink-600 text-white-A700"
                                      shape="round"
                                      variant="fill"
                                      onClick={() => {
                                        handleDeleteTransaction(data.id)
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

export default TransaksiPage;
