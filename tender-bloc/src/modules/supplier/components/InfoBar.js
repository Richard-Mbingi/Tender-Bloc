import { AiFillCaretDown, AiOutlineSearch } from "react-icons/ai";
import { HiOutlineUserCircle } from "react-icons/hi";
import { BiMessageDetail } from "react-icons/bi";
import { VscBell } from "react-icons/vsc";

export const InfoBar = () => {
  return (
    <div className="py-5 grid justify-items-end">
      <div className="text-primary flex flex-row items-center gap-x-6">
        <AiOutlineSearch
          size={25}
          className="hover:text-secondary cursor-pointer"
        />
        <BiMessageDetail
          size={25}
          className="hover:text-secondary cursor-pointer"
        />
        <VscBell size={25} className="hover:text-secondary cursor-pointer" />
        <div className="flex flex-row items-center pl-8 gap-x-1 hover:text-secondary cursor-pointer">
          <p className="font-body text-xl">Username</p>
          <AiFillCaretDown size={20} />
          <HiOutlineUserCircle size={30} />
        </div>
      </div>
    </div>
  );
};
