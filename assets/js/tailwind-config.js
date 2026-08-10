/* ============================================================
   TAILWIND CONFIG (dùng chung cho toàn bộ website)
   - Trước đây bị copy-paste vào cả 10 file HTML (một số bản copy
     còn thiếu key "montserrat" trong fontFamily -> class
     font-montserrat không nhận đúng font trên các trang đó).
   - Giờ chỉ còn 1 bản, đầy đủ, dùng chung.
   - QUAN TRỌNG: file này phải được load SAU thẻ
     <script src="https://cdn.tailwindcss.com..."></script>
     và TRƯỚC khi bất kỳ class Tailwind nào được browser parse,
     đúng như thứ tự cũ trong từng file.
   ============================================================ */
tailwind.config = {
      darkMode: "class",
      theme: {
        container: {
    center: true,
    screens: {
      sm: "100%",
      md: "100%",
      lg: "100%",
      xl: "100%",
      "2xl": "100%",
    },
  },

        extend: {
          "colors": {
                            "on-secondary-container": "#fffbff",
                            "surface-container-high": "#e7e8e9",
                            "tertiary": "#4c1d00",
                            "on-primary-fixed": "#001b3d",
                            "on-tertiary-fixed": "#341100",
                            "inverse-surface": "#2e3132",
                            "on-secondary-fixed-variant": "#8e004b",
                            "surface-container-lowest": "#ffffff",
                            "on-error-container": "#93000a",
                            "surface-container": "#edeeef",
                            "on-secondary": "#ffffff",
                            "deep-navy": "#004080",
                            "on-tertiary": "#ffffff",
                            "tertiary-container": "#6f2d00",
                            "surface": "#f8f9fa",
                            "on-tertiary-fixed-variant": "#773305",
                            "on-primary-container": "#83aef5",
                            "surface-variant": "#e1e3e4",
                            "on-primary-fixed-variant": "#0e4686",
                            "inverse-on-surface": "#f0f1f2",
                            "outline": "#737781",
                            "secondary-container": "#e2007c",
                            "on-surface": "#191c1d",
                            "on-primary": "#ffffff",
                            "tertiary-fixed": "#ffdbcb",
                            "secondary-fixed": "#ffd9e2",
                            "on-secondary-fixed": "#3e001e",
                            "on-background": "#191c1d",
                            "secondary-fixed-dim": "#ffb0c9",
                            "outline-variant": "#c3c6d2",
                            "slate-gray": "#4A5568",
                            "primary-container": "#004080",
                            "background": "#f8f9fa",
                            "inverse-primary": "#a9c7ff",
                            "soft-white": "#FFFFFF",
                            "primary-fixed-dim": "#a9c7ff",
                            "on-tertiary-container": "#f59561",
                            "ink-black": "#1A202C",
                            "error-container": "#ffdad6",
                            "surface-container-highest": "#e1e3e4",
                            "primary-fixed": "#d6e3ff",
                            "tertiary-fixed-dim": "#ffb691",
                            "on-surface-variant": "#424750",
                            "surface-container-low": "#f3f4f5",
                            "dynamic-pink": "#E6007E",
                            "secondary": "#b50062",
                            "on-error": "#ffffff",
                            "surface-tint": "#305ea0",
                            "error": "#ba1a1a",
                            "surface-dim": "#d9dadb",
                            "primary": "#002a58",
                            "surface-bright": "#f8f9fa"
                        },
          "borderRadius": {
                            "DEFAULT": "0.25rem",
                            "lg": "0.5rem",
                            "xl": "0.75rem",
                            "full": "9999px"
                        },
                        "spacing": {
                            "margin-mobile": "16px",
                            "unit": "8px",
                            "margin-desktop": "40px",
                            "container-max": "1280px",
                            "gutter": "24px"
                        },
                        "fontFamily": {
                            montserrat: ["Montserrat"],
                            "body-md": ["Inter"],
                            "body-lg": ["Inter"],
                            "display-lg-mobile": ["Montserrat"],
                            "display-lg": ["Montserrat"],
                            "label-sm": ["Inter"],
                            "label-md": ["Inter"],
                            "headline-md": ["Montserrat"],
                            "headline-lg": ["Montserrat"]
                        },
                        "fontSize": {
                            "body-md": ["16px", {"lineHeight": "24px", "fontWeight": "400"}],
                            "body-lg": ["18px", {"lineHeight": "28px", "fontWeight": "400"}],
                            "display-lg-mobile": ["36px", {"lineHeight": "44px", "letterSpacing": "-0.01em", "fontWeight": "700"}],
                            "display-lg": ["48px", {"lineHeight": "56px", "letterSpacing": "-0.02em", "fontWeight": "700"}],
                            "label-sm": ["12px", {"lineHeight": "16px", "fontWeight": "600"}],
                            "label-md": ["14px", {"lineHeight": "20px", "letterSpacing": "0.05em", "fontWeight": "500"}],
                            "headline-md": ["24px", {"lineHeight": "32px", "fontWeight": "600"}],
                            "headline-lg": ["32px", {"lineHeight": "40px", "fontWeight": "600"}]
                        }
        }
      }
    }