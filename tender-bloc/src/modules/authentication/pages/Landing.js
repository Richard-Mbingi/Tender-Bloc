import { Link } from "react-router-dom";
import { RiShieldCheckLine } from "react-icons/ri";
import { BiReceipt } from "react-icons/bi";
import {
  FaEthereum,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import Logo from "../../../global/assets/images/logo.png";
import Illustration from "../../../global/assets/images/illustration.png";
import Mockup from "../../../global/assets/images/mockup.png";

const Landing = () => {
  return (
    <div className=" text-tertiary bg-gray-700">
      <div className="bg-grad">
        <div className="px-16 py-7 flex items-center justify-between">
          <div className="flex flex-row">
            <img className="h-12 pr-4" src={Logo} alt="" />
            <p className=" text-3xl font-heading font-semibold">TenderBloc</p>
          </div>
          <div className="flex flex-row gap-x-8">
            <Link className="primary-link">Home</Link>
            <Link className="primary-link">Discover</Link>
            <Link className="primary-link">Contact Us</Link>
            <Link to="/sign-in">
              <button className="primary-button">Sign In</button>
            </Link>
          </div>
        </div>

        {/* Section one*/}
        <div className="text-center min-h-screen">
          <h1 className="text-7xl font-heading mt-12">
            Harness the Power of <br /> the Many
          </h1>
          <p className=" text-3xl font-body font-extralight mt-10">
            Unlock the unlimited potential of the Ethereum technology in your{" "}
            <br />
            Tender Procurement
          </p>
          <Link to="/sign-up">
            <button className="primary-button mt-36">Sign Up</button>
          </Link>
        </div>

        {/* Section two*/}
        <div className="grid grid-cols-2 items-center min-h-screen px-32">
          <div>
            <h2 className="text-5xl font-heading">
              Secure, Transparent and
              <br />
              Reliable Procurement
            </h2>
            <p className="text-lg font-body font-light py-10">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum.
            </p>
            <button className="primary-button">Send Message</button>
          </div>
          <img className="h-68" src={Illustration} alt="" />
        </div>
      </div>

      {/* Section three*/}
      <div className="grid grid-cols-2 bg-primary items-center min-h-screen px-32">
        <img src={Mockup} alt="" />
        <div className="text-primary px-16">
          <h2 className="text-5xl font-heading">
            Easy and Intuitive Web Platform
          </h2>
          <p className="text-lg font-body font-light py-10">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum.
          </p>
          <button className="secondary-button">Send Message</button>
        </div>
      </div>

      {/* Section four*/}
      <div className="bg-grad min-h-screen p-32 text-center">
        <h1 className="text-secondary text-5xl font-heading">
          What do we Offer
        </h1>
        <p className="col-span-3 text-lg font-body font-light py-4">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy
          <br /> eirmod tempor
        </p>
        <div className="grid grid-cols-3 justify-items-center px-24">
          <div className="bg-secondary p-7 pb-16 rounded-xl w-64 font-light text-left">
            <div className="grid grid-cols-2 justify-items-center place-items-center">
              <h3 className="font-heading text-3xl font-medium pb-2">
                Security
              </h3>
              <RiShieldCheckLine size={32} />
            </div>
            <p className="pt-3">
              Lorem ipsum dolor sit amet, consetetur sadi pscing elitr, sed diam
              Lorem ipsum dolor sit amet, consetetur sadi
            </p>
          </div>
          <div className="bg-secondary p-7 pb-16 rounded-xl w-64 font-light text-left">
            <div className="grid grid-cols-2 justify-items-center place-items-center">
              <h3 className="font-heading text-3xl font-medium pb-2 leading-6">
                Smart Contracts
              </h3>
              <BiReceipt size={32} />
            </div>
            <p className="pt-3">
              Lorem ipsum dolor sit amet, consetetur sadi pscing elitr, sed diam
              Lorem ipsum dolor sit amet, consetetur sadi
            </p>
          </div>
          <div className="bg-secondary p-7 pb-16 rounded-xl w-64 font-light text-left">
            <div className="grid grid-cols-2 justify-items-center place-items-center">
              <h3 className="font-heading text-3xl font-medium pb-2">
                E-wallet
              </h3>
              <FaEthereum size={32} />
            </div>
            <p className="pt-3">
              Lorem ipsum dolor sit amet, consetetur sadi pscing elitr, sed diam
              Lorem ipsum dolor sit amet, consetetur sadi
            </p>
          </div>
        </div>
      </div>

      {/* Section five*/}
      <div className="grid grid-cols-2 font-body items-center min-h-screen bg-primary text-primary px-32 justify-items-center">
        <div>
          <h2 className="text-5xl font-heading">
            Join Our Countrywide
            <br />
            Community of Tenderers{" "}
          </h2>
          <p className="text-lg font-light py-10">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum.
          </p>
          <Link to="/sign-up">
            <button className="secondary-button">Sign Up</button>
          </Link>
        </div>
        <form className="flex flex-col" action="" method="post">
          <label className="form-label">
            Name:
            <input
              className="form-input"
              type="text"
              placeholder="John Doe"
              name="form-name"
              id="form-name"
            />
          </label>
          <label className="form-label">
            Email:
            <input
              className="form-input"
              type="text"
              placeholder="johndoe@email.com"
              name="form-email"
              id="form-email"
            />
          </label>
          <label className="form-label">
            Message:
            <input
              className="form-input"
              type="text"
              placeholder="Share a message"
              name="form-message"
              id="form-message"
            />
          </label>
        </form>
      </div>

      {/*Footer*/}
      <div className="bg-grad grid grid-cols-2 px-32 py-10">
        <div className="grid grid-cols-2">
          <div className="flex flex-col">
            <h2 className="font-heading text-2xl font-semibold text-subtext">
              Service Portals
            </h2>
            <Link className="primary-link">Forgot Password</Link>
            <Link className="primary-link">Admin Portal</Link>
            <Link className="primary-link">Need Help</Link>
          </div>
          <div className="flex flex-col">
            <h2 className="font-heading text-2xl font-semibold text-subtext">
              Terms & Conditions
            </h2>
            <Link className="primary-link">Terms of Service</Link>
            <Link className="primary-link">FAQs</Link>
          </div>
        </div>
        <div className="grid justify-items-center">
          <div className="flex flex-row">
            <img className="h-10 pr-4" src={Logo} alt="" />
            <p className="text-3xl font-heading font-semibold">TenderBloc</p>
          </div>
          <div className="flex flex-row gap-x-5 py-3">
            <FaFacebookF size={20} className="hover:text-secondary" />
            <FaTwitter size={20} className="hover:text-secondary" />
            <FaLinkedinIn size={20} className="hover:text-secondary" />
            <FaInstagram size={20} className="hover:text-secondary" />
          </div>
        </div>
        <div className="font-body text-center col-span-2 py-3">
          tenderbloc @ 2021 All rights reserved.
        </div>
      </div>
    </div>
  );
};
export default Landing;
