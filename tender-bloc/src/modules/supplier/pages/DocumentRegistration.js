import DocumentUpload from "../components/DocumentUpload";
import Page from "../components/Page";
import { NavLink, Outlet } from "react-router-dom";
import { BsFillCircleFill } from "react-icons/bs";

const documentList = [
  "Company Registration Documents",
  "Company PIN / VAT",
  "KRA Tax Compliance Certificate",
  "Statement of capabilities",
];

const DocumentRegistration = () => {
  return (
    <Page className="Document Registration">
      <div className="bg-white m-6 rounded-2xl grid grid-cols-3 align-middle items-center">
        <DocumentUpload />
        <div className="flex flex-col gap-6 px-10">
          <ul>
            {documentList.map((_link) => {
              return (
                <>
                  <NavLink to={`/home/document-registration/${_link}`}>
                    <div className="secondary-link flex items-center gap-4">
                      <BsFillCircleFill size={15} />
                      <p className="font-semibold cursor-pointer">{_link}</p>
                    </div>
                  </NavLink>
                  <Outlet />
                </>
              );
            })}
          </ul>
        </div>
      </div>
    </Page>
  );
};

export default DocumentRegistration;
