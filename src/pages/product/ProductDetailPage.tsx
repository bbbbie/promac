import React from "react";
import { ProductDetailInfo } from "../../features/products/detail/ProductDetailInfo";
import { ProductDetailMain } from "../../features/products/detail/ProductDetailMain";
import { ProductSidebar } from "../../features/products/detail/ProductSidebar";
import { OrderBanner } from "./../../components/layout/OrderBanner";

export const ProductDetailPage: React.FC = () => {
  return (
    <div className="w-full flex flex-col items-center bg-white pb-[100px]">
      {/* CONTAINER CHÍNH - Căn lề trái theo Header (78px) hoặc Breadcrumb (67px) */}
      {/* Tuy nhiên để căn giữa màn hình đẹp, ta dùng flex center */}
      <div
        className="flex flex-col mt-[40px]"
        style={{ width: "1319px", marginBottom: "100px" }}
      >
        {/* Width = 890 (Main) + 58 (Gap) + 371 (Sidebar) = 1319px */}

        {/* 1. THÔNG TIN TRÊN CÙNG (Breadcrumb + Tên + Giá) */}
        <ProductDetailInfo />

        {/* 2. BODY (Chia 2 cột) */}
        <div className="flex flex-row items-start gap-[58px]">
          {/* Cột Trái: Ảnh + Bài viết */}
          <div className="flex-shrink-0">
            <ProductDetailMain />
          </div>

          {/* Cột Phải: Sidebar */}
          {/* Flex-shrink-0 để đảm bảo kích thước cố định 371px */}
          <div className="flex-shrink-0">
            <ProductSidebar />
          </div>
        </div>
      </div>
      <OrderBanner />
    </div>
  );
};
