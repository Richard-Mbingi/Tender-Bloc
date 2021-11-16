import Category from "../components/Category";
import Page from "../components/Page";
import TenderCard from "../components/TenderCard";

const Discover = () => {
  return (
    <Page name="Discover">
      <Category name="Recently added">
        <TenderCard />
      </Category>
    </Page>
  );
};

export default Discover;
