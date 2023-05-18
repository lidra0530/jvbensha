<script setup lang="ts">
const router = useRouter()
const tabbar = router.getRoutes().filter((item) => {
  return item.meta.tabbar
})
const active = computed({
  get: () => {
    return router.currentRoute.value.path
  },
  set: () => { }
})
</script>

<template>
  <VanTabbar placeholder safe-area-inset-bottom v-model="active">
    <VanTabbarItem v-for="route in tabbar" :name="route.path" :key="route.name" :to="route.meta.to">
      <template #icon>
        <i :class="route.meta.icon"></i>
      </template>
      {{ route.meta.name }}
    </VanTabbarItem>
  </VanTabbar>
</template>
