// //src/features/policies/privacypolicy/TermsOfServiceHero.tsx
// import React from "react";
// import { Phone, Mail } from "lucide-react";

// export const TermsOfServiceHero: React.FC = () => {
//   return (
//     // Wrapper chung
//     <div className="w-full flex justify-center mt-[20px] lg:mt-[40px]">
//       {/* =================================================================
//           1. MOBILE VERSION (< 768px)
//           - Thay đổi: lg:hidden -> md:hidden (Chỉ hiện trên điện thoại nhỏ)
//           ================================================================= */}
//       <section className="flex flex-col items-center w-full max-w-[375px] bg-[#FFD1D1] rounded-[30px] pt-[40px] pb-[60px] px-[23px] md:hidden mb-[20px]">
//         {/* Title Group */}
//         <div className="flex flex-col items-center gap-[16px] text-center mb-[50px]">
//           <h1 className="font-inter font-bold text-[28px] leading-[34px] text-[#FF0000]">
//             Điều Khoản Dịch Vụ
//           </h1>
//           <p className="font-inter font-semibold text-[16px] leading-[19px] text-[#374151]">
//             Chúng tôi sẵn sàng hỗ trợ bạn qua Hotline, Email, hoặc tại Văn
//             phòng.
//           </p>
//         </div>

//         {/* Button */}
//         <button className="flex flex-col justify-center items-center w-[155px] h-[45px] bg-[#FF0000] rounded-[20px] shadow-[0px_0px_14px_#FF0000] mb-[24px] active:scale-95 transition-transform">
//           <span className="font-inter font-bold text-[16px] leading-[19px] text-[#F5F5F5]">
//             Yêu cầu Báo giá
//           </span>
//         </button>

//         {/* Divider */}
//         <div className="w-full h-[1px] bg-black/50 border border-black/50 mb-[24px]"></div>

//         {/* Contact Info (Vertical) */}
//         <div className="flex flex-col items-start gap-[14px] w-full pl-[10px]">
//           {/* Phone Row */}
//           <div className="flex items-center">
//             <div className="w-[20px] mr-[12px] flex justify-center">
//               <Phone size={20} className="text-black/50" />
//             </div>
//             <div className="flex items-center gap-[12px]">
//               <a
//                 href="tel:02822272416"
//                 className="font-inter font-normal text-[16px] text-black/50 underline"
//               >
//                 (028) 22272416
//               </a>
//               <div className="w-[1px] h-[20px] bg-black/50"></div>
//               <a
//                 href="tel:0906838869"
//                 className="font-inter font-normal text-[16px] text-black/50 underline"
//               >
//                 0906838869
//               </a>
//             </div>
//           </div>

//           {/* Email Row */}
//           <div className="flex items-center">
//             <div className="w-[22px] mr-[12px] flex justify-center">
//               <Mail size={20} className="text-black/50" />
//             </div>
//             <a
//               href="mailto:info@promacprinting.com"
//               className="font-inter font-normal text-[16px] text-black/50"
//             >
//               info@promacprinting.com
//             </a>
//           </div>
//         </div>
//       </section>

//       {/* =================================================================
//           2. TABLET & IPAD PRO VERSION (768px -> 1279px) - KHỐI MỚI
//           - Fluid Layout (Linh hoạt), dùng Flexbox thay vì Absolute
//           ================================================================= */}
//       <section className="hidden md:flex xl:hidden flex-col items-center w-full max-w-[900px] bg-[#FFD1D1] rounded-[30px] py-[60px] px-[40px] mb-[40px] mx-4 shadow-sm">
//         {/* Title Group */}
//         <div className="flex flex-col items-center text-center mb-[40px]">
//           <h1 className="font-inter font-extrabold text-[#FF0000] text-[36px] lg:text-[40px] leading-[1.2] mb-[16px]">
//             Điều Khoản Dịch Vụ
//           </h1>
//           <p className="font-inter font-semibold text-[#374151] text-[16px] lg:text-[18px] max-w-[600px]">
//             Chúng tôi sẵn sàng hỗ trợ bạn qua Hotline, Email, hoặc tại Văn
//             phòng.
//           </p>
//         </div>

//         {/* Button */}
//         <button className="flex items-center justify-center bg-[#FF0000] rounded-[20px] shadow-[0px_0px_14px_#FF0000] mb-[40px] active:scale-95 transition-transform w-[220px] h-[60px]">
//           <span className="font-inter font-bold text-[18px] text-[#F5F5F5]">
//             Yêu cầu Báo giá
//           </span>
//         </button>

//         {/* Divider */}
//         <div className="w-full max-w-[600px] h-[1px] bg-black/50 border border-black/50 mb-[30px]"></div>

