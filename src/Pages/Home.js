import React, { useState } from "react";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ImageFollow from "../components/ImageFollow";
import MarQueeComp from "../components/MarQueeComp";

const Home = () => {
  const [isLightTheme, setIsLightTheme] = useState(false);

  const styles = {
    container: {
      background: isLightTheme ? "white" : "black",
      color: isLightTheme ? "black" : "white",
      minHeight: "100vh",
    },
  };

  const displayDetail = (
    <div className="text-center my-4">
      <div className="fw-bold">001/500</div>
      <button className="btn btn-outline-secondary shadow">MINT</button>
      <p>Price : XXXX</p>
    </div>
  );

  return (
    <div style={styles.container}>
      <Header isLightTheme={isLightTheme} setIsLightTheme={setIsLightTheme} />
      <Banner isLightTheme={isLightTheme} />
      {displayDetail}
      <MarQueeComp />
      <div className="container">
        <ImageFollow
          title="TEST-1"
          id="img-1"
          imgUrl="https://res.cloudinary.com/styllar/image/upload/f_auto/q_auto/c_scale,w_2200/c_scale,w_600/v1/rows/01/cyclava_7_ncsj5e?_a=ATAABAA0"
          url="#"
        />
        <ImageFollow
          title="TEST-2"
          id="img-2"
          imgUrl="https://res.cloudinary.com/styllar/image/upload/f_auto/q_auto/c_scale,w_2200/c_scale,w_600/v1/rows/02/cyclava_15_m7fgo8?_a=ATAABAA0"
          url="#"
        />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
