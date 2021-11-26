import { Link } from "react-router-dom";
import { useMoralis } from "react-moralis";
import {
  FiLayout,
  FiCheckSquare,
  FiCreditCard,
  FiSettings,
  FiLogOut,
  FiFileText,
} from "react-icons/fi";
import { AiOutlineFileSearch } from "react-icons/ai";
import logoImg from "../../../global/assets/images/logo.png";

export const SideBar = () => {
  const { logout } = useMoralis();
  return (
    <>
      <div className="fixed bg-secondary flex flex-col text-tertiary">
        <div className="flex flex-row border-b border-gray-500 p-5 pr-10">
          <img src={logoImg} alt="" className="h-10 pr-2" />
          <p className="self-center font-heading text-2xl font-semibold ">
            TenderBloc
          </p>
        </div>
        <div className="py-6">
          <div className=" h-screen flex flex-col font-body font-light text-lg">
            <h1 className="pl-5 font-body font-normal text-2xl text-subheading">
              Main
            </h1>
            <div className="side-bar-tab">
              <FiLayout />
              <Link to="/home">Home</Link>
            </div>
            <div className="side-bar-tab">
              <AiOutlineFileSearch />
              <Link to="/discover">Discover</Link>
            </div>
            <div className="side-bar-tab">
              <FiFileText />
              <Link to="/prequalification">Prequalification</Link>
            </div>
            <span className="h-16" />
            <h1 className="pl-5 font-body font-normal text-2xl text-subheading">
              Tender Notice
            </h1>
            <div className="side-bar-tab">
              <FiLayout />
              <Link to="/">Open Tender</Link>
            </div>
            <div className="side-bar-tab">
              <AiOutlineFileSearch />
              <Link to="/">Closed Tender</Link>
            </div>
            <span className="h-24" />
            <div className="side-bar-tab hover:bg-transparent hover:text-secondary">
              <FiSettings />
              <Link to="/settings">Settings</Link>
            </div>
            <div className="side-bar-tab hover:bg-transparent hover:text-secondary">
              <FiLogOut />
              <Link to="/" onClick={() => logout()}>
                Sign Out
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
