import React from "react";

const NotFoundPage = () => {
  return (
    <div
      style={{
        minHeight: "80vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "#e5f4ff",
      }}
    >
      <h1 style={{ fontSize: "96px", color: "#2176ae", margin: 0 }}>404</h1>
      <p style={{ fontSize: "28px", color: "#2176ae", margin: "16px 0 8px" }}>
        Oops! Không tìm thấy trang.
      </p>
      <p style={{ color: "#4a6a7c", marginBottom: "24px" }}>
        Trang bạn tìm kiếm không tồn tại hoặc đã bị di chuyển.
      </p>
      <a
        href="/"
        style={{
          padding: "10px 28px",
          background: "#2176ae",
          color: "#fff",
          borderRadius: "6px",
          textDecoration: "none",
          fontWeight: "bold",
          fontSize: "18px",
          boxShadow: "0 2px 8px #2176ae22",
        }}
      >
        Quay về trang chủ
      </a>
    </div>
  );
};

export default NotFoundPage;
