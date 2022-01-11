import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { client } from "../client";
import { feedQuery, searchQuery } from "../utils/data";
import HorizontalLayout from './HorizontalLayout'
import Spinner from "./Spinner";

const Feed = () => {
  const [loading, setLoading] = useState(false);
  const [tenders, setTenders] = useState(null);
  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true);

    if (categoryId) {
      const query = searchQuery(categoryId);

      client.fetch(query).then((data) => {
        setTenders(data);
        setLoading(false);
      });
    } else {
      client.fetch(feedQuery).then((data) => {
        setTenders(data);
        setLoading(false);
      });
    }
  }, [categoryId])

  if (loading) return <Spinner message="Loading Tenders..." />;

  return (<div>{tenders && <HorizontalLayout tenders={tenders}/>}</div>);
};

export default Feed;
