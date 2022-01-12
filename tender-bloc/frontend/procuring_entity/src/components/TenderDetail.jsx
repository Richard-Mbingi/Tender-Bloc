import React, { useState, useEffect } from "react";
import { MdDownloadForOffline } from "react-icons/md";
import { Link, useParams } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

import { client, urlFor } from "../client";
import HorizontalLayout from "./HorizontalLayout";
import { tenderDetailMoreTenderQuery, tenderDetailQuery } from "../utils/data";
import Spinner from "./Spinner";

const TenderDetail = ({ user }) => {
  const [tenders, setTenders] = useState(null);
  const [tenderDetail, setTenderDetail] = useState(null);

  const { tenderId } = useParams();

  const fetchTenderDetails = () => {
    let query = tenderDetailQuery(tenderId);

    if (query) {
      client.fetch(query).then((data) => {
        setTenderDetail(data[0]);

        if (data[0]) {
          query = tenderDetailMoreTenderQuery(data[0]);

          client.fetch(query).then((res) => setTenders(res));
        }
      });
    }
  };

  useEffect(() => {
    fetchTenderDetails();
  }, [tenderId]);

  if (!tenderDetail) return <Spinner message="Loading Tenders" />;

  return (
    <div
      className="felx xl:flex-row flex-col m-auto bg-white"
      style={{ maxWidth: "1500px", borderRadius: "32px" }}
    >
      <div className="flex justify-center items-center md:items-start flex-initial">
        <img
          src={tenderDetail?.image && urlFor(tenderDetail.image).url()}
          className="rounded-t-3xl rounde-b-lg"
          alt="user-post"
        />
      </div>
      <div className="w-full p-5 flex-1 xl:min-w-full">
        <div className="flex items-center justify-between">
          <div className="flex gap-2 items-center ">
            <a
              href={`${tenderDetail.image?.asset?.url}?dl=`}
              download
              onClick={(e) => e.stopPropagation()}
              className="bg-white w-9 h-9 rounded-full flex items-center justify-center text-black text-xl opacity-75 hover:opacity-100 hover:shadow-md outline-none"
            >
              <MdDownloadForOffline />
            </a>
          </div>
          <div>
               <h1 className="text-4xl font-bold break-words mt-3">
                    {tenderDetail.title}
               </h1>
               <p className="mt-3">{tenderDetail.about}</p>
          </div>
          <Link></Link>
        </div>
      </div>
    </div>
  );
};

export default TenderDetail;