//         {/* Contact Info (Horizontal) */}
//         <div className="flex flex-col sm:flex-row items-center justify-center gap-[30px] sm:gap-[50px]">
//           {/* Phone Group */}
//           <div className="flex items-center gap-[12px]">
//             <div className="w-[24px] flex justify-center">
//               <Phone className="w-6 h-6 text-black/50" strokeWidth={2} />
//             </div>
//             <div className="flex items-center gap-[12px]">
//               <a
//                 href="tel:02822272416"
//                 className="font-inter font-normal text-[16px] text-black/50 underline hover:text-red-500 transition-colors"
//               >
//                 (028) 22272416
//               </a>
//               <div className="w-[1px] h-[20px] bg-black/50"></div>
//               <a
//                 href="tel:0906838869"
//                 className="font-inter font-normal text-[16px] text-black/50 underline hover:text-red-500 transition-colors"
//               >
//                 0906838869
//               </a>
//             </div>
//           </div>

//           {/* Mail Group */}
//           <div className="flex items-center gap-[12px]">
//             <div className="w-[24px] flex justify-center">
//               <Mail className="w-6 h-6 text-black/50" strokeWidth={2} />
//             </div>
//             <a
//               href="mailto:info@promacprinting.com"
//               className="font-inter font-normal text-[16px] text-black/50 hover:text-red-500 transition-colors"
//             >
//               info@promacprinting.com
//             </a>
//           </div>
//         </div>
//       </section>

//       {/* =================================================================
//           3. DESKTOP VERSION (>= 1280px) - GIỮ NGUYÊN CODE CŨ
//           - Thay đổi: hidden lg:block -> hidden xl:block
//           ================================================================= */}
//       <section
//         className="hidden xl:block relative mx-auto bg-[#FFD1D1] rounded-[30px]"
//         style={{ width: "1379px", height: "451px" }}
//       >
//         <div className="mt-[56px] text-center">
//           <h1
//             className="font-extrabold text-[#FF0000]"
//             style={{
//               fontFamily: "Inter",
//               fontSize: "40px",
//               lineHeight: "48px",
//             }}
//           >
//             Điều Khoản Dịch Vụaaa
//           </h1>
//           <p
//             className="mt-[24px] font-semibold text-[#374151]"
//             style={{
//               fontFamily: "Inter",
//               fontSize: "16px",
//               lineHeight: "19px",
//               width: "697px",
//               marginInline: "auto",
//             }}
//           >
//             Chúng tôi sẵn sàng hỗ trợ bạn qua Hotline, Email, hoặc tại Văn
//             phòng.
//           </p>
//         </div>

//         <button
//           className="mt-[72px] flex flex-col items-center justify-center bg-[#FF0000] text-[#F5F5F5] transition-transform hover:scale-105 active:scale-95 mx-auto"
//           style={{
//             width: "309.82px",
//             height: "70.53px",
//             borderRadius: "20px",
//             border: "1px solid #FFD1D1",
//             boxShadow: "0px 0px 14px #FF0000",
//             gap: "12px",
//           }}
//         >
//           <span
//             className="font-bold"
//             style={{
//               fontFamily: "Inter",
//               fontSize: "20px",
//               lineHeight: "24px",
//             }}
//           >
//             Yêu cầu Báo giá
//           </span>
//         </button>

//         <div
//           className="absolute"
//           style={{
//             top: "347px",
//             width: "749.72px",
//             height: "0px",
//             border: "1px solid rgba(0, 0, 0, 0.5)",
//             left: "50%",
//             transform: "translateX(-50%)",
//           }}
//         />

//         <div
//           className="absolute flex items-center justify-center w-full"
//           style={{ top: "370px", gap: "40px" }}
//         >
//           <div className="flex items-center gap-[12px]">
//             <div className="w-[20px] flex justify-center">
//               <Phone className="w-5 h-5 text-black/50" strokeWidth={2} />
//             </div>
//             <div className="flex items-center gap-[12px]">
//               <a
//                 href="tel:02822272416"
//                 className="font-normal text-black/50 underline hover:text-[#FF0000] transition-colors text-[16px] leading-[19px]"
//               >
//                 (028) 22272416
//               </a>
//               <div className="h-[20px] border-l border-black/50"></div>
//               <a
//                 href="tel:0906838869"
//                 className="font-normal text-black/50 underline hover:text-[#FF0000] transition-colors text-[16px] leading-[19px]"
//               >
//                 0906838869
//               </a>
//             </div>
//           </div>
//           <div className="flex items-center gap-[12px]">
//             <div className="w-[22px] flex justify-center">
//               <Mail className="w-5 h-5 text-black/50" strokeWidth={2} />
//             </div>
//             <a
//               href="mailto:info@promacprinting.com"
//               className="font-normal text-black/50 hover:text-[#FF0000] transition-colors text-[16px] leading-[19px]"
//             >
//               info@promacprinting.com
//             </a>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// src/features/policies/privacypolicy/TermsOfServiceHero.tsx
import React from "react";
import { 
  Phone, Mail, MapPin, 
  ShieldCheck, FileText, Scale, Handshake 
} from "lucide-react";

