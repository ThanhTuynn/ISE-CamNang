import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer"; // Import Footer component
import "./DefaultComponent.scss";
import { Outlet } from "react-router-dom";

const DefaultComponent = ({ children }) => {
  return (
    <div className="layout-container">
      <Header />
      <div className="main-content">
        <div className="page-content">
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DefaultComponent;
