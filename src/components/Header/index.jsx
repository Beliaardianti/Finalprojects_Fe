import React from "react";

import { Img, Input } from "components";

import { CloseSVG } from "../../assets/images";

const Header = (props) => {
  const [searchbarvalue, setSearchbarvalue] = React.useState("");

  return (
    <>
      <header className={props.className}>
        <Input
          name="searchbar"
          placeholder="Search product, supplier, order"
          value={searchbarvalue}
          onChange={(e) => setSearchbarvalue(e)}
          className="!placeholder:text-blue_gray-400 !text-blue_gray-400 font-inter p-0 text-base text-left w-full"
          wrapClassName="flex rounded sm:w-full"
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
                visibility: searchbarvalue?.length <= 0 ? "hidden" : "visible",
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
        <div className="flex flex-row gap-[21px] items-start justify-start w-auto">
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
      </header>
    </>
  );
};

Header.defaultProps = {};

export default Header;
