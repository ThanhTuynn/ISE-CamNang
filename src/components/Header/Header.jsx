import React from "react";
import "./Header.scss";
import SearchOutlined from "@ant-design/icons/SearchOutlined";
// import BieuTrungDoan from "../../assets/Logo/[_] biểu trưng final.png";

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="header-left">
          <div className="header-logo">
            <img
              src={`${process.env.PUBLIC_URL}/assets/Logo/[_] biểu trưng final.png`}
              alt="BieuTrungDoan"
              className="logo-image"
            />
            <div className="logo-text">
              <p>ĐOÀN KHOA KHOA HỌC VÀ KỸ THUẬT THÔNG TIN</p>
              <p>NHIỆM KỲ 2024 - 2027</p>
            </div>
          </div>
        </div>
        <div className="header-right">
          <nav className="header-nav">
            <a href="/">Trang chủ</a>
            <a href="/about-us">Giới thiệu</a>
          </nav>
          <div className="header-search">
            <div className="search-input-wrapper">
              <input type="text" placeholder="Search..." />
              <span className="search-icon">
                <SearchOutlined />
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
