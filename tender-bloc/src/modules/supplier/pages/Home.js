import { IoIosAdd } from "react-icons/io";
import { Link } from "react-router-dom";
import Category from "../components/Category";
import Page from "../components/Page";

const Home = () => {
  return (
    <Page name="Home">
      <Category name="Get Started">
        <Link to="/home/document-registration">
          <div className="card-template max-h-40 flex flex-col items-center text-secondary max-w-xs py-10">
            <IoIosAdd size={45} />
            <p className="text-lg">Register your Info</p>
          </div>
        </Link>
      </Category>
    </Page>
  );
};

export default Home;
