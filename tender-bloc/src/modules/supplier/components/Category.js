const Category = (props) => {
  return (
    <div className="ml-4 my-4">
      <h2 className="sub-heading">{props.name}</h2>
      {props.children}
    </div>
  );
};

export default Category;
