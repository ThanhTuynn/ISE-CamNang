import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/Logo/[_] biểu trưng final.png";
import LuatThanhNien from "../../assets/Logo/LuatThanhNien.png";
import DieuLeDoanTNCS from "../../assets/Logo/LogoDoan.png";
import TheThucVanBan from "../../assets/Logo/TheThucVanBan.png";
import NghiepVuDoan from "../../assets/Logo/NghiepVuDoan.png";
import NghiQuyetCongNghe from "../../assets/Logo/NghiQuyetCongNghe.png";

import "./HomePage.scss";

const items = [
  {
    title: "Điều lệ Đoàn TNCS Hồ Chí Minh",
    img: DieuLeDoanTNCS,
    link: "/van-ban/dieu-le-doan-tncs",
  },
  {
    title: "Thể thức văn bản của Đoàn TNCS Hồ Chí Minh",
    img: TheThucVanBan,
    link: "/van-ban/the-thuc-van-ban-cua-doan-tncs-ho-chi-minh",
  },
  {
    title: "Hướng dẫn Một số nội dung về nghiệp vụ công tác đoàn viên",
    img: NghiepVuDoan,
    link: "/van-ban/huong-dan-mot-so-noi-dung-ve-nghiep-vu-cong-tac-doan-vien",
  },
  {
    title: "Luật Thanh niên",
    img: LuatThanhNien,
    link: "/van-ban/luat-thanh-nien-2020",
  },
  {
    title:
      "Nghị quyết của Bộ Chính trị Về đột phá phát triển khoa học, công nghệ, đổi mới sáng tạo và chuyển đổi số quốc gia",
    img: NghiQuyetCongNghe,
    link: "/van-ban/nghi-quyet-cua-bo-chinh-tri-ve-dot-pha-phat-trien-khoa-hoc-cong-nghe-doi-moi-sang-tao-va-chuyen-doi-so-quoc-gia",
  },
  { title: "Điều lệ Đoàn TNCS Hồ Chí Minh", img: logo, link: "/van-ban/6" },
];

const HomePage = () => {
  return (
    <div className="homepage">
      <main className="homepage-main">
        <h1 className="homepage-title">CẨM NANG THANH NIÊN THỜI ĐẠI MỚI</h1>
        <div className="homepage-grid">
          {items.map((item, idx) => (
            <Link to={item.link} className="homepage-item" key={idx}>
              <img
                src={item.img}
                alt={item.title}
                className="homepage-item-img"
              />
              <div className="homepage-item-title">
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
