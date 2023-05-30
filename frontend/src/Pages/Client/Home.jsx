import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import "./home.scss";
import axios from "axios";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { CiUser } from "react-icons/ci";
import { BsLayoutTextSidebarReverse } from "react-icons/bs";
import { GiRotaryPhone } from "react-icons/gi";
import { BsRocketTakeoff } from "react-icons/bs";
import { GrDiamond } from "react-icons/gr";
import { FaComment } from "react-icons/fa";
import { AiOutlineHeart } from "react-icons/ai";
import { GrFacebookOption } from "react-icons/gr";
import { AiFillTwitterCircle } from "react-icons/ai";

const Home = () => {
  const [data, setData] = useState([]);
  const [value, setValue] = useState("");

  const getData = async () => {
    const res = await axios.get("http://localhost:8080/users");
    setData(res.data);
  };

  const deleteData = async (id) => {
    await axios.delete(`http://localhost:8080/users/${id}`);
    getData();
  };

  const search = (e) => {
    setValue(e.target.value);
  };

  const handleSortData = () => {
    const sortData = [...data].sort((a, b) =>
      a.country.localeCompare(b.country)
    );
    setData(sortData);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <Header />
      {/*  */}
      <section id="hero">
        <div className="container">
          <div className="hero-content">
            <span>PROCESS VISA WITHOUT WITHIN HOURS</span>
            <h1>Immigrations & Visa Consultation</h1>
            <button style={{border: "1px solid white", backgroundColor: "white", color:"black"}}>Book Consultancy</button>
          </div>
        </div>
        <div className="hero-img">
          <img
            src="https://preview.colorlib.com/theme/immigration/img/header-img.png.webp"
            alt=""
          />
        </div>
      </section>
      {/*  */}
      <section id="backend">
        <div className="container">
          <div className="back-head-text">
            <h2>Requirements to be Immigrants</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <input
            type="text"
            placeholder="Searching et"
            onChange={search}
            style={{ border: "1px solid red", width: "200px", padding: "5px" }}
          />
          <button
            style={{
              border: "1px solid black",
              padding: " 5px 20px",
              margin: "10px",
              borderRadius: "20px ",
              backgroundColor: "white",
            }}
            onClick={handleSortData}
          >
            {" "}
            Sort filtered
          </button>

          <div className="backend">
            {data
              .filter((item) => {
                return item.country.toLowerCase().includes(value.toLowerCase());
              })
              .map((data) => (
                <div className="back">
                  <img src={data.image} alt="" />
                  <button>{data.country}</button>
                  <h1>{data.title}</h1>
                  <p>{data.paragraph}</p>
                  <button
                    style={{ backgroundColor: "red" }}
                    onClick={() => deleteData(data._id)}
                  >
                    Delete
                  </button>
                  <Link to={`/${data._id}`}>
                    <button style={{ backgroundColor: "green" }}>
                      Details
                    </button>
                  </Link>
                </div>
              ))}
          </div>
        </div>
      </section>
      {/*  */}
      <section id="unique">
        <div className="container">
          <div className="unique-head-text">
            <h2>Our Unique Features that can impress you</h2>
            <p>Who are in extremely love with eco friendly system.</p>
          </div>
          <div className="uniques">
            <div className="unique">
              <div className="unique-head">
                <CiUser style={{ fontSize: "24px" }} />
                <h1>Expert Technicians</h1>
              </div>
              <div className="unique-text">
                <p>
                  Usage of the Internet is becoming more common due to rapid
                  advancement of technology and power.
                </p>
              </div>
            </div>

            <div className="unique">
              <div className="unique-head">
                <BsLayoutTextSidebarReverse style={{ fontSize: "24px" }} />
                <h1>Expert Technicians</h1>
              </div>
              <div className="unique-text">
                <p>
                  Usage of the Internet is becoming more common due to rapid
                  advancement of technology and power.
                </p>
              </div>
            </div>

            <div className="unique">
              <div className="unique-head">
                <GiRotaryPhone style={{ fontSize: "24px" }} />
                <h1>Expert Technicians</h1>
              </div>
              <div className="unique-text">
                <p>
                  Usage of the Internet is becoming more common due to rapid
                  advancement of technology and power.
                </p>
              </div>
            </div>

            <div className="unique">
              <div className="unique-head">
                <BsRocketTakeoff style={{ fontSize: "24px" }} />
                <h1>Expert Technicians</h1>
              </div>
              <div className="unique-text">
                <p>
                  Usage of the Internet is becoming more common due to rapid
                  advancement of technology and power.
                </p>
              </div>
            </div>

            <div className="unique">
              <div className="unique-head">
                <GrDiamond style={{ fontSize: "24px" }} />
                <h1>Expert Technicians</h1>
              </div>
              <div className="unique-text">
                <p>
                  Usage of the Internet is becoming more common due to rapid
                  advancement of technology and power.
                </p>
              </div>
            </div>

            <div className="unique">
              <div className="unique-head">
                <FaComment style={{ fontSize: "24px" }} />
                <h1>Expert Technicians</h1>
              </div>
              <div className="unique-text">
                <p>
                  Usage of the Internet is becoming more common due to rapid
                  advancement of technology and power.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*  */}
      <section id="blog">
        <div className="container">
          <div className="blog-head-text">
            <h2>Latest News from our Blog</h2>
            <p>Who are in extremely love with eco friendly system.</p>
          </div>
          <div className="blogs">
            <div className="blog">
              <div className="blog-img">
                <img
                  src="https://preview.colorlib.com/theme/immigration/img/b1.jpg.webp"
                  alt=""
                />
              </div>
              <div className="blog-details">
                <div className="blog-btn">
                  <button>Travel</button>
                  <button>Life Style</button>
                </div>
                <h2>Portable latest Fashion for young women</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore.
                </p>
                <span>31st January, 2018</span>
              </div>
            </div>

            <div className="blog">
              <div className="blog-img">
                <img
                  src="https://preview.colorlib.com/theme/immigration/img/b2.jpg"
                  alt=""
                />
              </div>
              <div className="blog-details">
                <div className="blog-btn">
                  <button>Travel</button>
                  <button>Life Style</button>
                </div>
                <h2>Portable latest Fashion for young women</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore.
                </p>
                <span>31st January, 2018</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*  */}

      <footer>
        <section id="footer">
          <div className="container">
            <div className="footer">
              <p>
                Copyright ©2023 All rights reserved | This template is made with by Colorlib
              </p>

              <div className="icons">
                <div className="foot-icon">
                  <GrFacebookOption style={{fontSize: "24px"}}/>
                </div>
                <div className="foot-icon">
                  <AiFillTwitterCircle style={{fontSize: "24px"}}/>
                </div>
                <div className="foot-icon">
                  <GrFacebookOption style={{fontSize: "24px"}}/>
                </div>
                <div className="foot-icon">
                  <AiFillTwitterCircle style={{fontSize: "24px"}}/>
                </div>
              </div>
            </div>
          </div>
        </section>
      </footer>
    </div>
  );
};

export default Home;
