import { AiFillCaretDown, AiOutlineSearch } from "react-icons/ai";
import { HiOutlineUserCircle } from "react-icons/hi";
import { BiMessageDetail } from "react-icons/bi";
import { VscBell } from "react-icons/vsc";
import { useMoralis } from "react-moralis";

export const InfoBar = () => {
  const { user } = useMoralis();
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
          <p className="font-body font-light text-xl">{user.attributes.username}</p>
          <HiOutlineUserCircle size={30} />
          <AiFillCaretDown size={20} />
        </div>
      </div>
    </div>
  );
};
