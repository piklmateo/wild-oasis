import { HiArrowRightOnRectangle, HiOutlineMoon, HiOutlineUser } from "react-icons/hi2";
import Avatar from "../assets/default-user.jpg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="h-14 flex items-center justify-end gap-5 px-10 text-sm">
      <div className="flex items-center gap-2">
        <img src={Avatar} alt="Avatar" className="h-8" />
        <span>Mobin</span>
      </div>
      <div className="flex gap-4 text-xl text-indigo-700 cursor-pointer">
        <Link to="/account">
          <HiOutlineUser />
        </Link>
        <HiOutlineMoon />
        <HiArrowRightOnRectangle />
      </div>
    </div>
  );
};

export default Header;
