import image from "../../assets/images/logo.png";

const Logo = () => {
  return (
    <div className="grid grid-cols-2">
      <img src={image} alt="logo" className="box-content h-16 w-16"/>
      <p className="text-4xl font-heading font-medium">TenderBloc</p>
    </div>
  );
};

export default Logo;
