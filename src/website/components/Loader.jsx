import React, { useState } from "react";
import logo from "../dist/webImages/logo.png";
import styled from "styled-components";
import ReactDOM from "react-dom";
import LoadingBar from "react-top-loading-bar";
const LoaderDiv = styled.div`
  position: fixed;
  width: 100%;
  top: 0;
  height: 100%;
  background-color: #fff;
  display: grid;
  place-items: center;
  z-index: 9999999;
  ${"" /* animation: loaderOpacity 2s linear; */}
  img {
    animation: loader 2s linear infinite alternate;
  }
`;

const Loader = () => {
  const [progress, setProgress] = useState(100);
  return ReactDOM.createPortal(
    <LoaderDiv className="loader">
      <LoadingBar
        color="#350e9f"
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <img src={logo} alt="" />
    </LoaderDiv>,
    document.getElementById("root")
  );
};

export default Loader;
