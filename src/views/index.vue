<script setup lang="ts">
import { Tabbar } from '@/components'
</script>

<template>
  <div class="container flex flex-col h-screen">
    <div class="flex-1">
      <RouterView />
    </div>
    <Tabbar />
  </div>
</template>

<style lang="less" scoped></style>
