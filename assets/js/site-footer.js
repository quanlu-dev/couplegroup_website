/* ============================================================
   SITE FOOTER (dùng chung cho toàn bộ website)
   - Trước đây bị copy-paste giống hệt vào cả 10 file HTML.
   - Muốn sửa thông tin liên hệ / social link => chỉ sửa file này.
   ============================================================ */
(function () {
  var html =
    '<footer class="w-full bg-primary text-soft-white pt-8 pb-0 border-t border-white/5 relative overflow-hidden">' +
    '<div class="max-w-container-max mx-auto flex flex-col md:flex-row justify-between items-start gap-12 relative z-10 pb-8 px-margin-desktop">' +
    '<div class="hidden lg:block max-w-md space-y-6">' +
    '<span class="font-montserrat text-[24px] font-extrabold block tracking-tight">Couple Group</span>' +
    '<p class="text-soft-white/60 editorial-text leading-relaxed text-[14px] sm:text-[16px]">Hệ sinh thái truyền cảm hứng cho thế hệ mới</p>' +
    '<div class="flex gap-5">' +
    '<a class="w-12 h-12 rounded-xl border border-soft-white/10 flex items-center justify-center hover:bg-dynamic-pink transition-all" href="https://www.facebook.com/couplegroup.2020" target="_blank">' +
    '<i class="fa-brands fa-facebook-f text-xl"></i></a>' +
    '<a class="w-12 h-12 rounded-xl border border-soft-white/10 flex items-center justify-center hover:bg-dynamic-pink transition-all" href="https://www.youtube.com/@COUPLETX09" target="_blank">' +
    '<i class="fa-brands fa-youtube text-xl"></i></a>' +
    "</div>" +
    "</div>" +
    '<div class="max-w-sm space-y-6">' +
    '<h4 class="text-[12px] font-bold uppercase tracking-[0.3em] opacity-50">Thông tin Liên hệ</h4>' +
    '<div class="space-y-4 text-soft-white/60 text-[15px]">' +
    '<p class="flex items-start gap-4">' +
'<span class="material-symbols-outlined text-dynamic-pink mt-1">location_on</span>' +
'<span>' +
'<span class="block font-medium">COUPLE GROUP HEAD OFFICE</span>' +
'<span class="block text-[11px] sm:text-[14px] text-soft-white/50">194 DE Pasteur, Phường Xuân Hòa, TP. Hồ Chí Minh</span>' +
'</span></p>' +
    '<p class="flex items-center gap-4"><span class="material-symbols-outlined text-dynamic-pink">mail</span>contact@couplegroup.com</p>' +
    '<p class="flex items-center gap-4"><span class="material-symbols-outlined text-dynamic-pink">call</span>028 7306 6562</p>' +
    "</div>" +
    "</div>" +
    "</div>" +
    '<div class="w-full py-4 px-margin-desktop bg-ink-black text-soft-white/50 text-[12px] flex flex-col md:flex-row justify-between items-center border-t border-white/5">' +
    '<p class="text-[11px] sm:text-[12px]">© 2026 Couple Group. Tất cả các quyền được bảo lưu.</p>' +
    '<p class="text-[11px] sm:text-[12px]">Được xây dựng cho tương lai của phong cách sống.</p>' +
    "</div>" +
    "</footer>";

  var mount = document.getElementById("site-footer-mount");
  if (mount) {
    mount.outerHTML = html;
  }
})();
