import React from "react";
import { default as ModalProvider } from "react-modal";

import { Button, Img, Input, Text } from "components";

const AddSupplierModal = (props) => {
  return (
    <ModalProvider
      appElement={document.getElementById("root")}
      className="m-auto !w-[35%]"
      overlayClassName="bg-blue_gray-100_75 fixed flex h-full inset-y-[0] w-full"
      {...props}
    >
      <div className="max-h-[97vh] overflow-y-auto sm:w-full md:w-full">
        <div className="bg-white-A700 flex flex-col items-center justify-end mt-1 p-[22px] md:px-5 rounded-lg w-full">
          <div className="flex flex-col items-start justify-start mt-2 w-[97%] md:w-full">
            <Text
              className="text-blue_gray-800 text-xl"
              size="txtInterMedium20"
            >
              New Supplier
            </Text>
            <div className="flex flex-row gap-5 items-center justify-start md:ml-[0] ml-[114px] mt-[13px] w-auto">
              <Img
                className="h-[81px] w-[81px]"
                src="images/img_lock.svg"
                alt="lock"
              />
              <div className="flex flex-col items-center justify-start">
                <Text
                  className="text-blue_gray-400 text-sm"
                  size="txtInterRegular14Bluegray400"
                >
                  Drag image here
                </Text>
                <Text
                  className="mt-[3px] text-blue_gray-400 text-sm"
                  size="txtInterRegular14Bluegray400"
                >
                  or
                </Text>
                <Text
                  className="mt-[5px] text-blue-A200 text-sm"
                  size="txtInterRegular14BlueA200"
                >
                  Browse image
                </Text>
              </div>
            </div>
            <div className="flex sm:flex-col flex-row gap-[55px] items-center justify-start mt-8 w-auto sm:w-full">
              <Text
                className="text-base text-blue_gray-700 w-auto"
                size="txtInterMedium16"
              >
                Supplier Name
              </Text>
              <Input
                name="input"
                placeholder="Entersupplier name"
                className="p-0 placeholder:text-blue_gray-400 text-base text-left w-full"
                wrapClassName="border border-blue_gray-100 border-solid w-[63%] sm:w-full"
                type="text"
                shape="round"
                color="white_A700"
                size="md"
                variant="fill"
              ></Input>
            </div>
            <div className="flex flex-row items-center justify-between mt-6 w-[440px] sm:w-full">
              <Text
                className="text-base text-blue_gray-700 w-auto"
                size="txtInterMedium16"
              >
                Product
              </Text>
              <div className="bg-white-A700 border border-blue_gray-100 border-solid flex flex-col items-center justify-start px-3.5 py-2.5 rounded-lg shadow-bs w-[273px] sm:w-full">
                <Input
                  name="content"
                  placeholder="Enter product"
                  className="p-0 placeholder:text-blue_gray-400 text-base text-blue_gray-400 text-left w-full"
                  wrapClassName="w-full"
                  size="xs"
                ></Input>
              </div>
            </div>
            <div className="flex sm:flex-col flex-row sm:gap-10 gap-[94px] items-center justify-start mt-6 w-auto sm:w-full">
              <Text
                className="text-base text-blue_gray-700 w-auto"
                size="txtInterMedium16"
              >
                Category
              </Text>
              <Input
                name="input_One"
                placeholder="Select product category"
                className="p-0 placeholder:text-blue_gray-400 text-base text-left w-full"
                wrapClassName="border border-blue_gray-100 border-solid w-[63%] sm:w-full"
                shape="round"
                color="white_A700"
                size="md"
                variant="fill"
              ></Input>
            </div>
            <div className="flex flex-row gap-[69px] items-center justify-start ml-9 md:ml-[0] mt-6 w-auto sm:w-full">
              <Text
                className="text-base text-blue_gray-700 w-auto"
                size="txtInterMedium16"
              >
                {" "}
                Price
              </Text>
              <div className="bg-white-A700 border border-blue_gray-100 border-solid flex flex-col items-center justify-start px-3.5 py-2.5 rounded-lg shadow-bs w-[273px] sm:w-full">
                <Input
                  name="content_One"
                  placeholder="Enter buying price"
                  className="p-0 placeholder:text-blue_gray-400 text-base text-blue_gray-400 text-left w-full"
                  wrapClassName="w-full"
                  size="xs"
                ></Input>
              </div>
            </div>
            <div className="flex flex-row items-center justify-between mt-[34px] w-[438px] sm:w-full">
              <Text
                className="text-base text-blue_gray-700 w-auto"
                size="txtInterMedium16"
              >
                Email
              </Text>
              <Input
                name="input_Two"
                placeholder="Enter supplier contact email"
                className="p-0 placeholder:text-blue_gray-400 text-base text-left w-full"
                wrapClassName="border border-blue_gray-100 border-solid"
                type="email"
                shape="round"
                color="white_A700"
                size="md"
                variant="fill"
              ></Input>
            </div>
            <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between mt-[22px] w-[438px] sm:w-full">
              <Text
                className="text-base text-blue_gray-700 w-auto"
                size="txtInterMedium16"
              >
                Contact Number
              </Text>
              <div className="bg-white-A700 border border-blue_gray-100 border-solid flex flex-col items-center justify-start px-3.5 py-2.5 rounded-lg shadow-bs w-[273px] sm:w-full">
                <Input
                  name="content_Two"
                  placeholder="Enter supplier contact number"
                  className="p-0 placeholder:text-blue_gray-400 text-base text-blue_gray-400 text-left w-full"
                  wrapClassName="w-full"
                  type="number"
                  size="xs"
                ></Input>
              </div>
            </div>
            <div className="flex flex-row gap-3 items-center justify-end md:ml-[0] ml-[201px] mt-[84px] w-[55%] md:w-full">
              <Button
                className="cursor-pointer font-medium leading-[normal] text-base text-center w-[110px]"
                shape="round"
                color="blue_gray_50"
                variant="outline"
              >
                Discard
              </Button>
              <Button
                className="cursor-pointer font-medium min-w-[119px] text-center text-sm"
                shape="round"
                color="blue_700"
                variant="fill"
              >
                Add Supplier
              </Button>
            </div>
          </div>
        </div>
      </div>
    </ModalProvider>
  );
};

export default AddSupplierModal;
