<template>
  <div class="page-views">
    <span class="view-icon">👁️</span>
    <span class="view-text">本页阅读量：</span>
    <span id="busuanzi_value_page_pv" class="view-count">
      <span class="loading">加载中...</span>
    </span>
  </div>
</template>

<script setup>
import { onMounted, watch } from 'vue'
import { useRoute } from 'vitepress'

const route = useRoute()

// 监听路由变化，重新加载统计
watch(() => route.path, () => {
  // 页面切换时，等待不蒜子重新统计
  setTimeout(() => {
    const pvElement = document.getElementById('busuanzi_value_page_pv')
    if (pvElement && pvElement.textContent === '') {
      pvElement.innerHTML = '<span class="loading">加载中...</span>'
    }
  }, 100)
})

onMounted(() => {
  // 确保不蒜子脚本已加载
  const checkBusuanzi = setInterval(() => {
    if (window.busuanzi) {
      clearInterval(checkBusuanzi)
    }
  }, 100)
})
</script>

<style scoped>
.page-views {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 6px 12px;
  background-color: var(--vp-c-bg-soft);
  border-radius: 8px;
  font-size: 14px;
  color: var(--vp-c-text-2);
  margin: 16px 0;
}

.view-icon {
  font-size: 16px;
}

.view-text {
  font-weight: 500;
}

.view-count {
  color: var(--vp-c-brand-1);
  font-weight: 600;
}

.loading {
  color: var(--vp-c-text-3);
  font-size: 12px;
}
</style>

