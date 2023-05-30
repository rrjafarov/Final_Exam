import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { Helmet } from "react-helmet";

const Details = () => {
  const params = useParams();
  console.log(params.id);
  const [data, setData] = useState("");

  useEffect(() => {
    const getData = async () => {
      const res = await axios.get(`http://localhost:8080/users/${params.id}`);
      setData(res.data);
    };

    getData();
  }, []);

  return (
    <>
    <Helmet>
        <meta charSet="utf-8" />
        <title>Details</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>

      <Header />
      <div>
        <div className="container">
          <div className="back-details">
            <img src={data.image} alt="" />
            <button>{data.country}</button>
            <h1>{data.title}</h1>
            <p>{data.paragraph}</p>
          </div>
      <Link to={"/"}><button style={{backgroundColor: "green", color:"white" ,padding: "10px"}} >Ana sehifeye qayit</button></Link>
        </div>
      </div>
    </>
  );
};

export default Details;
