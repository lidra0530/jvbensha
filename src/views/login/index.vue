<script lang="ts" setup>
const onClickLeft = () => history.back()
</script>

<template>
  <VanNavBar left-arrow title="登录" placeholder safe-area-inset-top @click-left="onClickLeft"></VanNavBar>
</template>
