import React from "react";
import "./Footer.scss";
// import BieuTruong from "../../assets/Logo/[_] biểu trưng final.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-wrapper">
        <div className="footer-container">
          <div className="footer-left">
            <div className="header-logo">
              <img
                src={`${process.env.PUBLIC_URL}/assets/Logo/bieutrungfinal.png`}
                alt="BieuTrungDoan"
                className="logo-image"
              />
              <div className="logo-text">
                <p>ĐOÀN KHOA KHOA HỌC VÀ KỸ THUẬT THÔNG TIN</p>
                <p>NHIỆM KỲ 2024 - 2027</p>
              </div>
            </div>
            <p className="footer-desc">
              Cẩm nang do Đoàn khoa Khoa học và Kỹ thuật Thông tin thực hiện và
              triển khai, nhằm đồng hành cùng đoàn viên, sinh viên trong hành
              trình rèn luyện, phát triển toàn diện và hội nhập trong thời đại
              mới.
            </p>
          </div>
          <div className="footer-right">
            <h4>VỀ CHÚNG TÔI</h4>
            <p>
              <strong>Địa chỉ:</strong> Tầng 10, Tòa E, Trường Đại học Công nghệ
              Thông tin, ĐHQG-HCM. Khu phố 6, Phường Linh Trung, Quận Thủ Đức,
              TP HCM
            </p>
            <p>
              <strong>Fanpage:</strong>{" "}
              <a
                href="https://www.facebook.com/UIT.ISE"
                target="_blank"
                rel="noopener noreferrer"
              >
                www.facebook.com/UIT.ISE
              </a>
            </p>
            <p>
              <strong>Email:</strong>{" "}
              <a href="mailto:bch.khkttt.uit@gmail.com">
                bch.khkttt.uit@gmail.com
              </a>
            </p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>
            © 2025, Website Cẩm nang Thanh niên Thời đại mới - Đoàn khoa Khoa
            học và Kỹ thuật Thông tin
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
