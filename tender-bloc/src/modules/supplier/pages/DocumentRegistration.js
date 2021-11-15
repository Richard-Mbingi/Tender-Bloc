import { Link } from "react-router-dom";
import { BsArrowLeft, BsCloudDownload } from "react-icons/bs";

const DocumentRegistration = () => {
  return (
    <div className="bg-primary min-h-screen min-w-full p-8">
      <h1 className="dashboard-label">Document Registration</h1>
      <div className="bg-white m-6 rounded-2xl">
        <Link
          to="/sign-up"
          className="flex flex-row justify-end items-center pt-4 pb-2 px-12 hover:text-secondary"
        >
          <BsArrowLeft />
          <p className="ml-2 font-light">Back</p>
        </Link>
        <div className="text-center flex flex-col items-center py-10">
          <h1 className="text-4xl mb-8">Document to Upload</h1>
          <div className=" max-w-4xl border rounded-lg border-dashed text-center flex flex-col text-primary hover:text-secondary items-center px-32 py-10">
            <p className="text-4xl font-light mt-10 mb-5">
              Upload document or <br />
              Drag & Drop
            </p>
            <BsCloudDownload size={30} />
          </div>
          <button className="primary-button w-36 mt-5">Confirm</button>
        </div>
      </div>
    </div>
  );
};

export default DocumentRegistration;
