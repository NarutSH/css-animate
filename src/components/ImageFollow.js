import React, { useState } from "react";

const ImageFollow = ({ title, id, imgUrl, url }) => {
  const [hover, setHover] = useState(false);

  const styles = {
    img: {
      width: "200px",
      height: "200px",
      objectFit: "contain",
    },
    text: {
      fontSize: "50px",
      fontWeight: "bold",
      cursor: "pointer",
      marginInline: "10px",
    },
  };

  const onHandleMove = (ev) => {
    const getId = document.getElementById(id);
    getId.style.top = `${ev.clientY}px`;
    getId.style.left = `${ev.clientX}px`;
    getId.style.transform = `translate(-50%,-50%)`;
  };

  return (
    <span>
      <span
        style={styles.text}
        onMouseEnter={() => setHover(true)}
        onMouseOut={() => setHover(false)}
        onMouseMove={onHandleMove}
      >
        <a className="text-hover" href={url}>
          {title}
        </a>
      </span>

      <div id={id} className="acab">
        {hover ? <img src={imgUrl} style={styles.img} /> : ""}
      </div>
    </span>
  );
};

export default ImageFollow;
