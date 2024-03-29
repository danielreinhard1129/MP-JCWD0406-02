import flowbite from "flowbite/plugin";
import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}", "../../node_modules/flowbite-react/lib/**/*.js"],
  plugins: [flowbite],
};

export default config;
