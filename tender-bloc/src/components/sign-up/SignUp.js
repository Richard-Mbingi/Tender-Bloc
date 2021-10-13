import Form from "../form/Form";
import Logo from "../logo/Logo";

const SignUp = () => {
  return (
    <div className="grid grid-cols-2 h-screen">
      <div className="bg-purple-50">
        <Logo />
        <h1>Sign Up</h1>
        <p>I already have an account</p>
        <Form />
      </div>
      <div className="bg-red-300">
        <p>2</p>
      </div>
    </div>
  );
};

export default SignUp;
