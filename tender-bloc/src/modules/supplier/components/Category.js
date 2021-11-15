const Category = (props) => {
  return (
    <div className="my-5">
      <h2 className="sub-heading">{props.name}</h2>
      {props.children}
    </div>
  );
};

export default Category;
