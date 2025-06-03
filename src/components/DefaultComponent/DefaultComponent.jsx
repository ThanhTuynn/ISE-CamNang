import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer"; // Import Footer component
import "./DefaultComponent.scss";

const DefaultComponent = ({ children }) => {
  return (
    <div className="layout-container">
      <Header />
      <div className="main-content">
        <div className="page-content">{children}</div>
      </div>
      <Footer />
    </div>
  );
};

export default DefaultComponent;
