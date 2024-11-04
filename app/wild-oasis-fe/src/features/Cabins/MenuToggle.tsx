import { useEffect, useRef, useState } from "react";
import { Booking, Cabin } from "../../services/data/types";
import { HiEllipsisVertical } from "react-icons/hi2";

interface MenuToggleProps {
  item: Cabin | Booking;
}

const MenuToggle = ({ item }: MenuToggleProps) => {
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
    <>
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
          className="rounded-md bg-gray-50 p-4 text-sm flex flex-col gap-4 capitalize items-start shadow-md border shadow-gray-900 absolute z-50 bottom-[-180%] left-[-70%] md:left-[-80%] lg:left-[-40%]"
        >
          <span>duplicate</span>
          <span>edit</span>
          <span>delete</span>
        </div>
      )}
    </>
  );
};

export default MenuToggle;
