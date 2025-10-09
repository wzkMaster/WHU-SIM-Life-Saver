<template>
  <div class="site-stats">
    <div class="stat-item">
      <span class="stat-icon">🌐</span>
      <span class="stat-label">网站总访问量</span>
      <span id="busuanzi_value_site_pv" class="stat-value">
        <span class="loading">...</span>
      </span>
    </div>
    <div class="stat-divider"></div>
    <div class="stat-item">
      <span class="stat-icon">👥</span>
      <span class="stat-label">访客数</span>
      <span id="busuanzi_value_site_uv" class="stat-value">
        <span class="loading">...</span>
      </span>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'

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
.site-stats {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  padding: 20px;
  background: linear-gradient(120deg, var(--vp-c-bg-soft) 0%, var(--vp-c-bg-mute) 100%);
  border-radius: 12px;
  margin: 24px 0;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

.stat-item {
  display: flex;
  align-items: center;
  gap: 8px;
}

.stat-icon {
  font-size: 20px;
}

.stat-label {
  font-size: 14px;
  color: var(--vp-c-text-2);
  font-weight: 500;
}

.stat-value {
  font-size: 18px;
  color: var(--vp-c-brand-1);
  font-weight: 700;
  min-width: 40px;
  text-align: center;
}

.stat-divider {
  width: 1px;
  height: 30px;
  background-color: var(--vp-c-divider);
}

.loading {
  color: var(--vp-c-text-3);
  font-size: 14px;
}

@media (max-width: 640px) {
  .site-stats {
    flex-direction: column;
    gap: 12px;
  }
  
  .stat-divider {
    width: 80%;
    height: 1px;
  }
}
</style>

