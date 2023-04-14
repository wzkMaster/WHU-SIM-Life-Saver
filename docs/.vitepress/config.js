import { defineConfig } from "vitepress";

export default defineConfig({
  title: "信管课程资料清单",
  description: "信管专业学习资料推荐",
  themeConfig: {
    nav: [{ text: "首页", link: "/" }],

    sidebar: [
      {
        text: "前言",
        link: "/",
      },
      {
        text: "数学",
        link: "/math",
      },
      {
        text: "编程",
        link: "/programming",
      },
      {
        text: "其他课程",
        link: "/other",
      },
      {
        text: "工具推荐",
        link: "/tools",
      },
      {
        text: "经验分享",
        link: "/experience",
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/wzkMaster/awesome-SIM" },
    ],
  },
});
