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
      <div className="bg-secondary flex flex-col text-tertiary">
        <div className="flex flex-row border-b border-gray-500 p-5 pr-10">
          <img src={logoImg} alt="" className="h-10 pr-2" />
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
              <Link to="/home">Home</Link>
            </div>
            <div className="side-bar-tab">
              <FiSearch />
              <Link to="/discover">Discover</Link>
            </div>
            <div className="side-bar-tab">
              <FiFileText />
              <Link to="/prequalification">Prequalification</Link>
            </div>
            <div className="side-bar-tab">
              <FiCheckSquare />
              <Link to="/compliance">Compliance</Link>
            </div>
            <div className="side-bar-tab">
              <FiCreditCard />
              <Link to="/asset-disposal">Asset Disposal</Link>
            </div>
            <span className="h-60" />
            <div className="side-bar-tab hover:bg-transparent hover:text-secondary">
              <FiSettings />
              <Link to="/settings">Settings</Link>
            </div>
            <div className="side-bar-tab hover:bg-transparent hover:text-secondary">
              <FiLogOut />
              <Link to='/sign-out' onClick={() => logout()}>Sign Out</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
