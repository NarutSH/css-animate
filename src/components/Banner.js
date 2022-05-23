import React from "react";
import Imagefollow from "react-image-follow";

const Banner = ({ isLightTheme }) => {
  const body = document.querySelector("body");

  const imgUrl =
    "https://images.unsplash.com/photo-1643101808398-ab1817b74013?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80";

  const onHandleMove = (ev) => {
    const mask9 = document.getElementById("mask-9");

    const setWidth = window.outerWidth;
    const setHeight = window.outerHeight;

    const pointX = (setWidth - ev.pageX * 2) / 2;
    const pointY = mask9.offsetHeight / 2 - (ev.pageY - 80);

    mask9.style.top = `${pointY < 0 ? "45" : "55"}%`;
    mask9.style.left = `${pointX < 0 ? "45" : "55"}%`;
  };
  const onHandleOut = (ev) => {
    const mask9 = document.getElementById("mask-9");
    mask9.style.top = `50%`;
    mask9.style.left = `50%`;
    mask9.style.transform = `translate(-50%,-50%)`;
  };

  return (
    <div className="box-out">
      <div
        className="box-9"
        onMouseMove={onHandleMove}
        onMouseOut={onHandleOut}
      >
        <div className="mask-9" id="mask-9">
          <Imagefollow src={imgUrl} alt="img" className="w-100" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
