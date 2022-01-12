import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { MdDownloadForOffline } from "react-icons/md";
import { AiTwotoneDelete } from "react-icons/ai";
import { BsFillArrowUpRightCircleFill } from "react-icons/bs";

import { client, urlFor } from "../client";
import { fetchUser } from "../utils/fetchUser";

const Tender = ({ tender: { postedBy, image, _id, destination, save } }) => {
  const [postHovered, setPostHovered] = useState(false);
  const navigate = useNavigate();

  const user = fetchUser();

  console.log(save);

  const convertBool = save?.filter(
    (item) => item.postedBy._id === user.googleId
  )?.length;

  const alreadySaved = !!convertBool;

  const saveTender = (id) => {
    if (!alreadySaved) {
      client
        .patch(id)
        .setIfMissing({ save: [] })
        .insert("after", "save[-1]", [
          {
            _key: uuidv4(),
            userId: user.googleId,
            postedBy: {
              _type: "postedBy",
              _ref: user?.googleId,
            },
          },
        ])
        .commit()
        .then(() => {
          window.location.reload();
        });
    }
  };

  const deleteTender = (id) => {
    client.delete(id).then(() => {
      window.location.reload();
    });
  };

  return (
      <div className="m-2">
        <div
          onMouseEnter={() => setPostHovered(true)}
          onMouseLeave={() => setPostHovered(false)}
          onClick={() => navigate(`/tender-detail/${_id}`)}
          className="relative cursor-zoom-in w-fit hover:shadow-lg overflow-hidden transition-all duration-500 ease-in-out"
        >
          <img
            className="rounded-lg w-48"
            alt="user-post"
            src={urlFor(image).width(250).url()}
          />
          {postHovered && (
            <div
              className="absolute top-0 w-full h-full flex flex-col justify-between p-1 pt-2 pb-2 z-50"
              style={{ height: "100%" }}
            >
              <div className="flex items-center justify-between">
                <div className="flex gap-2">
                  <a
                    href={`${image?.asset?.url}?dl=`}
                    download
                    onClick={(e) => e.stopPropagation()}
                    className="bg-white w-9 h-9 rounded-full flex items-center justify-center text-black text-xl opacity-75 hover:opacity-100 hover:shadow-md outline-none"
                  >
                    <MdDownloadForOffline />
                  </a>
                </div>
                {alreadySaved ? (
                  <button
                    type="button"
                    className="bg-red-500 opacity-70 hover:opacity-100 text-white font-bold px-5 py-1 text-base rounded-3xl hover:shadow-md outline-none"
                  >
                    {save?.length}
                    Saved
                  </button>
                ) : (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      saveTender(_id);
                    }}
                    type="button"
                    className="bg-red-500 opacity-70 hover:opacity-100 text-white font-bold px-5 py-1 text-base rounded-3xl hover:shadow-md outline-none"
                  >
                    Save
                  </button>
                )}
                <div className="flex justify-between items-center gap-2 w-full">
                  {postedBy?._id === user.googleId && (
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        deleteTender(_id);
                      }}
                      className="bg-white-500 p-2 opacity-70 hover:opacity-100 text-black font-bold px-5 py-1 text-base rounded-3xl hover:shadow-md outline-none"
                    >
                      <AiTwotoneDelete />
                    </button>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
        <Link
          to={`user-profile/${postedBy?._id}`}
          className="flex gap-2 mt-5 items-center bg-white rounded-lg"
        >
          <img
            className="w-8 h-8 rounded-full object-cover"
            src={postedBy?.image}
            alt="user-profile"
          />
          <p className="font-semibold capitalize">{postedBy?.userName}</p>
        </Link>
      </div>
  );
};

export default Tender;
