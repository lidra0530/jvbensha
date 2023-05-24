<script setup lang="ts">
// const router = useRouter()
</script>

<template>
  <div class="container flex flex-col h-full home-bg">
    <VanNavBar safe-area-inset-top placeholder :border="false">
      <template #left>
        <span class="text-white text-[16px]">
          您好，欢迎光临！
        </span>
      </template>
    </VanNavBar>
    <div class="flex-1 overflow-auto">
      <div class="content bg-[#f7f8f7] p-5 rounded-2xl mt-[190px]">
        <div class="contnet-box flex flex-row items-center bg-white py-5 px-2 rounded-2xl">
          <div class="flex-1 justify-center flex items-center"><i
              class="ri-store-2-line text-[32px] text-[#03c3d9] mr-1"></i>超多消费点<i
              class="ri-arrow-right-s-fill text-[#c6c6c6] text-[20px]"></i></div>
          <div class="flex-1 justify-center flex items-center"><i
              class="ri-map-pin-line text-[32px] text-[#03c3d9] mr-1"></i>取餐点查询<i
              class="ri-arrow-right-s-fill text-[#c6c6c6] text-[20px]"></i></div>
        </div>
        <div class="contnet-box mt-3 flex flex-row items-center bg-white py-5 px-2 rounded-2xl">
          <i class="ri-arrow-left-s-line"></i>
          <VanSwipe :show-indicators="false">
            <VanSwipeItem>
              <div class="flex-1 flex flex-row items-center">
                <VanImage width="70" height="70" />
                <div class="flex-1 flex flex-col justify-between px-1">
                  <span>早餐</span>
                  <span class="text-[#979797] text-[14px]">取餐码: <span class="text-[#333]">9527</span></span>
                  <span class="text-[#979797] text-[14px] flex items-center">取餐点: <span
                      class="inline-block text-[#333] text-ellipsis whitespace-nowrap overflow-hidden flex-1">女生宿舍区L5一楼...</span></span>
                </div>
                <div
                  class="flex flex-col text-[#979797] items-center border-l border-l-[#dfdfdf] border-0 pl-2 border-solid">
                  <i class="ri-barcode-line text-[30px]"></i>
                  <span class="text-[12px]">取餐条码</span>
                </div>
              </div>
            </VanSwipeItem>
            <VanSwipeItem>
              <div class="flex-1 flex flex-row items-center">
                <VanImage width="70" height="70" />
                <div class="flex-1 flex flex-col justify-between px-1">
                  <span>早餐</span>
                  <span class="text-[#979797] text-[14px]">取餐码: <span class="text-[#333]">9527</span></span>
                  <span class="text-[#979797] text-[14px] flex items-center">取餐点: <span
                      class="inline-block text-[#333] text-ellipsis whitespace-nowrap overflow-hidden flex-1">女生宿舍区L5一楼...</span></span>
                </div>
                <div
                  class="flex flex-col text-[#979797] items-center border-l border-l-[#dfdfdf] border-0 pl-2 border-solid">
                  <i class="ri-barcode-line text-[30px]"></i>
                  <span class="text-[12px]">取餐条码</span>
                </div>
              </div>
            </VanSwipeItem>
          </VanSwipe>
          <i class="ri-arrow-right-s-line"></i>
        </div>
        <div class="contnet-box mt-3 flex flex-col bg-white p-2 rounded-2xl">
          <div>食堂介绍</div>
          <div class="text-[#989998] text-[12px] line-clamp-2">
            第一食堂位于德阳校区南区办公楼右侧，分为1楼和2楼，可同时容纳500人就餐，设有家常菜窗口、小炒窗口、凉菜窗口等。营业时间为6：30~21：00，其中特色菜...
          </div>
          <div class="text-right text-[#1990ff] text-[12px]">详情<i class="ri-arrow-right-s-line"></i></div>
        </div>
        <div class="contnet-box mt-3 flex flex-col bg-white p-2 rounded-2xl relative">
          <div class="text-[20px]">特色菜品</div>
          <VanSwipe autoplay="3000" :show-indicators="false">
            <VanSwipeItem>
              <VanImage width="100%" height="160px"></VanImage>
              <div class="my-2">火腿炒饭</div>
              <div class="text-[14px]">¥18:00</div>
            </VanSwipeItem>
            <VanSwipeItem>
              <VanImage width="100%" height="160px"></VanImage>
              <div class="my-2">火腿炒饭</div>
              <div class="text-[14px]">¥18:00</div>
            </VanSwipeItem>
            <VanSwipeItem>
              <VanImage width="100%" height="160px"></VanImage>
              <div class="my-2">火腿炒饭</div>
              <div class="text-[14px]">¥18:00</div>
            </VanSwipeItem>
          </VanSwipe>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
:deep(.van-nav-bar) {
  background-color: transparent;
}

.home-bg {
  background-image: url("@/assets/img/index_bg.jpg");
  background-size: contain;
  background-repeat: no-repeat;
}
</style>