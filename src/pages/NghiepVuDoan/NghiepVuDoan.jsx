import React from "react";

const imageList = [
  require("../../assets/VanBan/NghiepVuDoan/3. HD Mß╗Öt sß╗æ nß╗Öi dung vß╗ü nghiß╗çp vß╗Ñ c├┤ng t├íc ─æo├án vi├¬n-2023-images-0.jpg"),
  require("../../assets/VanBan/NghiepVuDoan/3. HD Mß╗Öt sß╗æ nß╗Öi dung vß╗ü nghiß╗çp vß╗Ñ c├┤ng t├íc ─æo├án vi├¬n-2023-images-1.jpg"),
  require("../../assets/VanBan/NghiepVuDoan/3. HD Mß╗Öt sß╗æ nß╗Öi dung vß╗ü nghiß╗çp vß╗Ñ c├┤ng t├íc ─æo├án vi├¬n-2023-images-2.jpg"),
  require("../../assets/VanBan/NghiepVuDoan/3. HD Mß╗Öt sß╗æ nß╗Öi dung vß╗ü nghiß╗çp vß╗Ñ c├┤ng t├íc ─æo├án vi├¬n-2023-images-3.jpg"),
  require("../../assets/VanBan/NghiepVuDoan/3. HD Mß╗Öt sß╗æ nß╗Öi dung vß╗ü nghiß╗çp vß╗Ñ c├┤ng t├íc ─æo├án vi├¬n-2023-images-4.jpg"),
  require("../../assets/VanBan/NghiepVuDoan/3. HD Mß╗Öt sß╗æ nß╗Öi dung vß╗ü nghiß╗çp vß╗Ñ c├┤ng t├íc ─æo├án vi├¬n-2023-images-5.jpg"),
  require("../../assets/VanBan/NghiepVuDoan/3. HD Mß╗Öt sß╗æ nß╗Öi dung vß╗ü nghiß╗çp vß╗Ñ c├┤ng t├íc ─æo├án vi├¬n-2023-images-6.jpg"),
  require("../../assets/VanBan/NghiepVuDoan/3. HD Mß╗Öt sß╗æ nß╗Öi dung vß╗ü nghiß╗çp vß╗Ñ c├┤ng t├íc ─æo├án vi├¬n-2023-images-7.jpg"),
  require("../../assets/VanBan/NghiepVuDoan/3. HD Mß╗Öt sß╗æ nß╗Öi dung vß╗ü nghiß╗çp vß╗Ñ c├┤ng t├íc ─æo├án vi├¬n-2023-images-8.jpg"),
  require("../../assets/VanBan/NghiepVuDoan/3. HD Mß╗Öt sß╗æ nß╗Öi dung vß╗ü nghiß╗çp vß╗Ñ c├┤ng t├íc ─æo├án vi├¬n-2023-images-9.jpg"),
  require("../../assets/VanBan/NghiepVuDoan/3. HD Mß╗Öt sß╗æ nß╗Öi dung vß╗ü nghiß╗çp vß╗Ñ c├┤ng t├íc ─æo├án vi├¬n-2023-images-10.jpg"),
  require("../../assets/VanBan/NghiepVuDoan/3. HD Mß╗Öt sß╗æ nß╗Öi dung vß╗ü nghiß╗çp vß╗Ñ c├┤ng t├íc ─æo├án vi├¬n-2023-images-11.jpg"),
  require("../../assets/VanBan/NghiepVuDoan/3. HD Mß╗Öt sß╗æ nß╗Öi dung vß╗ü nghiß╗çp vß╗Ñ c├┤ng t├íc ─æo├án vi├¬n-2023-images-12.jpg"),
  require("../../assets/VanBan/NghiepVuDoan/3. HD Mß╗Öt sß╗æ nß╗Öi dung vß╗ü nghiß╗çp vß╗Ñ c├┤ng t├íc ─æo├án vi├¬n-2023-images-13.jpg"),
  require("../../assets/VanBan/NghiepVuDoan/3. HD Mß╗Öt sß╗æ nß╗Öi dung vß╗ü nghiß╗çp vß╗Ñ c├┤ng t├íc ─æo├án vi├¬n-2023-images-14.jpg"),
  require("../../assets/VanBan/NghiepVuDoan/3. HD Mß╗Öt sß╗æ nß╗Öi dung vß╗ü nghiß╗çp vß╗Ñ c├┤ng t├íc ─æo├án vi├¬n-2023-images-15.jpg"),
  require("../../assets/VanBan/NghiepVuDoan/3. HD Mß╗Öt sß╗æ nß╗Öi dung vß╗ü nghiß╗çp vß╗Ñ c├┤ng t├íc ─æo├án vi├¬n-2023-images-16.jpg"),
  require("../../assets/VanBan/NghiepVuDoan/3. HD Mß╗Öt sß╗æ nß╗Öi dung vß╗ü nghiß╗çp vß╗Ñ c├┤ng t├íc ─æo├án vi├¬n-2023-images-17.jpg"),
  require("../../assets/VanBan/NghiepVuDoan/3. HD Mß╗Öt sß╗æ nß╗Öi dung vß╗ü nghiß╗çp vß╗Ñ c├┤ng t├íc ─æo├án vi├¬n-2023-images-18.jpg"),
  require("../../assets/VanBan/NghiepVuDoan/3. HD Mß╗Öt sß╗æ nß╗Öi dung vß╗ü nghiß╗çp vß╗Ñ c├┤ng t├íc ─æo├án vi├¬n-2023-images-19.jpg"),
  require("../../assets/VanBan/NghiepVuDoan/3. HD Mß╗Öt sß╗æ nß╗Öi dung vß╗ü nghiß╗çp vß╗Ñ c├┤ng t├íc ─æo├án vi├¬n-2023-images-20.jpg"),
  require("../../assets/VanBan/NghiepVuDoan/3. HD Mß╗Öt sß╗æ nß╗Öi dung vß╗ü nghiß╗çp vß╗Ñ c├┤ng t├íc ─æo├án vi├¬n-2023-images-21.jpg"),
  require("../../assets/VanBan/NghiepVuDoan/3. HD Mß╗Öt sß╗æ nß╗Öi dung vß╗ü nghiß╗çp vß╗Ñ c├┤ng t├íc ─æo├án vi├¬n-2023-images-22.jpg"),
  require("../../assets/VanBan/NghiepVuDoan/3. HD Mß╗Öt sß╗æ nß╗Öi dung vß╗ü nghiß╗çp vß╗Ñ c├┤ng t├íc ─æo├án vi├¬n-2023-images-23.jpg"),
  require("../../assets/VanBan/NghiepVuDoan/3. HD Mß╗Öt sß╗æ nß╗Öi dung vß╗ü nghiß╗çp vß╗Ñ c├┤ng t├íc ─æo├án vi├¬n-2023-images-24.jpg"),
  require("../../assets/VanBan/NghiepVuDoan/3. HD Mß╗Öt sß╗æ nß╗Öi dung vß╗ü nghiß╗çp vß╗Ñ c├┤ng t├íc ─æo├án vi├¬n-2023-images-25.jpg"),
  require("../../assets/VanBan/NghiepVuDoan/3. HD Mß╗Öt sß╗æ nß╗Öi dung vß╗ü nghiß╗çp vß╗Ñ c├┤ng t├íc ─æo├án vi├¬n-2023-images-26.jpg"),
  require("../../assets/VanBan/NghiepVuDoan/3. HD Mß╗Öt sß╗æ nß╗Öi dung vß╗ü nghiß╗çp vß╗Ñ c├┤ng t├íc ─æo├án vi├¬n-2023-images-27.jpg"),
  require("../../assets/VanBan/NghiepVuDoan/3. HD Mß╗Öt sß╗æ nß╗Öi dung vß╗ü nghiß╗çp vß╗Ñ c├┤ng t├íc ─æo├án vi├¬n-2023-images-28.jpg"),
  require("../../assets/VanBan/NghiepVuDoan/3. HD Mß╗Öt sß╗æ nß╗Öi dung vß╗ü nghiß╗çp vß╗Ñ c├┤ng t├íc ─æo├án vi├¬n-2023-images-29.jpg"),
  require("../../assets/VanBan/NghiepVuDoan/3. HD Mß╗Öt sß╗æ nß╗Öi dung vß╗ü nghiß╗çp vß╗Ñ c├┤ng t├íc ─æo├án vi├¬n-2023-images-30.jpg"),
];

const NghiepVuDoan = () => {
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
        HƯỚNG DẪN
        <br />
        MỘT SỐ NỘI DUNG VỀ NGHIỆP VỤ CÔNG TÁC ĐOÀN VIÊN
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

export default NghiepVuDoan;
