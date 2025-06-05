import React, { useEffect, useState } from "react";
import data from "../../data.json";
import { useParams } from "react-router-dom";

const VanBan = () => {
  const { path } = useParams();
  const [pageData, setPageData] = useState(null);

  console.log(path);
  useEffect(() => {
    // Tìm đối tượng trang từ data.json dựa trên path

    const currentPage = data.find((page) => page.path === path);
    console.log(currentPage);
    if (currentPage) {
      setPageData(currentPage);
    }
  }, [path]);

  console.log(pageData);

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
          textTransform: "uppercase",
        }}
        dangerouslySetInnerHTML={{ __html: pageData?.header }}
      ></h1>
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
        {pageData?.images &&
          pageData.images.map((img, idx) => (
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
                src={`${process.env.PUBLIC_URL}/assets/VanBan/${pageData.page}/${img}`}
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
                  e.currentTarget.style.boxShadow =
                    "0 4px 24px rgba(0,0,0,0.13)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.boxShadow =
                    "0 2px 12px rgba(0,0,0,0.08)";
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

export default VanBan;
