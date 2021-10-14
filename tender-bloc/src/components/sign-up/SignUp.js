import Form from "../form/Form";
import Logo from "../logo/Logo";

const SignUp = () => {
  return (
    <div className="grid grid-cols-2 h-screen">
      <div className="bg-purple-50">
        <div className="m-8">
          <Logo />
          <div className="mx-16 my-10">
            <h1 className="font-heading text-5xl">Sign Up</h1>
            <p className="font-body font-extralight underline my-2">
              I already have an account
            </p>
            <Form />
          </div>
        </div>
      </div>
      <div className="bg-red-300">
        <p>2</p>
      </div>
    </div>
  );
};

export default SignUp;
