<template>
  <div class="absolute left-50% top-50% -translate-x-1/2 -translate-y-1/2 text-center">
    <h1 class="animation w-full text-6rem font-bold">
      404
    </h1>
    <p class="w-full text-20px font-bold mt-15px text-dark-700">
      当前页面无法访问，可能没权限或已删除
    </p>
    <Button class="mt-25px margin-auto" @click="goIndex">
      返回首页
    </Button>
  </div>
</template>

<script lang="ts" setup>
import { Button } from 'ant-design-vue';
import { useRouter } from 'vue-router';

const router = useRouter();

// 跳转首页
const goIndex = () => {
  router.push('/blog');
};
</script>

<style lang="less" scoped>
.animation {
  animation: shake .6s ease-in-out infinite alternate;
}

@keyframes shake {
  0% {
    transform: translate(-1px)
  }

  10% {
    transform: translate(2px, 1px)
  }

  30% {
    transform: translate(-3px, 2px)
  }

  35% {
    transform: translate(2px, -3px);
    filter: blur(4px)
  }

  45% {
    transform: translate(2px, 2px) skewY(-8deg) scaleX(.96);
    filter: blur(0)
  }

  50% {
    transform: translate(-3px, 1px)
  }
}
</style>