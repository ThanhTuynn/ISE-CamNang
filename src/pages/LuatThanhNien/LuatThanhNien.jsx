import React from "react";

const imageList = [
  require("../../assets/VanBan/LuatThanhNien/Luat-Thanh-nien-2020-images-0.jpg"),
  require("../../assets/VanBan/LuatThanhNien/Luat-Thanh-nien-2020-images-1.jpg"),
  require("../../assets/VanBan/LuatThanhNien/Luat-Thanh-nien-2020-images-2.jpg"),
  require("../../assets/VanBan/LuatThanhNien/Luat-Thanh-nien-2020-images-3.jpg"),
  require("../../assets/VanBan/LuatThanhNien/Luat-Thanh-nien-2020-images-4.jpg"),
  require("../../assets/VanBan/LuatThanhNien/Luat-Thanh-nien-2020-images-5.jpg"),
  require("../../assets/VanBan/LuatThanhNien/Luat-Thanh-nien-2020-images-6.jpg"),
  require("../../assets/VanBan/LuatThanhNien/Luat-Thanh-nien-2020-images-7.jpg"),
  require("../../assets/VanBan/LuatThanhNien/Luat-Thanh-nien-2020-images-8.jpg"),
  require("../../assets/VanBan/LuatThanhNien/Luat-Thanh-nien-2020-images-9.jpg"),
  require("../../assets/VanBan/LuatThanhNien/Luat-Thanh-nien-2020-images-10.jpg"),
  require("../../assets/VanBan/LuatThanhNien/Luat-Thanh-nien-2020-images-11.jpg"),
  require("../../assets/VanBan/LuatThanhNien/Luat-Thanh-nien-2020-images-12.jpg"),
  require("../../assets/VanBan/LuatThanhNien/Luat-Thanh-nien-2020-images-13.jpg"),
];

const LuatThanhNien = () => {
  return (
    <div
      style={{
        background: "linear-gradient(135deg, #f8f6f3 60%, #e3e9f7 100%)",
        minHeight: "100vh",
        padding: "40px 0",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          marginBottom: 10,
          fontWeight: 700,
          letterSpacing: 1,
          color: "#be8228",
        }}
      >
        LUẬT THANH NIÊN
      </h1>
      <div style={{ marginBottom: 32 }}></div>
      <div
        style={{
          maxWidth: 900,
          margin: "0 auto",
          background: "#fff",
          borderRadius: 16,
          boxShadow: "0 4px 24px rgba(0,0,0,0.10)",
          padding: 32,
          maxHeight: 800,
          overflowY: "auto",
          scrollBehavior: "smooth",
        }}
      >
        {imageList.map((img, idx) => (
          <div
            key={idx}
            style={{
              marginBottom: 32,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <img
              src={img}
              alt={`Trang ${idx + 1}`}
              style={{
                width: "100%",
                maxWidth: 800,
                borderRadius: 8,
                boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
                border: "1.5px solid #e3e9f7",
                transition: "transform 0.2s, box-shadow 0.2s",
                background: "#f8f8fa",
                cursor: "pointer",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = "scale(1.015)";
                e.currentTarget.style.boxShadow = "0 4px 24px rgba(0,0,0,0.13)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow = "0 2px 12px rgba(0,0,0,0.08)";
              }}
            />
            <div
              style={{
                marginTop: 8,
                color: "#888",
                fontSize: 15,
                fontStyle: "italic",
                letterSpacing: 0.5,
              }}
            >
              Trang {idx + 1}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LuatThanhNien;
