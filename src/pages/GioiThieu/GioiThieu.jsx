import React from "react";

const GioiThieu = () => (
  <div
    style={{
      background: "linear-gradient(135deg, #f8f6f3 60%, #e3e9f7 100%)",
      minHeight: "100vh",
      padding: "40px 0",
    }}
  >
    <div
      style={{
        maxWidth: 900,
        margin: "0 auto",
        background: "#fff",
        borderRadius: 16,
        boxShadow: "0 4px 24px rgba(0,0,0,0.10)",
        padding: 32,
      }}
    >
      <h1
        style={{
          textAlign: "center",
          color: "#be8228",
          fontWeight: 700,
          marginBottom: 24,
          textTransform: "uppercase",
          letterSpacing: 1,
        }}
      >
        Giới thiệu về <br/>Cẩm Nang Thanh Niên Thời Đại Mới
      </h1>
      <p style={{ fontSize: 18, marginBottom: 24, lineHeight: 1.7 }}>
        <b>Cẩm Nang Thanh Niên Thời Đại Mới</b> là bộ tài liệu tổng hợp các kiến
        thức, kỹ năng, quy định pháp luật và các thông tin hữu ích dành cho đoàn
        viên, thanh niên Việt Nam trong thời kỳ hội nhập và phát triển. Cẩm nang
        giúp các bạn trẻ hiểu rõ hơn về vai trò, trách nhiệm của mình đối với xã
        hội, đồng thời trang bị những kỹ năng cần thiết để phát triển bản thân,
        đóng góp cho cộng đồng và đất nước.
      </p>
      <p style={{ fontSize: 18, marginBottom: 32, lineHeight: 1.7 }}>
        Nội dung cẩm nang bao gồm các bộ luật quan trọng, điều lệ Đoàn, hướng
        dẫn nghiệp vụ, ý nghĩa các biểu tượng Đoàn, cùng nhiều chủ đề thiết thực
        khác. Đây là nguồn tham khảo tin cậy, đồng hành cùng thanh niên trên con
        đường lập thân, lập nghiệp và cống hiến.
      </p>
      <h2
        style={{
          color: "#1c597f",
          fontWeight: 700,
          marginBottom: 16,
          textTransform: "uppercase",
          letterSpacing: 1,
        }}
      >
        Giới thiệu về Đoàn khoa Khoa học và Kỹ thuật Thông tin
      </h2>
      <p style={{ fontSize: 18, marginBottom: 16, lineHeight: 1.7 }}>
        <b>Đoàn khoa Khoa học và Kỹ thuật Thông tin</b> (Đoàn Khoa KH&KTTT) trực
        thuộc Trường Đại học Công nghệ Thông tin, ĐHQG-HCM, là tổ chức chính trị
        - xã hội của đoàn viên trong khoa. Đoàn khoa là nơi tập hợp, đoàn kết,
        giáo dục và phát huy vai trò xung kích, sáng tạo của đoàn viên, thanh
        niên trong học tập, nghiên cứu khoa học, rèn luyện kỹ năng và tham gia
        các hoạt động cộng đồng.
      </p>
      <p style={{ fontSize: 18, marginBottom: 0, lineHeight: 1.7 }}>
        Đoàn khoa KH&KTTT luôn nỗ lực xây dựng môi trường năng động, sáng tạo,
        hỗ trợ sinh viên phát triển toàn diện về tri thức, kỹ năng và phẩm chất
        đạo đức, góp phần đào tạo nguồn nhân lực chất lượng cao cho ngành Công
        nghệ Thông tin và xã hội.
      </p>
    </div>
  </div>
);

export default GioiThieu;
