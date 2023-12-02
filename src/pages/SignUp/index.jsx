<<<<<<< HEAD
import React, { useState } from "react";
import { useHistory, useNavigate } from "react-router-dom"; 
import { Button, Img, Input, Text } from "components";
import { registerAdmin } from "api/repository/AuthRepository";

const SignUpPage = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const [loader, setLoader] = useState(false)

  const handleRegister = async(e) =>{
    e.preventDefault()
    setLoader(true)
    try {
      if (email != "" && password != "" && name != "") {
        const res = await registerAdmin({
          "name":name,
          "email":email,
          "password":password
        })
        alert("Register success")
        navigate("/")
        setLoader(false)
      }else{
        alert("Nama,Email,password wajib diisi")
      }
      
    } catch (error) {
      alert(error.message)
      console.log(error.message)
      setLoader(false)
    }
  }


=======
import React from 'react';
import { Link } from 'react-router-dom';


const SignUpPage = ({ switchToLogin }) => {
>>>>>>> 316f00de95e8c183e6cee54034992038b678023d
  return (
    <div className="min-h-screen flex items-center justify-center bg-pink-300">
      <div className="bg-white p-8 rounded shadow-md w-9/12">
        <h2 className="text-2xl font-bold mb-4 text-center">Create Account</h2>
        <form>
          <div className="mb-4">
            <label className="block mb-2" htmlFor="email">
              Email:
            </label>
            <input
              className="w-full px-3 py-2 border rounded"
              type="email"
              id="email"
              placeholder="Email"
              required
            />
          </div>
<<<<<<< HEAD
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
                      name="email"
                      placeholder="Enter your Email"
                      className="!placeholder:text-blue_gray-500_01 !text-blue_gray-500_01 p-0 text-base text-left w-full"
                      wrapClassName="border border-blue_gray-100 border-solid w-full"
                      type="text"
                      shape="round"
                      color="white_A700"
                      size="md"
                      variant="fill"
                      onChange={(e)=>{
                        setEmail(e)
                      }}
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
                      name="name"
                      placeholder="Enter your name"
                      className="!placeholder:text-blue_gray-500_01 !text-blue_gray-500_01 p-0 text-base text-left w-full"
                      wrapClassName="border border-blue_gray-100 border-solid w-full"
                      type="email"
                      shape="round"
                      color="white_A700"
                      size="md"
                      variant="fill"
                      onChange={(e)=>{
                        setName(e)
                      }}
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
                      name="password"
                      placeholder="Create a password"
                      className="!placeholder:text-blue_gray-500_01 !text-blue_gray-500_01 p-0 text-base text-left w-full"
                      wrapClassName="border border-blue_gray-100 border-solid w-full"
                      type="password"
                      shape="round"
                      color="white_A700"
                      size="md"
                      variant="fill"
                      onChange={(e)=>{
                        setPassword(e)
                      }}
                    ></Input>
                  </div>
                 
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-start pb-[60px] w-full">
              <div className="flex flex-col items-start justify-start w-[360px]" onClick={handleRegister}>
                {
                  loader ? <h5>Harap tunggu ....</h5> : <Button
                  className="border border-pink-700 border-solid cursor-pointer font-medium shadow-bs text-base text-center w-full"
                  shape="round"
                  color="white_700"
                  variant="fill"
                >
                  Get started
                </Button>
                }
                
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
                <a href="../Login" className="text-pink-700 text-sm w-auto">
                  <Text size="txtInterMedium14Blue900">Log in</Text>
                </a>
              </div>
            </div>
=======
          <div className="mb-4">
            <label className="block mb-2" htmlFor="username">
              Username:
            </label>
            <input
              className="w-full px-3 py-2 border rounded"
              type="text"
              id="username"
              placeholder="Username"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2" htmlFor="password">
              Password:
            </label>
            <input
              className="w-full px-3 py-2 border rounded"
              type="password"
              id="password"
              placeholder="Password"
              required
            />
>>>>>>> 316f00de95e8c183e6cee54034992038b678023d
          </div>
          <div className="mb-4">
            <label className="block mb-2" htmlFor="phoneNumber">
              Phone Number:
            </label>
            <input
              className="w-full px-3 py-2 border rounded"
              type="tel"
              id="phoneNumber"
              placeholder="Phone Number"
              required
            />
          </div>
          <p className="m-4 text-center">
          Already have an account?{' '}
          <Link to="/Login" className="text-pink-500 cursor-pointer">
            Sign In
          </Link>
        </p>
          <button className="w-full bg-pink-400 text-white py-2 rounded">
            Sign Up
          </button>
        </form>
        
      </div>
    </div>

  );
};

export default SignUpPage;
