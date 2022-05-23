import React from "react";

const Header = ({ isLightTheme, setIsLightTheme }) => {
  const styles = {
    container: {
      background: isLightTheme ? "white" : "black",
      height: "80px",
    },
  };

  return (
    <div
      style={styles.container}
      className="d-flex justify-content-between align-items-center p-2 "
    >
      <div className="switch-theme">
        <div className="form-check form-switch">
          <input
            className="form-check-input"
            type="checkbox"
            onChange={(ev) => setIsLightTheme(ev.target.checked)}
            value={isLightTheme}
            role="switch"
          />
        </div>
      </div>

      <div>
        <button className="btn btn-sm btn-secondary">Connect Wallet</button>
      </div>
    </div>
  );
};

export default Header;
