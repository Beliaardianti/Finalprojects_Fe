import { useLocation, useNavigate, useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { fetchInventoryById, updateInventory } from "api/repository/InventoryRepository";
import { fetchCategories } from "api/repository/CategoryRepository";
// import { Menu, MenuItem } from "react-pro-sidebar";

import { Button, Img, Input, Line, List, Text } from "components";
import Sidebar1 from "components/Sidebar1";

import { CloseSVG } from "../../assets/images";

const UpdateProduct = () => {
    const navigate = useNavigate();
    // Get Params
    const { state } = useLocation();
    const { id } = state;

    const [categoryData, setCategoryData] = useState([])
    const [loaderCategory,setLoaderCategory] = useState(false)
    const [ProductData, setProductData] = useState({});

    const [productName, setProductName] = useState("");
    const [category, setCategory] = useState("");
    const [stock, setStock] = useState("");


    const [loader, setLoader] = useState(false);
    useEffect(() => {
        const fetchProductDetails = async () => {
            try {
                const ProductDetails = await fetchInventoryById(id);
                setProductData(ProductDetails);

                setProductName(ProductDetails.product_name)
                setCategory(ProductDetails.id_category)
                setStock(ProductDetails.stock)

            } catch (error) {
                console.error(error);
            }
        };

        fetchProductDetails();
        handleFetchCategory()
    }, [id]);

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

    const handleUpdateProduct = async () => {

        setLoader(true)
        try {
            const res = await updateInventory(id, {
                "product_name": productName,
                "category": category,
                "stock": stock
            })
            setLoader(false)
            alert("Update Product berhasil")
            navigate(-1)

        } catch (error) {
            alert(error.message)
            console.log(error.message)
            setLoader(false)
        }
    };

    return (
        <div className="bg-white flex flex-col font-inter items-center justify-start mx-auto pb-[29px] w-full">
            <div className="flex md:flex-col flex-row md:gap-5 items-start justify-evenly w-full">
                <Sidebar1 className="!sticky !w-[280px] flex h-screen md:hidden justify-start overflow-auto md:px-5 top-[0]" />
                <div className="flex flex-1 flex-col gap-[22px] items-center justify-start md:px-5 w-full">
                    <div className="bg-white-A700 border border-gray-200 border-solid flex flex-col items-center justify-start py-7 w-full">
                        <div className="flex sm:flex-col flex-row md:gap-10 items-center justify-between max-w-[1160px] sm:px-5 px-8 w-full">
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

                    {/* Bagian Form */}
                    <Text
                        className="mb-0.5 sm:mt-0 mt-3 text-gray-800 text-xl"
                        size="txtInterMedium20Gray800"
                    >
                        Update Product
                    </Text>

                    <div className="flex flex-col gap-[22px] items-center justify-start w-[95%] md:w-full">
                        <div className="flex md:flex-col flex-row gap-[21px] items-center justify-between w-full">
                            <div className="bg-white-A700 flex md:flex-1 flex-col items-center justify-start p-4 rounded-[10px] w-[63%] md:w-full">
                                <div className="flex flex-col items-center justify-start my-0.5 w-full">
                                    <div className="flex flex-row sm:gap-10 items-start justify-between w-full">
                                        <div className="bg-white-A700 flex flex-col items-center justify-start py-3 rounded-lg w-[95%] md:w-full">
                                            <div className="flex flex-col items-center justify-start mt-1 w-full">
                                                <div className="flex flex-col items-center justify-start pb-[38px] w-[98%] md:w-full">
                                                    {ProductData && (
                                                        <form>
                                                            {/*  Name */}
                                                            <div className="flex gap-3 items-center justify-start w-full ">
                                                                <Text
                                                                    className="text-blue_gray-800 text-base"
                                                                    size="txtInterRegular14"
                                                                >
                                                                    Product Name:
                                                                </Text>
                                                                <Input
                                                                    defaultValue={ProductData.product_name}
                                                                    onChange={(e) => {
                                                                        setProductName(e)
                                                                    }} />

                                                            </div>

                                                            {/* Category Product */}
                                                            <div className="flex gap-3 items-center justify-start w-full ">
                                                                <Text
                                                                    className="text-blue_gray-800 text-base"
                                                                    size="txtInterRegular14"
                                                                >
                                                                    Category:
                                                                </Text>

                                                                {
                                                                    loaderCategory ? <span>Loading ...</span> :
                                                                        <select name='id_category' className="w-full px-3 py-2 border rounded" onChange={(e) => setCategory(e.target.value)}>
                                                                            <option>Pilih kategori</option>
                                                                            {
                                                                                categoryData.map((data, index) => {
                                                                                    return (
                                                                                        <option value={data.id} selected={ProductData.id_category == data.id}>{data.category_product}</option>
                                                                                    )
                                                                                })

                                                                            }

                                                                        </select>
                                                                }
                                                            </div>

                                                         

                                                            {/* Stok */}
                                                            <div className="flex gap-3 items-center justify-start w-full">
                                                                <Text
                                                                    className="text-blue_gray-800 text-base"
                                                                    size="txtInterRegular14"
                                                                >
                                                                    Stok :
                                                                </Text>
                                                                <Input
                                                                    defaultValue={ProductData.stock}
                                                                    onChange={(e) => {
                                                                        setStock(e);
                                                                    }}
                                                                />
                                                            </div>

                                                            {/* Buttons */}
                                                            <div className="flex gap-4 items-center justify-start mt-4">
                                                                {
                                                                    loader ? <span>Harap tunggu ....</span> :
                                                                        <Button
                                                                            className="min-w-[92px] text-center text-sm bg-blue-500 text-white-A700"
                                                                            shape="round"
                                                                            type="button"
                                                                            onClick={() => handleUpdateProduct()}
                                                                        >
                                                                            Update Product
                                                                        </Button>
                                                                }

                                                            </div>
                                                        </form>
                                                    )}
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
    );
};

export default UpdateProduct;
