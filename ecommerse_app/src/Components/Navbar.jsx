import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const element = <FontAwesomeIcon icon={faMagnifyingGlass} />;
const cart = <FontAwesomeIcon icon={faCartShopping} />;
const signin = <FontAwesomeIcon icon={faUser} />;

const Navbar = (props) => {
  return (
    <React.Fragment>
      <div className="w-[100%] h-[64px] flex justify-between items-center border-2">
        <Link href="/">
        <div className="flex justify-between">
          <img
            className=" pl-[.5rem] w-16 h-16 my-4 "
            src="/online-shopping.png"
            alt=""
          />
          <h1 className="text-[2rem] py-8 pl-[1rem] ">Dokandar</h1>
        </div>
        </Link>

        <div className="ml-[2rem] border-2 h-[35px] rounded-xl outline-none flex justify-between ">
          <form className="flex">
            <input
              className="text-center"
              type="text"
              name="search"
              id="srch"
              placeholder="search"
            ></input>
          </form>
          <button
            type="submit"
            className="border-1 ml-[.5rem] w-[35px] h-[35px] rounded-lg "
          >
            {element}
          </button>
        </div>

        <div className="ml-[10rem] flex justify-between">
          <ul className="flex gap-[2rem] pr-[2rem] cursor-pointer">
            <Link href="#" className=" hover:underline active: decoration-4">
              <li>{cart} Cart</li>
            </Link>
            <Link href="#" className=" hover:underline active: decoration-4">
              <li>{signin} Sign in</li>
            </Link>
          </ul>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Navbar;
