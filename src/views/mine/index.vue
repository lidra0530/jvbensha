<script setup lang="ts">
const router = useRouter()
</script>
<template>
  <VanNavBar fixed safe-area-inset-top placeholder :border="false" title="我的"></VanNavBar>
  <div class="user-info px-4 bg-white flex flex-col">
    <div class="user flex flex-row">
      <VanImage src="" width="60" height="60" round></VanImage>
      <div class="flex-1 ml-2 flex flex-col justify-around text-[#0F100F]">
        <span class="font-bold">Libra <span
            class="bg-[#2C386A] font-normal text-[#949FCA] text-[10px] p-1 rounded ml-1"><i
              class="ri-vip-crown-2-line mr-1"></i>学生</span></span>
        <span>17683852345</span>
      </div>
    </div>
    <div class="py-4 flex flex-row justify-around">
      <div class="flex flex-col items-center">
        <span class="text-[20px]">0</span>
        <span class="text-[12px] text-gray-400">收藏商品</span>
      </div>
      <div class="flex flex-col items-center">
        <span class="text-[20px]">0</span>
        <span class="text-[12px] text-gray-400">收藏消费点</span>
      </div>
      <div class="flex flex-col items-center">
        <span class="text-[20px]">0</span>
        <span class="text-[12px] text-gray-400">收藏取餐点</span>
      </div>
    </div>
    <div class="flex flex-row items-center rounded-t-lg bg-[#2C386A] px-[20px] py-[15px] text-[#FCD2AF]">
      <div class="flex-1 flex items-center">
        <span class="text-[14px]  font-bold">一卡通</span>
        <span class="mx-[12px] text-[#797284] text-[16px]">|</span>
        <span class="text-[12px]">当前余额¥389.00</span>
      </div>
      <span class=" bg-[#FBD3AF] text-[12px] text-[#8a5f33] px-2 py-1 rounded-full">立即查看<i
          class="ri-arrow-right-s-line"></i></span>
    </div>
  </div>
  <div class="mx-4 my-2 rounded-lg bg-white">
    <div @click="router.push({ name: 'order', state: { tabActive: 0 } })"
      class="text-[#333333] title flex flex-row justify-between h-11 items-center p-3 border-0 border-b border-solid border-[#f8f8f8]">
      <span>我的订单</span>
      <i class="ri-arrow-right-s-line text-[20px]"></i>
    </div>
    <div class="grid grid-cols-4 justify-items-center p-2">
      <div class="flex flex-col items-center text-[#212121]"
        @click="router.push({ name: 'order', state: { tabActive: 1 } })">
        <i class="ri-money-cny-box-line text-[26px]"></i>
        <span class="text-[14px]">待付款</span>
      </div>
      <div class="flex flex-col items-center text-[#212121]"
        @click="router.push({ name: 'order', state: { tabActive: 2 } })">
        <i class="ri-time-line text-[26px]"></i>
        <span class="text-[14px]">待取餐</span>
      </div>
      <div class="flex flex-col items-center text-[#212121]"
        @click="router.push({ name: 'order', state: { tabActive: 3 } })">
        <i class="ri-message-3-line text-[26px]"></i>
        <span class="text-[14px]">待评价</span>
      </div>
      <div class="flex flex-col items-center text-[#212121]"
        @click="router.push({ name: 'order', state: { tabActive: 4 } })">
        <i class="ri-exchange-cny-fill text-[26px]"></i>
        <span class="text-[14px]">退款/售后</span>
      </div>
    </div>
  </div>
  <div class="mx-4 my-2 rounded-lg bg-white">
    <div
      class="text-[#333333] title flex flex-row justify-between h-11 items-center p-3 border-0 border-b border-solid border-[#f8f8f8]">
      <span>工具</span>
    </div>
    <div class="flex flex-row px-3 h-10 items-center">
      <i class="ri-information-line text-[24px] mr-2"></i>
      <span class="flex-1 text-[14px] text-[#101010]">投诉建议</span>
      <i class="text-[20px] ri-arrow-right-s-line"></i>
    </div>
  </div></template>
