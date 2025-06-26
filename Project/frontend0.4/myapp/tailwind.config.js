module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        global: {
          background1: "var(--global-bg-1)",
          background2: "var(--global-bg-2)",
          background3: "var(--global-bg-3)",
          background4: "var(--global-bg-4)",
          background5: "var(--global-bg-5)",
          background6: "var(--global-bg-6)",
          background7: "var(--global-bg-7)",
          text1: "var(--global-text-1)",
          text2: "var(--global-text-2)",
          text3: "var(--global-text-3)",
          text4: "var(--global-text-4)"
        },
        header: {
          background1: "var(--header-bg-1)",
          text1: "var(--header-text-1)"
        },
        button: {
          text1: "var(--button-text-1)",
          text2: "var(--button-text-2)"
        },
        pager: {
          background1: "var(--pager-bg-1)"
        },
        footer: {
          text1: "var(--footer-text-1)"
        }
      },
      fontFamily: {
        rubik: ['Rubik', 'sans-serif'],
        instrument: ['Instrument Sans', 'sans-serif']
      }
    }
  },
 plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "synthwave"],
  },
};