// import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
// import HomePage from "../pages/HomePage/HomePage";
import LuatThanhNien from "../pages/LuatThanhNien/LuatThanhNien";
import DieuLeDoan from "../pages/DieuLeDoanTNCS/DieuLeDoanTNCS";
import TheThucVanBan from "../pages/VanBan/VanBan";
import NghiepVuDoan from "../pages/NghiepVuDoan/NghiepVuDoan";
import NghiQuyetCongNghe from "../pages/NghiQuyetCongNghe/NghiQuyetCongNghe";

const routes = [
  // {
  //   path: "*",
  //   page: NotFoundPage,
  //   isShowHeader: true,
  // },
  // {
  //   path: "/",
  //   page: HomePage,
  //   isShowHeader: true,
  // },
  {
    path: "/van-ban/luat-thanh-nien-2020",
    page: LuatThanhNien,
    isShowHeader: true,
  },
  {
    path: "/van-ban/dieu-le-doan-tncs",
    page: DieuLeDoan,
    isShowHeader: true,
  },
  {
    path: "/van-ban/the-thuc-van-ban-cua-doan-tncs-ho-chi-minh",
    page: TheThucVanBan,
    isShowHeader: true,
  },
  {
    path: "/van-ban/huong-dan-mot-so-noi-dung-ve-nghiep-vu-cong-tac-doan-vien",
    page: NghiepVuDoan,
    isShowHeader: true,
  },
  {
    path: "/van-ban/nghi-quyet-cua-bo-chinh-tri-ve-dot-pha-phat-trien-khoa-hoc-cong-nghe-doi-moi-sang-tao-va-chuyen-doi-so-quoc-gia",
    page: NghiQuyetCongNghe,
    isShowHeader: true,
  },
];

export default routes;
