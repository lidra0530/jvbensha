<script setup lang="ts">
const onLeftClick = () => history.back()
const tabActive = ref(history.state.tabActive)
const tabsList = ["全部", "待付款", "待取餐", "待评价", "退款/售后"]
const orderList = ref([
  {
    state: 1
  },
  {
    state: 2
  },
  {
    state: 3
  },
  {
    state: 4
  },
  {
    state: 3
  }
])

const showOrder = ref([])

// 初始化之前获取数据
onBeforeMount(() => {
  showOrder.value = orderList.value.filter((item) => {
    return tabActive.value == 0 ? true : item.state == tabActive.value
  })
})

// 改变tab切换数据渲染
const changeTab = (name: number) => {
  showOrder.value = orderList.value.filter((item) => {
    return name == 0 ? true : item.state == name
  })
}

</script>

<template>
  <div class="flex flex-col h-screen">
    <VanNavBar @click-left="onLeftClick" left-arrow fixed safe-area-inset-top placeholder :border="false" title="我的订单" />
    <VanSearch placeholder="请输入商品名称" shape="round"></VanSearch>
    <VanTabs v-model:active="tabActive" border color="#333333" @change="changeTab">
      <VanTab :title="item" v-for="item in tabsList"></VanTab>
    </VanTabs>
    <div class="flex-1 overflow-auto">
      <div class="bg-white order-item mb-[10px]" v-for="order in showOrder" :key="order.state">
        <div class="flex flex-row px-4 h-10 justify-between items-center border-b border-solid border-0 border-[#f2f2f2]">
          <span class="flex flex-row items-center text-[14px]">食堂一楼东区天天饮食<i
              class="text-[20px] text-[#999999] ri-arrow-right-s-line"></i></span>
          <span class="text-[14px]">待付款</span>
        </div>
        <div v-for="item in 2" :key="item" class="ml-4 pl-0 p-4 food-item flex flex-row">
          <VanImage width="100" height="100"></VanImage>

        </div>
        <div class="text-[12px] px-4 h-10 flex flex-row items-center border-t border-solid border-0 border-[#f2f2f2]">
          <span class="text-[#a7a7a7]">共1件商品，金额:<span class="text-[#333]">¥10:00</span></span>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.order-item {
  .food-item {
    border-bottom: 1px solid #f2f2f2;
  }
}
</style>