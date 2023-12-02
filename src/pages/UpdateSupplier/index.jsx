import { useLocation, useNavigate, useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { fetchSupplierById, updateSupplier } from "api/repository/SupplierRepository";

// import { Menu, MenuItem } from "react-pro-sidebar";

import { Button, Img, Input, Line, List, Text } from "components";
import Sidebar1 from "components/Sidebar1";

import { CloseSVG } from "../../assets/images";

const UpdateSupplier = () => {
  const navigate = useNavigate();
  // Get Params
  const { state } = useLocation();
  const { id } = state;

  const [SupplierData, setSupplierData] = useState({});

  const [supplierName, setSupplierName] = useState("");
  const [email, setEmail] = useState("");
  const [noHandphone, setNoHandphone] = useState("");
  const [address, setAddress] = useState("");


  const [loader, setLoader] = useState(false);
  useEffect(() => {
    const fetchSupplierDetails = async () => {
      try {
        const SupplierDetails = await fetchSupplierById(id);
        setSupplierData(SupplierDetails);

        setSupplierName(SupplierDetails.Supplier_name)
        setEmail(SupplierDetails.email)
        setNoHandphone(SupplierDetails.no_handphone)
        setAddress(SupplierDetails.address)

      } catch (error) {
        console.error(error);
      }
    };

    fetchSupplierDetails();
  }, [id]);

  const handleUpdateSupplier = async () => {

    setLoader(true)
    try {
      const res = await updateSupplier(id, {
        "supplier_name": supplierName,
        "email": email,
        "no_handphone": noHandphone,
        "address" : address,
      })
      setLoader(false)
      alert("Update Supplier berhasil")
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
            Update Supplier
          </Text>

          <div className="flex flex-col gap-[22px] items-center justify-start w-[95%] md:w-full">
            <div className="flex md:flex-col flex-row gap-[21px] items-center justify-between w-full">
              <div className="bg-white-A700 flex md:flex-1 flex-col items-center justify-start p-4 rounded-[10px] w-[63%] md:w-full">
                <div className="flex flex-col items-center justify-start my-0.5 w-full">
                  <div className="flex flex-row sm:gap-10 items-start justify-between w-full">
                    <div className="bg-white-A700 flex flex-col items-center justify-start py-3 rounded-lg w-[95%] md:w-full">
                      <div className="flex flex-col items-center justify-start mt-1 w-full">
                        <div className="flex flex-col items-center justify-start pb-[38px] w-[98%] md:w-full">
                          {SupplierData && (
                            <form>
                              {/*  Name */}
                              <div className="flex gap-3 items-center justify-start w-full ">
                                <Text
                                  className="text-blue_gray-800 text-base"
                                  size="txtInterRegular14"
                                >
                                  Supplier Name:
                                </Text>
                                <Input
                                  defaultValue={SupplierData.supplier_name}
                                  onChange={(e) => {
                                    setSupplierName(e)
                                  }} />

                              </div>

                              {/* Email */}
                              <div className="flex gap-3 items-center justify-start w-full">
                                <Text
                                  className="text-blue_gray-800 text-base"
                                  size="txtInterRegular14"
                                >
                                  Email :
                                </Text>
                                <Input
                                  defaultValue={SupplierData.email}

                                  onChange={(e) => {
                                    setEmail(e);
                                    // console.log(e.target.value);
                                  }}
                                />
                              </div>

                              {/* No Handphone */}
                              <div className="flex gap-3 items-center justify-start w-full">
                                <Text
                                  className="text-blue_gray-800 text-base"
                                  size="txtInterRegular14"
                                >
                                  No Handphone :
                                </Text>
                                <Input
                                  defaultValue={SupplierData.no_handphone}

                                  onChange={(e) => {
                                    setNoHandphone(e);
                                    // console.log(e.target.value);
                                  }}
                                />
                              </div>

                              {/* No Handphone */}
                              <div className="flex gap-3 items-center justify-start w-full">
                                <Text
                                  className="text-blue_gray-800 text-base"
                                  size="txtInterRegular14"
                                >
                                  Adresss :
                                </Text>
                                <Input
                                  defaultValue={SupplierData.address}

                                  onChange={(e) => {
                                    setAddress(e);
                                    // console.log(e.target.value);
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
                                      onClick={() => handleUpdateSupplier()}
                                    >
                                      Update Supplier
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

export default UpdateSupplier;
