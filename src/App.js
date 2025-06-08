import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import DefaultComponent from "./components/DefaultComponent/DefaultComponent";
import HomePage from "./pages/HomePage/HomePage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import TheThucVanBan from "./pages/VanBan/VanBan";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route element={<DefaultComponent />}>
            <Route key={"/"} path={"/"} element={<HomePage />} />
            <Route key={"*"} path={"*"} element={<NotFoundPage />} />
            <Route
              path={`/van-ban/:path`}
              element={<TheThucVanBan />}
            />
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;