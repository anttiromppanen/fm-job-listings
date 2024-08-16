import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        userDesaturatedDarkCyan: "hsl(180, 29%, 50%)",
        userBgColor: "hsl(180, 52%, 96%)",
        userFilterTablets: "hsl(180, 31%, 95%)",
        userDarkGrayishCyan: "hsl(180, 8%, 52%)",
        userVeryDarkGrayishCyan: "hsl(180, 14%, 20%)",
      },
      backgroundImage: {
        userHeaderBgDesktop: "url('/img/bg-header-desktop.svg')",
        userHeaderBgMobile: "url('/img/bg-header-mobile.svg')",
      },
    },
  },
  plugins: [],
};
export default config;
