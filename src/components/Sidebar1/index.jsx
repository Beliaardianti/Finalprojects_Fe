import React from "react";

import { Menu, MenuItem, Sidebar, useProSidebar } from "react-pro-sidebar";

import { Img, Text } from "components";
import { useNavigate } from "react-router-dom";
import { deleteAllLocalStorage } from "api/repository/AuthRepository";

const Sidebar1 = (props) => {
  const { collapseSidebar, collapsed } = useProSidebar();
  const navigate = useNavigate()

  const sideBarMenu = [
    {
      icon: (
        <Img
          className="h-6 w-6"
          src="images/img_home_blue_gray_600.svg"
          alt="home"
        />
      ),
      label: "Dashboard",
      href: "/dashboard",
      active: window.location.pathname === "/dashboard",
    },
    {
      icon: (
        <Img
          className="h-6 mb-[3px] w-6"
          src="images/img_settings.svg"
          alt="settings"
        />
      ),
      label: "Inventory",
      href: "/inventory",
      active: window.location.pathname === "/inventory",
    },
    // {
    //   icon: (
    //     <Img
    //       className="h-6 mb-[3px] w-6"
    //       src="images/img_settings.svg"
    //       alt="settings"
    //     />
    //   ),
    //   label: "Category",
    //   href: "/category",
    //   active: window.location.pathname === "/category",
    // },
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
          src="images\warehouse_supply_cargo_distribution_logistic_icon_187269.png"
          alt="frameEight"
        />
      ),
      label: "Suppliers",
      href: "/suppliers",
      active: window.location.pathname === "/suppliers",
    },
    {
      icon: (
        <Img
          className="h-6 mb-[3px] w-6"
          src="images\users_icon-icons.com_57999.svg"
          alt="frameEight"
        />
      ),
      label: "Customer",
      href: "/customer",
      active: window.location.pathname === "/customer",
    },
    // {
    //   icon: <Img className="h-6 w-6" src="images/img_reply.svg" alt="reply" />,
    //   label: "Orders",
    //   href: "/orders",
    //   active: window.location.pathname === "/orders",
    // },
    {
      icon: <Img className="h-6 w-6" src="images/img_frame8.svg" alt="reply" />,
      label: "Admin",
      href: "/admin",
      active: window.location.pathname === "/admin",
    },
  ];

 

  return (
    <>
      <Sidebar
        onClick={() => collapseSidebar(!collapsed)}
        className={props.className}
      >
        <div className="flex flex-row gap-3 items-center justify-start mb-[44px] ml-9 mr-[98px] mt-7 w-auto">
          <Img
            className="h-12 w-12 rounded-full"
            src="images/logo_lady.jpg"
            alt="logo"
          />
          <Text
            className="text-pink-600 text-center text-xl w-auto"
            size="txtInterSemiBold20"
          >
            LadyCoders
          </Text>
        </div>
        <Menu
          menuItemStyles={{
            button: {
              padding: 0,
              paddingRight: "14px",
              gap: "20px",
              color: "#5d6679",
              fontWeight: 500,
              fontSize: "16px",
              fontFamily: "Inter",
              borderRadius: "8px",
              paddingTop: "14px",
              paddingBottom: "14px",
              [`&:hover, &.ps-active`]: { color: "rgb(219 39 119)" },
            },
          }}
          className="flex flex-col items-center justify-start mb-[10px] mt-[38px] pt-[8px] px-10 sm:px-5 w-[72%]"
        >
          <div className="flex flex-col items-center justify-start w-full">
            {sideBarMenu?.map((menu, i) => (
              <MenuItem key={`sideBarMenuItem${i}`} {...menu}>
                {menu.label}
              </MenuItem>
            ))}
          </div>
          <div className="flex flex-col gap-3 items-center justify-end mt-80 w-full">
            <MenuItem
              // icon={
              //   <Img
              //     className="h-6 mb-[3px] w-6"
              //     src="images/img_settings_blue_gray_600.svg"
              //     alt="settings_One"
              //   />
              // }
            >
              {/* <Text className="w-auto">Settings</Text> */}
            </MenuItem>
            <MenuItem
            onClick={()=>{
              deleteAllLocalStorage()
              navigate("/")
            }}
              icon={
                <Img
                  className="h-6 mb-[3px] w-6"
                  src="images/img_logout.svg"
                  alt="logout"
                />
              }
            >
              <Text className="w-auto">Log Out</Text>
            </MenuItem>
          </div>
        </Menu>
      </Sidebar>
    </>
  );
};

Sidebar1.defaultProps = {};

export default Sidebar1;
