import { Outlet } from "react-router-dom";

export default function Root() {
  return (
    <div>
      <header>
        <span>헤더</span>
        </header>
      <Outlet></Outlet>
    </div>
  );
}