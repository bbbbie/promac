// //src/features/introduction/intro/IntroductionHero.tsx
// import { Mail, Phone } from "lucide-react";
// import mainVisual from "../../../assets/main-visual.jpg";

// export const IntroductionHero = () => {
//   return (
//     <div className="w-full flex justify-center mt-[5px]">
//       {/* =================================================================
//           1. MOBILE VERSION (< 768px)
//           - Giữ nguyên code cũ: Flex Col, max-w-[375px]
//           ================================================================= */}
//       <div className="md:hidden flex justify-center w-full px-[10px]">
//         <section
//           className="relative flex flex-col items-center bg-[#FFF5F6] rounded-[30px] w-full max-w-[375px]"
//           style={{ height: "694px" }}
//         >
//           {/* TEXT CONTENT */}
//           <div className="absolute top-[75px] w-[328px] flex flex-col items-center gap-[50px]">
//             <div className="flex flex-col items-center gap-[16px]">
//               <h1
//                 className="font-inter font-bold text-[#FF0000] text-center"
//                 style={{ fontSize: "28px", lineHeight: "34px" }}
//               >
//                 GIỚI THIỆU VỀ PROMAC
//               </h1>
//               <p
//                 className="font-inter font-semibold text-[#374151] text-center"
//                 style={{ fontSize: "16px", lineHeight: "19px" }}
//               >
//                 Đối tác đáng tin cậy của bạn về dịch vụ in ấn chuyên nghiệp tại
//                 PROMAC
//               </p>
//             </div>

//             <div className="flex flex-col items-center w-full gap-[24px]">
//               <button
//                 className="flex flex-col justify-center items-center bg-[#FF0000] rounded-[20px] shadow-[0px_0px_14px_#FF0000] active:scale-95 transition-transform"
//                 style={{ width: "155px", height: "45px" }}
//               >
//                 <span className="font-inter font-bold text-[16px] text-[#F5F5F5]">
//                   Yêu cầu Báo giá
//                 </span>
//               </button>

//               <div className="w-full h-[1px] bg-black/50 border border-black/50"></div>

//               <div className="flex flex-col items-start gap-[14px] w-full pl-[10px]">
//                 <div className="flex items-center gap-[12px]">
//                   <div className="w-[20px] flex justify-center">
//                     <Phone size={20} className="text-black/50" />
//                   </div>
//                   <div className="flex items-center gap-[12px]">
//                     <a
//                       href="tel:02822272416"
//                       className="font-inter font-normal text-[16px] text-black/50 underline"
//                     >
//                       (028) 22272416
//                     </a>
//                     <div className="w-[1px] h-[20px] bg-black/50"></div>
//                     <a
//                       href="tel:0906838869"
//                       className="font-inter font-normal text-[16px] text-black/50 underline"
//                     >
//                       0906838869
//                     </a>
//                   </div>
//                 </div>
//                 <div className="flex items-center gap-[12px]">
//                   <div className="w-[22px] flex justify-center">
//                     <Mail size={20} className="text-black/50" />
//                   </div>
//                   <a
//                     href="mailto:info@promacprinting.com"
//                     className="font-inter font-normal text-[16px] text-black/50 underline"
//                   >
//                     info@promacprinting.com
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* IMAGE */}
//           <div className="absolute bottom-[50px] w-[328px] h-[242px] bg-gray-200 rounded-[10px] overflow-hidden shadow-sm">
//             <img
//               src={mainVisual}
//               alt="Promac Intro Mobile"
//               className="w-full h-full object-cover"
//             />
//           </div>
//         </section>
//       </div>

//       {/* =================================================================
//           2. TABLET & IPAD PRO VERSION (768px -> 1279px) - MỚI
//           - Layout Ngang (Flex Row), Fluid Width
//           - Hiển thị từ md (Tablet) đến xl (Desktop lớn)
//           ================================================================= */}
//       <section className="hidden md:flex xl:hidden flex-row items-center bg-[#FFF5F6] rounded-[30px] p-[40px] w-full max-w-[720px] lg:max-w-[960px] gap-[40px] mx-auto">
//         {/* IMAGE LEFT */}
//         <div className="w-[45%] h-[400px] bg-gray-200 rounded-[10px] overflow-hidden shrink-0 shadow-md">
//           <img
//             src={mainVisual}
//             alt="Promac Intro Tablet"
//             className="w-full h-full object-cover"
//           />
//         </div>

