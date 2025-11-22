// src/App.tsx
import { Routes, Route } from "react-router-dom";
import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";
import { HomePage } from "./pages/HomePage";
import { IntroPage } from "./pages/IntroPage";

function App() {
  return (
    // SỬA Ở ĐÂY:
    // 1. Xóa 'py-10' (padding trên dưới) nếu bạn muốn sát rạt cả trên lẫn dưới.
    // 2. Hoặc đổi thành 'pt-10 pb-0' nếu bạn muốn cách ở trên nhưng sát ở dưới.
    // 3. Thêm 'justify-start' thay vì 'justify-center' để đảm bảo nó bắt đầu từ trên cùng.
    <main className="min-h-screen w-full bg-black flex flex-col items-center overflow-x-hidden pt-10 pb-0">
      {" "}
      {/* <--- Đã sửa pb-0 */}
      {/* TỜ GIẤY TRẮNG */}
      <div
        className="bg-white flex flex-col relative shadow-2xl"
        // Thêm mb-0 để chắc chắn không có margin dưới
        style={{
          width: "1440px",
          minHeight: "100vh",
          maxWidth: "100%",
          marginBottom: 0,
        }}
      >
        <Header />

        <div className="flex-grow flex flex-col w-full">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/gioi-thieu" element={<IntroPage />} />
            <Route path="*" element={<HomePage />} />
          </Routes>
        </div>

        {/* Footer */}
        <div className="w-full overflow-hidden">
          <Footer />
        </div>
      </div>
    </main>
  );
}

export default App;
