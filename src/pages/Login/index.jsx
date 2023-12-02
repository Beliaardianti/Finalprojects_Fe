<<<<<<< HEAD
import React, { useState } from "react";
import { Button, CheckBox, Img, Input, Text } from "components";
import DashboardPage from "pages/Dashboard";
import { useNavigate } from "react-router-dom";
import { loginAdmin,saveLocalStorage } from "api/repository/AuthRepository";


const LoginPage = () => {
  const [loader, setLoader] = useState(false)

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

const handleLogin = async(e) => {
  e.preventDefault();
  setLoader(true)
  try {
    if (email != "" && password != "") {
      const res = await loginAdmin({
        "email":email,
        "password":password
      })
      saveLocalStorage('adminData',{
        "adminId":res.admin?.id,
        "adminName": res.admin?.name
      })
      navigate("/dashboard")
      setLoader(false)
    }else{
      alert("Email dan password wajib diisi")
      setLoader(false)
    }
    
  } catch (error) {
    setLoader(false)
    alert("Username atau password salah")
    console.log(error.message)
  }
};


  const handleLogout = () => {
    setIsLoggedIn(false);
    setEmail("");
    setPassword("");
  };
  

  // if (isLoggedIn) {
  //   return (
  //    <DashboardPage />
  //   );
  // }

=======
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';


const LoginPage = () => {
  const history = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    if (email === 'user@example.com' && password === 'password') {
      history('/dashboard');
    } else {
      alert('Login failed. Please check your credentials.');
    }
  };
  
>>>>>>> 316f00de95e8c183e6cee54034992038b678023d
  return (
    
    <div className="min-h-screen flex items-center justify-center bg-pink-300">
      <div className="bg-white p-8 rounded shadow-md w-4/12">
        <h2 className="text-2xl font-bold mb-4 text-center">Log in to your Account</h2>
        <form onSubmit={handleLogin}>
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
<<<<<<< HEAD
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
                    {/* <input
                      className="!placeholder:text-blue_gray-800_01 !text-blue_gray-800_01 p-0 text-base text-left w-full round fill md"
                      placeholder="Enter your email"
                    /> */}
                    <Input
                      name="email"
                      placeholder="Enter your email"
                      className="!placeholder:text-blue_gray-800_01 !text-blue_gray-800_01 p-0 text-base text-left w-full"
                      wrapClassName="border border-blue_gray-100 border-solid w-full"
                      type="email"
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
                      Password
                    </Text>
                    <Input
                      name="password"
                      placeholder="••••••••"
                      type = "password"
                      className="!placeholder:text-blue_gray-500_01 !text-blue_gray-500_01 p-0 text-base text-left w-full"
                      wrapClassName="border border-blue_gray-100 border-solid w-full"
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
            <div className="flex flex-row items-center justify-between w-full">

              <div className="flex flex-col items-start justify-start">
                <div className="flex flex-col items-center justify-center w-auto">
                  <a
                    href="javascript:"
                    className="text-pink-700 text-sm w-auto"
                  >
                    
                  </a>  
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-start pb-[60px] w-full">
              <div className="flex flex-col items-start justify-start w-[360px]">
                {
                  loader ? <h5>Harap tunggu ...</h5> : <Button
                  className="border border-pink-700 border-solid cursor-pointer font-medium shadow-bs text-base text-center w-full"
                  shape="round"
                  color="pink-700"
                  variant="fill"
                  onClick={handleLogin}
                >
                  Sign in
                </Button>
                }
                
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
                <div href="../SignUp" className="text-pink-700 text-sm w-auto" onClick={()=>navigate("/signup")}>
                  <Text size="txtInterMedium14Blue700">Sign up</Text>
                </div>
              </div>
            </div>
          </div>
        </div>
=======
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <p className="m-4 text-center">
          Don't have an account?{' '}
          <Link to="/SignUp" className="text-pink-500 cursor-pointer">
            Register
          </Link>
        </p>
          <button type="submit" className="w-full bg-pink-400 text-white py-2 rounded">
            Sign In
          </button>
        </form>
>>>>>>> 316f00de95e8c183e6cee54034992038b678023d
      </div>
    </div>

  );
};

export default LoginPage;
