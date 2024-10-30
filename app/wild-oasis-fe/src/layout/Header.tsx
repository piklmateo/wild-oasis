import { HiArrowRightOnRectangle, HiOutlineMoon, HiOutlineUser } from "react-icons/hi2";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import Avatar from "../components/Avatar";

const Header = () => {
  return (
    <div className="h-14 flex items-center justify-end gap-5 px-10 text-sm">
      <Avatar />
      <div className="flex gap-2 text-xl text-indigo-700 cursor-pointer">
        <Link className="hover:bg-gray-200 p-1 hover:rounded-sm" to="/account">
          <HiOutlineUser />
        </Link>
        <Button className="hover:bg-gray-200 p-1 hover:rounded-sm">
          <HiOutlineMoon />
        </Button>
        <Button className="hover:bg-gray-200 p-1 hover:rounded-sm">
          <HiArrowRightOnRectangle />
        </Button>
      </div>
    </div>
  );
};

export default Header;
