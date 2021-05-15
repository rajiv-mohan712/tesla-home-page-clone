import React, { useState } from "react";
import { MenuIcon, XIcon } from "@heroicons/react/solid";

function Header() {
  const [menu, setMenu] = useState(false);
  return (
    <div className=" fixed top-0 left-0 right-0 px-4  h-14 flex justify-between items-center">
      <img src="/images/logo.svg" alt="Tesla Logo" />
      <div className="uppercase lg:flex flex-grow justify-center align-middle space-x-4 items-center font-bold  hidden">
        <p className="cursor-pointer">Model S</p>
        <p className="cursor-pointer">Model 3</p>
        <p className="cursor-pointer">Model X</p>
        <p className="cursor-pointer">Model Y</p>
        <p className="cursor-pointer">Solar Roof</p>
        <p className="cursor-pointer">Solar Panels</p>
      </div>
      <div className="flex space-x-2 font-bold uppercase">
        <p>Shop</p>
        <p>Tesla Account</p>
        <MenuIcon
          className="h-5 cursor-pointer"
          onClick={() => setMenu(true)}
        />
      </div>
      <div
        className={`fixed top-0 bottom-0 right-0 bg-white p-4 z-20  w-1/4 shadow-lg overflow-y-auto transform transition-transform ease-in-out  ${
          menu ? " translate-x-0 " : " translate-x-full"
        } `}
      >
        <div className=" flex justify-end">
          <XIcon
            className="h-5 cursor-pointer"
            onClick={() => setMenu(false)}
          />
        </div>

        <ul className="uppercase text-sm font-bold">
          <li className="p-4 border-b-2 ">Existing Inventory</li>
          <li className="p-4 border-b-2 ">Used Inventory</li>
          <li className="p-4 border-b-2 ">Trade-In</li>
          <li className="p-4 border-b-2 ">CyberTruck</li>
          <li className="p-4 border-b-2 ">Roadster</li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
