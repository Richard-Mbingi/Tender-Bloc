import { Link } from "react-router-dom";
import Logo from "../../../global/assets/images/logo.png";
import Illustration from "../../../global/assets/images/illustration.png";
import Mockup from "../../../global/assets/images/mockup.png";

const Landing = () => {
  return (
    <>
      <div className="bg-gray-600">
        <div className="px-16 py-8 flex items-center justify-between">
          <div className="flex flex-row">
            <img className="h-12 pr-4" src={Logo} alt="" />
            <p className="text-tertiary text-3xl font-heading font-semibold">
              TenderBloc
            </p>
          </div>
          <div className="flex flex-row">
            <div className="">
              <Link>Home</Link>
              <Link>Discover</Link>
              <Link>Contact Us</Link>
              <button>Sign In</button>
            </div>
          </div>
        </div>
        <div>
          <h1>Harness the Power of the Many</h1>
          <p>
            Unlock the unlimited potential of the Ethereum technology in your
            Tender Procurement
          </p>
          <button>Sign Up</button>
        </div>
        <div>
          <h2>Secure, Transparent and Reliable Procurement</h2>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum.
          </p>
          <button>Send Message</button>
          <img src={Illustration} alt="" />
        </div>
      </div>
      <div className="bg-gray-500">
        <img src={Mockup} alt="" />
        <h2>Easy and Intuitive Web Platform</h2>
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum.
        </p>
        <button>Send Message</button>
      </div>
      <div className="bg-gray-400">
        <h1>What do we Offer</h1>
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor
        </p>
        <div>
          <h3>Security</h3>
          <img src="" alt="" />
          <p>
            Lorem ipsum dolor sit amet, consetetur sadi pscing elitr, sed diam
            Lorem ipsum dolor sit amet, consetetur sadi
          </p>
        </div>
        <div>
          <h3>Smart Contracts</h3>
          <img src="" alt="" />
          <p>
            Lorem ipsum dolor sit amet, consetetur sadi pscing elitr, sed diam
            Lorem ipsum dolor sit amet, consetetur sadi
          </p>
        </div>
        <div>
          <h3>E-wallet</h3>
          <img src="" alt="" />
          <p>
            Lorem ipsum dolor sit amet, consetetur sadi pscing elitr, sed diam
            Lorem ipsum dolor sit amet, consetetur sadi
          </p>
        </div>
      </div>
      <div className="bg-gray-300">
        <h2>Easy and Intuitive Web Platform</h2>
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum.
        </p>
        <button>Send Message</button>
        <form action="" method="post">
          <label>
            Name:
            <input
              type="text"
              placeholder="John Doe"
              name="form-name"
              id="form-name"
            />
          </label>
          <label>
            Email:
            <input
              type="text"
              placeholder="johndoe@email.com"
              name="form-email"
              id="form-email"
            />
          </label>
          <label>
            Message:
            <input
              type="text"
              placeholder="Share a message"
              name="form-message"
              id="form-message"
            />
          </label>
        </form>
      </div>
      <div className="bg-gray-200">
        <div>
          <h2>Service Portals</h2>
          <Link>Forgot Password</Link>
          <Link>Admin Portal</Link>
          <Link>Need Help</Link>
        </div>
        <div>
          <h2>Terms & Conditions</h2>
          <Link>Terms of Service</Link>
          <Link>FAQs</Link>
        </div>
        <div>
          <img className="h-12 pr-4" src={Logo} alt="" />
          <p className="text-tertiary text-3xl font-heading font-semibold">
            TenderBloc
          </p>
        </div>
        <div>tenderbloc @ 2021 All rights reserved.</div>
      </div>
    </>
  );
};
export default Landing;
