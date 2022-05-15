import React from "react";

const Banner = ({ isLightTheme }) => {
  const imgUrl =
    "https://images.unsplash.com/photo-1643101808398-ab1817b74013?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80";

  return (
    <div className="box">
      <div className={`animate-container ${isLightTheme ? "light" : "dark"}`}>
        <div className="text-animate">TEST</div>
        <img src={imgUrl} alt="img" className="img-animate" />
      </div>
    </div>
  );
};

export default Banner;
