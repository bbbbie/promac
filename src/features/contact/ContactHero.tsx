
// src/features/contact/ContactHero.tsx
import React from "react";
import { Phone, Mail, MapPin, MessageSquare, Clock, Globe } from "lucide-react";

// --- DATA (Dùng chung cấu trúc với HomeBanner để đồng bộ nội dung) ---
const CONTACT_DATA = {
  header: "LIÊN HỆ & TƯ VẤN KỸ THUẬT",
  subHeader: "Chúng tôi sẵn sàng hỗ trợ bạn qua Hotline, Email, hoặc trực tiếp tại văn phòng.",
  address: "236/59 Điện Biên Phủ, Phường 17, Q. Bình Thạnh, TP.HCM",
  email: "info@promacprinting.com",
  phones: ["(028) 22272416", "0906838869"],
};

export const ContactHero: React.FC = () => {
  return (
    // Wrapper ngoài cùng: Canh lề y hệt HomeBanner
    <div className="w-full flex justify-center bg-white ">
      
      {/* =========================================================================
          1. MOBILE & TABLET VERSION (< 1024px)
          - Layout dọc (Flex Column) - Copy margin/padding từ HomeBanner mobile
         ========================================================================= */}
      <div className="flex lg:hidden flex-col w-full bg-[#FFD1D1] rounded-[20px] overflow-hidden shadow-lg relative pb-6">
        
        {/* --- Background Decor --- */}
        <div className="absolute top-[-100px] right-[-100px] w-[300px] h-[300px] bg-red-500 rounded-full opacity-5 z-0 pointer-events-none"></div>

        <div className="flex flex-col items-center pt-8 px-6 z-10 relative">
          <h1 className="font-bold text-[28px] leading-tight text-[#FF0000] text-center mb-6">
            {CONTACT_DATA.header}
          </h1>

          {/* VISUAL ANIMATION MOBILE (Thay thế cho cụm ảnh) */}
          <div className="relative w-[280px] h-[280px] mb-6 flex justify-center items-center">
             {/* Vòng tròn chính */}
             <div className="absolute w-[200px] h-[200px] bg-white rounded-full shadow-md flex items-center justify-center z-10">
                <img 
                  src="https://promacprinting.com/wp-content/uploads/2022/08/logo-promac-in-the-cao-1.png" 
                  alt="Promac"
                  className="w-[70%] opacity-90"
                  onError={(e) => (e.currentTarget.style.display = 'none')}
                />
             </div>
             {/* Các icon bay xung quanh (Animation) */}
             <div className="absolute top-0 right-4 w-12 h-12 bg-red-500 rounded-xl flex items-center justify-center text-white shadow-lg animate-bounce-custom z-20">
                <Phone size={20} />
             </div>
             <div className="absolute bottom-4 left-4 w-12 h-12 bg-white border border-red-100 rounded-full flex items-center justify-center text-red-500 shadow-lg animate-bounce-custom z-20" style={{animationDelay: '1s'}}>
                <Mail size={20} />
             </div>
          </div>

          {/* Box trắng subtitle */}
          <div className="bg-white rounded-[20px] px-4 py-3 shadow-sm w-full mb-6">
             <p className="font-semibold text-[15px] text-center text-[#374151] leading-snug">
               {CONTACT_DATA.subHeader}
             </p>
          </div>

          {/* Thay thế nút bấm bằng Badge thông tin */}
          <div className="flex flex-wrap justify-center gap-3 w-full mb-4">
             <div className="flex items-center gap-2 bg-white/80 px-4 py-2 rounded-full shadow-sm">
                <Clock size={16} className="text-red-500" />
                <span className="text-[14px] font-medium text-gray-700">Phản hồi nhanh</span>
             </div>
             <div className="flex items-center gap-2 bg-white/80 px-4 py-2 rounded-full shadow-sm">
                <Globe size={16} className="text-red-500" />
                <span className="text-[14px] font-medium text-gray-700">Hỗ trợ toàn quốc</span>
             </div>
          </div>
        </div>

        {/* Footer Mobile (Thông tin liên hệ) - Copy y hệt HomeBanner */}
        <div className="mt-6 mx-4 bg-white rounded-[15px] p-4 flex flex-col gap-3 z-20">
           <div className="flex items-start gap-3">
              <MapPin className="text-[#FF0000] w-5 h-5 shrink-0 mt-1" />
              <span className="text-[13px] text-gray-600">{CONTACT_DATA.address}</span>
           </div>
           <div className="flex items-center gap-3">
              <Mail className="text-[#FF0000] w-5 h-5 shrink-0" />
              <span className="text-[13px] text-gray-600 break-all">{CONTACT_DATA.email}</span>
           </div>
           <div className="flex items-center gap-3">
              <Phone className="text-[#FF0000] w-5 h-5 shrink-0" />
              <div className="text-[13px] text-gray-600">
                 <span>{CONTACT_DATA.phones[0]}</span> | <span>{CONTACT_DATA.phones[1]}</span>
              </div>
           </div>
        </div>
      </div>

      {/* =========================================================================
          2. DESKTOP VERSION (>= 1024px)
          - Sử dụng đúng cấu trúc DOM và Class của HomeBanner
          - hidden lg:flex
         ========================================================================= */}
      <div className="hidden lg:flex w-full bg-[#FFD1D1] rounded-[30px] relative overflow-hidden shadow-lg flex-col min-h-[600px] m-8">
        
        {/* --- PHẦN BODY (Flex Row) --- */}
        <div className="flex w-full h-full flex-grow relative z-10">
          
          {/* CỘT TRÁI: TEXT CONTENT - Copy Padding chính xác */}
          <div className=" w-[60%] pt-[40px] pl-[30px] lg:pl-[50px] xl:pl-[80px] flex flex-col justify-start gap-6 z-20">
            <h1 className=" mt-5 font-inter font-bold text-[30px] lg:text-[40px] leading-tight text-[#FF0000]">
              {CONTACT_DATA.header}
            </h1>

            {/* Subheader Box */}
            <div className="bg-white rounded-full  px-8 py-4 shadow-sm w-fit max-w-[90%]">
              <p className="font-bold text-[16px] lg:text-[20px] text-black tracking-wide text-center">
                {CONTACT_DATA.subHeader}
              </p>
            </div>

            {/* Extra Info Badges (Thay thế khoảng trống của nút bấm) */}
            <div className="flex flex-col gap-4 mt-4 pl-2">
                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm text-red-500">
                        <Clock size={24} />
                    </div>
                    <div>
                        <h3 className="font-bold text-gray-800 text-[18px]">Thời gian làm việc</h3>
                        <p className="text-gray-600 text-[16px]">Thứ 2 - Thứ 7: 8:00 - 17:30</p>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm text-blue-500">
                        <MessageSquare size={24} />
                    </div>
                    <div>
                        <h3 className="font-bold text-gray-800 text-[18px]">Tư vấn trực tuyến</h3>
                        <p className="text-gray-600 text-[16px]">Phản hồi nhanh qua Zalo/Email</p>
                    </div>
                </div>
            </div>
          </div>

          {/* CỘT PHẢI: VISUAL ANIMATION - Định vị absolute giống HomeBanner */}
          <div className="w-full lg:w-[45%] h-[300px] lg:h-auto flex items-center justify-center relative mt-6 lg:mt-0">
             
             {/* Center Circle */}
             <div className="relative w-[280px] h-[280px] lg:w-[350px] lg:h-[350px]">
                
                {/* Main Glassmorphism Card */}
                <div className="absolute inset-0 bg-white/40 backdrop-blur-md rounded-full border border-white/60 shadow-[0_8px_32px_rgba(255,0,0,0.1)] flex items-center justify-center z-10">
                   <img 
                    src="https://promacprinting.com/wp-content/uploads/2022/08/logo-promac-in-the-cao-1.png" 
                    alt="Promac Logo" 
                    className="w-[60%] opacity-90 drop-shadow-md"
                    onError={(e) => {
                        // Fallback nếu ảnh lỗi
                        (e.target as HTMLImageElement).style.display = 'none';
                    }} 
                   />
                   {/* Fallback Text nếu không có logo */}
                   <span className="hidden lg:block absolute text-[#FF0000]/10 font-black text-6xl select-none z-[-1]">PROMAC</span>
                </div>

                {/* Floating Icons (Animation) */}
                {/* Icon 1: Phone - Top Right */}
                <div className="absolute top-0 right-10 lg:right-4 w-16 h-16 bg-red-500 rounded-2xl flex items-center justify-center shadow-lg text-white animate-bounce-custom z-20" style={{ animationDelay: '0s' }}>
                   <Phone size={28} />
                </div>

                {/* Icon 2: Mail - Bottom Left */}
                <div className="absolute bottom-4 left-4 lg:left-0 w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-lg text-red-500 border border-red-100 animate-bounce-custom z-20" style={{ animationDelay: '1.5s' }}>
                   <Mail size={24} />
                </div>

                {/* Icon 3: Message - Right Middle */}
                <div className="absolute top-[40%] -right-4 lg:-right-8 w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center shadow-lg text-white animate-pulse z-20">
                   <MessageSquare size={20} />
                </div>

                {/* Orbit Circles (Trang trí vòng tròn xoay) */}
                <div className="absolute inset-[-20px] border-2 border-dashed border-red-200 rounded-full opacity-60 animate-spin-slow pointer-events-none" />
             </div>
          </div>
        </div>

        {/* FOOTER DESKTOP - Copy chính xác từ HomeBanner */}
        <div className="bg-white w-full h-[80px] flex items-center justify-between px-[60px] relative z-40 border-t border-red-50">
           <div className="flex items-center gap-3">
             <div className="w-8 h-8 rounded-full bg-[#FF0000] flex items-center justify-center text-white"><MapPin size={16} /></div>
             <span className="text-gray-600 font-medium text-[15px]">{CONTACT_DATA.address}</span>
           </div>
           <div className="flex items-center gap-3">
             <div className="w-8 h-8 rounded-full bg-[#FF0000] flex items-center justify-center text-white"><Mail size={16} /></div>
             <span className="text-gray-600 font-medium text-[15px] hover:text-red-500 transition-colors cursor-pointer">{CONTACT_DATA.email}</span>
           </div>
           <div className="flex items-center gap-3">
             <div className="w-8 h-8 rounded-full bg-[#FF0000] flex items-center justify-center text-white"><Phone size={16} /></div>
             <div className="text-gray-600 font-medium text-[15px]">
                 <span className="hover:text-red-500 transition-colors cursor-pointer">{CONTACT_DATA.phones[0]}</span> 
                 <span className="mx-1">|</span> 
                 <span className="hover:text-red-500 transition-colors cursor-pointer">{CONTACT_DATA.phones[1]}</span>
             </div>
           </div>
        </div>

      </div>

      {/* Styles cho Animation */}
      <style>{`
        @keyframes bounce-custom {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        .animate-bounce-custom {
          animation: bounce-custom 3s infinite ease-in-out;
        }
        .animate-spin-slow {
          animation: spin 15s linear infinite;
        }
      `}</style>
    </div>
  );
};