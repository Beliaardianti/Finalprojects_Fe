import React, { useEffect, useState } from "react";

import { Menu, MenuItem } from "react-pro-sidebar";

import { Button, Img, Input, Line, List, Text } from "components";
import Sidebar1 from "components/Sidebar1";

import { CloseSVG } from "../../assets/images";
import { fetchCategories } from "api/repository/CategoryRepository";
import { useNavigate } from "react-router-dom";
import { addInventory } from "api/repository/InventoryRepository";

const AddProduct = () => {

  const navigate = useNavigate()
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

  const [productName, setProductName] = useState("");
  const [idCategory, setIdCategory] = useState("");
  const [stock, setStock] = useState(0);
  const [categoryData, setCategoryData] = useState([])
  const [loaderCategory,setLoaderCategory] = useState(false)
  const [loader, setLoader] = useState(false);

  const handleFetchCategory = async() =>{
    setLoaderCategory(true)
    try {
        const res = await fetchCategories()
        // console.log(res)
        setCategoryData(res)
        setLoaderCategory(false)
    } catch (error) {
        setLoaderCategory(false)
        console.log(error)
    }
}

const handleSubmit = async() =>{
  setLoader(true)
  try {
    const res = await addInventory({
      id_category: idCategory,
      product_name: productName,
      stock: stock,
    })
    alert("Tambah inventory sukses")
    setLoader(false)
    navigate(-1)
  } catch (error) {
    alert("Tambah inventory gagal")
    setLoader(false)
    console.log(error.message)
  }
}

useEffect(() => {
  handleFetchCategory()
  // handleFetchProduct()
}, [])

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

            {/* Bagian Form */}
            <Text
              className="mb-0.5 sm:mt-0 mt-3 text-gray-800 text-xl"
              size="txtInterMedium20Gray800"
            >
              Tambahkan Product
            </Text>

            <div className="flex flex-col gap-[22px] items-center justify-start w-[95%] md:w-full">
              <div className="flex md:flex-col flex-row gap-[21px] items-center justify-between w-full">
                <div className="bg-white-A700 flex md:flex-1 flex-col items-center justify-start p-4 rounded-[10px] w-[63%] md:w-full">
                  <div className="flex flex-col items-center justify-start my-0.5 w-full">
                    <div className="flex flex-row sm:gap-10 items-start justify-between w-full">
                      <div className="bg-white-A700 flex flex-col items-center justify-start py-3 rounded-lg w-[95%] md:w-full">
                        <div className="flex flex-col items-center justify-start mt-1 w-full">
                          <div className="flex flex-col items-center justify-start pb-[38px] w-[98%] md:w-full">
                            <form>
                              {/* Produck Name */}
                              <div className="flex gap-3 items-center justify-start w-full">
                                <Text
                                  className="text-blue_gray-800 text-base"
                                  size="txtInterRegular14"
                                >
                                  Product Name:
                                </Text>
                                <Input type="text" name="product_name" onChange={(e)=>{
                                  setProductName(e)
                                }}/>
                              </div>

                              {/* Category */}
                              <div className="flex gap-3 items-center justify-start w-full ">
                                <Text
                                  className="text-blue_gray-800 text-base"
                                  size="txtInterRegular14"
                                >
                                  Category:
                                </Text>

                                {
                loaderCategory ? <span>Loading ...</span> :
                <select name='id_category' className="w-full px-3 py-2 border rounded" onChange={(e)=>setIdCategory(e.target.value)}>
                   <option>Pilih kategori</option>
                  {
                    categoryData.map((data,index)=>{
                      return(
                        <option value={data.id}>{data.category_product}</option>
                      )
                    }) 
                     
                  }
                  
                </select>
              }
                              </div>

                              {/* Stock */}
                              <div className="flex gap-3 items-center justify-start w-full">
                                <Text
                                  className="text-blue_gray-800 text-base"
                                  size="txtInterRegular14"
                                >
                                  Stock :
                                </Text>
                                <Input type="number" name="stock" onChange={(e)=>{
                                  setStock(e)
                                }}/>
                              </div>

                              {/* Buttons */}
                              <div className="flex gap-4 items-center justify-start mt-4">
                              {
                                loader ? <span>Harap tunggu ...</span> :
                                <Button
                                  className="min-w-[92px] text-center text-sm bg-blue-500 text-white-A700"
                                  shape="round"
                                  type="button"
                                  onClick={()=>handleSubmit()}
                                >
                                  Add Product
                                </Button>
                              }
                                
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
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

export default AddProduct;