// --- DATA ---
const TERMS_DATA = {
  header: "ĐIỀU KHOẢN DỊCH VỤ",
  subHeader: "Chúng tôi tuân thủ các tiêu chuẩn pháp lý cao nhất trong mọi giao dịch.",
  address: "236/59 Điện Biên Phủ, Phường 17, Q. Bình Thạnh, TP.HCM",
  email: "info@promacprinting.com",
  phones: ["(028) 22272416", "0906838869"],
};

export const TermsOfServiceHero: React.FC = () => {
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
          <h1 className="font-extrabold text-[28px] leading-tight text-[#FF0000] text-center mb-6">
            {TERMS_DATA.header}
          </h1>

          {/* VISUAL ANIMATION MOBILE */}
          <div className="relative w-[280px] h-[280px] mb-6 flex justify-center items-center">
             {/* Vòng tròn chính */}
             <div className="absolute w-[200px] h-[200px] bg-white rounded-full shadow-md flex items-center justify-center z-10 overflow-hidden">
                {/* Chữ PROMAC chìm */}
                <span className="absolute text-[#FF0000]/10 font-black text-5xl select-none z-0 tracking-widest pointer-events-none">
                  PROMAC
                </span>
                <img 
                  src="https://promacprinting.com/wp-content/uploads/2022/08/logo-promac-in-the-cao-1.png" 
                  alt="Promac"
                  className="w-[70%] opacity-90 relative z-10"
                  onError={(e) => (e.currentTarget.style.display = 'none')}
                />
             </div>
             
             {/* Icons bay (Theme Điều khoản) */}
             <div className="absolute top-0 right-4 w-12 h-12 bg-red-500 rounded-xl flex items-center justify-center text-white shadow-lg animate-bounce-custom z-20">
                <ShieldCheck size={20} />
             </div>
             <div className="absolute bottom-4 left-4 w-12 h-12 bg-white border border-red-100 rounded-full flex items-center justify-center text-red-500 shadow-lg animate-bounce-custom z-20" style={{animationDelay: '1s'}}>
                <FileText size={20} />
             </div>
          </div>

          {/* Box Subtitle */}
          <div className="bg-white rounded-[20px] px-4 py-3 shadow-sm w-full mb-6">
             <p className="font-semibold text-[15px] text-center text-[#374151] leading-snug">
               {TERMS_DATA.subHeader}
             </p>
          </div>

          {/* Badges Mobile */}
          <div className="flex flex-wrap justify-center gap-3 w-full mb-4">
             <div className="flex items-center gap-2 bg-white/80 px-4 py-2 rounded-full shadow-sm">
                <Scale size={16} className="text-red-500" />
                <span className="text-[14px] font-medium text-gray-700">Minh bạch</span>
             </div>
             <div className="flex items-center gap-2 bg-white/80 px-4 py-2 rounded-full shadow-sm">
                <Handshake size={16} className="text-red-500" />
                <span className="text-[14px] font-medium text-gray-700">Tin cậy</span>
             </div>
          </div>
        </div>

        {/* Footer Mobile */}
        <div className="mt-6 mx-4 bg-white rounded-[15px] p-4 flex flex-col gap-3 z-20">
           <div className="flex items-start gap-3">
              <MapPin className="text-[#FF0000] w-5 h-5 shrink-0 mt-1" />
              <span className="text-[13px] text-gray-600">{TERMS_DATA.address}</span>
           </div>
           <div className="flex items-center gap-3">
              <Mail className="text-[#FF0000] w-5 h-5 shrink-0" />
              <span className="text-[13px] text-gray-600 break-all">{TERMS_DATA.email}</span>
           </div>
           <div className="flex items-center gap-3">
              <Phone className="text-[#FF0000] w-5 h-5 shrink-0" />
              <div className="text-[13px] text-gray-600">
                 <span>{TERMS_DATA.phones[0]}</span> | <span>{TERMS_DATA.phones[1]}</span>
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
          
          {/* CỘT TRÁI: TEXT CONTENT */}
          <div className="w-[60%] pt-[40px] pl-[30px] lg:pl-[50px] xl:pl-[80px] flex flex-col justify-start gap-6 z-20">
            <h1 className="mt-5 font-inter font-bold text-[30px] lg:text-[40px] leading-tight text-[#FF0000]">
              {TERMS_DATA.header}
            </h1>

            {/* Subheader Box */}
            <div className="bg-white rounded-full  px-8 py-4 shadow-sm w-fit max-w-[90%]">
              <p className="font-bold text-[16px] lg:text-[20px] text-black tracking-wide text-center">
                {TERMS_DATA.subHeader}
              </p>
            </div>

            {/* Feature Badges (Theme Điều khoản) */}
            <div className="flex flex-col gap-4 mt-4 pl-2">
                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm text-red-500">
                        <Scale size={24} />
                    </div>
                    <div>
                        <h3 className="font-bold text-gray-800 text-[18px]">Tuân thủ pháp luật</h3>
                        <p className="text-gray-600 text-[16px]">Đảm bảo mọi hoạt động minh bạch & hợp pháp</p>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm text-blue-600">
                        <Handshake size={24} />
                    </div>
                    <div>
                        <h3 className="font-bold text-gray-800 text-[18px]">Cam kết trách nhiệm</h3>
                        <p className="text-gray-600 text-[16px]">Đặt quyền lợi khách hàng lên hàng đầu</p>
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
                <div className="absolute top-1/2 left-1/2 transform -translate-x-[20%] -translate-y-1/2 w-[350px] h-[350px] rounded-full bg-white/40 backdrop-blur-md border border-white shadow-[0_8px_32px_rgba(255,0,0,0.05)] flex items-center justify-center z-30 pointer-events-auto overflow-hidden">
                    {/* Chữ PROMAC chìm (Desktop) */}
                    <span className="absolute text-[#FF0000]/10 font-black text-6xl select-none z-0 tracking-widest">
                      PROMAC
                    </span>
                    <img 
                        src="https://promacprinting.com/wp-content/uploads/2022/08/logo-promac-in-the-cao-1.png" 
                        alt="Promac Logo" 
                        className="w-[65%] opacity-90 drop-shadow-lg relative z-10"
                        onError={(e) => (e.currentTarget.style.display = 'none')}
                    />
                    <div className="absolute inset-[-20px] border border-dashed border-red-300 rounded-full animate-spin-slow opacity-50 pointer-events-none z-20"></div>
                </div>

                {/* Floating Icons (Terms Theme) */}
                {/* Icon 1: ShieldCheck (Đỏ) */}
                <div className="absolute top-[25%] right-[25%] w-[50px] h-[50px] bg-[#FF0000] rounded-2xl flex items-center justify-center text-white shadow-xl animate-bounce-custom z-40 pointer-events-auto">
                   <ShieldCheck size={24} />
                </div>
                
                {/* Icon 2: FileText (Trắng viền Xanh) */}
                <div className="absolute bottom-[25%] right-[35%] w-[60px] h-[60px] bg-white rounded-full flex items-center justify-center text-blue-600 shadow-xl border border-blue-50 animate-bounce-custom z-40 pointer-events-auto" style={{animationDelay: '1.5s'}}>
                   <FileText size={28} />
                </div>

                {/* Icon 3: Scale (Xanh lá) */}
                <div className="absolute top-[45%] right-[58%] w-[50px] h-[50px] bg-white rounded-lg flex items-center justify-center text-green-600 shadow-lg animate-bounce-custom z-40 pointer-events-auto">
                   <Scale size={24} />
                </div>
             </div>
          </div>
        </div>

        {/* FOOTER DESKTOP */}
        <div className="bg-white w-full h-[80px] flex items-center justify-between px-[60px] relative z-40 border-t border-red-50">
           <div className="flex items-center gap-3">
             <div className="w-8 h-8 rounded-full bg-[#FF0000] flex items-center justify-center text-white"><MapPin size={16} /></div>
             <span className="text-gray-600 font-medium text-[15px]">{TERMS_DATA.address}</span>
           </div>
           <div className="flex items-center gap-3">
             <div className="w-8 h-8 rounded-full bg-[#FF0000] flex items-center justify-center text-white"><Mail size={16} /></div>
             <span className="text-gray-600 font-medium text-[15px] hover:text-red-500 transition-colors cursor-pointer">{TERMS_DATA.email}</span>
           </div>
           <div className="flex items-center gap-3">
             <div className="w-8 h-8 rounded-full bg-[#FF0000] flex items-center justify-center text-white"><Phone size={16} /></div>
             <div className="text-gray-600 font-medium text-[15px]">
                 <span className="hover:text-red-500 transition-colors cursor-pointer">{TERMS_DATA.phones[0]}</span> 
                 <span className="mx-1">|</span> 
                 <span className="hover:text-red-500 transition-colors cursor-pointer">{TERMS_DATA.phones[1]}</span>
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