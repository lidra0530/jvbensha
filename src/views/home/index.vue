<script setup lang="ts">
const router = useRouter()
</script>

<template>
  <VanNavBar fixed safe-area-inset-top placeholder title="首页"></VanNavBar>
  <VanButton @click="router.push({ name: 'login' })">去登录</VanButton>
</template>