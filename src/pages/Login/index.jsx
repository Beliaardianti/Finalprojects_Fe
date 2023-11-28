import React, { useState } from "react";
import { Button, CheckBox, Img, Input, Text } from "components";
import DashboardPage from "pages/Dashboard";
import { useNavigate } from "react-router-dom";


const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [error, setError] = useState("");
  const navigate =useNavigate();

  const handleLogin = () => {
    // Validasi username dan password (contoh sederhana)
    if (username === "user" && password === "password") {
      setIsLoggedIn(true);
      setError("");
      navigate("/dashboard"); // Navigasi ke Dashboard setelah login berhasil
    } else {
      setError("Invalid username or password");
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername("");
    setPassword("");
  };

  if (isLoggedIn) {
    return (
     <DashboardPage />
    );
  }

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
        <div className="flex flex-col gap-8 items-center justify-start mr-[50px] w-[35%] md:w-full">
          <div className="flex flex-col gap-6 items-center justify-start w-[360px]">
            <div className="flex flex-col gap-3 items-start justify-start w-full">
              <Text
                className="text-3xl sm:text-[26px] md:text-[28px] text-blue_gray-900 text-center w-full"
                size="txtInterSemiBold30"
              >
                Log in to your account
              </Text>
              <Text
                className="text-base text-blue_gray-800 text-center w-full"
                size="txtInterRegular16"
              >
                Welcome back! Please enter your details.
              </Text>
            </div>
          </div>
          <div className="flex flex-col gap-6 items-center justify-start w-[360px]">
            <div className="flex flex-col gap-5 items-start justify-start w-full">
              <div className="flex flex-col items-start justify-start w-full">
                <div className="flex flex-col items-start justify-start w-full">
                  <div className="flex flex-col gap-1.5 items-start justify-start w-full">
                    <Text
                      className="text-blue_gray-700 text-sm w-auto"
                      size="txtInterMedium14"
                    >
                      Email
                    </Text>
                    <Input
                      name="input"
                      placeholder="Enter your email"
                      className="!placeholder:text-blue_gray-800_01 !text-blue_gray-800_01 p-0 text-base text-left w-full"
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
                <div className="flex flex-col items-start justify-start w-full">
                  <div className="flex flex-col gap-1.5 items-start justify-start w-full">
                    <Text
                      className="text-blue_gray-700 text-sm w-auto"
                      size="txtInterMedium14"
                    >
                      Password
                    </Text>
                    <Input
                      name="input_One"
                      placeholder="••••••••"
                      type = "password"
                      className="!placeholder:text-blue_gray-500_01 !text-blue_gray-500_01 p-0 text-base text-left w-full"
                      wrapClassName="border border-blue_gray-100 border-solid w-full"
                      shape="round"
                      color="white_A700"
                      size="md"
                      variant="fill"
                    ></Input>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row items-center justify-between w-full">
              <CheckBox
                className="font-medium text-left text-sm"
                inputClassName="border border-blue_gray-100 border-solid h-4 mr-[5px] w-4"
                name="text_One"
                id="text_One"
                label="Remember for 30 days"
                color="white_A700"
                variant="fill" 
              ></CheckBox>
              <div className="flex flex-col items-start justify-start">
                <div className="flex flex-col items-center justify-center w-auto">
                  <a
                    href="javascript:"
                    className="text-pink-700 text-sm w-auto"
                  >
                    <Text size="txtInterMedium14Blue700">Forgot password</Text>
                  </a>  
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-start pb-[60px] w-full">
              <div className="flex flex-col items-start justify-start w-[360px]">
                <Button
                  className="border border-pink-700 border-solid cursor-pointer font-medium shadow-bs text-base text-center w-full"
                  shape="round"
                  color="pink-700"
                  variant="fill"
                  onClick={handleLogin}
                >
                  Sign in
                </Button>
              </div>
            </div>
          </div>
          <div className="flex flex-row gap-1 items-start justify-center w-[360px]">
            <a
              href="javascript:"
              className="text-blue_gray-700_01 text-sm w-auto"
            >
              <Text size="txtInterRegular14">Don’t have an account?</Text>
            </a>
            <div className="flex flex-col items-start justify-start w-auto">
              <div className="flex flex-col items-center justify-center w-auto">
                <a href="javascript:" className="text-pink-700 text-sm w-auto">
                  <Text size="txtInterMedium14Blue700">Sign up</Text>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;