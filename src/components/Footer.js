import React from "react";
import { FaDiscord, FaTwitter } from "react-icons/fa";

const Footer = () => {
  const styles = {
    icon: {
      margin: "10px",
    },
    container: {
      position: "absolute",
      bottom: "0",
      width: "100%",
    },
  };
  return (
    <div style={styles.container} className="my-4 text-center">
      <FaDiscord size="2rem" style={styles.icon} />

      <FaTwitter size="2rem" style={styles.icon} />
    </div>
  );
};

export default Footer;
