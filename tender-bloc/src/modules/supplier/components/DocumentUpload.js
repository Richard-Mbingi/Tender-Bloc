import { BsCloudDownload } from "react-icons/bs";


const DocumentUpload = () => {
  return (
      <div className="col-span-2 rounded-lg text-transparent">
        <div className="text-center flex flex-col items-center py-10">
          <h1 className="text-primary text-4xl mb-8">Document to Upload</h1>
          <div className=" max-w-4xl border-2 rounded-lg border-dashed text-center flex flex-col text-subtext hover:text-primary items-center px-32 py-10">
            <p className="text-4xl font-light mt-10 mb-5">
              Upload document or <br />
              Drag & Drop
            </p>
            <BsCloudDownload size={30} />
          </div>
          <button className="secondary-button w-36 mt-5">Confirm</button>
        </div>
      </div>
  );
};

export default DocumentUpload;
