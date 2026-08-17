/* ============================================================
   SITE HEADER (dùng chung cho toàn bộ website)
   - Trước đây đoạn <header>...</header> này bị copy-paste
     nguyên vẹn vào cả 10 file HTML => giờ chỉ còn 1 bản duy nhất.
   - Muốn sửa logo / menu / link => chỉ cần sửa file này.
   - Tự động tô đậm mục menu đang active theo tên file hiện tại.
   - 4 trang tin tức chi tiết (news1-4.html) được coi là con của
     "Tin tức" nên khi mở các trang đó, mục "Tin tức" sẽ active.
   ============================================================ */
(function () {
  var ACTIVE_DESKTOP = "text-[14px] font-bold text-ink-black border-b-2 border-dynamic-pink pb-1 hover:text-dynamic-pink transition-all duration-300";
  var INACTIVE_DESKTOP = "text-[14px] font-medium text-ink-black border-b-2 border-transparent hover:border-dynamic-pink/30 hover:text-dynamic-pink transition-all duration-300";
  var ACTIVE_MOBILE = "flex items-center h-14 px-6 font-bold text-dynamic-pink border-l-4 border-dynamic-pink bg-dynamic-pink/5";
  var INACTIVE_MOBILE = "flex items-center h-14 px-6 hover:bg-gray-100";

  var NAV_ITEMS = [
    { href: "index.html", label: "Trang chủ", group: "index.html" },
    { href: "vechungtoi.html", label: "Về chúng tôi", group: "vechungtoi.html" },
    { href: "thanhvien.html", label: "Hệ sinh thái", group: "thanhvien.html" },
    { href: "vanhoa.html", label: "Văn hóa Couple Group", group: "vanhoa.html" },
    { href: "foundation.html", label: "Couple Foundation", group: "foundation.html" },
    { href: "tintuc.html", label: "Tin tức", group: "tintuc.html" },
    { href: "https://couplegroup.jobday.vn/", label: "Tuyển dụng", group: null }
  ];

  var NEWS_DETAIL_PAGES = ["news1.html", "news2.html", "news3.html", "news4.html"];

  function getCurrentPage() {
    var path = window.location.pathname.split("/").pop();
    if (!path) return "index.html";
    if (NEWS_DETAIL_PAGES.indexOf(path) !== -1) return "tintuc.html";
    return path;
  }

  function escAttr(s) {
    return s;
  }

  function buildDesktopNav(current) {
    return NAV_ITEMS.map(function (item) {
      var cls = item.group === current ? ACTIVE_DESKTOP : INACTIVE_DESKTOP;
      return '<a class="' + cls + '" href="' + item.href + '">' + item.label + "</a>";
    }).join("\n        ");
  }

  function buildMobileNav(current) {
    return NAV_ITEMS.map(function (item) {
      var cls = item.group === current ? ACTIVE_MOBILE : INACTIVE_MOBILE;
      return (
        '<a href="' + item.href + '" class="' + cls + '">\n            ' +
        item.label +
        "\n        </a>"
      );
    }).join("\n\n        ");
  }

  function renderHeader() {
    var current = getCurrentPage();
    var html =
      '<header class="fixed top-0 w-full z-[100] transition-all duration-500 ease-in-out glass-nav border-b border-outline-variant/10 py-4 bg-white/80" id="main-header">' +
  '<div class="flex justify-between items-center w-full px-margin-mobile lg:px-margin-desktop max-w-container-max mx-auto">' +

  '<a href="index.html" class="flex items-center group cursor-pointer">' +
  '<img alt="Couple Group Logo" class="w-auto h-10 lg:h-12 object-contain" src="assets/logo-removebg-preview.png"/>' +
  '<span class="ml-3 font-montserrat text-lg lg:text-2xl font-bold text-ink-black tracking-tight">Couple Group</span>' +
  '</a>' +

  '<nav class="hidden lg:flex space-x-8">' +
  buildDesktopNav(current) +
  '</nav>' +

  '<button id="menu-toggle" class="lg:hidden flex items-center justify-center p-2 text-ink-black">' +
  '<span class="material-symbols-outlined text-3xl">menu</span>' +
  '</button>' +

  '</div>' +
  '</header>' +

  // Overlay: nằm ngoài header để phủ toàn bộ trang
  '<div id="mobile-drawer-overlay" class="fixed inset-0 bg-black/50 backdrop-blur-sm opacity-0 pointer-events-none transition-opacity duration-300 z-[100]"></div>' +

  // Mobile drawer
  '<div id="mobile-drawer" class="fixed top-0 right-0 h-screen w-[70%] max-w-[320px] bg-white shadow-2xl z-[101] translate-x-full transition-transform duration-300 flex flex-col">' +

  '<div class="flex items-center justify-between p-6 border-b">' +

  '<div class="flex items-center">' +
  '<img src="assets/logo-removebg-preview.png" class="h-8 w-auto">' +
  '<span class="ml-3 font-bold text-ink-black">Couple Group</span>' +
  '</div>' +

  '<button id="menu-close" class="p-2 rounded-full hover:bg-gray-100">' +
  '<span class="material-symbols-outlined text-3xl">close</span>' +
  '</button>' +

  '</div>' +

  '<nav class="flex-1 overflow-y-auto">' +
  buildMobileNav(current) +
  '</nav>' +

  '</div>';

    var mount = document.getElementById("site-header-mount");
    if (mount) {
      mount.outerHTML = html;
    }
  }

  renderHeader();
})();
