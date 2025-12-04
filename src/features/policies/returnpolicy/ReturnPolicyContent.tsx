import React from "react";
import policy1Img from "../../../assets/policy/policy1.png";
import policy2Img from "../../../assets/policy/policy2.jpg";
import policy4Img from "../../../assets/policy/policy4.jpg";
import policy6Img from "../../../assets/policy/policy6.jpg";

const RETURN_TERMS = [
  {
    id: 1,
    title: "ĐIỀU 1: THÔNG TIN KHÁCH HÀNG CHÍNH XÁC",
    content: [
      "Khi đặt hàng, quý khách vui lòng cung cấp đầy đủ thông tin...",
      "- Quý khách hàng phải cung cấp đầy đủ thông tin...",
      "- Những trường hợp điền thiếu thông tin...",
    ],
    image: policy1Img,
  },
  {
    id: 2,
    title: "ĐIỀU 2: BẢO MẤT THÔNG TIN KHÁCH HÀNG",
    content: [
      "Mọi thông tin cá nhân của khách hàng...",
      "Nguyên tắc Bảo mật Nâng cao...",
      "Trong trường hợp cơ quan pháp luật...",
    ],
    image: policy2Img,
  },
  {
    id: 3,
    title: "ĐIỀU 3: CAM KẾT SẢN PHẨM TRÍ TUỆ",
    content: ["Công ty Promac cam kết sáng tạo..."],
    image: null,
  },
  {
    id: 4,
    title: "ĐIỀU 4: BÀN GIAO DỮ LIỆU & LƯU TRỮ FILE GỐC",
    content: [
      "Sau khi hoàn thiện và nghiệm thu đơn hàng...",
      "Quý khách hàng vui lòng lưu trữ lại file gốc...",
      "Trường hợp khách hàng có nhu cầu lưu trữ dài hạn...",
    ],
    image: policy4Img,
  },
  {
    id: 5,
    title: "ĐIỀU 5: LƯU TRỮ HÀNG HOÁ VẬT LÝ",
    content: [
      "Đối với những đơn hàng đã hoàn tất...",
      "- Nếu khách hàng có nhu cầu nhờ lưu trữ...",
    ],
    image: null,
  },
  {
    id: 6,
    title: "ĐIỀU 6: NỘI DUNG VI PHẠM & PHÁP LÝ",
    content: [
      "Công ty Promac có quyền từ chối...",
      "- Cung cấp nội dung cá nhân sai...",
      "- Nội dung in ấn tuyên truyền...",
    ],
    image: policy6Img,
  },
  {
    id: 7,
    title: "ĐIỀU 7: CẬP NHẬP NỘI DUNG",
    content: ["Công ty Promac có thể thay đổi..."],
    image: null,
  },
];

export const ReturnPolicyContent: React.FC = () => {
  return (
    <section className="w-full flex justify-center pb-[60px] lg:pb-[100px]">
      {/* MOBILE */}
      <div className="flex flex-col items-center w-full lg:hidden px-[20px]">
        <div className="flex flex-col items-center bg-white rounded-[50px] shadow-[0px_12px_8px_rgba(0,0,0,0.25)] w-full max-w-[375px] px-[23px] py-[47px]">
          <h2 className="font-inter font-bold text-[28px] leading-[34px] text-[#000000] text-center mb-[40px]">
            Chính Sách Đổi Trả Hàng Hóa
          </h2>
          <div className="flex flex-col gap-[40px] w-full">
            {RETURN_TERMS.map((term) => (
              <div key={term.id} className="flex flex-col w-full items-end">
                {/* Title Mobile - ĐÃ SỬA text-left */}
                <div className="relative w-full h-[45px] mb-[24px]">
                  <div className="absolute left-[4px] top-0 w-[3px] h-[31px] bg-[#FF0000] -rotate-1"></div>
                  <h3 className="mr-[-30px] absolute right-0 top-[1px] w-[306px] font-roboto font-extrabold text-[18px] leading-[120%] text-[#FF0000] uppercase text-left">
                    {term.title}
                  </h3>
                </div>
                <div className="w-full mb-[24px]">
                  {term.content.map((paragraph, idx) => {
                    const isBullet = paragraph.trim().startsWith("-");
                    const displayText = isBullet
                      ? paragraph.replace("-", "").trim()
                      : paragraph;
                    return (
                      <p
                        key={idx}
                        className="font-inter font-normal text-[15px] leading-[28px] text-[#000000] mb-[10px] text-left"
                      >
                        {isBullet ? `• ${displayText}` : displayText}
                      </p>
                    );
                  })}
                </div>
                {term.image && (
                  <div className="w-full h-[159px] rounded-[12px] overflow-hidden bg-gray-200">
                    <img
                      src={term.image}
                      alt={term.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* DESKTOP */}
      <div
        className="hidden lg:flex relative bg-white flex-col items-center"
        style={{
          width: "1376px",
          minHeight: "1000px",
          boxShadow: "0px 12px 8px rgba(0, 0, 0, 0.25)",
          borderRadius: "50px",
          padding: "50px 60px 80px 60px",
        }}
      >
        <h2
          className="font-inter font-semibold text-center text-[#253D4E]"
          style={{
            width: "1252px",
            fontSize: "40px",
            lineHeight: "48px",
            marginBottom: "60px",
          }}
        >
          Chính Sách Đổi Trả Hàng Hóa
        </h2>
        <div className="flex flex-col gap-[60px] w-full max-w-[1252px]">
          {RETURN_TERMS.map((term) => (
            <div key={term.id} className="flex flex-col w-full">
              <div className="flex items-start gap-[15px] mb-[20px]">
                <div
                  style={{
                    width: "3px",
                    height: "29px",
                    backgroundColor: "#FF0000",
                    transform: "rotate(-0.92deg)",
                    marginTop: "2px",
                  }}
                />
                <h2
                  className="font-roboto font-extrabold text-[#FF0000] uppercase"
                  style={{ fontSize: "24px", lineHeight: "120%" }}
                >
                  {term.title}
                </h2>
              </div>
              <div className="pl-[20px] mb-[40px]">
                {term.content.map((paragraph, idx) => {
                  const isBullet = paragraph.trim().startsWith("-");
                  const displayText = isBullet
                    ? paragraph.replace("-", "").trim()
                    : paragraph;
                  if (isBullet) {
                    return (
                      <ul key={idx} className="list-disc pl-8 mb-[10px]">
                        <li
                          className="font-lexend font-light text-black text-justify"
                          style={{ fontSize: "20px", lineHeight: "28px" }}
                        >
                          {displayText}
                        </li>
                      </ul>
                    );
                  }
                  return (
                    <p
                      key={idx}
                      className="font-lexend font-light text-black mb-[10px] text-justify"
                      style={{ fontSize: "20px", lineHeight: "28px" }}
                    >
                      {displayText}
                    </p>
                  );
                })}
              </div>
              {term.image && (
                <div className="w-full flex justify-center mb-[40px]">
                  <div
                    className="overflow-hidden flex items-center justify-center"
                    style={{
                      width: "937px",
                      height: "462px",
                      borderRadius: "12px",
                      boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.1)",
                    }}
                  >
                    <img
                      src={term.image}
                      alt={term.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
