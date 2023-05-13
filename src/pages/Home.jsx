import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Main from "../components/Main/Main";
import Row from "../components/Row/Row";
import requests from "../axios/Requests";

const Home = () => {
  return (
    <>
      <Main />
      <Row rowId="1" title="Up Coming" fetchURL={requests.requestUpcoming} />
      <Row rowId="2" title="Popular" fetchURL={requests.requestPopular} />
      <Row rowId="3" title="Trending" fetchURL={requests.requestTrending} />
      <Row rowId="4" title="Top Rated" fetchURL={requests.requestTopRated} />
      <Row rowId="5" title="Horror" fetchURL={requests.requestHorror} />
    </>
  );
};

export default Home;
