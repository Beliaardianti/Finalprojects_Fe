import React from "react";
import { useHistory } from "react-router-dom"; 
import { Button, Img, Input, Text } from "components";

const SignUpPage = () => {
  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-pink-300">
        <div className="flex flex-col items-center justify-start gap-5 md:ml-[20px]">
          <Img
            className="h-[360px] w-[360px] rounded-full"
            src="images/logo_lady.jpg"
            alt="group1122"
          />
        </div>
        <div className="flex flex-col gap-8 items-center justify-start mr-[75px] w-[33%] md:w-full">
          <div className="flex flex-col gap-6 items-center justify-start w-[360px]">
            <div className="flex flex-col gap-3 items-start justify-start w-full">
              <Text
                className="text-3xl sm:text-[26px] md:text-[28px] text-center text-gray-900 w-full"
                size="txtInterSemiBold30Gray900"
              >
                Create an account
              </Text>
              
            </div>
          </div>
          <div className="flex flex-col gap-[23px] items-center justify-start w-[360px]">
            <div className="flex flex-col gap-5 items-start justify-start w-full">
              <div className="flex flex-col items-start justify-start w-full">
                <div className="flex flex-col items-start justify-start w-full">
                  <div className="flex flex-col gap-1.5 items-start justify-start w-full">
                    <Text
                      className="text-blue_gray-700 text-sm w-auto"
                      size="txtInterMedium14"
                    >
                      Email*
                    </Text>
                    <Input
                      name="input_One"
                      placeholder="Enter your Email"
                      className="!placeholder:text-blue_gray-500_01 !text-blue_gray-500_01 p-0 text-base text-left w-full"
                      wrapClassName="border border-blue_gray-100 border-solid w-full"
                      type="text"
                      shape="round"
                      color="white_A700"
                      size="md"
                      variant="fill"
                    ></Input>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start w-full">
                <div className="flex flex-col items-start justify-start w-full">
                  <div className="flex flex-col gap-1.5 items-start justify-start w-full">
                    <Text
                      className="text-blue_gray-700 text-sm w-auto"
                      size="txtInterMedium14"
                    >
                      Name*
                    </Text>
                    <Input
                      name="input"
                      placeholder="Enter your name"
                      className="!placeholder:text-blue_gray-500_01 !text-blue_gray-500_01 p-0 text-base text-left w-full"
                      wrapClassName="border border-blue_gray-100 border-solid w-full"
                      type="email"
                      shape="round"
                      color="white_A700"
                      size="md"
                      variant="fill"
                    ></Input>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start w-full">
                <div className="flex flex-col gap-1.5 items-start justify-start w-full">
                  <div className="flex flex-col gap-1.5 items-start justify-start w-full">
                    <Text
                      className="text-blue_gray-700 text-sm w-auto"
                      size="txtInterMedium14"
                    >
                      Password*
                    </Text>
                    <Input
                      name="input_Two"
                      placeholder="Create a password"
                      className="!placeholder:text-blue_gray-500_01 !text-blue_gray-500_01 p-0 text-base text-left w-full"
                      wrapClassName="border border-blue_gray-100 border-solid w-full"
                      type="password"
                      shape="round"
                      color="white_A700"
                      size="md"
                      variant="fill"
                    ></Input>
                  </div>
                  <Text
                    className="text-blue_gray-500_01 text-sm w-full"
                    size="txtInterRegular14"
                  >
                    Must be at least 8 characters.
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-start pb-[60px] w-full">
              <div className="flex flex-col items-start justify-start w-[360px]">
                <Button
                  className="border border-pink-700 border-solid cursor-pointer font-medium shadow-bs text-base text-center w-full"
                  shape="round"
                  color="white_700"
                  variant="fill"
                >
                  Get started
                </Button>
              </div>
            </div>
          </div>
          <div className="flex flex-row gap-1 items-start justify-center w-[360px]">
            <a
              href="javascript:"
              className="text-blue_gray-500_01 text-sm w-auto"
            >
              <Text size="txtInterRegular14">Already have an account?</Text>
            </a>
            <div className="flex flex-col items-start justify-start w-auto">
              <div className="flex flex-col items-center justify-center w-auto">
                <a href="javascript:" className="text-pink-700 text-sm w-auto">
                  <Text size="txtInterMedium14Blue900">Log in</Text>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUpPage;