//         {/* CONTENT RIGHT */}
//         <div className="flex flex-col items-start w-[55%] gap-[24px]">
//           <h1 className="font-inter font-bold text-[#FF0000] text-[32px] lg:text-[40px] leading-[1.2]">
//             GIỚI THIỆU VỀ PROMAC
//           </h1>
//           <p className="font-inter font-medium text-[#374151] text-[16px] lg:text-[18px] leading-[1.5]">
//             Đối tác đáng tin cậy của bạn về dịch vụ in ấn chuyên nghiệp tại
//             PROMAC
//           </p>

//           <button className="bg-[#FF0000] text-white font-bold text-[18px] px-6 py-3 rounded-[20px] shadow-lg hover:bg-red-700 transition-colors">
//             Yêu cầu Báo giá
//           </button>

//           <div className="w-full h-[1px] bg-black/20 my-2"></div>

//           <div className="flex flex-col gap-[16px]">
//             <div className="flex items-center gap-[12px]">
//               <Phone size={24} className="text-black/60" />
//               <div className="flex gap-4 text-[16px] font-medium text-black/70">
//                 <a href="tel:02822272416" className="hover:text-red-600">
//                   (028) 22272416
//                 </a>
//                 <span className="text-black/30">|</span>
//                 <a href="tel:0906838869" className="hover:text-red-600">
//                   0906838869
//                 </a>
//               </div>
//             </div>
//             <div className="flex items-center gap-[12px]">
//               <Mail size={24} className="text-black/60" />
//               <a
//                 href="mailto:info@promacprinting.com"
//                 className="text-[16px] font-medium text-black/70 hover:text-red-600"
//               >
//                 info@promacprinting.com
//               </a>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* =================================================================
//           3. DESKTOP VERSION (>= 1280px) - GIỮ NGUYÊN 100% CODE CŨ
//           - Chỉ đổi lg:block thành xl:block
//           ================================================================= */}
//       <section
//         className="hidden xl:block relative" // <--- Đổi lg:block thành xl:block
//         style={{
//           width: "1440px",
//           height: "600px",
//           backgroundColor: "#FFF5F6",
//           borderRadius: "30px",
//         }}
//       >
//         {/* --- DESKTOP CONTENT --- */}
//         <div
//           className="absolute bg-gray-200 flex items-center justify-center overflow-hidden"
//           style={{
//             width: "591px",
//             height: "506px",
//             borderRadius: "10px",
//             left: "813px",
//             top: "57px",
//           }}
//         >
//           <img
//             src={mainVisual}
//             alt="Promac Banner Desktop"
//             className="w-full h-full object-cover"
//           />
//         </div>

//         <h1
//           className="absolute font-inter font-semibold"
//           style={{
//             width: "732.86px",
//             height: "64px",
//             top: "53px",
//             left: "80px",
//             fontSize: "36px",
//             lineHeight: "64px",
//             color: "#FF0000",
//           }}
//         >
//           GIỚI THIỆU VỀ PROMAC
//         </h1>

//         <p
//           className="absolute font-inter font-semibold"
//           style={{
//             width: "698.29px",
//             height: "46px",
//             top: "137px",
//             left: "80px",
//             fontSize: "16px",
//             lineHeight: "19px",
//             color: "#374151",
//           }}
//         >
//           Đối tác đáng tin cậy của bạn về dịch vụ in ấn chuyên nghiệp tại PROMAC
//         </p>

//         <button
//           className="absolute flex flex-col justify-center items-center transition-transform hover:scale-105"
//           style={{
//             width: "208.4px",
//             height: "53px",
//             left: "80px",
//             top: "209px",
//             backgroundColor: "#FF0000",
//             borderRadius: "20px",
//             boxShadow: "0px 0px 14px #FF0000",
//           }}
//         >
//           <span className="font-inter font-bold text-[20px] leading-[24px] text-[#F5F5F5]">
//             Yêu cầu Báo giá
//           </span>
//         </button>

//         <div
//           className="absolute"
//           style={{
//             width: "481px",
//             height: "0px",
//             left: "70px",
//             top: "389.51px",
//             borderTop: "1px solid rgba(0, 0, 0, 0.5)",
//           }}
//         />

