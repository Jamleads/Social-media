import React from "react";
import { Outlet } from "react-router-dom";
import MenuBar from "./MenuBar";

const Layer = () => {
  return (
    <div className="flex relative">
      <MenuBar />

      <main className="w-[75%] ml-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default Layer;
