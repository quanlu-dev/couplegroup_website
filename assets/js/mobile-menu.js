/* ============================================================
   MOBILE MENU TOGGLE (dùng chung cho toàn bộ website)
   - Logic mở/đóng drawer menu mobile, trước đây bị lặp lại
     y hệt trong <script> của cả 10 file HTML.
   - Chạy sau khi site-header.js đã render xong header
     (site-header.js chạy đồng bộ ngay khi được include, nên
     các phần tử #menu-toggle, #menu-close, #mobile-drawer...
     đã tồn tại trong DOM trước khi file này chạy, miễn là
     site-header.js được include trước file này trong HTML).
   ============================================================ */
(function () {
  var menuToggle = document.getElementById("menu-toggle");
  var menuClose = document.getElementById("menu-close");
  var drawer = document.getElementById("mobile-drawer");
  var overlay = document.getElementById("mobile-drawer-overlay");

  if (!menuToggle || !menuClose || !drawer || !overlay) return;

  function openMenu() {
    drawer.classList.remove("translate-x-full");
    overlay.classList.remove("opacity-0", "pointer-events-none");
  }

  function closeMenu() {
    drawer.classList.add("translate-x-full");
    overlay.classList.add("opacity-0", "pointer-events-none");
  }

  menuToggle.addEventListener("click", openMenu);
  menuClose.addEventListener("click", closeMenu);
  overlay.addEventListener("click", closeMenu);
  document.addEventListener("click", function (e) {
    var isDrawerOpen = !drawer.classList.contains("translate-x-full");
    if (isDrawerOpen && !drawer.contains(e.target) && !menuToggle.contains(e.target)) {
      closeMenu();
    }
  });
})();
