import CardList from "../components/CardList";
import Category from "../components/Category";
import Page from "../components/Page";

const Discover = () => {
  return (
    <Page name="Discover">
      <Category name="Recently added">
        <CardList />
      </Category>
      <Category name="For you">
        <CardList />
      </Category>
    </Page>
  );
};

export default Discover;
