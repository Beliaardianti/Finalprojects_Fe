import React from "react";
import { default as ModalProvider } from "react-modal";

import { Button, Input, Text } from "components";

const InventoryOneModal = (props) => {
  return (
    <ModalProvider
      appElement={document.getElementById("root")}
      className="m-auto !w-[35%]"
      overlayClassName="bg-blue_gray-100_75 fixed flex h-full inset-y-[0] w-full"
      {...props}
    >
      <div className="max-h-[97vh] overflow-y-auto sm:w-full md:w-full">
        <div className="bg-white-A700 flex flex-col items-center justify-end mt-[86px] p-7 md:px-5 rounded-lg w-full">
          <div className="flex flex-col items-start justify-start w-[99%] md:w-full">
            <Text
              className="text-blue_gray-800 text-xl"
              size="txtInterMedium20"
            >
              New Product
            </Text>
            <div className="flex flex-col items-center justify-start md:ml-[0] ml-[113px] mt-3.5 w-[49%] md:w-full">
              <div className="flex flex-row gap-5 items-end justify-between w-full">
                <div className="bg-white-A700 h-[81px] outline-[1px] outline-dashed outline-gray-500 rounded-[10px] w-[81px]"></div>
                <div className="flex flex-col items-center justify-start mb-1 mt-4">
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
            </div>
            <div className="flex sm:flex-col flex-row gap-[55px] items-center justify-start mt-8 w-auto sm:w-full">
              <Text
                className="text-base text-blue_gray-700 w-auto"
                size="txtInterMedium16"
              >
                Product Name
              </Text>
              <Input
                name="input"
                placeholder="Enter product name"
                className="p-0 placeholder:text-blue_gray-400 text-base text-left w-full"
                wrapClassName="border border-blue_gray-100 border-solid w-[63%] sm:w-full"
                type="text"
                shape="round"
                color="white_A700"
                size="md"
                variant="fill"
              ></Input>
            </div>
            <div className="flex sm:flex-col flex-row sm:gap-10 gap-[84px] items-center justify-start mt-6 w-auto sm:w-full">
              <Text
                className="text-base text-blue_gray-700 w-auto"
                size="txtInterMedium16"
              >
                Product ID
              </Text>
              <div className="bg-white-A700 border border-blue_gray-100 border-solid flex flex-col items-center justify-start px-3.5 py-2.5 rounded-lg shadow-bs w-[273px] sm:w-full">
                <Input
                  name="content"
                  placeholder="Enter product ID"
                  className="p-0 placeholder:text-blue_gray-400 text-base text-blue_gray-400 text-left w-full"
                  wrapClassName="w-full"
                  size="xs"
                ></Input>
              </div>
            </div>
            <div className="flex flex-row gap-[94px] items-center justify-start md:ml-[0] ml-[22px] mt-6 w-auto sm:w-full">
              <Text
                className="text-base text-blue_gray-700 w-auto"
                size="txtInterMedium16"
              >
                price
              </Text>
              <Input
                name="input_One"
                placeholder="Select product price"
                className="p-0 placeholder:text-blue_gray-400 text-base text-left w-full"
                wrapClassName="border border-blue_gray-100 border-solid w-[68%]"
                shape="round"
                color="white_A700"
                size="md"
                variant="fill"
              ></Input>
            </div>
            <div className="flex sm:flex-col flex-row sm:gap-10 gap-[69px] items-center justify-start md:ml-[0] ml-[11px] mt-6 w-auto sm:w-full">
              <Text
                className="text-base text-blue_gray-700 w-auto"
                size="txtInterMedium16"
              >
                Category{" "}
              </Text>
              <div className="bg-white-A700 border border-blue_gray-100 border-solid flex flex-col items-center justify-start px-3.5 py-2.5 rounded-lg shadow-bs w-[273px] sm:w-full">
                <Input
                  name="content_One"
                  placeholder="Enter buying category"
                  className="p-0 placeholder:text-blue_gray-400 text-base text-blue_gray-400 text-left w-full"
                  wrapClassName="w-full"
                  size="xs"
                ></Input>
              </div>
            </div>
            <div className="flex sm:flex-col flex-row sm:gap-10 gap-[99px] items-center justify-start mt-6 w-auto sm:w-full">
              <Text
                className="text-base text-blue_gray-700 w-auto"
                size="txtInterMedium16"
              >
                Quantity
              </Text>
              <div className="bg-white-A700 border border-blue_gray-100 border-solid flex flex-col items-center justify-start px-3.5 py-2.5 rounded-lg shadow-bs w-[273px] sm:w-full">
                <Input
                  name="content_Two"
                  placeholder="Enter product quantity"
                  className="p-0 placeholder:text-blue_gray-400 text-base text-blue_gray-400 text-left w-full"
                  wrapClassName="w-full"
                  size="xs"
                ></Input>
              </div>
            </div>
            <div className="flex flex-row gap-[133px] items-center justify-between mt-6 w-auto sm:w-full">
              <Text
                className="text-base text-blue_gray-700 w-auto"
                size="txtInterMedium16"
              >
                Unit
              </Text>
              <div className="bg-white-A700 border border-blue_gray-100 border-solid flex flex-col items-center justify-start px-3.5 py-2.5 rounded-lg shadow-bs w-[273px] sm:w-full">
                <Input
                  name="content_Three"
                  placeholder="Enter product unit"
                  className="p-0 placeholder:text-blue_gray-400 text-base text-blue_gray-400 text-left w-full"
                  wrapClassName="w-full"
                  size="xs"
                ></Input>
              </div>
            </div>
            <div className="flex flex-row gap-3 items-center justify-end md:ml-[0] ml-[200px] mt-[168px] w-[55%] md:w-full">
              <Button
                className="cursor-pointer font-medium leading-[normal] text-base text-center w-[110px]"
                shape="round"
                color="blue_gray_50"
                variant="outline"
              >
                Discard
              </Button>
              <Button
                className="cursor-pointer font-medium min-w-[116px] text-center text-sm"
                shape="round"
                color="blue_700"
                variant="fill"
              >
                Add Product
              </Button>
            </div>
          </div>
        </div>
      </div>
    </ModalProvider>
  );
};

export default InventoryOneModal;
