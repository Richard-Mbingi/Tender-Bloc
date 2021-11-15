import Category from "../components/Category";
import TenderCard from "../components/TenderCard";

const Discover = () => {
  return (
    <div className="dashboard-label">
      <h1>Discover</h1>
      <Category name="Recently added">
        <TenderCard />
      </Category>
    </div>
  );
};

export default Discover;
