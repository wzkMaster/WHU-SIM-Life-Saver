// .vitepress/theme/index.js
import DefaultTheme from "vitepress/theme";
import VercelAnalyticLayout from "./VercelAnalyticLayout.vue";

export default {
  ...DefaultTheme,
  Layout: VercelAnalyticLayout,
};
