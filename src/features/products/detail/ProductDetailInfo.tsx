import React from "react";
import { ChevronRight } from "lucide-react";

export const ProductDetailInfo: React.FC = () => {
  return (
    // Container tổng: padding-left 12px để "nhích vào trong tí" so với mép ảnh
    <div className="flex flex-col items-start w-full pl-[12px] mb-[60px]">
      {/* 1. BREADCRUMB (Frame 12654) */}
      <div className="flex items-center gap-[8px] mb-[40px] h-[24px]">
        <div className="flex items-center gap-[8px] text-[#8E8E8E]">
          <span className="font-inter font-normal text-[16px] whitespace-nowrap">
            Trang chủ
          </span>
          <ChevronRight size={16} />
        </div>
        <div className="flex items-center gap-[8px] text-[#7E7E7E]">
          <span className="font-quicksand font-normal text-[16px] whitespace-nowrap">
            Dịch vụ & Sản phẩm
          </span>
          <ChevronRight size={16} />
        </div>
        <div className="flex items-center gap-[8px] text-[#9E9E9E]">
          <span className="font-inter font-normal text-[16px] whitespace-nowrap">
            Danh mục sản phẩm
          </span>
          <ChevronRight size={16} />
        </div>
        <div className="flex items-center">
          <span className="font-inter font-normal text-[16px] truncate text-[rgba(255,0,0,0.8)]">
            Best smartwatch 2022: the top wearables you can buy today
          </span>
        </div>
      </div>

      {/* 2. HEADER INFO (Frame 1618873021) - CHUẨN GAP 12PX */}
      <div
        className="flex flex-col items-start"
        style={{
          width: "1307px",
          height: "176px",
          gap: "12px", // <--- QUAN TRỌNG: Khoảng cách chuẩn giữa Tag - Title - Price
        }}
      >
        {/* Tag (1548) */}
        <span
          className="flex items-center font-bold text-[16px] text-[#FF0000] leading-[19px]"
          style={{ fontFamily: "Quicksand", height: "20px" }}
        >
          In Ấn Bao Bì
        </span>

        {/* Title (412) */}
        <h1
          className="flex items-center font-semibold text-[40px] text-[#253D4E] leading-[48px]"
          style={{
            fontFamily: "Inter",
            width: "1307px",
            height: "98px",
          }}
        >
          Best smartwatch 2022: the top wearables you can buy today
        </h1>

        {/* Prices (prices) */}
        <div
          className="flex flex-row items-start gap-[5px]"
          style={{
            width: "239px",
            height: "34px",
            padding: "5px 3px",
          }}
        >
          {/* Old Price */}
          <span
            className="font-montserrat font-bold text-[20px] text-[#BDBDBD] text-center tracking-[0.1px]"
            style={{ width: "106px", textAlign: "left" }}
          >
            45.000đ
          </span>

          {/* New Price */}
          <span
            className="font-montserrat font-bold text-[20px] text-[#FF0000] text-center tracking-[0.1px]"
            style={{ width: "122px", textAlign: "left" }}
          >
            39.000đ/cái
          </span>
        </div>
      </div>
    </div>
  );
};
