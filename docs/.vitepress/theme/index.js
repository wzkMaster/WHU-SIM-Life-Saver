import DefaultTheme from 'vitepress/theme'
import PageViews from './components/PageViews.vue'
import SiteStats from './components/SiteStats.vue'
import './custom.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    // 注册全局组件
    app.component('PageViews', PageViews)
    app.component('SiteStats', SiteStats)
  }
}


