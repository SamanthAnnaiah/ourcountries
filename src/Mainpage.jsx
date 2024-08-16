import { Outlet } from "react-router-dom";
import { Navigation } from "./Navigation";

export function Mainpage() {
  return (
    <>
      <Navigation />
      <Outlet />
    </>
  );
}
