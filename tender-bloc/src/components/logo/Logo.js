import image from "../../assets/images/logo.png";

const Logo = () => {
  return (
    <div className="flex flex-row items-center">
      <img src={image} alt="logo" className="box-content h-12 w-12 mx-3"/>
      <p className="text-3xl font-heading font-medium">TenderBloc</p>
    </div>
  );
};

export default Logo;
