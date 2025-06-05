import React from "react";
import { Link, useParams } from "react-router-dom";
import data from "../../data.json";
// import logo from "../../assets/Logo/[_] biểu trưng final.png";
// import LuatThanhNien from "../../assets/Logo/LuatThanhNien.png";
// import DieuLeDoanTNCS from "../../assets/Logo/LogoDoan.png";
// import TheThucVanBan from "../../assets/Logo/TheThucVanBan.png";
// import NghiepVuDoan from "../../assets/Logo/NghiepVuDoan.png";
// import NghiQuyetCongNghe from "../../assets/Logo/NghiQuyetCongNghe.png";

import "./HomePage.scss";

const items = [
  {
    title: "Điều lệ Đoàn TNCS Hồ Chí Minh",
    img: `${process.env.PUBLIC_URL}/assets/Logo/LogoDoan.png`,
    link: "/van-ban/dieu-le-doan-tncs",
  },
  {
    title: "Thể thức văn bản của Đoàn TNCS Hồ Chí Minh",
    img: `${process.env.PUBLIC_URL}/assets/Logo/TheThucVanBan.png`,
    link: "/van-ban/the-thuc-van-ban-cua-doan-tncs-ho-chi-minh",
  },
  {
    title: "Hướng dẫn Một số nội dung về nghiệp vụ công tác đoàn viên",
    img: `${process.env.PUBLIC_URL}/assets/Logo/NghiepVuDoan.png`,
    link: "/van-ban/huong-dan-mot-so-noi-dung-ve-nghiep-vu-cong-tac-doan-vien",
  },
  {
    title: "Luật Thanh niên",
    img: `${process.env.PUBLIC_URL}/assets/Logo/LuatThanhNien.png`,
    link: "/van-ban/luat-thanh-nien-2020",
  },
  {
    title:
      "Nghị quyết của Bộ Chính trị Về đột phá phát triển khoa học, công nghệ, đổi mới sáng tạo và chuyển đổi số quốc gia",
    img: `${process.env.PUBLIC_URL}/assets/Logo/NghiQuyetCongNghe.png`,
    link: "/van-ban/nghi-quyet-cua-bo-chinh-tri-ve-dot-pha-phat-trien-khoa-hoc-cong-nghe-doi-moi-sang-tao-va-chuyen-doi-so-quoc-gia",
  },
];

const HomePage = () => {
  const { path } = useParams();
  console.log(path);
  return (
    <div className="homepage">
      <main className="homepage-main">
        <h1 className="homepage-title">CẨM NANG THANH NIÊN THỜI ĐẠI MỚI</h1>
        <div className="homepage-grid">
          {data.map((item, idx) => (
            <Link
              to={`/van-ban/${item.path}`}
              className="homepage-item"
              key={idx}
            >
              <img
                src={`${process.env.PUBLIC_URL}/assets/Logo/${item.imgTitle}`}
                alt={item.title}
                className="homepage-item-img"
              />
              <div
                className="homepage-item-title"
                dangerouslySetInnerHTML={{ __html: item?.header }}
              >
                {item.title ===
                "Hướng dẫn Một số nội dung về nghiệp vụ công tác đoàn viên" ? (
                  <>
                    Hướng dẫn một số nội dung về
                    <br />
                    nghiệp vụ công tác đoàn viên
                  </>
                ) : item.title ===
                  "Thể thức văn bản của Đoàn TNCS Hồ Chí Minh" ? (
                  <>
                    Thể thức văn bản của
                    <br />
                    Đoàn TNCS Hồ Chí Minh
                  </>
                ) : item.title ===
                  "Nghị quyết của Bộ Chính trị Về đột phá phát triển khoa học, công nghệ, đổi mới sáng tạo và chuyển đổi số quốc gia" ? (
                  <>
                    Nghị quyết của Bộ Chính trị
                    <br />
                    Về đột phá phát triển khoa học, công nghệ, đổi mới sáng tạo
                    và chuyển đổi số quốc gia
                  </>
                ) : (
                  item.title
                )}
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
};

export default HomePage;
