import { defineConfig } from "vitepress";

export default defineConfig({
  title: "信管求生指南",
  description: "信管专业学习资料推荐和经验分享",
  themeConfig: {
    nav: [{ text: "首页", link: "/" }],

    sidebar: [
      {
        text: "简介",
        link: "/",
        items: [],
      },
      {
        text: "资料清单",
        link: "/list-front",
        items: [
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
        ],
      },
      {
        text: "经验分享",
        link: "/ex-front",
        items: [
          {
            text: "工具推荐",
            link: "/tools",
          },
          {
            text: "碎碎念",
            link: "/experience",
          },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/wzkMaster/awesome-SIM" },
    ],
  },
});
