import { ReactNode, useEffect, useRef, useState } from "react";
import { Booking, Cabin } from "../../services/data/types";
import { HiEllipsisVertical } from "react-icons/hi2";

interface MenuToggleProps {
  item: Cabin | Booking;
  children: ReactNode;
}

const MenuToggle = ({ item, children }: MenuToggleProps) => {
  const [openId, setOpenId] = useState<number | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  function handleOpenMenu(itemId: number) {
    setOpenId((prevId) => (prevId === itemId ? null : itemId));
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpenId(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative inline-block">
      <button
        onClick={(e) => {
          e.stopPropagation();
          handleOpenMenu(item.id);
        }}
        className={`text-2xl cursor-pointer hover:bg-gray-200 rounded-sm p-0.5 outline-none ${
          item.id === openId ? "outline outline-2 outline-indigo-500" : ""
        }`}
      >
        <HiEllipsisVertical />
      </button>
      {openId === item.id && (
        <div
          ref={menuRef}
          className="absolute top-full left-0 mt-2 min-w-44 rounded-md bg-gray-50 text-sm flex flex-col capitalize items-start shadow-md border shadow-gray-900 z-50"
        >
          {children}
        </div>
      )}
    </div>
  );
};

export default MenuToggle;