//         <div
//           className="absolute flex items-center"
//           style={{
//             left: "80px",
//             top: "413px",
//             height: "21px",
//           }}
//         >
//           <div
//             className="flex items-center justify-center"
//             style={{ width: "20px", height: "21px" }}
//           >
//             <Phone size={20} color="rgba(0,0,0,0.5)" />
//           </div>
//           <a
//             href="tel:02822272416"
//             className="font-inter font-normal underline ml-[12px]"
//             style={{ fontSize: "16px", color: "rgba(0,0,0,0.5)" }}
//           >
//             (028) 22272416
//           </a>
//           <div
//             className="mx-[12px]"
//             style={{
//               width: "0px",
//               height: "20px",
//               borderLeft: "1px solid rgba(0,0,0,0.5)",
//             }}
//           />
//           <a
//             href="tel:0906838869"
//             className="font-inter font-normal underline"
//             style={{ fontSize: "16px", color: "rgba(0,0,0,0.5)" }}
//           >
//             0906838869
//           </a>
//         </div>

//         <div
//           className="absolute flex items-center"
//           style={{
//             left: "80px",
//             top: "453px",
//             height: "21.07px",
//           }}
//         >
//           <div
//             className="flex items-center justify-center"
//             style={{ width: "21.83px", height: "21.07px" }}
//           >
//             <Mail size={20} color="rgba(0,0,0,0.5)" />
//           </div>
//           <a
//             href="mailto:info@promacprinting.com"
//             className="font-inter font-normal ml-[12px] underline"
//             style={{ fontSize: "16px", color: "rgba(0,0,0,0.5)" }}
//           >
//             info@promacprinting.com
//           </a>
//         </div>
//       </section>
//     </div>
//   );
// };

// src/features/introduction/intro/IntroductionHero.tsx
import { Mail, Phone, MapPin } from "lucide-react";
import mainVisual from "../../../assets/main-visual.jpg";

// --- DATA TĨNH ---
const DATA = {
  header: "GIỚI THIỆU VỀ PROMAC",
  subHeader: "Đối tác đáng tin cậy của bạn về dịch vụ in ấn chuyên nghiệp tại PROMAC",
  contact: {
    address: "236/59 Điện Biên Phủ, Phường 17, Q. Bình Thạnh, TP.HCM",
    email: "info@promacprinting.com",
    phones: ["(028) 22272416", "0906838869"],
  },
};

