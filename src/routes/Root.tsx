import { Outlet } from "react-router-dom";


export default function Root() {

    return (
     <div>
    <p>이건루트다</p>
    <Outlet></Outlet>
     </div>
    );
  }