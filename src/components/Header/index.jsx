import React from "react";

import { Img, Input } from "components";

import { CloseSVG } from "../../assets/images";

const Header = (props) => {
  const [searchbarvalue, setSearchbarvalue] = React.useState("");

  return (
    <>
      <header className={props.className}>
        {/* <Input
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
        ></Input> */}

      </header>
    </>
  );
};

Header.defaultProps = {};

export default Header;