export const IntroductionHero = () => {
  return (
    <div className="w-full flex justify-center bg-white my-10 px-4 xl:px-0">
      
      {/* =========================================================================
          1. MOBILE VERSION (< 1024px)
          - Giữ nguyên thiết kế card dọc cho Mobile
         ========================================================================= */}
      <div className="flex lg:hidden flex-col w-full bg-[#FFDEDE] rounded-[20px] overflow-hidden shadow-lg relative pb-6 max-w-[500px] mx-auto">
        <div className="absolute top-[-50px] left-[-50px] w-[200px] h-[200px] bg-red-500 rounded-full opacity-5 z-0 pointer-events-none"></div>

        <div className="flex flex-col items-center pt-8 px-6 z-10 relative">
          <h1 className="font-bold text-[28px] leading-tight text-[#FF0000] text-center mb-4 uppercase">
            {DATA.header}
          </h1>
          <p className="font-medium text-[15px] text-center text-gray-700 leading-snug mb-6">
             {DATA.subHeader}
          </p>
          <div className="w-full aspect-video rounded-[15px] overflow-hidden shadow-md mb-6 border-4 border-white">
             <img src={mainVisual} className="w-full h-full object-cover" alt="Introduction Mobile" />
          </div>
        </div>

        <div className="mt-4 mx-4 bg-white rounded-[15px] p-4 flex flex-col gap-3 shadow-sm border border-red-50">
           <div className="flex items-start gap-3">
              <MapPin className="text-[#FF0000] w-5 h-5 shrink-0 mt-[2px]" />
              <span className="text-[13px] text-gray-600 font-medium">{DATA.contact.address}</span>
           </div>
           <div className="w-full h-[1px] bg-gray-100"></div>
           <div className="flex items-center gap-3">
              <Mail className="text-[#FF0000] w-5 h-5 shrink-0" />
              <span className="text-[13px] text-gray-600 break-all font-medium">{DATA.contact.email}</span>
           </div>
           <div className="flex items-center gap-3">
              <Phone className="text-[#FF0000] w-5 h-5 shrink-0" />
              <div className="text-[13px] text-gray-600 font-bold">
                 <span>{DATA.contact.phones[0]}</span> <span className="text-gray-400">|</span> <span>{DATA.contact.phones[1]}</span>
              </div>
           </div>
        </div>
      </div>

      {/* =========================================================================
          2. DESKTOP VERSION (>= 1024px)
          - Copy cấu trúc chính xác từ HomeBanner.tsx
          - Wrapper: min-h-[600px], m-8
          - Cột trái: w-[60%], padding chuẩn (pt-40, pl-30/50/80)
          - Cột phải: absolute top-0 right-0 w-[50%]
         ========================================================================= */}
      <div className="hidden lg:flex w-full bg-[#FFDEDE] rounded-[30px] relative overflow-hidden shadow-lg flex-col min-h-[600px] m-8">
        
        {/* --- PHẦN BODY --- */}
        <div className="flex w-full h-full flex-grow relative z-10">
          
          {/* CỘT TRÁI: TEXT CONTENT (Cấu trúc y hệt HomeBanner) */}
          <div className="w-[60%] pt-[40px] pl-[30px] lg:pl-[50px] xl:pl-[80px] flex flex-col justify-start gap-6 z-20">
            {/* Tiêu đề */}
            <h1 className="font-inter font-bold text-[30px] lg:text-[40px] leading-tight text-[#FF0000] uppercase mt-10">
              {DATA.header}
            </h1>

            {/* Subheader Box (Nếu muốn giống hệt layout HomeBanner thì có thể bọc div trắng, 
                nhưng theo design Intro thì để trần cũng được. Ở đây tôi để trần nhưng canh lề khớp) */}
            <div className="w-fit max-w-[80%]">
              <p className="font-semibold text-[16px] lg:text-[18px] text-[#374151] tracking-wide leading-relaxed">
                {DATA.subHeader}
              </p>
            </div>
          </div>

          {/* CỘT PHẢI: HÌNH ẢNH (Absolute Positioning giống HomeBanner) */}
          <div className="absolute top-0 right-0 w-[50%] h-full z-10 overflow-hidden pointer-events-none">
             {/* Thay vì dùng Bubble tròn như Home, ta dùng hình chữ nhật full 
                nhưng vẫn giữ vị trí absolute right-0 w-[50%] để khớp layout
             */}
             <div className="w-full h-full relative">
                <img 
                  src={mainVisual} 
                  alt="Introduction Visual" 
                  className="w-full h-full object-cover object-center pointer-events-auto" 
                />
                {/* Lớp phủ Gradient để hòa trộn biên giới ảnh và nền hồng */}
                <div className="absolute top-0 bottom-0 left-0 w-[150px] bg-gradient-to-r from-[#FFDEDE] to-transparent pointer-events-none"></div>
             </div>
          </div>
        </div>

        {/* FOOTER DESKTOP (Cấu trúc y hệt HomeBanner) */}
        <div className="bg-white w-full h-[80px] flex items-center justify-between px-[60px] relative z-40 border-t border-red-50">
           <div className="flex items-center gap-3">
             <div className="w-8 h-8 rounded-full bg-[#FF0000] flex items-center justify-center text-white"><MapPin size={16} /></div>
             <span className="text-gray-600 font-medium text-[15px]">{DATA.contact.address}</span>
           </div>
           
           <div className="flex gap-8">
             <div className="flex items-center gap-3">
               <div className="w-8 h-8 rounded-full bg-[#FF0000] flex items-center justify-center text-white"><Mail size={16} /></div>
               <span className="text-gray-600 font-medium text-[15px]">{DATA.contact.email}</span>
             </div>
             <div className="flex items-center gap-3">
               <div className="w-8 h-8 rounded-full bg-[#FF0000] flex items-center justify-center text-white"><Phone size={16} /></div>
               <div className="text-gray-600 font-medium text-[15px]">
                   <span>{DATA.contact.phones[0]}</span> | <span>{DATA.contact.phones[1]}</span>
               </div>
             </div>
           </div>
        </div>

      </div>
    </div>
  );
};
