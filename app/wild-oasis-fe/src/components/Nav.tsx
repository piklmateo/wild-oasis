import { NavLink } from "react-router-dom";

import {
  HiOutlineCalendarDays,
  HiOutlineCog6Tooth,
  HiOutlineHome,
  HiOutlineHomeModern,
  HiOutlineUsers,
} from "react-icons/hi2";

const navItems = [
  {
    label: "Home",
    icon: <HiOutlineHome />,
    url: "/dashboard",
  },
  {
    label: "Bookings",
    icon: <HiOutlineCalendarDays />,
    url: "/bookings",
  },
  {
    label: "Cabins",
    icon: <HiOutlineHomeModern />,
    url: "/cabins",
  },
  {
    label: "Users",
    icon: <HiOutlineUsers />,
    url: "/users",
  },
  {
    label: "Settings",
    icon: <HiOutlineCog6Tooth />,
    url: "/settings",
  },
];

const Nav = () => {
  return (
    <nav>
      <ul className="space-y-2">
        {navItems.map((item) => (
          <li key={item.label}>
            <NavLink
              className={({ isActive }) =>
                `flex items-center gap-2 px-4 py-2.5 rounded-sm transition-all  ${
                  isActive ? "bg-gray-100  text-indigo-700" : "text-gray-500 hover:bg-gray-100 cursor-pointer"
                }`
              }
              to={item.url}
            >
              <span className="text-2xl">{item.icon}</span>
              <span>{item.label}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
