import React from "react";

export default function Footer() {
  let footerStyle = {
    position: "relative",
    width: "100%",
    top: "0vh",
    marginTop: "10px",
  };
  return (
    <footer className="bg-dark text-light py-3" style={footerStyle}>
      <p className="text-center">
        copyright &copy;{" "}
        <a href="https://www.github.com/thesmartdeveloperr">
          thesmartdeveloperr
        </a>
      </p>
    </footer>
  );
}
