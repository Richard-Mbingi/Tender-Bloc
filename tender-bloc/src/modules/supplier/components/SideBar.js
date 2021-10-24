import { Link } from "react-router-dom";
import { useMoralis } from "react-moralis";
import {
  FiLayout,
  FiSearch,
  FiCheckSquare,
  FiCreditCard,
  FiSettings,
  FiLogOut,
  FiFileText,
} from "react-icons/fi";
import logoImg from "../../../global/assets/images/logo.png";

export const SideBar = () => {
  const { logout } = useMoralis();
  return (
    <>
      <div className="bg-secondary flex flex-col lg:w-60 text-tertiary">
        <div className="flex flex-row border-b border-gray-500 p-5">
          <img src={logoImg} alt="" className="h-10" />
          <p className="self-center font-heading text-2xl font-semibold ">
            TenderBloc
          </p>
        </div>
        <div className="py-6">
          <h1 className="pl-5 font-body font-normal text-2xl text-subheading">
            Main
          </h1>
          <div className=" h-screen flex flex-col font-body font-light text-lg">
            <div className="side-bar-tab">
              <FiLayout />
              <Link to="/">Home</Link>
            </div>
            <div className="side-bar-tab">
              <FiSearch />
              <Link to="/">Discover</Link>
            </div>
            <div className="side-bar-tab">
              <FiFileText />
              <Link to="/">Prequalification</Link>
            </div>
            <div className="side-bar-tab">
              <FiCheckSquare />
              <Link to="/">Compliance</Link>
            </div>
            <div className="side-bar-tab">
              <FiCreditCard />
              <Link to="/">Asset Disposal</Link>
            </div>
            <span className="h-60" />
            <div className="side-bar-tab hover:bg-transparent hover:text-secondary">
              <FiSettings />
              <Link to="/">Settings</Link>
            </div>
            <div className="side-bar-tab hover:bg-transparent hover:text-secondary">
              <FiLogOut />
              <Link to="/">Sign Out</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
