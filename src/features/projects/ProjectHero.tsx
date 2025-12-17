
// src/features/projects/ProjectHero.tsx
import React from "react";
import { 
  Phone, Mail, MapPin, 
  Printer, Layers, CheckCircle, Truck, Award 
} from "lucide-react";

// --- DATA ---
const PROJECT_DATA = {
  header: "KẾT QUẢ TỪ TRÁCH NHIỆM & KINH NGHIỆM",
  subHeader: "Khám phá danh mục dịch vụ in ấn cao cấp, được thiết kế để đáp ứng mọi nhu cầu kinh doanh và cá nhân của bạn.",
  address: "236/59 Điện Biên Phủ, Phường 17, Q. Bình Thạnh, TP.HCM",
  email: "info@promacprinting.com",
  phones: ["(028) 22272416", "0906838869"],
};

export const ProjectHero: React.FC = () => {
  return (
    // Wrapper ngoài cùng: Canh lề đồng bộ
    <div className="w-full flex justify-center bg-white ">
      
      {/* =========================================================================
          1. MOBILE & TABLET VERSION (< 1024px)
         ========================================================================= */}
      <div className="flex lg:hidden flex-col w-full bg-[#FFD1D1] rounded-[20px] overflow-hidden shadow-lg relative pb-6">
        
        {/* Background Decor */}
        <div className="absolute top-[-100px] right-[-100px] w-[300px] h-[300px] bg-red-500 rounded-full opacity-5 z-0 pointer-events-none"></div>

        <div className="flex flex-col items-center pt-8 px-6 z-10 relative">
          <h1 className="font-bold text-[26px] leading-tight text-[#FF0000] text-center mb-6">
            {PROJECT_DATA.header}
          </h1>

          {/* VISUAL ANIMATION MOBILE */}
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
             {/* Icons bay (Theme In ấn) */}
             <div className="absolute top-0 right-4 w-12 h-12 bg-red-500 rounded-xl flex items-center justify-center text-white shadow-lg animate-bounce-custom z-20">
                <Printer size={20} />
             </div>
             <div className="absolute bottom-4 left-4 w-12 h-12 bg-white border border-red-100 rounded-full flex items-center justify-center text-red-500 shadow-lg animate-bounce-custom z-20" style={{animationDelay: '1s'}}>
                <Layers size={20} />
             </div>
          </div>

          {/* Box Subtitle */}
          <div className="bg-white rounded-[20px] px-4 py-3 shadow-sm w-full mb-6">
             <p className="font-semibold text-[15px] text-center text-[#374151] leading-snug">
               {PROJECT_DATA.subHeader}
             </p>
          </div>

          {/* Badges Mobile */}
          <div className="flex flex-wrap justify-center gap-3 w-full mb-4">
             <div className="flex items-center gap-2 bg-white/80 px-4 py-2 rounded-full shadow-sm">
                <Award size={16} className="text-red-500" />
                <span className="text-[14px] font-medium text-gray-700">Chất lượng cao</span>
             </div>
             <div className="flex items-center gap-2 bg-white/80 px-4 py-2 rounded-full shadow-sm">
                <Truck size={16} className="text-red-500" />
                <span className="text-[14px] font-medium text-gray-700">Giao nhanh</span>
             </div>
          </div>
        </div>

        {/* Footer Mobile */}
        <div className="mt-6 mx-4 bg-white rounded-[15px] p-4 flex flex-col gap-3 z-20">
           <div className="flex items-start gap-3">
              <MapPin className="text-[#FF0000] w-5 h-5 shrink-0 mt-1" />
              <span className="text-[13px] text-gray-600">{PROJECT_DATA.address}</span>
           </div>
           <div className="flex items-center gap-3">
              <Mail className="text-[#FF0000] w-5 h-5 shrink-0" />
              <span className="text-[13px] text-gray-600 break-all">{PROJECT_DATA.email}</span>
           </div>
           <div className="flex items-center gap-3">
              <Phone className="text-[#FF0000] w-5 h-5 shrink-0" />
              <div className="text-[13px] text-gray-600">
                 <span>{PROJECT_DATA.phones[0]}</span> | <span>{PROJECT_DATA.phones[1]}</span>
              </div>
           </div>
        </div>
      </div>

      {/* =========================================================================
          2. DESKTOP VERSION (>= 1024px)
         ========================================================================= */}
      <div className="hidden lg:flex w-full bg-[#FFD1D1] rounded-[30px] relative overflow-hidden shadow-lg flex-col min-h-[600px] m-8">
        
        {/* --- BODY --- */}
        <div className="flex w-full h-full flex-grow relative z-10">
          
          {/* CỘT TRÁI: TEXT */}
          <div className="w-[60%] pt-[40px] pl-[30px] lg:pl-[50px] xl:pl-[80px] flex flex-col justify-start gap-6 z-20">
            <h1 className="mt-5 font-inter font-bold text-[30px] lg:text-[40px] leading-tight text-[#FF0000]">
              {PROJECT_DATA.header}
            </h1>

            {/* Subheader Box */}
            <div className="bg-white rounded-full  px-8 py-4 shadow-sm w-fit max-w-[90%]">
              <p className="font-bold text-[16px] lg:text-[20px] text-black tracking-wide text-center">
                {PROJECT_DATA.subHeader}
              </p>
            </div>

            {/* Feature Badges (Thay thế nút bấm) */}
            <div className="flex flex-col gap-4 mt-4 pl-2">
                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm text-red-500">
                        <Award size={24} />
                    </div>
                    <div>
                        <h3 className="font-bold text-gray-800 text-[18px]">Chất lượng cam kết</h3>
                        <p className="text-gray-600 text-[16px]">Chuẩn màu sắc & độ bền cao</p>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm text-blue-600">
                        <Truck size={24} />
                    </div>
                    <div>
                        <h3 className="font-bold text-gray-800 text-[18px]">Giao hàng đúng hẹn</h3>
                        <p className="text-gray-600 text-[16px]">Đáp ứng tiến độ khắt khe nhất</p>
                    </div>
                </div>
            </div>
          </div>

          {/* CỘT PHẢI: VISUAL ANIMATION */}
          <div className="absolute top-0 right-0 w-[50%] h-full z-10 pointer-events-none flex items-center justify-center">
             
             <div className="relative w-full h-full">
                {/* Background Glow */}
                <div className="absolute top-1/2 right-[-100px] transform -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-white/40 to-transparent border border-white/20"></div>

                {/* Center Logo Circle */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-[20%] -translate-y-1/2 w-[350px] h-[350px] rounded-full bg-white/40 backdrop-blur-md border border-white shadow-[0_8px_32px_rgba(255,0,0,0.05)] flex items-center justify-center z-30 pointer-events-auto">
                    <span className="absolute text-[#FF0000]/10 font-black text-6xl select-none z-0 tracking-widest">
                      PROMAC
                    </span>
                    <img 
                        src="https://promacprinting.com/wp-content/uploads/2022/08/logo-promac-in-the-cao-1.png" 
                        alt="Promac Logo" 
                        className="w-[65%] opacity-90 drop-shadow-lg"
                        onError={(e) => (e.currentTarget.style.display = 'none')}
                    />
                    <div className="absolute inset-[-20px] border border-dashed border-red-300 rounded-full animate-spin-slow opacity-50"></div>
                </div>

                {/* Floating Icons (In ấn & Layer) */}
                {/* Icon 1: Printer */}
                <div className="absolute top-[25%] right-[25%] w-[60px] h-[60px] bg-[#FF0000] rounded-2xl flex items-center justify-center text-white shadow-xl animate-bounce-custom z-40 pointer-events-auto">
                   <Printer size={32} />
                </div>
                
                {/* Icon 2: Layers */}
                <div className="absolute bottom-[25%] right-[40%] w-[60px] h-[60px] bg-white rounded-full flex items-center justify-center text-blue-600 shadow-xl border border-blue-50 animate-bounce-custom z-40 pointer-events-auto" style={{animationDelay: '1.5s'}}>
                   <Layers size={28} />
                </div>

                {/* Icon 3: Check */}
                <div className="absolute bottom-[32%] right-[15%] w-[50px] h-[50px] bg-white rounded-lg flex items-center justify-center text-green-500 shadow-lg animate-pulse z-30">
                   <CheckCircle size={24} />
                </div>
             </div>
          </div>
        </div>

        {/* FOOTER DESKTOP */}
        <div className="bg-white w-full h-[80px] flex items-center justify-between px-[60px] relative z-40 border-t border-red-50">
           <div className="flex items-center gap-3">
             <div className="w-8 h-8 rounded-full bg-[#FF0000] flex items-center justify-center text-white"><MapPin size={16} /></div>
             <span className="text-gray-600 font-medium text-[15px]">{PROJECT_DATA.address}</span>
           </div>
           <div className="flex items-center gap-3">
             <div className="w-8 h-8 rounded-full bg-[#FF0000] flex items-center justify-center text-white"><Mail size={16} /></div>
             <span className="text-gray-600 font-medium text-[15px] hover:text-red-500 transition-colors cursor-pointer">{PROJECT_DATA.email}</span>
           </div>
           <div className="flex items-center gap-3">
             <div className="w-8 h-8 rounded-full bg-[#FF0000] flex items-center justify-center text-white"><Phone size={16} /></div>
             <div className="text-gray-600 font-medium text-[15px]">
                 <span className="hover:text-red-500 transition-colors cursor-pointer">{PROJECT_DATA.phones[0]}</span> 
                 <span className="mx-1">|</span> 
                 <span className="hover:text-red-500 transition-colors cursor-pointer">{PROJECT_DATA.phones[1]}</span>
             </div>
           </div>
        </div>

      </div>

      {/* Styles Animation */}
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