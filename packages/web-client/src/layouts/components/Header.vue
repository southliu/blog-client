<template>
  <div class="h-60px">
    <div class="w-full h-60px flex items-center justify-between px-15vw box-border bg-#fff fixed top-0 z-999">
      <div>
        <span class="cursor-pointer" @click="handleGoHome">
          SouthLiu
        </span>
      </div>
      <div class="flex">
        <div
          v-for="item in tabs"
          :key="item.value"
        >
          <div
            class="h-60px flex flex-col items-center justify-between ml-30px"
          >
            <div
              :class="`h-60px cursor-pointer flex items-center ${active === item.value ? 'text-#777bce' : ''}`"
              @click="handleClick(item.value)"
            >
              <Icon class="mr-5px" :icon="item.icon" />
              <span>
                {{ item.label }}
              </span>
            </div>

            <div v-if="active === item.value" class="w-30px h-3px bg-#777bce rd-20px absolute bottom-0" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { TopMenu } from "@south-blog/shared";
import { ref } from 'vue';
import { Icon } from '@iconify/vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const active = ref('blog');

const tabs: TopMenu[] = [
  { label: '博客', value: 'blog', icon: 'la:pen-nib' },
  { label: '案例', value: 'demo', icon: 'tabler:packages' },
  { label: '关于', value: 'about', icon: 'material-symbols:person' },
];

  /** 点击跳转首页 */
  const handleGoHome = () => {
    router.push('/blog');
  };

  /**
   * 处理点击事件
   * @param value - 点击值
   */
  const handleClick = (value: string) => {
    active.value = value;
    router.push(`/${value}`);
  };
</script>