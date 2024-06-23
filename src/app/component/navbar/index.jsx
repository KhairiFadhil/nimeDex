"use client";
import Navbar from "./navbar";
import SideBar from "./sidebar";
import { useState } from "react";

function Navigation() {
    const [showNav, setShowNav] = useState(false)
    const showSideBar = () => setShowNav(!showNav)
  return (
    <>
      <header>
        <Navbar onClick={showSideBar}/>
      </header>
      <aside className="">
        <SideBar onClick={showSideBar} show={showNav}/>
      </aside>
      </>
  );
}
export default Navigation;
