import { defineConfig } from 'vitepress'

export default defineConfig({
  title: '信管求生指南',
  description: '一份写给WHU信管院同学的小小指南',
  
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '资料清单', link: '/资料清单-前言' },
      { text: '经验分享', link: '/经验分享-前言' }
    ],
    
    sidebar: {
      '/': [
        {
          text: '资料清单',
          items: [
            { text: '前言', link: '/资料清单-前言' },
            { text: '数学', link: '/数学' },
            { text: '编程', link: '/编程' },
            { text: '数据科学', link: '/数据科学' },
            { text: '信息检索', link: '/信息检索' },
            { text: '资源推荐', link: '/资源推荐' }
          ]
        },
        {
          text: '经验分享',
          items: [
            { text: '前言', link: '/经验分享-前言' },
            { text: '保研', link: '/保研' },
            { text: '考研', link: '/考研' },
            { text: '就业', link: '/就业' },
            { text: '工具推荐', link: '/工具推荐' },
            { text: '其他', link: '/其他' }
          ]
        },
        {
          text: '其他',
          items: [
            { text: 'Markdown规范', link: '/markdown规范' },
            { text: '统计功能演示', link: '/统计功能演示' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/wzkMaster/WHU-SIM-Life-Saver' }
    ],

    footer: {
      message: '欢迎贡献内容，让指南更加完善',
      copyright: 'Copyright © 2023-present WHU SIM'
    }
  },

  head: [
    // 添加不蒜子统计脚本
    ['script', { 
      async: true, 
      src: '//busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js' 
    }]
  ]
})
