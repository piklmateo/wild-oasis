import { Outlet } from "react-router";
import Header from "./Header";
import SideNavigation from "./SideNavigation";

const RootLayout = () => {
  return (
    <div className="h-screen grid grid-cols-[250px_auto]">
      <div className="border-r border-gray-100">
        <SideNavigation />
      </div>
      <div className="flex flex-col h-full">
        <Header />
        <div className="flex-grow border-t border-gray-100 bg-gray-50">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default RootLayout;
